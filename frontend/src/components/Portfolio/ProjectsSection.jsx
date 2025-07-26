import React from 'react';
import { CheckCircle, Users, Target, TrendingUp, Clock } from 'lucide-react';
import { Badge } from '../ui/badge';

const ProjectsSection = ({ projects }) => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Key Projects
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Strategic initiatives that drive innovation and create sustainable impact in agricultural technology
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gradient-to-r from-green-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-green-100">
              
              {/* Project Header */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
                <div className="mb-4 lg:mb-0">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-lg text-gray-700 max-w-2xl">{project.description}</p>
                </div>
                
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="border-green-600 text-green-700 bg-green-50 px-4 py-2">
                    <Clock className="w-4 h-4 mr-1" />
                    {project.status}
                  </Badge>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="grid lg:grid-cols-2 gap-8">
                
                {/* Key Highlights */}
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5 text-green-600" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-3">
                    {project.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Technologies & Impact */}
                <div className="space-y-6">
                  
                  {/* Technologies Used */}
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Technologies & Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <Badge key={index} className="bg-green-600 text-white hover:bg-green-700 px-3 py-1">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* Impact Metrics */}
                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-green-600" />
                      Impact Metrics
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-700">500+</div>
                        <div className="text-sm text-gray-600">Agents Onboarded</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-700">40%</div>
                        <div className="text-sm text-gray-600">Market Growth</div>
                      </div>
                    </div>
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

export default ProjectsSection;