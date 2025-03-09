#!/bin/bash

# Variables
SONAR_VERSION="10.3.0.82913"
SONAR_USER="sonar"
SONAR_GROUP="sonar"
SONAR_DIR="/opt/sonarqube"
POSTGRES_PASSWORD="sonar"

# Update System
echo "Updating system packages..."
sudo yum update -y
sudo yum install -y wget unzip net-tools java-17-openjdk-devel postgresql-server postgresql-contrib nginx

# Verify Java Installation
echo "Java Version Installed:"
java -version

# Configure PostgreSQL
echo "Setting up PostgreSQL..."
sudo postgresql-setup --initdb
sudo systemctl enable postgresql
sudo systemctl start postgresql

# Create SonarQube Database
echo "Creating PostgreSQL database for SonarQube..."
sudo -u postgres psql <<EOF
CREATE DATABASE sonarqube;
CREATE USER sonar WITH ENCRYPTED PASSWORD '$POSTGRES_PASSWORD';
ALTER ROLE sonar WITH SUPERUSER;
\q
EOF

# Download and Install SonarQube
echo "Downloading SonarQube..."
cd /opt
sudo wget https://binaries.sonarsource.com/Distribution/sonarqube/sonarqube-$SONAR_VERSION.zip
sudo unzip sonarqube-$SONAR_VERSION.zip
sudo mv sonarqube-$SONAR_VERSION sonarqube
sudo rm -f sonarqube-$SONAR_VERSION.zip

# Create SonarQube User and Set Permissions
echo "Creating SonarQube user..."
sudo groupadd $SONAR_GROUP
sudo useradd -g $SONAR_GROUP -d $SONAR_DIR $SONAR_USER
sudo chown -R $SONAR_USER:$SONAR_GROUP $SONAR_DIR
sudo chmod -R 775 $SONAR_DIR

# Configure SonarQube
echo "Configuring SonarQube..."
sudo bash -c "cat > $SONAR_DIR/conf/sonar.properties <<EOF
sonar.jdbc.username=sonar
sonar.jdbc.password=$POSTGRES_PASSWORD
sonar.jdbc.url=jdbc:postgresql://localhost:5432/sonarqube
sonar.web.host=0.0.0.0
sonar.web.port=9000
sonar.web.javaOpts=-Xmx512m -Xms512m -XX:+HeapDumpOnOutOfMemoryError
EOF"

# Create Systemd Service for SonarQube
echo "Creating SonarQube systemd service..."
sudo bash -c "cat > /etc/systemd/system/sonarqube.service <<EOF
[Unit]
Description=SonarQube service
After=syslog.target network.target

[Service]
Type=forking
ExecStart=$SONAR_DIR/bin/linux-x86-64/sonar.sh start
ExecStop=$SONAR_DIR/bin/linux-x86-64/sonar.sh stop
User=$SONAR_USER
Group=$SONAR_GROUP
Restart=always
LimitNOFILE=65536
LimitNPROC=4096

[Install]
WantedBy=multi-user.target
EOF"

# Reload systemd and start SonarQube
echo "Starting SonarQube..."
sudo systemctl daemon-reload
sudo systemctl enable sonarqube
sudo systemctl start sonarqube

# Check SonarQube status
echo "Checking SonarQube status..."
sudo systemctl status sonarqube --no-pager

# Configure Nginx as Reverse Proxy (Optional)
echo "Configuring Nginx as a reverse proxy..."
sudo bash -c "cat > /etc/nginx/nginx.conf <<EOF
server {
    listen 80;
    server_name _;
    location / {
        proxy_pass http://127.0.0.1:9000;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header Host \$host;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
    }
}
EOF"

sudo systemctl enable nginx
sudo systemctl restart nginx

# Final Message
echo "SonarQube installation is complete! Access it at: http://<your-ec2-public-ip>"

