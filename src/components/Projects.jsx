import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: "AI based House price prediction",
            description: "This project utilizes machine learning algorithms to predict house prices by analyzing various features such as location, size, and amenities. The goal is to provide a reliable and accurate valuation tool for buyers, sellers, and real estate professionals..",
            tech: ["Python", "Tenserflow", "Flask", "ML"],
            links: { code: "#", demo: "#" },
            icon: "ri-home-8-line"
        },
        {
            title: "Forest Fire Prediction System",
            description: "The AI-based forest fire prediction system leverages machine learning to analyze environmental data, enabling early warnings for proactive wildfire management.",
            tech: ["Python", "Jupyter", "resterio", "tqdm", "ml"],
            links: { code: "#", demo: "#" },
            icon: "fas fa-robot"
        },
        {
            title: "Obeys Agency",
            description: "Developed a responsive digital agency website featuring a professional portfolio, service showcases, and seamless UI/UX with smooth animations to enhance client engagement.",
            tech: ["Javascript", "Shery.js", "GSAP", "html/css"],
            links: {
                code: "https://github.com/madhurverma04/Obeys-Agency.git",
                demo: "https://obeys-agency-lemon.vercel.app/"
            },
            icon: "fas fa-mobile-alt"
        },
        {
            title: "Scsdb Movies Platform:",
            description: "Developed a responsive movie browsing web application using the Web technologies, featuring dynamic search and detailed movie information with an optimized user interface.",
            tech: ["JavaScript XMl", "CSS", "Tailwind CSS", "Html"],
            links: {
                code: "https://github.com/madhurverma04/SCSDB-Movies.git",
                demo: "https://scsdb-movies.vercel.app/"
            },
            icon: "ri-tv-fill"
        }
    ];

    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div className="project-card" key={index}>
                            <div className="project-image">
                                <i className={project.icon}></i>
                            </div>
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-tech">
                                    {project.tech.map((tech, i) => (
                                        <span key={i}>{tech}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    <a href={project.links.code} className="project-link" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-github"></i> Code
                                    </a>
                                    <a href={project.links.demo} className="project-link" target="_blank" rel="noopener noreferrer">
                                        <i className="fas fa-external-link-alt"></i> {project.title.includes('Movie') ? 'Dashboard' : 'Live Demo'}
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
