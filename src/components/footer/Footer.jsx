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
    { name: "Instagram", url: "#" },
    { name: "Twitter", url: "#" },
    { name: "LinkedIn", url: "#" },
    { name: "Dribbble", url: "#" }
  ];

  return (
    <footer className="bg-gray-950 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Creating</h2>
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
                hello@creating.com
              </a>
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