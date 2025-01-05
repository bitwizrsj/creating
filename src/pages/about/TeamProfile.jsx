import React, { useState } from 'react';

const TeamProfile = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Juan-Luke",
      role: "Developer/Engineer",
      description: "Juan-Luke is a versatile developer and engineer at WhisperNode, excelling in front and back-end development and DevOps. He builds websites, dapp UIs, APIs, and works on smart contracts. Proficient in Rust, JavaScript, and Python, Juan-Luke drives innovation in our web3 infrastructure."
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Product Designer",
      description: "Sarah leads our product design initiatives with over 8 years of experience in UX/UI design. She specializes in creating intuitive interfaces for blockchain applications and has a strong background in user research and interaction design."
    },
    {
      id: 3,
      name: "Marcus Rodriguez",
      role: "Security Engineer",
      description: "Marcus heads our security operations, bringing expertise in smart contract auditing and blockchain security. With a background in cryptography and secure systems design, he ensures our infrastructure remains robust and protected."
    },
    {
      id: 4,
      name: "Aisha Patel",
      role: "Blockchain Architect",
      description: "Aisha architects our core blockchain infrastructure, specializing in consensus mechanisms and distributed systems. She has contributed to multiple open-source projects and leads our protocol development initiatives."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-10" data-scroll-section>
      {/* Header */}
      <div className="mx-auto mb-8 md:mb-16">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold">
          <span className="text-yellow-300">Meet Our Team</span>
          <br />
          <span className="text-white">of Experts</span>
        </h1>
      </div>

      {/* Profile Section */}
      <div className="max-w-7xl mx-auto">
        {/* Mobile Navigation */}
        <div className="flex justify-center gap-4 mb-4 md:hidden">
          <button 
            onClick={handlePrevious}
            className="w-12 h-12 border border-yellow-300 text-yellow-300 rounded-lg flex items-center justify-center hover:bg-yellow-300 hover:text-black transition-colors"
          >
            <span className="text-xl">&larr;</span>
          </button>
          <button 
            onClick={handleNext}
            className="w-12 h-12 border border-yellow-300 text-yellow-300 rounded-lg flex items-center justify-center hover:bg-yellow-300 hover:text-black transition-colors"
          >
            <span className="text-xl">&rarr;</span>
          </button>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Desktop Left Navigation */}
          <button 
            onClick={handlePrevious}
            className="hidden md:flex w-12 lg:w-16 h-12 lg:h-16 border border-yellow-300 text-yellow-300 rounded-lg items-center justify-center hover:bg-yellow-300 hover:text-black transition-colors"
          >
            <span className="text-2xl">&larr;</span>
          </button>

          {/* Main Profile Card */}
          <div className="flex-1 flex flex-col md:flex-row items-center gap-8">
            {/* Ghost Avatar Card */}
            <div className="w-72 h-72 md:w-96 md:h-96 bg-purple-600 rounded-2xl p-6 flex flex-col items-center justify-center relative">
              {/* Ghost */}
              <div className="relative scale-75 md:scale-100">
                {/* Ghost Body */}
                <div className="w-32 h-40 bg-gray-200 rounded-t-full relative">
                  {/* Eyes */}
                  <div className="absolute top-12 left-6 w-4 h-4 bg-black rounded-full"></div>
                  <div className="absolute top-12 right-6 w-4 h-4 bg-black rounded-full"></div>
                  {/* Mouth */}
                  <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-black rounded-full"></div>
                </div>
                {/* Headphones */}
                <div className="absolute top-4 left-0 w-full">
                  <div className="w-40 h-8 border-4 border-blue-600 rounded-full"></div>
                </div>
              </div>
              {/* Music Notes */}
              <div className="absolute top-8 right-12 text-yellow-300 text-xl">♪</div>
              <div className="absolute top-16 right-8 text-yellow-300 text-xl">♫</div>
              {/* Dot Navigation */}
              <div className="absolute bottom-6 flex gap-2">
                {teamMembers.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-yellow-300' : 'bg-gray-500 hover:bg-gray-400'
                    }`}
                  ></button>
                ))}
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-yellow-300 font-bold mb-4">
                {teamMembers[currentIndex].name}
              </h2>
              <h3 className="text-xl md:text-2xl mb-4">{teamMembers[currentIndex].role}</h3>
              <p className="text-gray-400 text-lg md:text-xl lg:text-2xl">
                {teamMembers[currentIndex].description}
              </p>
              {/* Small Ghost Icon */}
              <div className="mt-6 mx-auto md:mx-0 bg-purple-900 w-12 md:w-16 h-12 md:h-16 rounded-lg flex items-center justify-center">
                <div className="w-6 md:w-8 h-6 md:h-8 bg-gray-200 rounded-t-full relative">
                  <div className="absolute top-2 left-2 w-1 h-1 bg-red-400 rounded-full"></div>
                  <div className="absolute top-3 left-4 w-1 h-1 bg-red-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Right Navigation */}
          <button 
            onClick={handleNext}
            className="hidden md:flex w-12 lg:w-16 h-12 lg:h-16 border border-yellow-300 text-yellow-300 rounded-lg items-center justify-center hover:bg-yellow-300 hover:text-black transition-colors"
          >
            <span className="text-2xl">&rarr;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamProfile;