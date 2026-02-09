import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-logo">
                    <span className="gradient-text">ANUSHA.DEV</span>
                    <p>Agentic AI, System & Website Developer</p>
                </div>

                <div className="footer-links">
                    <div className="footer-group">
                        <h4>Quick Links</h4>
                        <a href="#hero">Home</a>
                        <a href="#about">About</a>
                        <a href="#skills">Skills</a>
                        <a href="#projects">Projects</a>
                    </div>
                    <div className="footer-group">
                        <h4>Socials</h4>
                        <a href="https://github.com/anushasabir" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="https://linkedin.com/in/anushasabir" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Anusha Sabir. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
