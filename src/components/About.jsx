import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="section-header"
                >
                    <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
                    <div className="title-underline"></div>
                </motion.div>

                <div className="about-grid">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="about-text-area"
                    >
                        <h3>Automating the Future with Agentic Intelligence</h3>
                        <p>
                            I am **Anusha Sabir**, a specialized developer focused on **Agentic AI** and high-performance workflow automations.
                            My expertise lies in building autonomous systems that utilize **n8n**, **Speckit**, and **LangChain**
                            to streamline complex business processes. From multi-marketplace synchronization to advanced AI agents,
                            I bridge the gap between intelligent logic and seamless system execution.
                        </p>
                        <div className="info-grid">
                            <div className="info-item">
                                <span className="info-label">Specialization:</span>
                                <span className="info-value">Agentic AI & n8n Flows</span>
                            </div>
                            <div className="info-item">
                                <span className="info-label">Automation:</span>
                                <span className="info-value">n8n / Speckit Architect</span>
                            </div>
                            <div className="info-item">
                                <span className="info-label">E-comm:</span>
                                <span className="info-value">System Sync Specialist</span>
                            </div>
                            <div className="info-item">
                                <span className="info-label">Availability:</span>
                                <span className="info-value">Remote & Onsite Open</span>
                            </div>
                        </div>
                        <button className="btn-secondary">Download Portfolio CV</button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
