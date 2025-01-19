import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, StarHalf } from 'lucide-react';

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      logo: "https://img.freepik.com/free-photo/woman-creating-design_23-2149073703.jpg",
      companyName: "ARC'TERYX",
      text: "Production and design along with install oversight and execution support for the SoHo store opening on Broadway St, New York. Also working on creative and production work for a new store opening in Glendale, California.",
      personImage: "https://img.freepik.com/free-photo/woman-creating-design_23-2149073703.jpg",
      personName: "Sarah Johnson",
      personRole: "Project Manager",
      rating: 4.5
    },
    {
      logo: "https://img.freepik.com/free-photo/woman-creating-design_23-2149073703.jpg",
      companyName: "HUNTER",
      text: "Design and Production partner for Hunter Holiday 2022 Pop-in at Nordstrom 57th St, New York, including activations in Women's, Men's and Kid's zones. Thirty-five (35) additional smaller take-downs in Nordstrom stores across the US.",
      personImage: "https://img.freepik.com/free-photo/woman-creating-design_23-2149073703.jpg",
      personName: "Michael Chen",
      personRole: "Creative Director",
      rating: 5
    },
    {
      logo: "https://img.freepik.com/free-photo/woman-creating-design_23-2149073703.jpg",
      companyName: "MEDIALINK",
      text: "Creative, Design, and Production Partner for 2023 CES. Scope Included creation of Branding Identity, Assets, and Digital Content, Design, Production design, Production oversight and Installation of client activations for IBM, Delta, Intel, and more.",
      personImage: "https://img.freepik.com/free-photo/woman-creating-design_23-2149073703.jpg",
      personName: "Emma Roberts",
      personRole: "Marketing Lead",
      rating: 4.5
    },
    {
      logo: "https://img.freepik.com/free-photo/woman-creating-design_23-2149073703.jpg",
      companyName: "afterpay",
      text: "Creative, Design, and Production Partner for 2022 NY Fashion Week Pop-Up. In Partnership with B-Reel scope included creation of Final Design, Design Development, Renders, Production design.",
      personImage: "https://img.freepik.com/free-photo/woman-creating-design_23-2149073703.jpg",
      personName: "David Kim",
      personRole: "Operations Director",
      rating: 5
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={`star-${i}`} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <StarHalf key="half-star" className="w-5 h-5 fill-yellow-400 text-yellow-400" />
      );
    }

    return stars;
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => prev === testimonials.length - 1 ? 0 : prev + 1);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => prev === 0 ? testimonials.length - 1 : prev - 1);
  };

  return (
    <div className="bg-gray-50 py-16 px-6 md:px-12" data-scroll-section>
      {/* Section Header */}
      <div className="mb-16">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-amber-900"></div>
          <h2 className="text-3xl text-gray-950 font-bold uppercase">WHO WE WORK WITH</h2>
        </div>
      </div>

      {/* Testimonial Content */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo and Profile Column */}
          <div className="md:col-span-3 space-y-6">
            <img
              src={testimonials[currentIndex].logo}
              alt={testimonials[currentIndex].companyName}
              className="max-w-[180px] h-auto"
            />
            
            <div className="flex items-center gap-4">
              <div className="relative">
                <img
                  src={testimonials[currentIndex].personImage}
                  alt={testimonials[currentIndex].personName}
                  className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-lg"
                />
                <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1 shadow-md">
                </div>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">
                  {testimonials[currentIndex].personName}
                </h3>
                <p className="text-sm text-gray-500">
                  {testimonials[currentIndex].personRole}
                </p>
                <div className="flex items-center gap-1 mt-1">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className="md:col-span-7">
            <p className="text-gray-600 text-lg leading-relaxed">
              {testimonials[currentIndex].text}
            </p>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-2 flex md:flex-col items-center justify-end gap-4">
            <button 
              onClick={prevSlide}
              className="p-4 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextSlide}
              className="p-4 rounded-full bg-amber-900 hover:bg-amber-800 text-white transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mt-8 flex text-gray-400 items-center gap-2">
          <span className="text-sm font-medium">
            {String(currentIndex + 1).padStart(2, '0')}
          </span>
          <div className="w-12 h-px bg-gray-400"></div>
          <span className="text-sm text-gray-400">
            {String(testimonials.length).padStart(2, '0')}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;