import React from 'react';
import Hero3D from './Hero3D';
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            <div className="hero-bg-glow"></div>
            <div className="container hero-content">
                <div className="hero-text-area">
                    <h2 className="hero-subtitle">Innovative Solutions with Agentic AI</h2>
                    <h1 className="hero-title">
                        Anusha Sabir<br />
                        <span className="gradient-text">Agentic AI Developer</span>
                    </h1>
                    <p className="hero-description">
                        Autonomous agent builder, system architect, and website developer.
                        Bridging advanced AI logic with premium user experiences through state-of-the-art 3D interfaces.
                    </p>
                    <div className="hero-actions">
                        <a href="#projects" className="btn-primary glow-on-hover">Explore Agents</a>
                        <a href="#contact" className="btn-secondary">Let's Collaborate</a>

                        <div className="hero-socials">
                            <a href="https://github.com/anushasabir" target="_blank" rel="noreferrer" title="Direct Message on GitHub" className="social-icon-link">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://linkedin.com/in/anushasabir" target="_blank" rel="noreferrer" title="Direct Message on LinkedIn" className="social-icon-link">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="visual-circle-bg"></div>
                    <Hero3D />
                </div>
            </div>
        </section>
    );
};

export default Hero;
