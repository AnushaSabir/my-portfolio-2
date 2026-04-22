import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
    const projectList = [
        {
            title: "School Management System",
            category: "Web App",
            description: "A comprehensive platform designed to streamline administrative tasks, student tracking, and educational workflows.",
            tags: ["React", "UI/UX", "Management Portal"],
            image: "/school-system.png",
            icon: "🏫",
            fiverr: "https://fiverr.com/anusharao1506",
            link: "https://v0-school-management-system-sandy-seven.vercel.app"
        },
        {
            title: "Multi-Marketplace Sync",
            category: "System Dev",
            description: "A professional-grade backend syncing thousands of products, prices, and quantities across eBay, Kaufland, Otto, and Shopify.",
            tags: ["Node.js", "Express", "API Integration", "Sync Engine"],
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
            icon: "🔄",
            fiverr: "https://fiverr.com/anusharao1506"
        },
        {
            title: "Riwayat Herbal Hair Oil",
            category: "E-commerce",
            description: "A luxury brand landing page featuring high-end animations, 3D bottle interactions, and a custom checkout system.",
            tags: ["React", "GSAP", "Three.js", "Luxury Design"],
            image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&q=80&w=800",
            icon: "🌿",
            fiverr: "https://fiverr.com/anusharao1506"
        },
        {
            title: "Autonomous Agent Workflow",
            category: "Agentic AI",
            description: "Complex multi-agent system built to automate specialized industrial research and autonomous decision tasks.",
            tags: ["Python", "LangChain", "CrewAI", "LLMs"],
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
            icon: "🤖",
            fiverr: "https://fiverr.com/anusharao1506"
        },
        {
            title: "AI Product Optimizer",
            category: "AI / SEO",
            description: "Strategic tool that utilizes GPT-4 to generate optimized product titles, descriptions, and SEO tags for marketplaces.",
            tags: ["OpenAI", "Prompt Engineering", "Full Stack"],
            image: "/ai_optimizer.png",
            icon: "✨",
            fiverr: "https://fiverr.com/anusharao1506"
        },
        {
            title: "Vercel Automation Pipeline",
            category: "DevOps",
            description: "Enterprise CI/CD solution for automated deployment and runtime correction for multi-service architectures.",
            tags: ["Vercel", "GitHub Actions", "Shell Scripting"],
            image: "/vercel_pipeline.png",
            icon: "🏗️",
            fiverr: "https://fiverr.com/anusharao1506"
        }
    ];

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="section-header"
                >
                    <h2 className="section-title">High-Impact <span className="gradient-text">Projects</span></h2>
                    <div className="title-underline"></div>
                </motion.div>

                <div className="projects-grid">
                    {projectList.map((project, idx) => (
                        <motion.div 
                            key={idx} 
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="project-card glass-card"
                        >
                            <div className="project-image-container">
                                <img src={project.image} alt={project.title} className="project-img" />
                                <div className="project-overlay">
                                    <span className="project-icon-large">{project.icon}</span>
                                </div>
                            </div>
                            <div className="project-info">
                                <span className="project-category">{project.category}</span>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag, tIdx) => (
                                        <span key={tIdx} className="tag">{tag}</span>
                                    ))}
                                </div>
                                <div className="project-link-group">
                                    <a href={project.link || "#"} target={project.link ? "_blank" : "_self"} rel="noreferrer" className="link-arrow">
                                        {project.link ? "View Live →" : "Case Study →"}
                                    </a>
                                    <a href={project.fiverr} target="_blank" rel="noreferrer" className="btn-fiverr">Hire on Fiverr</a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="view-more"
                >
                    <button className="btn-secondary">Explore More Work</button>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
