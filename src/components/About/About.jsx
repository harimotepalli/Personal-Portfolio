import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode } from 'react-icons/fa';
import './About.css';

const About = () => {
  const education = [
    {
      year: '2017 - 2018',
      title: 'Secondary School Certificate (SSC)',
      company: 'Z P P High School',
      description: 'Completed with a CGPA of 9.3, establishing a strong academic foundation in core subjects.'
    },
    {
      year: '2018 - 2020',
      title: 'Intermediate (MPC)',
      company: 'Sri Chaitanya Junior College',
      description: 'Focused on Mathematics, Physics, and Chemistry; graduated with a CGPA of 8.90.'
    },
    {
      year: '2020 - 2023',
      title: 'Bachelor of Science (BSc Computer Science)',
      company: 'Sri Ramachandra Degree College',
      description: 'Graduated with a CGPA of 7.51. Learned core computer science concepts including Java, DBMS, and operating systems.'
    },
    {
      year: '2024 - 2026',
      title: 'Master of Computer Applications (MCA)',
      company: 'Aditya Engineering College',
      description: 'Pursuing MCA with specialization in full-stack development. Current CGPA: 9.0.'
    }
  ];
  

  const internships = [
    {
      year: '2025',
      title: 'ServiceNow Virtual Internship',
      company: 'SmartBridge in collaboration with ServiceNow',
      description: 'Developed and customized ServiceNow apps using low-code tools. Gained experience in scripting, workflows, and catalog items.'
    },
    {
      year: '2025',
      title: 'Cyber Security Internship',
      company: 'AICTE & Edunet Foundation',
      description: 'Completed a 6-week training in Cyber Security under AICTE’s program. Covered security fundamentals and tools. STU ID: STU67cc57e1be7d81741445089.'
    },
    {
      year: '2025',
      title: 'Full Stack Development (MERN)',
      company: 'Technical Hub Pvt. Ltd.',
      description: 'Built major projects like eTrack (Property Management) and GrooMax (Pet grooming site) using MongoDB, Express, React, and Node.js.'
    }
  ];
  

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <motion.h2
          className="section-title gradient-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass-card">
              <h3>Hello! I'm M Durga Hari</h3>
              <p>
                I'm a passionate full-stack developer focused on building responsive and dynamic web applications.
              </p>
              <p>
                I started my coding journey in 2024 and gradually evolved from student projects to real-world web development.
              </p>
              <p>
                I love working on modern stacks like React, Node.js, and MongoDB and enjoy learning and growing every day.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="timeline-section">
          <motion.div
            className="timeline-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="gradient-text">My Journey</h3>
          </motion.div>

          <div className="timeline-container">
            {/* Education Timeline */}
            <div className="timeline-side">
              <h4><FaGraduationCap /> Education</h4>
              <div className="timeline">
                {education.map((item, index) => (
                  <motion.div
                    key={index}
                    className="timeline-item"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="timeline-content glass-card">
                      <div className="timeline-year">{item.year}</div>
                      <h5>{item.title}</h5>
                      <h6 className="neon-text">{item.company}</h6>
                      <p>{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Internship Timeline */}
            <div className="timeline-side">
              <h4><FaLaptopCode /> Internships</h4>
              <div className="timeline">
                {internships.map((item, index) => (
                  <motion.div
                    key={index}
                    className="timeline-item"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="timeline-content glass-card">
                      <div className="timeline-year">{item.year}</div>
                      <h5>{item.title}</h5>
                      <h6 className="neon-text">{item.company}</h6>
                      <p>{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
