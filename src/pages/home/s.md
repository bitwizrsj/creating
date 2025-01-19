import { useState, useEffect } from "react";
import { Globe2, Star, Wifi, Cloud, Database, Lock, Server, Settings, Activity } from "lucide-react";
import  Lottie  from "lottie-react"; // Import Lottie from lottie-react
import earth from "../../assets/lottie/service.json"; // Import the Lottie JSON file
import "locomotive-scroll/dist/locomotive-scroll.css";

const RotatingServices = () => {
  const [rotation, setRotation] = useState(0);

  const services = [
    { name: "Cloud Services", icon: Cloud, angle: 0 },
    { name: "Security", icon: Lock, angle: 45 },
    { name: "Database", icon: Database, angle: 90 },
    { name: "Network", icon: Wifi, angle: 135 },
    { name: "Servers", icon: Server, angle: 180 },
    { name: "Analytics", icon: Activity, angle: 225 },
    { name: "Settings", icon: Settings, angle: 270 },
    { name: "Monitoring", icon: Globe2, angle: 315 },
  ];

  // Generate random stars
  const stars = Array(100)
    .fill(0)
    .map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.8 + 0.2,
    }));

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 0.3) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-screen  items-center justify-center bg-gray-950 overflow-hidden" data-scroll-section>
      {/* Stars Background */}
      <div className="absolute inset-0 overflow-hidden">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute bg-white rounded-full"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
            }}
          />
        ))}
      </div>

      {/* Main Container */}
      <div className="   relative w-full h-full flex">
        {/* Left Section for Lottie Animation */}
        <div className="w-1/2 flex items-center ">
          <Lottie animationData={earth} loop={true} style={{ width: 500 }} />
        </div>

        {/* Right Section for Rotating Services */}
        <div className="w-1/2 relative">
          {/* Rotating Services */}
          {services.map((service, index) => {
            const angle = ((service.angle + rotation) * Math.PI) / 180;
            const x = 300 * Math.cos(angle); // Adjust the radius to fit the new ring size
            const y = 300 * Math.sin(angle); // Adjust the radius to fit the new ring size
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="absolute w-32 h-16 bg-gray-800/90 border border-blue-500/30 rounded-lg shadow-lg backdrop-blur-sm flex flex-col items-center justify-center transform -translate-x-1/2 -translate-y-1/2 hover:bg-gray-700/90 hover:border-blue-400 transition-all duration-200 group"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% - ${y}px)`,
                }}
              >
                <Icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 mb-1" />
                <span className="text-sm text-gray-300 group-hover:text-white">{service.name}</span>
              </div>
            );
          })}

          {/* Decorative Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent transform -translate-x-1/2" />
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent transform -translate-y-1/2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RotatingServices;
