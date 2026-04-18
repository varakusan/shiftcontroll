document.addEventListener("DOMContentLoaded", () => {
    // === 1. Locomotive Scroll & GSAP Setup ===
    gsap.registerPlugin(ScrollTrigger);

    const scrollContainer = document.querySelector('[data-scroll-container]');
    let locoScroll = null;

    if (scrollContainer) {
        locoScroll = new LocomotiveScroll({
            el: scrollContainer,
            smooth: true,
            smartphone: {
                smooth: true
            },
            tablet: {
                smooth: true
            }
        });

        // Each time Locomotive Scroll updates, tell ScrollTrigger to update too
        locoScroll.on("scroll", ScrollTrigger.update);

        // Tell ScrollTrigger to use these proxy methods for the scroll container
        ScrollTrigger.scrollerProxy(scrollContainer, {
            scrollTop(value) {
                return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
            },
            getBoundingClientRect() {
                return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
            },
            pinType: scrollContainer.style.transform ? "transform" : "fixed"
        });

        // Whenever window updates, we refresh ScrollTrigger and LocomotiveScroll
        ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
        ScrollTrigger.refresh();
    }

    // === 2. Navbar Interaction ===
    const navbar = document.getElementById("navbar");
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
    const menuIcon = document.getElementById("menu-icon");

    if (locoScroll) {
        locoScroll.on("scroll", (args) => {
            if (args.scroll.y > 50) {
                navbar.classList.add("Navbar-module__scrolled");
            } else {
                navbar.classList.remove("Navbar-module__scrolled");
            }
        });
    }

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("Navbar-module__open");
        if (navLinks.classList.contains("Navbar-module__open")) {
            menuIcon.classList.replace("ph-list", "ph-x");
        } else {
            menuIcon.classList.replace("ph-x", "ph-list");
        }
    });

    // Close menu when link clicked
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", (e) => {
            navLinks.classList.remove("Navbar-module__open");
            menuIcon.classList.replace("ph-x", "ph-list");
            
            // Smooth scroll via locomotive
            e.preventDefault();
            const targetId = link.getAttribute("href");
            const targetEl = document.querySelector(targetId);
            if (targetEl && locoScroll) {
                locoScroll.scrollTo(targetEl);
            }
        });
    });

    // === 3. GSAP Animations ===
    const scrollerOptions = scrollContainer ? { scroller: scrollContainer } : {};

    // Hero Animation
    const hl = document.getElementById("hero-headline");
    const sub = document.getElementById("hero-subtitle");
    const cta = document.getElementById("hero-cta");
    const orbs = document.getElementById("hero-orbs");

    const tlHero = gsap.timeline();
    tlHero.to(hl, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.5, ease: "power3.out", delay: 0.5 })
          .to(sub, { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=1")
          .to(cta, { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" }, "-=0.5");

    if (orbs) {
        gsap.to(orbs.children, {
            y: -20, duration: 2, stagger: { each: 0.5, yoyo: true, repeat: -1 }, ease: "sine.inOut"
        });
    }

    // About Animation
    gsap.fromTo("#about-image", { x: -50, opacity: 0 }, {
        x: 0, opacity: 1, duration: 1,
        scrollTrigger: { trigger: "#about", start: "top 80%", end: "top 50%", scrub: 1, ...scrollerOptions }
    });
    gsap.fromTo("#about-text", { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1,
        scrollTrigger: { trigger: "#about", start: "top 70%", end: "top 40%", scrub: 1, ...scrollerOptions }
    });
    if (document.getElementById("about-grid")) {
        gsap.fromTo("#about-grid .About-module__gridItem", { scale: 0.8, opacity: 0 }, {
            scale: 1, opacity: 1, stagger: 0.1, duration: 0.5,
            scrollTrigger: { trigger: "#about-grid", start: "top 85%", ...scrollerOptions }
        });
    }

    // Services Animation
    if (document.getElementById("services-grid")) {
        gsap.fromTo("#services-grid .service-card", { y: 100, opacity: 0 }, {
            y: 0, opacity: 1, stagger: 0.2, duration: 0.8, ease: "power2.out",
            scrollTrigger: { trigger: "#services", start: "top 70%", ...scrollerOptions }
        });
    }

    // Why Us Animation
    if (document.getElementById("why-us-list")) {
        gsap.fromTo("#why-us-list li", { x: -50, opacity: 0 }, {
            x: 0, opacity: 1, stagger: 0.2, duration: 0.8,
            scrollTrigger: { trigger: "#why-us-list", start: "top 80%", ...scrollerOptions }
        });
    }
    if (document.getElementById("why-us-industries")) {
        gsap.fromTo("#why-us-industries .WhyChooseUs-module__industryCard", { y: 50, opacity: 0 }, {
            y: 0, opacity: 1, stagger: 0.1, duration: 0.6,
            scrollTrigger: { trigger: "#why-us-industries", start: "top 85%", ...scrollerOptions }
        });
    }

    // Projects (Horizontal Scroll)
    const projContainer = document.getElementById("projects-container");
    if (projContainer) {
        // We need to wait for layout to calculate width properly
        setTimeout(() => {
            const totalWidth = projContainer.scrollWidth - window.innerWidth + 100;
            if (totalWidth > 0) {
                gsap.to(projContainer, {
                    x: () => -totalWidth,
                    ease: "none",
                    scrollTrigger: {
                        trigger: "#projects",
                        start: "top top",
                        end: () => `+=${totalWidth}`,
                        scrub: 1,
                        pin: true,
                        invalidateOnRefresh: true,
                        ...scrollerOptions
                    }
                });
            }
        }, 500);
    }

    // Contact Animation
    gsap.fromTo("#contact-info", { x: -50, opacity: 0 }, {
        x: 0, opacity: 1, duration: 1,
        scrollTrigger: { trigger: "#contact", start: "top 70%", ...scrollerOptions }
    });
    gsap.fromTo("#contact-form", { x: 50, opacity: 0 }, {
        x: 0, opacity: 1, duration: 1, delay: 0.2,
        scrollTrigger: { trigger: "#contact", start: "top 70%", ...scrollerOptions }
    });

    // Form Submission Simulation
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const submitBtn = document.getElementById("contact-submit");
            const originalHTML = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<span>Sending...</span>';
            submitBtn.disabled = true;

            setTimeout(() => {
                submitBtn.innerHTML = originalHTML;
                submitBtn.disabled = false;
                alert('Message sent! We will get back to you shortly.');
                contactForm.reset();
            }, 2000);
        });
    }

});
