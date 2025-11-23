import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Truck, Thermometer, Globe, ShieldCheck, Cpu, Leaf } from '@phosphor-icons/react';
import styles from './About.module.scss';

const About = () => {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const textRef = useRef(null);
    const gridRef = useRef(null);

    useEffect(() => {
        const el = sectionRef.current;

        gsap.fromTo(imageRef.current,
            { x: -50, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%",
                    end: "top 50%",
                    scrub: 1
                }
            }
        );

        gsap.fromTo(textRef.current,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: el,
                    start: "top 70%",
                    end: "top 40%",
                    scrub: 1
                }
            }
        );

        gsap.fromTo(gridRef.current.children,
            { scale: 0.8, opacity: 0 },
            {
                scale: 1,
                opacity: 1,
                stagger: 0.1,
                duration: 0.5,
                scrollTrigger: {
                    trigger: gridRef.current,
                    start: "top 85%",
                }
            }
        );
    }, []);

    return (
        <section className={styles.about} id="about" ref={sectionRef} data-scroll-section>
            <div className={styles.container}>
                <div className={styles.imageWrapper} ref={imageRef}>
                    <div className={styles.image}>
                        {/* Placeholder for company image or 3D element */}
                        <div className={styles.placeholderIcon}>
                            <Truck size={64} color="#00f0ff" weight="duotone" />
                        </div>
                    </div>
                    <div className={styles.ring}></div>
                </div>

                <div className={styles.content} ref={textRef}>
                    <h2 className={styles.title}>Who We Are</h2>
                    <p className={styles.description}>
                        Headquartered in Bangalore and established in 2022, <strong>Shift Controll</strong> has rapidly emerged as a premier partner in India’s cold chain logistics sector.
                    </p>
                    <p className={styles.description}>
                        We specialize in the complex science of moving temperature-sensitive goods with absolute precision. We don't just move cargo; we ensure the safety, potency, and freshness of every item entrusted to our care.
                    </p>

                    <div className={styles.grid} ref={gridRef}>
                        <div className={styles.gridItem}>
                            <Thermometer size={32} color="#00f0ff" />
                            <span>Temp Control</span>
                        </div>
                        <div className={styles.gridItem}>
                            <Globe size={32} color="#7000ff" />
                            <span>Nationwide</span>
                        </div>
                        <div className={styles.gridItem}>
                            <ShieldCheck size={32} color="#00f0ff" />
                            <span>Compliance</span>
                        </div>
                        <div className={styles.gridItem}>
                            <Cpu size={32} color="#7000ff" />
                            <span>IoT Monitoring</span>
                        </div>
                        <div className={styles.gridItem}>
                            <Leaf size={32} color="#00f0ff" />
                            <span>Sustainable</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
