import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-content">
                <div className="logo">
                    <span className="gradient-text">ANUSHA.DEV</span>
                </div>
                <div className="nav-links">
                    <a href="#hero">Home</a>
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
                <div className="nav-cta">
                    <a href="https://fiverr.com/anusharao1506" target="_blank" rel="noreferrer" className="btn-primary glow-on-hover">Hire Me</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
