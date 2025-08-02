import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFilter } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'Groomax – Pet Grooming Booking Website',
      description:
        'Fully functional pet grooming platform with localStorage-powered admin dashboard, slot management, and user-friendly booking. HTML, CSS, JavaScript.',
      image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=500', // Replace with your own image if available
      category: 'Web',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      github: 'https://github.com/harimotepalli/groomax',
      demo: 'https://groomax-demo.vercel.app', // Replace with your actual demo if available
    },
    {
      id: 2,
      title: 'eTrack – College Property Management System',
      description:
        'Comprehensive MERN stack asset management: floor/room/device structure, real-time issue reporting, dashboard access for admins and students, and notification system.',
      image: 'https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=500', // Replace with your own image if available
      category: 'Web',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'Nodemailer'],
      github: 'https://github.com/harimotepalli/etrack-college',
      demo: 'https://etrack-demo.vercel.app', // Replace with your actual demo if available
    },
    {
      id: 3,
      title: 'StegoVault',
      description:
        'A secure file vault leveraging steganography techniques for embedded, private file storage/sharing. Designed with custom algorithms for enhanced privacy.',
      image: 'https://images.pexels.com/photos/205316/pexels-photo-205316.jpeg?auto=compress&cs=tinysrgb&w=500', // Replace with your own image if available
      category: 'Web',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Steganography'],
      github: 'https://github.com/harimotepalli/stegovault',
      demo: 'https://stegovault-demo.vercel.app', // Replace with your actual demo if available
    },
    {
      id: 4,
      title: 'Security Staff Attendance System',
      description:
        'Dynamic college staff attendance system: profile CRUD, leave/OD tracking, CSV import/export, and secure image handling via API.',
      image: 'https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&cs=tinysrgb&w=500', // Replace with your own image if available
      category: 'Web',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'CSV', 'REST API'],
      github: 'https://github.com/harimotepalli/security-attendance-system',
      demo: 'https://security-attendance-demo.vercel.app', // Replace with your actual demo if available
    },
  ];

  const filters = ['All', 'Web'];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <motion.h2
          className="section-title gradient-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        <motion.div
          className="filter-buttons"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <FaFilter className="filter-icon" />
          {filters.map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card glass-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <div className="project-category neon-text">
                  {project.category}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-glow"></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="projects-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3>Want to see more?</h3>
          <p>Check out my GitHub for additional projects and contributions</p>
          <a
            href="https://github.com/harimotepalli"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <FaGithub /> View GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
