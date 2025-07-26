import React from 'react';
import { Target, Lightbulb, TrendingUp } from 'lucide-react';

const AboutSection = ({ aboutText }) => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto rounded-full mb-8"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              {aboutText}
            </p>
            
            {/* Key Highlights */}
            <div className="space-y-4 pt-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Target className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Strategic Focus</h4>
                  <p className="text-gray-600 text-sm">Driving growth through data-driven strategies and innovative approaches</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Innovation Mindset</h4>
                  <p className="text-gray-600 text-sm">Leveraging technology to solve complex agricultural challenges</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Results-Oriented</h4>
                  <p className="text-gray-600 text-sm">Consistently exceeding targets and driving measurable business impact</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Stats/Achievements */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-3xl font-bold text-green-700 mb-2">3+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
            
            <div className="bg-green-50 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-3xl font-bold text-green-700 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Farmers Onboarded</div>
            </div>
            
            <div className="bg-green-50 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-3xl font-bold text-green-700 mb-2">40%</div>
              <div className="text-gray-600 font-medium">Market Growth</div>
            </div>
            
            <div className="bg-green-50 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-3xl font-bold text-green-700 mb-2">3</div>
              <div className="text-gray-600 font-medium">Companies</div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;