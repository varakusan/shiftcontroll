import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle, Factory, Flask, FirstAid, Grains } from '@phosphor-icons/react';
import styles from './WhyChooseUs.module.scss';

const industries = [
    { name: "Pharmaceuticals", icon: <Flask size={32} /> },
    { name: "Food & Beverage", icon: <Factory size={32} /> },
    { name: "Healthcare", icon: <FirstAid size={32} /> },
    { name: "Agriculture", icon: <Grains size={32} /> },
];

const WhyChooseUs = () => {
    const sectionRef = useRef(null);
    const listRef = useRef(null);
    const industriesRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(listRef.current.children,
            { x: -50, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 0.8,
                scrollTrigger: {
                    trigger: listRef.current,
                    start: "top 80%",
                }
            }
        );

        gsap.fromTo(industriesRef.current.children,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                stagger: 0.1,
                duration: 0.6,
                scrollTrigger: {
                    trigger: industriesRef.current,
                    start: "top 85%",
                }
            }
        );
    }, []);

    return (
        <section className={styles.whyChooseUs} id="why-us" ref={sectionRef} data-scroll-section>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.heading}>Why Choose Shift Controll?</h2>
                    <ul className={styles.list} ref={listRef}>
                        <li>
                            <CheckCircle size={24} color="#00f0ff" weight="fill" />
                            <div>
                                <strong>Nationwide Reach</strong>
                                <p>Robust logistics network covering major metropolitan cities and key industrial hubs.</p>
                            </div>
                        </li>
                        <li>
                            <CheckCircle size={24} color="#00f0ff" weight="fill" />
                            <div>
                                <strong>Quality & Compliance</strong>
                                <p>Strict adherence to global industry standards and regulatory requirements.</p>
                            </div>
                        </li>
                        <li>
                            <CheckCircle size={24} color="#00f0ff" weight="fill" />
                            <div>
                                <strong>Technological Innovation</strong>
                                <p>Continuous investment in digital tools and automation for total traceability.</p>
                            </div>
                        </li>
                        <li>
                            <CheckCircle size={24} color="#00f0ff" weight="fill" />
                            <div>
                                <strong>Expert Stewardship</strong>
                                <p>Highly skilled workforce committed to reliable, customer-centric solutions.</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className={styles.industries}>
                    <h3 className={styles.subHeading}>Industries We Serve</h3>
                    <div className={styles.industryGrid} ref={industriesRef}>
                        {industries.map((ind, i) => (
                            <div key={i} className={styles.industryCard}>
                                {ind.icon}
                                <span>{ind.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
