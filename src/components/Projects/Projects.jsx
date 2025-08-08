import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Groomax – Pet Grooming Booking Website',
      description:
        'Fully functional pet grooming platform with localStorage-powered admin dashboard, slot management, and user-friendly booking. HTML, CSS, JavaScript.',
      image: '/GrooMax.png', // Replace with your own image if available
      category: 'Web',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      github: 'https://github.com/harimotepalli/Pet-GrooMing',
      demo: 'https://pet-groo-ming-five.vercel.app/', // Replace with your actual demo if available
    },
    {
      id: 2,
      title: 'eTrack – College Property Management System',
      description:
        'Comprehensive MERN stack asset management: floor/room/device structure, real-time issue reporting, dashboard access for admins and students, and notification system.',
      image: '/eTrack - Dashboard.png', // Replace with your own image if available
      category: 'Web',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'Nodemailer'],
      github: 'https://github.com/harimotepalli/eTrack-Project',
      demo: 'https://e-track-project.vercel.app', // Replace with your actual demo if available
    },
   {
  id: 3,
  title: 'eTrack – Student UI',
  description:
    'Frontend interface for students in the eTrack asset management system. Allows students to report defective devices by room/floor, view property status, track complaint history, and receive live updates using WebSockets.',
  image: '/eTrack- Student UI.png',
  category: 'Web',
  technologies: ['React.js', 'Vite', 'Tailwind CSS', 'Socket.IO', 'Axios', 'React Router'],
  github: 'https://github.com/harimotepalli/e-Track_Student-UI',
  demo: 'https://e-track-student-ui.vercel.app/',
},
    {
      id: 4,
      title: 'StegoVault',
      description:
        'A secure file vault leveraging steganography techniques for embedded, private file storage/sharing. Designed with custom algorithms for enhanced privacy.',
      image: '/StegoVault.png', // Replace with your own image if available
      category: 'Web',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Steganography'],
      github: 'https://github.com/harimotepalli/StegoVault',
      demo: 'https://stego-vault-eight.vercel.app', // Replace with your actual demo if available
    },
    {
      id: 5,
      title: 'Security Staff Attendance System',
      description:
        'Dynamic college staff attendance system: profile CRUD, leave/OD tracking, CSV import/export, and secure image handling via API.',
      image: '/security project.png',
      category: 'College Project', // Updated category for clarity
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'CSV', 'REST API'],
      // No github or demo links for this project
    },
     {
      id: 6,
      title: 'StegoVault',
      description:
        'A secure file vault leveraging steganography techniques for embedded, private file storage/sharing. Designed with custom algorithms for enhanced privacy.',
      image: 'https://images.pexels.com/photos/205316/pexels-photo-205316.jpeg?auto=compress&cs=tinysrgb&w=500', // Replace with your own image if available
      category: 'Web',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Steganography'],
      github: 'https://github.com/harimotepalli/StegoVault',
      demo: 'https://stego-vault-eight.vercel.app', // Replace with your actual demo if available
    },
  ];

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

        <div className="projects-grid">
          {projects.map((project, index) => (
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
      </div>
    </section>
  );
};

export default Projects;
