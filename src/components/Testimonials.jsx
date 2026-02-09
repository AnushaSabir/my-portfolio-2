import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
    const testimonials = [
        {
            name: "Global Market Solutions",
            role: "E-commerce Manager",
            text: "Anusha delivered a complex marketplace sync system that works flawlessly. Her expertise in systems is unmatched.",
            rating: 5
        },
        {
            name: "Luxury Brand Owner",
            role: "Founder",
            text: "The website built by Anusha is absolutely stunning. The animations and UI are exactly what we needed for our brand.",
            rating: 5
        },
        {
            name: "AI Tech Startup",
            role: "CTO",
            text: "Professional, fast, and highly skilled in Agentic AI. The autonomous workflow she developed saved us hundreds of hours.",
            rating: 5
        }
    ];

    return (
        <section id="testimonials" className="testimonials-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Client <span className="gradient-text">Reviews</span></h2>
                    <div className="title-underline"></div>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((t, idx) => (
                        <div key={idx} className="testimonial-card glass-card">
                            <div className="stars">
                                {[...Array(t.rating)].map((_, i) => <span key={i}>⭐</span>)}
                            </div>
                            <p className="testimonial-text">"{t.text}"</p>
                            <div className="testimonial-author">
                                <strong>{t.name}</strong>
                                <span>{t.role}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
