import React from 'react';
import { mockData } from '../../data/mock';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ExperienceSection from './ExperienceSection';
import ProjectsSection from './ProjectsSection';
import SkillsSection from './SkillsSection';
import EducationSection from './EducationSection';
import ContactSection from './ContactSection';
import Header from './Header';
import Footer from './Footer';

const PortfolioMain = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection personalData={mockData.personal} />
      <AboutSection aboutText={mockData.about} />
      <ExperienceSection experiences={mockData.experience} />
      <ProjectsSection projects={mockData.projects} />
      <SkillsSection skills={mockData.skills} />
      <EducationSection 
        education={mockData.education} 
        certifications={mockData.certifications} 
        languages={mockData.languages} 
      />
      <ContactSection personalData={mockData.personal} />
      <Footer />
    </div>
  );
};

export default PortfolioMain;