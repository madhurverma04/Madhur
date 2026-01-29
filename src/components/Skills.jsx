import React from 'react';

const Skills = () => {
    return (
        <section id="skills" className="skills">
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>
                <div className="skills-grid">
                    <div className="skill-category">
                        <h3>Frontend Development</h3>
                        <div className="skill-items">
                            <span className="skill-item">JavaScript (ES6+)</span>
                            <span className="skill-item">HTML5/CSS3</span>
                            <span className="skill-item">Tailwind CSS</span>
                            <span className="skill-item">GSAP</span>
                            <span className="skill-item">Locomotive</span>
                        </div>
                    </div>
                    <div className="skill-category">
                        <h3>Backend Development</h3>
                        <div className="skill-items">
                            <span className="skill-item">Node.js</span>
                            <span className="skill-item">WebRTC</span>
                            <span className="skill-item">Express.js</span>
                            <span className="skill-item">Authentication</span>
                            <span className="skill-item">MongoDB</span>
                        </div>
                    </div>
                    <div className="skill-category">
                        <h3>Data Science</h3>
                        <div className="skill-items">
                            <span className="skill-item">Python</span>
                            <span className="skill-item">Pandas</span>
                            <span className="skill-item">NumPy</span>
                            <span className="skill-item">Scikit-learn</span>
                            <span className="skill-item">Matplotlib</span>
                            <span className="skill-item">Power BI</span>
                        </div>
                    </div>
                    <div className="skill-category">
                        <h3>Tools</h3>
                        <div className="skill-items">
                            <span className="skill-item">Git/Github</span>
                            <span className="skill-item">Canva</span>
                            <span className="skill-item">Excel</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
