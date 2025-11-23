import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PaperPlaneRight, MapPin, Phone, Envelope } from '@phosphor-icons/react';
import styles from './Contact.module.scss';

const Contact = () => {
    const sectionRef = useRef(null);
    const formRef = useRef(null);
    const infoRef = useRef(null);
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [sending, setSending] = useState(false);

    useEffect(() => {
        gsap.fromTo(infoRef.current,
            { x: -50, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                }
            }
        );

        gsap.fromTo(formRef.current,
            { x: 50, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                delay: 0.2,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                }
            }
        );
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSending(true);
        // Simulate send
        setTimeout(() => {
            setSending(false);
            alert('Message sent! We will get back to you shortly.');
            setFormState({ name: '', email: '', message: '' });
        }, 2000);
    };

    return (
        <section className={styles.contact} id="contact" ref={sectionRef} data-scroll-section>
            <div className={styles.container}>
                <div className={styles.info} ref={infoRef}>
                    <h2>Get in Touch</h2>
                    <p>Ready to optimize your cold chain? Contact our team today.</p>

                    <div className={styles.contactDetails}>
                        <div className={styles.detail}>
                            <div className={styles.icon}><MapPin size={24} /></div>
                            <div>
                                <strong>Head Office:</strong>
                                <p>Near Commercial Check Post, Nimbekapura, Old Madras Road, Bangalore – 560049</p>
                            </div>
                        </div>
                        <div className={styles.detail}>
                            <div className={styles.icon}><Phone size={24} /></div>
                            <div>
                                <strong>Phone:</strong>
                                <p>+91 7795742397 (Mr. Tharoon)</p>
                            </div>
                        </div>
                        <div className={styles.detail}>
                            <div className={styles.icon}><Envelope size={24} /></div>
                            <div>
                                <strong>Email:</strong>
                                <p>Sales@shiftcontroll.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                <form className={styles.form} ref={formRef} onSubmit={handleSubmit}>
                    <div className={styles.inputGroup}>
                        <input
                            type="text"
                            placeholder="Your Name"
                            required
                            value={formState.name}
                            onChange={e => setFormState({ ...formState, name: e.target.value })}
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <input
                            type="email"
                            placeholder="Your Email"
                            required
                            value={formState.email}
                            onChange={e => setFormState({ ...formState, email: e.target.value })}
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <textarea
                            placeholder="Your Message"
                            rows="5"
                            required
                            value={formState.message}
                            onChange={e => setFormState({ ...formState, message: e.target.value })}
                        ></textarea>
                    </div>
                    <button type="submit" className={styles.submitBtn} disabled={sending}>
                        {sending ? 'Sending...' : <>Send Message <PaperPlaneRight size={20} /></>}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
