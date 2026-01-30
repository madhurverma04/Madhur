import React from 'react';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <section id="home" className="hero" data-scroll-section>
            <div className="hero-container">
                <div className="hero-bg-elements">
                    <i className="fas fa-chart-line float-icon icon-1"></i>
                    <i className="fas fa-database float-icon icon-2"></i>
                    <i className="fab fa-python float-icon icon-3"></i>
                    <i className="fas fa-code-branch float-icon icon-4"></i>
                    <i className="fas fa-project-diagram float-icon icon-5"></i>
                </div>
                <div className="hero-content">
                    <h1 className="hero-title">
                        <span className="highlight animate-text">MADHUR</span>
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
                        <a href="/ResumePdf/Madhur_Data_Analyst.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                            My Resume
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
