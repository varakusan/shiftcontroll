import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import styles from './Preloader.module.scss';

const Preloader = ({ onComplete }) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const progressRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const onCompleteRef = useRef(onComplete);

  // Keep the ref updated with the latest callback
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        if (onCompleteRef.current) onCompleteRef.current();
      }
    });

    // Simulate loading progress for the text counter
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 10) + 1;
      });
    }, 100);

    // Text animation
    tl.to(textRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.5
    })
      .to(progressRef.current, {
        width: '100%',
        duration: 2,
        ease: "expo.inOut"
      }, "-=0.5")
      .to(containerRef.current, {
        y: '-100%',
        duration: 1.2,
        ease: "power4.inOut",
        delay: 0.5
      });

    // Safety timeout: force completion after 5 seconds if animation hangs
    const safetyTimeout = setTimeout(() => {
      console.warn("Preloader animation timed out, forcing completion.");
      if (onCompleteRef.current) onCompleteRef.current();
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(safetyTimeout);
      tl.kill(); // Kill timeline on unmount
    };
  }, []); // Empty dependency array to run only once

  return (
    <div className={styles.preloader} ref={containerRef}>
      <div className={styles.content}>
        <h1 className={styles.title} ref={textRef}>SHIFT CONTROLL</h1>
        <div className={styles.progressBarContainer}>
          <div className={styles.progressBar} ref={progressRef}></div>
        </div>
        <div className={styles.percentage}>{Math.min(progress, 100)}%</div>
      </div>
    </div>
  );
};

export default Preloader;
