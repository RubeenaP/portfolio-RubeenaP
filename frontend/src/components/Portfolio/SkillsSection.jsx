import React from 'react';
import { Badge } from '../ui/badge';
import { 
  Database, 
  TrendingUp, 
  Users, 
  Target, 
  BarChart3,
  Briefcase
} from 'lucide-react';

const skillIcons = {
  'CRM Tools': Database,
  'Sales & Marketing': TrendingUp,
  'Business Development': Briefcase,
  'Leadership': Users,
  'Technical': BarChart3
};

const SkillsSection = ({ skills }) => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive skill set spanning sales leadership, technology, and strategic business development
          </p>
        </div>
        
        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillCategory, index) => {
            const IconComponent = skillIcons[skillCategory.category] || Target;
            
            return (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
                
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{skillCategory.category}</h3>
                </div>
                
                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {skillCategory.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="outline"
                      className="border-green-200 text-gray-700 hover:bg-green-50 hover:border-green-400 transition-colors duration-200 px-3 py-2 text-sm"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
                
              </div>
            );
          })}
        </div>
        
        {/* Additional Skills Highlight */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Core Competencies</h3>
            <div className="grid md:grid-cols-3 gap-6">
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Revenue Growth</h4>
                <p className="text-sm text-green-100">Driving consistent growth through strategic sales initiatives</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Team Leadership</h4>
                <p className="text-sm text-green-100">Building and leading high-performing sales teams</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Market Strategy</h4>
                <p className="text-sm text-green-100">Developing comprehensive market penetration strategies</p>
              </div>
              
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default SkillsSection;