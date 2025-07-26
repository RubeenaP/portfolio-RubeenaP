import React from 'react';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';

const ExperienceSection = ({ experiences }) => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A journey through agricultural technology, driving innovation and growth across leading agri-tech companies
          </p>
        </div>
        
        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-green-300 transform md:-translate-x-0.5"></div>
          
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`relative mb-12 ${index % 2 === 0 ? 'md:ml-0' : 'md:ml-1/2'}`}>
              
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-green-600 rounded-full transform -translate-x-2 md:-translate-x-2 shadow-lg">
                <div className="absolute inset-0.5 bg-white rounded-full"></div>
              </div>
              
              {/* Content card */}
              <div className={`ml-12 md:ml-8 ${index % 2 === 0 ? 'md:mr-1/2 md:ml-0 md:pr-8' : 'md:ml-8'}`}>
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  
                  {/* Company & Role */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.role}</h3>
                    <h4 className="text-xl font-semibold text-green-700 mb-3">{exp.company}</h4>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Responsibilities */}
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Key Responsibilities:</h5>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700">
                          <ChevronRight className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                </div>
              </div>
              
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default ExperienceSection;