import React, { useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';

const Skills = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

    return (
        <section ref={targetRef} className="skills-horizontal-section">
            <div className="sticky-wrapper">
                <h2 className="section-title">Technical Skills</h2>
                <div className="horizontal-overflow-hidden">
                    <motion.div style={{ x }} className="skills-horizontal-track">
                        {/* Frontend Development */}
                        <div className="skill-card-large">
                            <h3 className="card-title">Frontend Development</h3>
                            <div className="card-content">
                                <i className="fab fa-js large-icon" style={{ color: '#F7DF1E' }} title="JavaScript"></i>
                                <i className="fab fa-html5 large-icon" style={{ color: '#E34F26' }} title="HTML5"></i>
                                <i className="fab fa-css3-alt large-icon" style={{ color: '#1572B6' }} title="CSS3"></i>
                                <i className="fas fa-wind large-icon" style={{ color: '#38B2AC' }} title="Tailwind"></i>
                                <i className="fas fa-film large-icon" style={{ color: '#88CE02' }} title="GSAP"></i>
                            </div>
                        </div>

                        {/* Backend Development */}
                        <div className="skill-card-large">
                            <h3 className="card-title">Backend Development</h3>
                            <div className="card-content">
                                <i className="fab fa-node large-icon" style={{ color: '#339933' }} title="Node.js"></i>
                                <i className="fas fa-server large-icon" style={{ color: '#ffffff' }} title="Express.js"></i>
                                <i className="fas fa-database large-icon" style={{ color: '#4DB33D' }} title="MongoDB"></i>
                                <i className="fas fa-lock large-icon" style={{ color: '#FFD700' }} title="Authentication"></i>
                                <i className="fas fa-network-wired large-icon" style={{ color: '#333333' }} title="WebRTC"></i>
                            </div>
                        </div>

                        {/* Data Science */}
                        <div className="skill-card-large">
                            <h3 className="card-title">Data Science</h3>
                            <div className="card-content">
                                <i className="fab fa-python large-icon" style={{ color: '#3776AB' }} title="Python"></i>
                                <i className="fas fa-table large-icon" style={{ color: '#150458' }} title="Pandas"></i>
                                <i className="fas fa-calculator large-icon" style={{ color: '#013243' }} title="NumPy"></i>
                                <i className="fas fa-brain large-icon" style={{ color: '#F7931E' }} title="Scikit-learn"></i>
                                <i className="fas fa-chart-area large-icon" style={{ color: '#11557c' }} title="Matplotlib"></i>
                                <i className="fas fa-chart-bar large-icon" style={{ color: '#F2C811' }} title="Power BI"></i>
                            </div>
                        </div>

                        {/* Tools */}
                        <div className="skill-card-large">
                            <h3 className="card-title">Tools</h3>
                            <div className="card-content">
                                <i className="fab fa-git-alt large-icon" style={{ color: '#F05032' }} title="Git"></i>
                                <i className="fab fa-github large-icon" style={{ color: '#ffffff' }} title="GitHub"></i>
                                <i className="fas fa-palette large-icon" style={{ color: '#00C4CC' }} title="Canva"></i>
                                <i className="fas fa-file-excel large-icon" style={{ color: '#217346' }} title="Excel"></i>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
