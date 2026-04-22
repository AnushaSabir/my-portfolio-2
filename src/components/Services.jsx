import React from 'react';
import { motion } from 'framer-motion';
import './Services.css';

const Services = () => {
    const serviceList = [
        {
            title: "Agentic AI Solutions",
            desc: "Developing autonomous agent workflows, multi-agent systems, and custom LLM integrations for business automation.",
            price: "Starting from $149",
            icon: "🤖",
            fiverr: "https://fiverr.com/anusharao1506"
        },
        {
            title: "Premium Website Development",
            desc: "Crafting visually stunning, high-performance websites with 3D interactions, GSAP animations, and luxury UI.",
            price: "Starting from $99",
            icon: "🌐",
            fiverr: "https://fiverr.com/anusharao1506"
        },
        {
            title: "System Architecture & Sync",
            desc: "Building robust backend engines for multi-marketplace synchronization and scalable data pipelines.",
            price: "Starting from $199",
            icon: "⚙️",
            fiverr: "https://fiverr.com/anusharao1506"
        }
    ];

    return (
        <section id="services" className="services-section">
            <div className="container">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="section-header"
                >
                    <h2 className="section-title">My <span className="gradient-text">Services</span></h2>
                    <p className="section-subtitle">Premium solutions tailored for your business needs</p>
                    <div className="title-underline"></div>
                </motion.div>

                <div className="services-grid">
                    {serviceList.map((service, idx) => (
                        <motion.div 
                            key={idx} 
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: idx * 0.15 }}
                            className="service-card glass-panel"
                        >
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-desc">{service.desc}</p>
                            <div className="service-footer">
                                <span className="service-price">{service.price}</span>
                                <a href={service.fiverr} target="_blank" rel="noreferrer" className="btn-primary glow-on-hover btn-sm">Order on Fiverr</a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
