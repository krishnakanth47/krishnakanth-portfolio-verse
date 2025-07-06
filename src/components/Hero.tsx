
import React from 'react';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const handleScroll = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10 text-center section-padding max-w-4xl mx-auto">
        {/* Profile Picture Placeholder */}
        <div className="mb-8 animate-fade-in">
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-2xl">
            <span className="text-white text-4xl font-bold">KJ</span>
          </div>
        </div>
        
        <div className="animate-fade-in delay-200">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Krishnakanth J.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-4 font-medium">
            Aspiring Computer Science Engineer
          </p>
          
          <p className="text-lg text-gray-500 mb-8">
            ASME Member | Hackathon Enthusiast | Team Leader
          </p>
          
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            "Driven by curiosity. Focused on impact."
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a 
              href="https://linkedin.com/in/krishnakanth-j" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
            >
              <Linkedin className="h-6 w-6 text-primary" />
            </a>
            <a 
              href="https://github.com/krishnakanth-j" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
            >
              <Github className="h-6 w-6 text-primary" />
            </a>
            <a 
              href="mailto:krishnakanthj2006@gmail.com"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
            >
              <Mail className="h-6 w-6 text-primary" />
            </a>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <button 
          onClick={handleScroll}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ArrowDown className="h-6 w-6 text-gray-500" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
