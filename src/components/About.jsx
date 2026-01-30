import React from 'react';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="about-image">
                        <img src="/Images/1766892986444.png" alt="Madhur Verma - Profile Photo" className="profile-photo" />
                    </div>
                    <div className="about-text">
                        <p>
                            I'm a Computer Science Engineering student specialization in Artificial Intelligence and Machine
                            Learning, skilled in Data Analytics & Web Development, with a strong ability to work efficiently, and a deep
                            commitment to delivering outstanding results in fast-paced environments. A highly adaptable
                            and innovative team player with great problem-solving and leadership skills,focused on achieving
                            organizational objectives and fostering collaboration.
                        </p>
                        <p>
                            With experience in modern web technologies and advanced data analytics, I specialize in
                            developing scalable applications that leverage data-driven decision making. Whether it's
                            creating interactive dashboards, or implementing machine learning
                            models, I bring a unique blend of technical skills and business acumen.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
