import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaPaperPlane ,FaLinkedin, FaGithub} from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
    };

    emailjs.send(
      'service_hbsv5mr',
      'template_sbcldlh',
      templateParams,
      'qASjCMqGrXcC_xSY'
    )
      .then(() => {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '' });
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
      <div className="contact-content">
        {/* Left Info Panel */}
        <div className="contact-info glass-card">
          <h3>Let’s Connect</h3>
          <p>I'd love to hear from you! Whether you have a question or just want to say hi, feel free to drop a message.</p>

          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div className="contact-text">
                <h4>Email</h4>
                <a href="mailto:durgahari012@gmail.com">durgahari012@gmail.com</a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div className="contact-text">
                <h4>Phone</h4>
                <a href="tel:+917093679038">+91 7093679038</a>
              </div>
            </div>
          </div>

          <div className="social-links">
            <h4>Follow Me</h4>
            <div className="social-icons">
              <a
                href="https://www.linkedin.com/in/durga-hari-motepalli-9340a821a/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <i className="fab fa-linkedin-in"><FaLinkedin>\</FaLinkedin></i>
              </a>
              <a
                href="https://github.com/harimotepalli"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <i className="fab fa-linkedin-in"><FaGithub>\</FaGithub></i>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Your Email</label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="What's this about?"
              required
              value={formData.subject}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className={`submit-btn ${isSubmitting ? 'submitting' : ''} ${submitStatus === 'success' ? 'success' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div className="loading-spinner"></div>
            ) : (
              <>
                Send <FaPaperPlane />
              </>
            )}
          </button>

          {submitStatus === 'success' && (
            <div className="success-message">✅ Message sent successfully!</div>
          )}
          {submitStatus === 'error' && (
            <div className="success-message" style={{ color: 'red' }}>❌ Failed to send. Try again.</div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
