import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaAws, FaDocker } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiMongodb, SiExpress, SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: <FaReact /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'TypeScript', icon: <SiTypescript /> },
        { name: 'Next.js', icon: <SiNextdotjs /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'Express.js', icon: <SiExpress /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'Database', icon: <FaDatabase /> },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', icon: <FaGitAlt /> },
        { name: 'AWS', icon: <FaAws /> },
        { name: 'Docker', icon: <FaDocker /> },
      ],
    },
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <motion.h2
          className="section-title gradient-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Skills & Technologies
        </motion.h2>

        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            className="skill-category-container"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="category-title neon-text">{category.title}</h3>
            <div className="skills-grid">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  className="skill-box glass-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -10, boxShadow: 'var(--shadow-neon)' }}
                  transition={{
                    duration: 0.4,
                    delay: categoryIndex * 0.2 + skillIndex * 0.05,
                  }}
                  viewport={{ once: true }}
                >
                  <div className="skill-icon">{skill.icon}</div>
                  <div className="skill-name">{skill.name}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;