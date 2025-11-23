import React, { useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Hero.module.scss';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const headlineRef = useRef(null);
    const subRef = useRef(null);
    const ctaRef = useRef(null);
    const orbsRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        tl.to(headlineRef.current, {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 1.5,
            ease: "power3.out",
            delay: 0.5
        })
            .to(subRef.current, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out"
            }, "-=1")
            .to(ctaRef.current, {
                opacity: 1,
                scale: 1,
                duration: 0.8,
                ease: "back.out(1.7)"
            }, "-=0.5");

        // Orbs animation
        gsap.to(orbsRef.current.children, {
            y: -20,
            duration: 2,
            stagger: {
                each: 0.5,
                yoyo: true,
                repeat: -1
            },
            ease: "sine.inOut"
        });

    }, []);

    return (
        <section className={styles.hero} id="home" data-scroll-section>
            <div className={styles.splineWrapper}>
                <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
            </div>

            <div className={styles.overlay}></div>

            <div className={styles.content}>
                <h1 className={styles.headline} ref={headlineRef}>
                    Redefining <br />
                    <span className={styles.highlight}>Cold Chain</span> Logistics
                </h1>

                <p className={styles.subtitle} ref={subRef}>
                    Precision temperature-controlled transportation and warehousing solutions
                    that safeguard the integrity of your products from origin to destination.
                </p>

                <a href="#contact" className={styles.cta} ref={ctaRef}>
                    <span>Request a Quote</span>
                    <div className={styles.glow}></div>
                </a>
            </div>

            <div className={styles.orbs} ref={orbsRef}>
                <div className={styles.orb}></div>
                <div className={styles.orb}></div>
                <div className={styles.orb}></div>
            </div>
        </section>
    );
};

export default Hero;
