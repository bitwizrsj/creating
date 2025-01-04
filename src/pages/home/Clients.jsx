import React, { useEffect, useState } from 'react';

const Client = () => {
  const [position, setPosition] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const categories = [
    "businesses",
    "startups",
    "organizations",
    "shops",
    "portfolios",
    "enterprises",
    "agencies",
    "brands",
    "companies",
    "retailers"
  ];

  // Duplicate the array to create a seamless loop
  const duplicatedCategories = [...categories, ...categories];

  useEffect(() => {
    let interval;

    if (!isHovered) {
      interval = setInterval(() => {
        setPosition((prev) => {
          const newPosition = prev - 1;
          // Continuously scroll without resetting
          if (newPosition <= -duplicatedCategories.length * 200) {
            return 0; // Restart scroll seamlessly
          }
          return newPosition;
        });
      }, 0); // Adjust the interval for smooth scrolling
    }

    // Cleanup the interval when the component unmounts or hover state changes
    return () => clearInterval(interval);
  }, [isHovered, duplicatedCategories.length]);

  return (
    <div
      className="w-full overflow-hidden bg-gray-900 py-8"
      data-scroll-section
      onMouseEnter={() => setIsHovered(true)} // Pause animation on hover
      onMouseLeave={() => setIsHovered(false)} // Resume animation when mouse leaves
    >
      <div className="relative">
        <div
          className="flex items-center transition-transform duration-300"
          style={{
            transform: `translateX(${position}px)`,
            width: `${duplicatedCategories.length * 200}px`
          }}
        >
          {duplicatedCategories.map((category, index) => (
            <div
              key={`${category}-${index}`}
              className="flex justify-center items-center px-4"
            >
              <div className="text-gray-50 text-3xl font-bold uppercase text-center">
                {category}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Client;
