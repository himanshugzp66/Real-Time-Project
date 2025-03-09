def COLOR_MAP = [
    'SUCCESS': 'good', 
    'FAILURE': 'danger',
    'UNSTABLE': 'warning',
    'ABORTED': 'gray'
]

pipeline { 
    agent any
    tools {
        maven "MAVEN3.9"
        jdk "JDK17"
    }

    environment {
        SNAP_REPO = 'vprofile-snapshot'
        NEXUS_USER = 'admin'
        NEXUS_PASS = 'Himan2252*@'
        RELEASE_REPO = 'vprofile-release'
        CENTRAL_REPO = 'vpro-maven-central'
        NEXUSIP = '172.31.25.84'
        NEXUSPORT = '8081'
        NEXUS_GRP_REPO = 'vpro-maven-group'
        NEXUS_LOGIN = 'nexuslogin'
        SONARSERVER = 'sonarserver'
        SONARSCANNER = 'sonarscanner'
    }

    stages {
        stage('Build') {
            steps {
                script {
                    slackSend channel: '#jenkinscicd',
                        color: 'warning',
                        message: "*Build Started:* Job ${env.JOB_NAME} build ${env.BUILD_NUMBER}"
                }
                sh 'mvn -s settings.xml -U -DskipTests install'
            }
            post {
                success {
                    archiveArtifacts artifacts: '**/*.war'
                }
                failure {
                    slackSend channel: '#jenkinscicd',
                        color: COLOR_MAP['FAILURE'],
                        message: "*Build FAILED:* Job ${env.JOB_NAME} build ${env.BUILD_NUMBER} \n More info at: ${env.BUILD_URL}"
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    slackSend channel: '#jenkinscicd',
                        color: 'warning',
                        message: "*Test Started:* Job ${env.JOB_NAME} build ${env.BUILD_NUMBER}"
                }
                sh 'mvn -s settings.xml test'
            }
            post {
                failure {
                    slackSend channel: '#jenkinscicd',
                        color: COLOR_MAP['FAILURE'],
                        message: "*Tests FAILED:* Job ${env.JOB_NAME} build ${env.BUILD_NUMBER} \n More info at: ${env.BUILD_URL}"
                }
            }
        }

        stage('Checkstyle Analysis') {
            steps {
                script {
                    slackSend channel: '#jenkinscicd',
                        color: 'warning',
                        message: "*Checkstyle Analysis Started:* Job ${env.JOB_NAME} build ${env.BUILD_NUMBER}"
                }
                sh 'mvn -s settings.xml checkstyle:checkstyle'
            }
            post {
                failure {
                    slackSend channel: '#jenkinscicd',
                        color: COLOR_MAP['FAILURE'],
                        message: "*Checkstyle Analysis FAILED:* Job ${env.JOB_NAME} build ${env.BUILD_NUMBER} \n More info at: ${env.BUILD_URL}"
                }
            }
        }

        stage('Sonar Analysis') {
            environment {
                scannerHome = tool "${SONARSCANNER}"
            }
            steps {
                script {
                    slackSend channel: '#jenkinscicd',
                        color: 'warning',
                        message: "*Sonar Analysis Started:* Job ${env.JOB_NAME} build ${env.BUILD_NUMBER}"
                }
                withSonarQubeEnv("${SONARSERVER}") {
                    sh '''
                    ${scannerHome}/bin/sonar-scanner -Dsonar.projectKey=vprofile \
                    -Dsonar.projectName=vprofile \
                    -Dsonar.projectVersion=1.0 \
                    -Dsonar.sources=src/ \
                    -Dsonar.java.binaries=target/test-classes/com/visualpathit/account/controllerTest/ \
                    -Dsonar.junit.reportsPath=target/surefire-reports/ \
                    -Dsonar.jacoco.reportsPath=target/jacoco.exec \
                    -Dsonar.java.checkstyle.reportPaths=target/checkstyle-result.xml
                    '''
                }
            }
            post {
                failure {
                    slackSend channel: '#jenkinscicd',
                        color: COLOR_MAP['FAILURE'],
                        message: "*Sonar Analysis FAILED:* Job ${env.JOB_NAME} build ${env.BUILD_NUMBER} \n More info at: ${env.BUILD_URL}"
                }
            }
        }

        stage("Quality Gate") {
            steps {
                script {
                    slackSend channel: '#jenkinscicd',
                        color: 'warning',
                        message: "*Quality Gate Check Started:* Job ${env.JOB_NAME} build ${env.BUILD_NUMBER}"
                }
                timeout(time: 1, unit: 'HOURS') {
                    waitForQualityGate abortPipeline: true
                }
            }
            post {
                failure {
                    slackSend channel: '#jenkinscicd',
                        color: COLOR_MAP['FAILURE'],
                        message: "*Quality Gate FAILED:* Job ${env.JOB_NAME} build ${env.BUILD_NUMBER} \n More info at: ${env.BUILD_URL}"
                }
            }
        }

        stage("UploadArtifact") {
            steps {
                script {
                    slackSend channel: '#jenkinscicd',
                        color: 'warning',
                        message: "*Uploading Artifact Started:* Job ${env.JOB_NAME} build ${env.BUILD_NUMBER}"
                }
                nexusArtifactUploader(
                    nexusVersion: 'nexus3',
                    protocol: 'http',
                    nexusUrl: "${NEXUSIP}:${NEXUSPORT}",
                    groupId: 'QA',
                    version: "${env.BUILD_ID}-${env.BUILD_TIMESTAMP}",
                    repository: "${RELEASE_REPO}",
                    credentialsId: "${NEXUS_LOGIN}",
                    artifacts: [
                        [artifactId: 'vproapp',
                         classifier: '',
                         file: 'target/vprofile-v2.war',
                         type: 'war']
                    ]
                )
            }
            post {
                failure {
                    slackSend channel: '#jenkinscicd',
                        color: COLOR_MAP['FAILURE'],
                        message: "*Upload Artifact FAILED:* Job ${env.JOB_NAME} build ${env.BUILD_NUMBER} \n More info at: ${env.BUILD_URL}"
                }
            }
        }
    }

    post {
        always {
            def buildStatus = currentBuild.currentResult ?: 'SUCCESS'  // Default if undefined
            slackSend channel: '#jenkinscicd',
                color: COLOR_MAP[buildStatus] ?: 'warning',
                message: "*${buildStatus}:* Job ${env.JOB_NAME} build ${env.BUILD_NUMBER} \n More info at: ${env.BUILD_URL}"
        }
    }
}
