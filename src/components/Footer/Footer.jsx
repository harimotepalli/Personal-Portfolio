import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaCode } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/harimotepalli', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/in/durga-hari-motepalli-9340a821a/', label: 'LinkedIn' },
    { icon: <FaEnvelope />, url: 'mailto:durgahari012@gmail.com', label: 'Email' }    
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-glow"></div>
      
      <div className="container">
        <div className="footer-content">
          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="footer-brand">
              <h3 className="gradient-text">M Durga Hari</h3>
              <p>Full Stack Developer</p>
              <p className="footer-description">
                Creating digital experiences with passion, precision, and purpose. 
                Let's build something amazing together.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4>Quick Links</h4>
            <div className="footer-links">
              {quickLinks.map((link, index) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="footer-link"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4>Connect</h4>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  whileTap={{ scale: 0.95 }}
                  title={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            <div className="footer-contact">
              <p>
                <FaEnvelope className="contact-icon" />
                durgahari012@gmail.com
              </p>
              <p>Available for freelance projects</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © {currentYear} Hari Motepalli. Made with <FaHeart className="heart-icon" /> and <FaCode className="code-icon" />
            </p>
            <div className="footer-tech-stack">
              <span>Built with React & Framer Motion</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
