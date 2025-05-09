import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github as GitHub,
  Linkedin,
  Twitter
} from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-slate-100 dark:bg-slate-800/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto"></div>
          <p className="mt-6 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Have a project in mind or want to discuss DevOps solutions for your organization? 
            Feel free to reach out using the contact information below.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 bg-teal-100 dark:bg-teal-900/40 rounded-lg text-teal-600 dark:text-teal-400 mr-4">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-800 dark:text-white">Email</h4>
                  <a
                    href="mailto:himanshugzp66@gmail.com"
                    className="text-slate-600 dark:text-slate-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                  >
                    himanshugzp66@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-teal-100 dark:bg-teal-900/40 rounded-lg text-teal-600 dark:text-teal-400 mr-4">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-800 dark:text-white">Phone</h4>
                  <a
                    href="tel:+916386301461"
                    className="text-slate-600 dark:text-slate-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                  >
                    +91 6386301461
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-teal-100 dark:bg-teal-900/40 rounded-lg text-teal-600 dark:text-teal-400 mr-4">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-800 dark:text-white">Location</h4>
                  <p className="text-slate-600 dark:text-slate-300">Hyderabad, Telangana, India</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Himanshugzp66/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-200 dark:bg-slate-700 rounded-full text-slate-800 dark:text-white hover:bg-teal-500 hover:text-white dark:hover:bg-teal-500 transition-colors"
                  aria-label="GitHub"
                >
                  <GitHub size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/himanshu-pandey-b20021237/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-200 dark:bg-slate-700 rounded-full text-slate-800 dark:text-white hover:bg-teal-500 hover:text-white dark:hover:bg-teal-500 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://x.com/Himansh06772346"  // Optional: Update with real profile
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-200 dark:bg-slate-700 rounded-full text-slate-800 dark:text-white hover:bg-teal-500 hover:text-white dark:hover:bg-teal-500 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Send Message</h3>

            {submitted ? (
              <div className="flex flex-col items-center justify-center p-8 text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/40 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">Message Sent!</h4>
                <p className="text-slate-600 dark:text-slate-300">
                  Thank you for your message. I'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-800 dark:text-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-800 dark:text-white"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-800 dark:text-white"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-800 dark:text-white resize-none"
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full md:w-auto px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-lg transition-colors flex items-center justify-center ${
                      isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2" size={16} /> Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
