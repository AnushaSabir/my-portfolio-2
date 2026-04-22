import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: "Agentic AI & Flows",
            skills: ["Autonomous Agents", "Multi-Agent Systems", "LangChain / CrewAI", "n8n Automations", "Speckit Integration"]
        },
        {
            title: "Frontend Development",
            skills: ["React.js / Next.js", "React Native", "Tailwind CSS", "GSAP Animations", "Three.js / Canvas", "Modern JavaScript"]
        },
        {
            title: "Backend & Systems",
            skills: ["Node.js / Express", "Python / FastAPI", "PostgreSQL / MongoDB", "System Architecture", "Performance Optimization"]
        },
        {
            title: "Modern Tools",
            skills: ["Docker / Kubernetes", "CI/CD Pipelines", "AWS / Cloud Solutions", "Git / GitHub Actions", "UI Design Principles"]
        }
    ];

    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="section-header"
                >
                    <h2 className="section-title">Technical <span className="gradient-text">Expertise</span></h2>
                    <div className="title-underline"></div>
                </motion.div>

                <div className="skills-grid">
                    {skillCategories.map((cat, idx) => (
                        <motion.div 
                            key={idx} 
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: idx * 0.15 }}
                            className="skill-category glass-card"
                        >
                            <h3 className="category-title">{cat.title}</h3>
                            <ul className="skill-list">
                                {cat.skills.map((skill, sIdx) => (
                                    <li key={sIdx} className="skill-item">
                                        <span className="skill-dot"></span>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
