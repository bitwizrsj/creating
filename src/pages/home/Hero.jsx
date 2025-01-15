import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type';
import { ArrowRight } from 'lucide-react';
import image from '../../assets/home/hero/image.png';

// Custom Button Component
const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyles = "inline-flex items-center justify-center transition-colors duration-200 font-medium";
    const variants = {
        primary: "bg-gray-900 hover:bg-gray-800 text-white",
        outline: "bg-transparent hover:bg-gray-50 text-gray-900 border-2 border-gray-200 hover:border-gray-300"
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

const Hero = () => {
    const animateRefs = {
        text1: useRef(null),
        text2: useRef(null),
        circle: useRef(null),
        paragraph: useRef(null),
        ctaSection: useRef(null),
        imageWrapper: useRef(null)
    };

    // Enhanced text animation function with optional custom properties
    const animateText = (ref, options = {}) => {
        const {
            staggerDuration = 0.1,
            yOffset = '100%',
            duration = 0.5,
            delay = 0
        } = options;

        const typeSplit = new SplitType(ref.current, {
            types: 'lines, words, chars',
            tagName: 'span',
        });

        gsap.from(ref.current.querySelectorAll('.char'), {
            y: yOffset,
            opacity: 0,
            duration,
            delay,
            ease: 'power2.out',
            stagger: staggerDuration,
        });

        return () => typeSplit.revert();
    };

    useEffect(() => {
        // Create a timeline for coordinated animations
        const tl = gsap.timeline();

        // Animate main text elements
        animateText(animateRefs.text1, { delay: 0.2 });
        animateText(animateRefs.text2, { delay: 0.4, staggerDuration: 0.15 });

        // Animate the circle with a bounce effect
        tl.fromTo(
            animateRefs.circle.current,
            { scale: 0, opacity: 0, y: '50%' },
            {
                scale: 1,
                opacity: 1,
                y: '0%',
                duration: 0.8,
                ease: 'elastic.out(1.2, 0.5)',
                delay: 0.7,
            }
        );

        // Animate paragraph text with a fade-in effect
        tl.fromTo(
            animateRefs.paragraph.current,
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'power2.out',
            },
            '-=0.4'
        );

        // Animate CTA section
        tl.fromTo(
            animateRefs.ctaSection.current,
            { y: 20, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.6,
                ease: 'power2.out',
            },
            '-=0.2'
        );

        // Animate image with a reveal effect
        tl.fromTo(
            animateRefs.imageWrapper.current,
            { clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' },
            {
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                duration: 1,
                ease: 'power2.inOut',
            },
            '-=0.5'
        );

    }, []);

    return (
        <div className="hero min-h-[90vh] flex flex-col lg:flex-row items-center justify-center px-6 lg:px-24 bg-white">
            {/* Left Section */}
            <div className="overflow-hidden flex flex-col text-gray-950 justify-center space-y-6 w-full lg:w-1/2 pt-12 lg:pt-0" data-scroll-section>
                <div className="flex items-center text-[15vw] lg:text-[7vw] font-sans tracking-tighter"
                    data-scroll
                    data-scroll-speed="2">
                    <h1 ref={animateRefs.text1} className="flex font-thin">
                        <span className="mr-4">We</span>
                        <span>create</span>
                    </h1>
                    <div
                        ref={animateRefs.circle}
                        className="h-[10vw] w-[10vw] lg:h-[5vw] lg:w-[5vw] bg-yellow-300 rounded-full ml-4 lg:ml-6 mt-2 lg:mt-4"
                    ></div>
                </div>
                
                <h1
                    ref={animateRefs.text2}
                    className="text-[15vw] lg:text-[7vw] font-sans"
                    data-scroll
                    data-scroll-speed="1"
                >
                    digital magic
                </h1>

                <p ref={animateRefs.paragraph} className="text-lg lg:text-xl text-gray-600 max-w-xl">
                    We transform ideas into exceptional digital experiences. Our team of creators, 
                    innovators, and dreamers crafts websites that don't just exist — they inspire, 
                    engage, and deliver results.
                </p>

                <div ref={animateRefs.ctaSection} className="flex flex-col sm:flex-row gap-4 mt-8">
                    <Button className="px-8 py-6 rounded-full flex items-center gap-2">
                        Start your project
                        <ArrowRight className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" className="px-8 py-6 rounded-full">
                        View our work
                    </Button>
                </div>
            </div>

            {/* Right Section */}
            <div className="h-[90vh] flex justify-center items-center lg:w-1/2" data-scroll-section>
                <div 
                    ref={animateRefs.imageWrapper}
                    className="overflow-hidden h-[60vw] lg:h-[30vw] w-full lg:w-[40vw] rounded-2xl shadow-2xl"
                >
                    <img 
                        src={image} 
                        alt="hero" 
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;