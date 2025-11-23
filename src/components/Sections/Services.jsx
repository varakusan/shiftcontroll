import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Truck, Warehouse, WifiHigh, Package } from '@phosphor-icons/react';
import styles from './Services.module.scss';

const services = [
    {
        icon: <Truck size={48} color="#00f0ff" />,
        title: "Temperature-Controlled Transportation",
        desc: "Secure, efficient delivery for perishable goods with optimal temperature maintenance across the entire supply chain."
    },
    {
        icon: <Warehouse size={48} color="#7000ff" />,
        title: "Advanced Cold Storage Facilities",
        desc: "State-of-the-art warehouses with cutting-edge cooling technology for safe, long-term, and short-term storage."
    },
    {
        icon: <WifiHigh size={48} color="#00f0ff" />,
        title: "Real-Time Monitoring & IoT",
        desc: "Smart tracking systems providing real-time data on location and temperature for total transparency."
    },
    {
        icon: <Package size={48} color="#7000ff" />,
        title: "Customized Logistics Solutions",
        desc: "End-to-end tailored services including specialized packaging and strategic last-mile distribution."
    }
];

const Services = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        gsap.fromTo(cardsRef.current,
            { y: 100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                }
            }
        );
    }, []);

    return (
        <section className={styles.services} id="services" ref={sectionRef} data-scroll-section>
            <div className={styles.container}>
                <h2 className={styles.heading}>Our Services</h2>
                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={styles.card}
                            ref={el => cardsRef.current[index] = el}
                        >
                            <div className={styles.iconWrapper}>
                                {service.icon}
                                <div className={styles.glow}></div>
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
