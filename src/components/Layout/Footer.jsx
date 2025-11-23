import React from 'react';
import { FacebookLogo, TwitterLogo, LinkedinLogo, InstagramLogo } from '@phosphor-icons/react';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer} data-scroll-section>
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <h3>SHIFT <span>CONTROLL</span></h3>
                        <p>Redefining Cold Chain Logistics</p>
                    </div>

                    <div className={styles.socials}>
                        <a href="#"><LinkedinLogo size={24} /></a>
                        <a href="#"><TwitterLogo size={24} /></a>
                        <a href="#"><InstagramLogo size={24} /></a>
                        <a href="#"><FacebookLogo size={24} /></a>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} Shift Controll. All rights reserved.</p>
                    <div className={styles.links}>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>

            <div className={styles.particles}>
                {[...Array(20)].map((_, i) => (
                    <div key={i} className={styles.particle} style={{
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 5}s`,
                        animationDuration: `${5 + Math.random() * 5}s`
                    }}></div>
                ))}
            </div>
        </footer>
    );
};

export default Footer;
