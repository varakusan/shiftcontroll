import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from '@phosphor-icons/react';
import styles from './Projects.module.scss';

const projects = [
    { title: "Pharma Logistics", desc: "Vaccine distribution network", tags: ["Cold Chain", "Pharma"] },
    { title: "Fresh Produce", desc: "Farm to fork delivery", tags: ["Agriculture", "Fresh"] },
    { title: "Dairy Supply", desc: "Milk & Dairy transport", tags: ["Dairy", "Time-Critical"] },
    { title: "Frozen Foods", desc: "Deep freeze storage & transit", tags: ["Frozen", "-18°C"] },
    { title: "Medical Devices", desc: "Sensitive equipment handling", tags: ["Healthcare", "Fragile"] },
    { title: "Last Mile", desc: "Urban distribution network", tags: ["Logistics", "Speed"] },
];

const Projects = () => {
    const sectionRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const totalWidth = container.scrollWidth - container.offsetWidth;

        gsap.to(container, {
            x: () => -totalWidth,
            ease: "none",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: () => `+=${totalWidth}`,
                scrub: 1,
                pin: true,
                invalidateOnRefresh: true,
            }
        });
    }, []);

    return (
        <section className={styles.projects} id="projects" ref={sectionRef} data-scroll-section>
            <div className={styles.header}>
                <h2>Our Network & Capabilities</h2>
                <p>Delivering excellence across sectors</p>
            </div>

            <div className={styles.wrapper}>
                <div className={styles.container} ref={containerRef}>
                    {projects.map((project, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.cardContent}>
                                <div className={styles.tags}>
                                    {project.tags.map(tag => <span key={tag}>{tag}</span>)}
                                </div>
                                <h3>{project.title}</h3>
                                <p>{project.desc}</p>
                                <button className={styles.btn}>
                                    View Details <ArrowRight />
                                </button>
                            </div>
                            <div className={styles.bg} style={{ background: `linear-gradient(45deg, ${index % 2 === 0 ? '#00f0ff20' : '#7000ff20'}, transparent)` }}></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
