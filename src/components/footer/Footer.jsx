import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const footerLinks = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Services", url: "/services" },
    { name: "Blogs", url: "/blogs" },
    { name: "Portfolio", url: "/portfolio" },
  ];

  const socialLinks = [
    { name: "Instagram", url: "https://www.instagram.com/hype.rnextechnologies/" },
    { name: "Twitter", url: "https://x.com/hyperNexTech" },
    { name: "LinkedIn", url: "https://www.linkedin.com/company/hypernex-technologies-llc/?viewAsMember=true" },
    { name: "Dribbble", url: "#" }
  ];

  return (
    <footer className="bg-gray-950 text-white py-16" data-scroll-section>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">HyperNex Technologies</h2>
            <p className="text-gray-400 max-w-xs">
              We create digital experiences that matter. Let's build something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.url} 
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Connect</h3>
            <ul className="space-y-4">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.url} 
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Let's Talk</h3>
            <div className="space-y-4">
              <a 
                href="mailto:hello@creating.com" 
                className="text-gray-400 hover:text-white transition-colors block"
              >
                info@hypernextechnologies.com
              </a>
              <div>
                <p className="text-gray-400">Phone: <a href="tel:+1234567890" className="hover:text-white transition-colors">+1 307-213-1361</a></p>
              </div>
              <div>
                <p className="text-gray-400">Address: 30 N Gould St Ste R,
                Sheridan, WY 82801, USA</p>
              </div>
              <button 
                className="bg-white text-gray-950 px-6 py-3 rounded-full hover:bg-gray-200 transition-colors flex items-center group"
              >
                Discuss the project
                <ArrowUpRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © 2024 Creating. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
