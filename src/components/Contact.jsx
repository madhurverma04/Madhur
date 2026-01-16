import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="contact-redesign">
            <div className="container">
                <div className="contact-split-layout">
                    {/* Left Side: Big Typography */}
                    <div className="contact-left">
                        <div className="connect-badge">Ready to Connect</div>
                        <h1 className="big-connect-text">
                            LET'S <br />
                            <span className="accent-text">CONNECT</span>
                        </h1>
                        <p className="contact-subtext">
                            Merging technical precision with creative innovation. Based in Bhopal, India.
                            Building solutions for a global audience.
                        </p>
                    </div>

                    {/* Right Side: Contact Details */}
                    <div className="contact-right">
                        <div className="contact-card-group">
                            <div className="label-text">GET IN TOUCH</div>
                            <a href="mailto:madhur198654@gmail.com" className="email-link">
                                madhur198654@gmail.com
                            </a>
                        </div>

                        <div className="details-grid">
                            <div className="detail-card">
                                <i className="fas fa-phone-alt detail-icon"></i>
                                <div className="detail-content">
                                    <span className="detail-label">PHONE</span>
                                    <span className="detail-value">+91 7470811264</span>
                                </div>
                            </div>
                            <div className="detail-card">
                                <i className="fas fa-map-marker-alt detail-icon"></i>
                                <div className="detail-content">
                                    <span className="detail-label">LOCATION</span>
                                    <span className="detail-value">Bhopal, India</span>
                                </div>
                            </div>
                        </div>

                        <div className="social-actions">
                            <a href="https://github.com/madhurverma04" target="_blank" rel="noopener noreferrer" className="social-btn">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/madhur-verma-26034b324" target="_blank" rel="noopener noreferrer" className="social-btn">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a href="https://x.com/Madhurverm32223" target="_blank" rel="noopener noreferrer" className="social-btn">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="https://www.instagram.com/madhur_creates/" target="_blank" rel="noopener noreferrer" className="social-btn">
                                <i className="ri-instagram-fill"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
