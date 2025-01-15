import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      id: 1,
      name: "Web Design",
      image: "https://images.unsplash.com/photo-1556740720-0cd6a35e68ba?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg0OXwwfDF8c2VhcmNofDJ8fHdlYiUyMGRlc2lnbnxlbnwwfHx8fDE2NzgyMjM1MzE&ixlib=rb-1.2.1&q=80&w=1080",
      description: "Creating beautiful, responsive websites"
    },
    {
      id: 2,
      name: "Mobile Development",
      image: "https://images.unsplash.com/photo-1602074414559-95c9a8c5b015?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg0OXwwfDF8c2VhcmNofDk3fHxtb2JpbGUgYXBwbGljYXRpb25zfGVufDB8fHx8fDE2NzgyMjM2NjQ&ixlib=rb-1.2.1&q=80&w=1080",
      description: "Native iOS and Android applications"
    },
    {
      id: 3,
      name: "3D Animation",
      image: "https://images.unsplash.com/photo-1556742045-e81d7021f12b?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg0OXwwfDF8c2VhcmNofDkxfHwzZCUyMGFuaW1hdGlvbnxlbnwwfHx8fDE2NzgyMjM5NDE&ixlib=rb-1.2.1&q=80&w=1080",
      description: "Immersive 3D experiences"
    },
    {
      id: 4,
      name: "UI/UX Design",
      image: "https://images.unsplash.com/photo-1611740540501-ec9b5f9a989b?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg0OXwwfDF8c2VhcmNofDk4fHxlYXV4JTIwZGVzaWdufGVufDB8fHx8fDE2NzgyMjQ0MDc&ixlib=rb-1.2.1&q=80&w=1080",
      description: "User-centered digital experiences"
    },
    {
      id: 5,
      name: "Backend Services",
      image: "https://images.unsplash.com/photo-1611078480652-c0a53758adf0?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg0OXwwfDF8c2VhcmNofDJ8fGJhY2tncm91bmQlMjBzZXJ2aWNlfGVufDB8fHx8fDE2NzgyMjM5MzA&ixlib=rb-1.2.1&q=80&w=1080",
      description: "Scalable server solutions"
    }
  ];

  return (
    <div className="relative min-h-screen bg-white overflow-hidden" data-scroll-section>
      {/* Service List Container */}
      <div className="max-w-4xl mx-auto px-8 py-16">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onMouseEnter={() => setHoveredService(service)}
            onMouseLeave={() => setHoveredService(null)}
            className="group border-t border-gray-300 last:border-b"
          >
            <div className="py-8 flex justify-between items-center cursor-pointer">
              <div className="flex items-center gap-6">
                <span className="text-sm text-black font-medium">
                  {String(service.id).padStart(2, '0')}
                </span>
                <h3 className="text-2xl font-medium tracking-wide text-black">
                  {service.name}
                </h3>
              </div>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ 
                  opacity: hoveredService?.id === service.id ? 1 : 0,
                  x: hoveredService?.id === service.id ? 0 : -10
                }}
                className="text-black"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Floating Image */}
      <AnimatePresence>
        {hoveredService && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed top-1/2 left-1/2 w-72 h-96 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none"
            style={{ 
              perspective: "1000px",
              transformStyle: "preserve-3d"
            }}
          >
            <div className="relative w-full h-full overflow-hidden rounded-lg shadow-2xl">
              <motion.img
                src={hoveredService.image}
                alt={hoveredService.name}
                className="w-full h-full object-cover"
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Overlay */}
      <AnimatePresence>
        {hoveredService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/5 pointer-events-none"
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Services;
