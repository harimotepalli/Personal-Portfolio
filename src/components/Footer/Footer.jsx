import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaReact } from 'react-icons/fa';
import { SiFramer } from 'react-icons/si';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <p className="footer-copyright">
            © {currentYear} Hari Motepalli. Made with <FaHeart className="heart-icon" />
          </p>
          
          <div className="footer-tech-icons">
            <a href="https://github.com/harimotepalli" target="_blank" rel="noopener noreferrer" title="GitHub">
                <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/durga-hari-motepalli-9340a821a/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <FaLinkedin />
            </a>
            <a href="mailto:durgahari012@gmail.com" target="_blank" rel="noopener noreferrer" title="Email">
                <FaEnvelope />
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
