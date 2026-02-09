import React from 'react';
import './About.css';
import profileImg from '../assets/anusha-profile.jpg';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
                    <div className="title-underline"></div>
                </div>

                <div className="about-grid">
                    <div className="about-image-area">
                        <div className="image-frame">
                            <div className="image-container glass-card">
                                <img src={profileImg} alt="Anusha Sabir" className="profile-image" />
                            </div>
                            <div className="experience-badge glow-on-hover">
                                <span className="years">Expert</span>
                                <span className="exp-text">In AI Agents<br />& Automations</span>
                            </div>
                        </div>
                    </div>

                    <div className="about-text-area">
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
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
