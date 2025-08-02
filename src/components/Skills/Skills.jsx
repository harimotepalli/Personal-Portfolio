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
        { name: 'React', level: 95, icon: <FaReact /> },
        { name: 'JavaScript', level: 90, icon: <SiJavascript /> },
        { name: 'TypeScript', level: 85, icon: <SiTypescript /> },
        { name: 'Next.js', level: 88, icon: <SiNextdotjs /> },
        { name: 'Tailwind CSS', level: 92, icon: <SiTailwindcss /> }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 90, icon: <FaNodeJs /> },
        { name: 'Express.js', level: 88, icon: <SiExpress /> },
        { name: 'MongoDB', level: 85, icon: <SiMongodb /> },
        { name: 'Database', level: 82, icon: <FaDatabase /> }
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 90, icon: <FaGitAlt /> },
        { name: 'AWS', level: 75, icon: <FaAws /> },
        { name: 'Docker', level: 78, icon: <FaDocker /> }
      ]
    }
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

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="skill-category glass-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="category-title neon-text">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1 
                    }}
                    viewport={{ once: true }}
                  >
                    <div className="skill-header">
                      <div className="skill-name">
                        <span className="skill-icon">{skill.icon}</span>
                        {skill.name}
                      </div>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ 
                          duration: 1.5, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3,
                          ease: "easeOut"
                        }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="skills-summary"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="glass-card">
            <h3 className="gradient-text">What I Bring to the Table</h3>
            <p>
              With a strong foundation in modern web technologies, I create scalable, 
              maintainable, and user-focused applications. My expertise spans the full 
              development stack, from crafting intuitive user interfaces to building 
              robust backend systems.
            </p>
            <div className="highlight-skills">
              <span className="highlight-skill">Full Stack Development</span>
              <span className="highlight-skill">Modern JavaScript</span>
              <span className="highlight-skill">Cloud Technologies</span>
              <span className="highlight-skill">Agile Methodologies</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;