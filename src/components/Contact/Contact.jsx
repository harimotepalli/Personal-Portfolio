import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  useEffect(() => {
    if (submitStatus) {
      const timer = setTimeout(() => setSubmitStatus(''), 4000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    emailjs.send(
        'service_hbsv5mr',
        'template_sbcldlh',
        formData,
        'qASjCMqGrXcC_xSYR'
      )
      .then(() => {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      })
      .catch((error) => {
        console.error("EmailJS error:", error.text || error);
        setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        {/* Centered Section Title */}
        <motion.h2
          className="section-title gradient-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>

        <div className="contact-layout">
          {/* Left Column: Text */}
          <motion.div
            className="contact-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <p>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            className="contact-form-wrapper glass-card"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" name="name" required value={formData.name} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" name="email" required value={formData.email} onChange={handleChange} />
              </div>
              <div className="form-group full-width">
                <label htmlFor="subject">Subject</label>
                <input id="subject" type="text" name="subject" required value={formData.subject} onChange={handleChange} />
              </div>
              <div className="form-group full-width">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" required value={formData.message} onChange={handleChange}></textarea>
              </div>
              
              {/* Centered Button Wrapper */}
              <div className="form-button-wrapper">
                <button type="submit" className="submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? <div className="loading-spinner"></div> : <>Send Message <FaPaperPlane /></>}
                </button>
              </div>

              {submitStatus && (
                <div className={`form-status-message ${submitStatus} full-width`}>
                  {submitStatus === 'success' ? '✅ Message sent successfully!' : '❌ Failed to send. Please try again.'}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
