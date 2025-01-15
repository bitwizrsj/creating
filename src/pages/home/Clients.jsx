import React, { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const Client = () => {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [scrollSpeed, setScrollSpeed] = useState(1);
  const [activeIndex, setActiveIndex] = useState(null);
  const animationRef = useRef(null);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const categories = [
    { name: "businesses", color: "rgb(239, 68, 68)" },
    { name: "startups", color: "rgb(59, 130, 246)" },
    { name: "organizations", color: "rgb(34, 197, 94)" },
    { name: "shops", color: "rgb(168, 85, 247)" },
    { name: "portfolios", color: "rgb(249, 115, 22)" },
    { name: "enterprises", color: "rgb(236, 72, 153)" },
    { name: "agencies", color: "rgb(234, 179, 8)" },
    { name: "brands", color: "rgb(14, 165, 233)" },
    { name: "companies", color: "rgb(139, 92, 246)" },
    { name: "retailers", color: "rgb(45, 212, 191)" }
  ];

  // Create three sets for seamless infinite scroll
  const triplicatedCategories = [...categories, ...categories, ...categories];

  const animate = (timestamp) => {
    if (!scrollRef.current) return;

    const scrollContainer = scrollRef.current;
    const scrollWidth = scrollContainer.scrollWidth / 3;
    
    // Adjust speed based on screen size
    const baseSpeed = isMobile ? 0.5 : 1;
    scrollContainer.scrollLeft += scrollSpeed * baseSpeed;

    if (scrollContainer.scrollLeft >= scrollWidth * 2) {
      scrollContainer.scrollLeft = scrollWidth;
    } else if (scrollContainer.scrollLeft <= 0) {
      scrollContainer.scrollLeft = scrollWidth;
    }

    if (!isHovered) {
      animationRef.current = requestAnimationFrame(animate);
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth / 3;
    }

    if (!isHovered) {
      animationRef.current = requestAnimationFrame(animate);
    }

    // Add touch event listeners for mobile
    const element = scrollRef.current;
    let touchStart = 0;
    let scrollLeft = 0;

    const handleTouchStart = (e) => {
      touchStart = e.touches[0].clientX;
      scrollLeft = element.scrollLeft;
      setIsHovered(true); // Pause animation on touch
    };

    const handleTouchMove = (e) => {
      const touch = e.touches[0].clientX;
      const diff = touchStart - touch;
      element.scrollLeft = scrollLeft + diff;
    };

    const handleTouchEnd = () => {
      setIsHovered(false); // Resume animation
    };

    if (element) {
      element.addEventListener('touchstart', handleTouchStart);
      element.addEventListener('touchmove', handleTouchMove);
      element.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (element) {
        element.removeEventListener('touchstart', handleTouchStart);
        element.removeEventListener('touchmove', handleTouchMove);
        element.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [isHovered, isMobile]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setActiveIndex(null);
    animationRef.current = requestAnimationFrame(animate);
  };

  const handleMouseMove = (e) => {
    if (!isHovered) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.width / 2;
    const mouseX = e.clientX - rect.left;
    const distance = (mouseX - centerX) / centerX;
    
    setScrollSpeed(distance * 2);
  };

  const handleItemHover = (index) => {
    setActiveIndex(index);
  };

  return (
    <div 
      className="w-full bg-gray-900 py-12 md:py-16 select-none relative overflow-hidden"
      data-scroll-section
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_50%,#ffffff11,transparent)]" />
        <div className="absolute inset-0" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }} />
      </div>

      <div 
        className="relative overflow-hidden max-w-[95%] mx-auto"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        <div 
          ref={scrollRef}
          className="flex items-center gap-8 md:gap-16 overflow-hidden whitespace-nowrap scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {triplicatedCategories.map((category, index) => (
            <div
              key={`${category.name}-${index}`}
              className={`
                inline-flex items-center transition-all duration-300 
                ${activeIndex === index ? 'scale-110' : 'scale-100'}
              `}
              onMouseEnter={() => handleItemHover(index)}
              onMouseLeave={() => handleItemHover(null)}
            >
              
              <span 
                className={`
                  mx-2 text-2xl md:text-3xl transition-all duration-300
                  ${activeIndex === index ? 'opacity-100' : 'opacity-50'}
                `}
                style={{ color: category.color }}
              >
                •
              </span><span 
                className={`
                  text-2xl md:text-4xl font-bold uppercase tracking-wider px-4
                  transition-all duration-300
                  ${activeIndex === index ? 'text-white' : 'text-gray-400'}
                `}
                style={{
                  textShadow: activeIndex === index ? `0 0 20px ${category.color}40` : 'none',
                  color: activeIndex === index ? category.color : undefined
                }}
              >
                {category.name}
              </span>
            </div>
          ))}
        </div>

        {/* Enhanced gradient overlays */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-32 bg-gradient-to-r from-gray-900 via-gray-900 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-32 bg-gradient-to-l from-gray-900 via-gray-900 to-transparent pointer-events-none" />
      </div>
    </div>
  );
};

export default Client;