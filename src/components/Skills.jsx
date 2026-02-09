import React from 'react';
import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: "Agentic AI & Flows",
            skills: ["Autonomous Agents", "Multi-Agent Systems", "LangChain / CrewAI", "n8n Automations", "Speckit Integration"]
        },
        {
            title: "Frontend Development",
            skills: ["React.js / Next.js", "Tailwind CSS", "GSAP Animations", "Three.js / Canvas", "Modern JavaScript"]
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
                <div className="section-header">
                    <h2 className="section-title">Technical <span className="gradient-text">Expertise</span></h2>
                    <div className="title-underline"></div>
                </div>

                <div className="skills-grid">
                    {skillCategories.map((cat, idx) => (
                        <div key={idx} className="skill-category glass-card">
                            <h3 className="category-title">{cat.title}</h3>
                            <ul className="skill-list">
                                {cat.skills.map((skill, sIdx) => (
                                    <li key={sIdx} className="skill-item">
                                        <span className="skill-dot"></span>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
