import React from 'react';
import { GraduationCap, Award, Languages } from 'lucide-react';

const EducationSection = ({ education, certifications, languages }) => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Education & Qualifications
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto rounded-full mb-8"></div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Education */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Education</h3>
            </div>
            
            <div className="space-y-6">
              {education.map((edu) => (
                <div key={edu.id} className="bg-white rounded-xl p-6 shadow-md">
                  <h4 className="font-semibold text-lg text-gray-900 mb-2">{edu.degree}</h4>
                  <p className="text-green-700 font-medium mb-2">{edu.institution}</p>
                  <p className="text-sm text-gray-600 mb-2">{edu.year}</p>
                  <p className="text-sm text-gray-700">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Certifications</h3>
            </div>
            
            <div className="space-y-6">
              {certifications.map((cert) => (
                <div key={cert.id} className="bg-white rounded-xl p-6 shadow-md">
                  <h4 className="font-semibold text-lg text-gray-900 mb-2">{cert.title}</h4>
                  <p className="text-blue-700 font-medium mb-2">{cert.institution}</p>
                  <p className="text-sm text-gray-600 mb-2">{cert.year}</p>
                  <p className="text-sm text-gray-700">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Languages */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                <Languages className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Languages</h3>
            </div>
            
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <div key={index} className="bg-white rounded-xl p-4 shadow-md">
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold text-gray-900">{lang.language}</h4>
                    <span className="text-sm font-medium text-purple-700 bg-purple-100 px-3 py-1 rounded-full">
                      {lang.proficiency}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
        
      </div>
    </section>
  );
};

export default EducationSection;