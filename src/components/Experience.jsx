import React from 'react';

const Experience = () => {
    return (
        <section id="experience" className="experience">
            <div className="container">
                <h2 className="section-title">Experience</h2>
                <div className="timeline">
                    <div className="timeline-item">
                        <div className="timeline-date">- - Jan 2026 – Present</div>
                        <div className="timeline-content">
                            <h3>Data Analyst Intern</h3>
                            <h4>Decoded Data Academy</h4>
                            <ul>
                                <li>Performed data quality assessment and automated exploratory data analysis (EDA) using Python libraries such as Pandas, NumPy, and ydata-profiling to identify inconsistencies and missing values.</li>
                                <li>Analyzed data drift and distribution changes by comparing historical and current datasets using Evidently AI, SQL queries, and statistical summaries to support data reliability.</li>
                                <li>Developed analytical pipelines using Python and SQL to compute deterministic performance metrics, aggregate KPIs, and generate consolidated analytical reports from multiple data sources.</li>
                                <li>Created data-driven evaluation benchmarks by designing structured datasets, building reproducible analytical workflows with controlled random seeding (PCG64), and validating results using Excel-based analysis and Power BI dashboards for trend visualisation and insight generation.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-date">- - Dec 2024 - Jan 2025</div>
                        <div className="timeline-content">
                            <h3>Frontend Developer Intern</h3>
                            <h4>Cognifyz Technologies</h4>
                            <p>Throughout my internship, I gained hands-on experience in modern frontend development,
                                working with technologies
                                like React.js, HTML, CSS, and JavaScript. I learned the importance of responsive design and
                                collaborated with a
                                team to build user-friendly features, honing my skills in version control and professional
                                development practices. This experience significantly improved my ability to create dynamic
                                and visually appealing web applications.</p>
                            <ul>
                                <li>Collaborated with a team to build and integrate new features, ensuring a seamless user
                                    experience.</li>
                                <li>Developed user interfaces for web applications using HTML, CSSand JavaScript.</li>
                                <li>Implemented responsive design techniques to ensure websites areoptimized for mobile
                                    devices.</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
