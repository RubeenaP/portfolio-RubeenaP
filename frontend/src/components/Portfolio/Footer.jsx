import React from 'react';
import { Heart, Mail, Phone, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Rubeena P</h3>
            <p className="text-gray-400 max-w-sm">
              Driving innovation in agricultural technology through strategic sales leadership and market development.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:prubeena59@gmail.com"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="tel:6363222216"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-300"
                aria-label="Phone"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/rubeena-p?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="space-y-2">
              <a href="#about" className="block text-gray-400 hover:text-white transition-colors duration-300">About</a>
              <a href="#experience" className="block text-gray-400 hover:text-white transition-colors duration-300">Experience</a>
              <a href="#projects" className="block text-gray-400 hover:text-white transition-colors duration-300">Projects</a>
              <a href="#skills" className="block text-gray-400 hover:text-white transition-colors duration-300">Skills</a>
            </nav>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Information</h4>
            <div className="space-y-2 text-gray-400">
              <p>📧 prubeena59@gmail.com</p>
              <p>📱 6363222216</p>
              <p>📍 India</p>
              <p>💼 Agriplast Tech India Pvt Ltd</p>
            </div>
          </div>
          
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Rubeena P. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center">
              Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> for agricultural innovation
            </p>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;