import React from 'react';
import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';
import { Button } from '../ui/button';

const HeroSection = ({ personalData }) => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {personalData.name}
              </h1>
              <div className="space-y-2">
                <h2 className="text-2xl lg:text-3xl font-semibold text-green-700">
                  {personalData.role}
                </h2>
                <p className="text-lg text-gray-600 flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-green-600" />
                  {personalData.company}
                </p>
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="flex flex-wrap gap-4">
              <a 
                href={`mailto:${personalData.email}`}
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-gray-700 hover:text-green-700"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm font-medium">{personalData.email}</span>
              </a>
              
              <a 
                href={`tel:${personalData.phone}`}
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-gray-700 hover:text-green-700"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">{personalData.phone}</span>
              </a>
              
              <a 
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-full shadow-md hover:shadow-lg hover:bg-green-700 transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex gap-4 pt-6">
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Let's Connect
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-green-600 text-green-700 hover:bg-green-50 px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Experience
              </Button>
            </div>
          </div>
          
          {/* Right Content - Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-2xl bg-white p-2">
                <img 
                  src={personalData.profileImage}
                  alt={personalData.name}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-green-200 rounded-full opacity-50"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-green-300 rounded-full opacity-40"></div>
              <div className="absolute top-1/2 -right-8 w-12 h-12 bg-green-400 rounded-full opacity-30"></div>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-green-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-green-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;