import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
                    <div className="title-underline"></div>
                </div>

                <div className="contact-grid">
                    <div className="contact-info-area">
                        <h3>Let's talk about your project</h3>
                        <p>I'm always open to discussing new projects, creative ideas or AI-driven agentic solutions.</p>

                        <div className="contact-methods">
                            <div className="method-item">
                                <span className="method-icon">📧</span>
                                <div className="method-text">
                                    <span>Email</span>
                                    <strong>anushasabir15@gmail.com</strong>
                                </div>
                            </div>
                            <div className="method-item">
                                <span className="method-icon">📍</span>
                                <div className="method-text">
                                    <span>Location</span>
                                    <strong>Onsite / Remote / Freelance</strong>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-area glass-card">
                        <form className="contact-form">
                            <div className="form-group">
                                <input type="text" placeholder="Full Name" required />
                            </div>
                            <div className="form-group">
                                <input type="email" placeholder="Email Address" required />
                            </div>
                            <div className="form-group">
                                <textarea placeholder="Your Message" rows="5" required></textarea>
                            </div>
                            <button type="submit" className="btn-primary glow-on-hover w-full">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
