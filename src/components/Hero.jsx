import React from 'react';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <section id="home" className="hero" data-scroll-section>
            <div className="hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Hi, I'm <span className="highlight">Madhur Verma</span>
                    </h1>
                    <p className="hero-subtitle">
                        Data Analyst
                    </p>
                    <p className="hero-description">
                        I build scalable web applications and transform data into actionable insights.
                        Passionate about creating innovative solutions that bridge technology and business.
                    </p>
                    <div className="hero-buttons">
                        <Link to="projects" smooth={true} duration={500} className="btn btn-primary">
                            View My Work
                        </Link>
                        <Link to="contact" smooth={true} duration={500} className="btn btn-secondary">
                            Get In Touch
                        </Link>
                    </div>
                </div>
                <div className="hero-image">
                    <div className="hero-avatar">
                        <i className="fas fa-user-astronaut"></i>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
