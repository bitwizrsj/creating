import React, { useEffect, useRef } from 'react';
import SplitType from 'split-type';
import { gsap } from 'gsap';
import img1 from '../../assets/home/hero/img (1).png';
import img2 from '../../assets/home/hero/img (2).png';
import img3 from '../../assets/home/hero/img (3).png';
import img4 from '../../assets/home/hero/img (4).png';
import img5 from '../../assets/home/hero/img (5).png';
import image from '../../assets/home/hero/image.png';

const Hero = () => {
    const animateRefs = {
        text1: useRef(null),
        text2: useRef(null),
        circle: useRef(null),
    };
    const imgContainerRef = useRef(null);
    const images = [img1, img2, img3, img4, img5];

    // Reusable function to handle text animation
    const animateText = (ref, staggerDuration = 0.1) => {
        const typeSplit = new SplitType(ref.current, {
            types: 'lines, words, chars',
            tagName: 'span',
        });

        gsap.from(ref.current.querySelectorAll('.char'), {
            y: '100%',
            opacity: 0,
            duration: 0.5,
            ease: 'power1.out',
            stagger: staggerDuration,
        });

        return () => typeSplit.revert();
    };

    useEffect(() => {
        // Animating text and circle for the first section
        animateText(animateRefs.text1);
        animateText(animateRefs.text2);

        gsap.fromTo(
            animateRefs.circle.current,
            { scale: 0.5, opacity: 0, y: '50%' },
            {
                scale: 1,
                opacity: 1,
                y: '0%',
                duration: 0.7,
                ease: 'back.out(1.7)',
                delay: 0.7,
            }
        );
    }, []);

    // Image slider logic
    useEffect(() => {
        let currentIndex = 0;
        const totalImages = images.length;
        const intervalTime = 3000;

        const changeImage = () => {
            gsap.to(imgContainerRef.current, {
                x: `-${currentIndex * 100}%`,
                duration: 1,
                ease: 'power2.inOut',
            });
            currentIndex = (currentIndex + 1) % totalImages;
        };

        const interval = setInterval(changeImage, intervalTime);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="hero h-[90vh] flex flex-col lg:flex-row items-center justify-center px-6 lg:px-24 space-y-8 lg:space-y-0">
            {/* Left Section */}
            <div
                className="overflow-hidden h-full flex flex-col text-gray-950 justify-center space-y-4 md:space-y-8 w-full md:w-1/2"
                data-scroll-section
            >
                <div
                    className="flex items-center text-[15vw] md:text-[7vw] font-sans tracking-tighter"
                    data-scroll
                    data-scroll-speed="2"
                >
                    <h1 ref={animateRefs.text1} className="animate flex font-thin mt-24">
                        <span className="mr-4">We</span>
                        <span>create</span>
                    </h1>
                    <div
                        ref={animateRefs.circle}
                        className="animate h-[10vw] w-[10vw] md:h-[5vw] md:w-[5vw] bg-yellow-300 rounded-full ml-4 md:ml-6 mt-2 md:mt-4"
                    ></div>
                </div>
                <h1
                    ref={animateRefs.text2}
                    className="animate text-[15vw] md:text-[7vw] font-sans"
                    data-scroll
                    data-scroll-speed="1"
                >
                    sites
                </h1>
            </div>

            {/* Right Section with Automatic Image Slider */}
            <div className="h-[90vh] flex justify-center items-center" data-scroll-section>
                <div className="overflow-hidden h-[60vw] md:h-[30vw] w-full md:w-[40vw] sm:w-96">
                    {/* <div data-scroll data-scroll-speed="5" />

                    <div
                        ref={imgContainerRef}
                        className="flex transition-transform ease-in-out"
                        style={{
                            willChange: 'transform',
                            transform: 'translateX(0%)',
                        }}
                    >
                        {images.map((image, index) => (
                            <div key={index} className="h-full w-full flex-shrink-0">
                                <img
                                    className="h-full w-full object-contain"
                                    src={image}
                                    alt={`Hero ${index}`}
                                />
                            </div>
                        ))}
                    </div> */}
                    <img src = {image} alt = "hero" />
                </div>
            </div>
            
        </div>
    );
};

export default Hero;
