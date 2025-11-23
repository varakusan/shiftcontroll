import React, { useEffect, useRef, useState } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SmoothScroll = ({ children }) => {
    const scrollRef = useRef(null);
    const scrollInstance = useRef(null);
    const location = useLocation();
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        if (!scrollRef.current) return;

        // 1. Initialize Locomotive Scroll
        const scroll = new LocomotiveScroll({
            el: scrollRef.current,
            smooth: true,
            lerp: 0.05,
            multiplier: 1,
            smartphone: {
                smooth: true
            },
            tablet: {
                smooth: true
            }
        });
        scrollInstance.current = scroll;

        // 2. Setup ScrollTrigger Proxy
        ScrollTrigger.scrollerProxy(scrollRef.current, {
            scrollTop(value) {
                return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
            },
            getBoundingClientRect() {
                return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
            },
            pinType: scrollRef.current.style.transform ? "transform" : "fixed"
        });

        // 3. Bind ScrollTrigger to Locomotive Scroll updates
        scroll.on('scroll', ScrollTrigger.update);

        // 4. Set default scroller for all future ScrollTriggers
        ScrollTrigger.defaults({ scroller: scrollRef.current });

        // 5. Handle refresh events
        ScrollTrigger.addEventListener('refresh', () => scroll.update());
        ScrollTrigger.refresh();

        // 6. Signal that setup is complete
        setIsReady(true);

        return () => {
            if (scrollInstance.current) scrollInstance.current.destroy();
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    // Handle route changes
    useEffect(() => {
        if (scrollInstance.current) {
            scrollInstance.current.update();
            scrollInstance.current.scrollTo('top', { duration: 0, disableLerp: true });
            ScrollTrigger.refresh();
        }
    }, [location]);

    // Update scroll on content resize
    useEffect(() => {
        const resizeObserver = new ResizeObserver(() => {
            if (scrollInstance.current) {
                scrollInstance.current.update();
                ScrollTrigger.refresh();
            }
        });

        if (scrollRef.current) {
            resizeObserver.observe(scrollRef.current);
        }

        return () => resizeObserver.disconnect();
    }, [isReady]); // Re-run when children are mounted

    return (
        <div data-scroll-container ref={scrollRef}>
            {isReady && children}
        </div>
    );
};

export default SmoothScroll;
