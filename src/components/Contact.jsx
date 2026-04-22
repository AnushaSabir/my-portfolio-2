import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="section-header"
                >
                    <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
                    <div className="title-underline"></div>
                </motion.div>

                <div className="contact-grid">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="contact-info-area"
                    >
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
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="contact-form-area glass-card"
                    >
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
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
