import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
    Rocket, 
    Sparkles, 
    Globe, 
    ArrowUpRight,
    ChevronRight
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const DarkCareersSection = () => {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const textRef = useRef(null);
    const statsRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        // Get locomotive scroll instance
        const locoScroll = document.querySelector('[data-scroll-container]')?._locomotive;

        if (!locoScroll) return;

        // Tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
        ScrollTrigger.scrollerProxy("[data-scroll-container]", {
            scrollTop(value) {
                return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
            },
            getBoundingClientRect() {
                return {
                    top: 0,
                    left: 0,
                    width: window.innerWidth,
                    height: window.innerHeight
                };
            }
        });

        // Heading animation with Locomotive
        gsap.from(headingRef.current, {
            scrollTrigger: {
                trigger: headingRef.current,
                start: "top 80%",
                scroller: "[data-scroll-container]",
                toggleActions: "play none none reverse"
            },
            y: 100,
            opacity: 0,
            duration: 1,
            ease: "power4.out"
        });

        // Text reveal animation
        gsap.from(textRef.current, {
            scrollTrigger: {
                trigger: textRef.current,
                start: "top 75%",
                scroller: "[data-scroll-container]",
                toggleActions: "play none none reverse"
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: 0.3,
            ease: "power3.out"
        });

        // Stats counter animation
        gsap.from(statsRef.current.children, {
            scrollTrigger: {
                trigger: statsRef.current,
                start: "top 70%",
                scroller: "[data-scroll-container]",
                toggleActions: "play none none reverse"
            },
            scale: 0.8,
            opacity: 0,
            duration: 0.6,
            stagger: 0.2,
            ease: "back.out(1.7)"
        });

        // Update ScrollTrigger when Locomotive Scroll updates
        locoScroll.on("scroll", ScrollTrigger.update);

        // After everything is set up, refresh ScrollTrigger
        ScrollTrigger.refresh();

        // Cleanup
        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
            locoScroll.off("scroll", ScrollTrigger.update);
        };
    }, []);

    return (
        <section 
            ref={sectionRef}
            data-scroll
            data-scroll-section
            className="relative bg-gray-950 py-32 px-6 lg:px-24 overflow-hidden"
            style={{
                backgroundImage: 'radial-gradient(circle at 50% 50%, #1a1a1a 0%, #050505 100%)'
            }}
        >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-950 opacity-40" />

            {/* Animated Background Elements */}
            <div className="absolute inset-0 opacity-10">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        data-scroll
                        data-scroll-speed={Math.random() * 2 - 1}
                        className="absolute h-2 w-2 bg-yellow-400 rounded-full"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animation: `float ${5 + Math.random() * 10}s infinite`
                        }}
                    />
                ))}
            </div>

            <div className="max-w-7xl mx-auto relative">
                {/* Main Content */}
                <div className="text-center mb-16">
                    <h2 
                        ref={headingRef}
                        data-scroll
                        data-scroll-speed="1"
                        className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight"
                    >
                        Join the Future
                    </h2>
                    <p 
                        ref={textRef}
                        data-scroll
                        data-scroll-speed="0.5"
                        className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto"
                    >
                        Create extraordinary digital experiences with a team of visionaries and innovators
                    </p>
                </div>

                {/* Stats Section */}
                <div 
                    ref={statsRef}
                    data-scroll
                    data-scroll-speed="0.2"
                    className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-16"
                >
                    <div 
                        className="p-6 rounded-2xl bg-gray-900/50 backdrop-blur-sm"
                        data-scroll
                        data-scroll-speed="0.3"
                    >
                        <Rocket className="w-8 h-8 text-yellow-400 mb-4" />
                        <h3 className="text-4xl font-bold text-white mb-2">45+</h3>
                        <p className="text-gray-400">Active Projects</p>
                    </div>
                    <div 
                        className="p-6 rounded-2xl bg-gray-900/50 backdrop-blur-sm"
                        data-scroll
                        data-scroll-speed="0.5"
                    >
                        <Globe className="w-8 h-8 text-yellow-400 mb-4" />
                        <h3 className="text-4xl font-bold text-white mb-2">12</h3>
                        <p className="text-gray-400">Countries</p>
                    </div>
                    <div 
                        className="p-6 rounded-2xl bg-gray-900/50 backdrop-blur-sm"
                        data-scroll
                        data-scroll-speed="0.7"
                    >
                        <Sparkles className="w-8 h-8 text-yellow-400 mb-4" />
                        <h3 className="text-4xl font-bold text-white mb-2">24/7</h3>
                        <p className="text-gray-400">Innovation</p>
                    </div>
                </div>

                {/* CTA Button */}
                <div 
                    className="text-center"
                    data-scroll
                    data-scroll-speed="0.2"
                >
                    <button 
                        ref={buttonRef}
                        className="group relative inline-flex items-center gap-2 bg-yellow-400 text-gray-900 md:px-8 px-6 py-4 rounded-full text-lg font-medium overflow-hidden hover:bg-yellow-300 transition-colors duration-300"
                        onClick={() => window.location.href = '/careers'}
                    >
                        Explore Opportunities
                        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                        <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </button>
                </div>

                {/* Additional Link */}
                <div 
                    className="mt-8 text-center"
                    data-scroll
                    data-scroll-speed="0.1"
                >
                    <a 
                        href="/culture" 
                        className="inline-flex items-center text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                    >
                        Discover our culture
                        <ChevronRight className="w-4 h-4 ml-1" />
                    </a>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0) }
                    50% { transform: translateY(-20px) }
                }
            `}</style>
        </section>
    );
};

export default DarkCareersSection;