import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { List, X } from '@phosphor-icons/react';
import styles from './Navbar.module.scss';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <a href="#home" className={styles.logo}>
                    SHIFT <span>CONTROLL</span>
                </a>

                <div className={`${styles.links} ${isOpen ? styles.open : ''}`}>
                    <a href="#about" onClick={() => setIsOpen(false)}>About</a>
                    <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
                    <a href="#projects" onClick={() => setIsOpen(false)}>Network</a>
                    <a href="#contact" onClick={() => setIsOpen(false)} className={styles.cta}>Contact</a>
                </div>

                <button className={styles.menuToggle} onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} color="#fff" /> : <List size={24} color="#fff" />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
