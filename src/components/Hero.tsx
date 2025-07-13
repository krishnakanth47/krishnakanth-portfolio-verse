
import React from 'react';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const handleScroll = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/3 to-accent/3 rounded-full blur-3xl opacity-30"></div>
      </div>
      
      <div className="relative z-10 text-center section-padding max-w-5xl mx-auto">
        {/* Enhanced Profile Picture */}
        <div className="mb-12 animate-fade-in">
          <div className="w-40 h-40 mx-auto rounded-full shadow-2xl overflow-hidden ring-4 ring-primary/10 ring-offset-8 ring-offset-background hover:ring-primary/20 transition-all duration-500 hover:scale-105">
            <img 
              src="/lovable-uploads/bd984093-71e0-4e8f-a218-f62599e10d88.png" 
              alt="Krishnakanth J." 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="animate-fade-in delay-200 space-y-6">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
              Krishnakanth J.
            </span>
          </h1>
          
          <div className="space-y-4 mb-8">
            <p className="text-2xl md:text-3xl font-semibold text-foreground/90">
              Aspiring Computer Science Engineer
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 text-sm font-medium">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full border border-primary/20">
                ASME Member
              </span>
              <span className="px-4 py-2 bg-accent/10 text-accent rounded-full border border-accent/20">
                Hackathon Enthusiast
              </span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full border border-primary/20">
                Team Leader
              </span>
            </div>
          </div>
          
          <blockquote className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto font-light italic">
            "Driven by curiosity. Focused on impact."
          </blockquote>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground px-10 py-4 text-lg rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-3 h-6 w-6" />
              Get In Touch
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground px-10 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 bg-background/50 backdrop-blur-sm"
            >
              <Download className="mr-3 h-6 w-6" />
              Download Resume
            </Button>
          </div>
          
          {/* Enhanced Social Links */}
          <div className="flex justify-center space-x-8 mb-16">
            {[
              { icon: Linkedin, href: "https://linkedin.com/in/krishnakanth-j", color: "hover:bg-blue-500" },
              { icon: Github, href: "https://github.com/krishnakanth-j", color: "hover:bg-gray-800" },
              { icon: Mail, href: "mailto:krishnakanthj2006@gmail.com", color: "hover:bg-primary" }
            ].map(({ icon: Icon, href, color }, index) => (
              <a 
                key={index}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`p-4 bg-background/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 border border-border/50 ${color} hover:text-white group`}
              >
                <Icon className="h-7 w-7 text-foreground group-hover:text-white transition-colors duration-300" />
              </a>
            ))}
          </div>
        </div>
        
        {/* Enhanced Scroll Indicator */}
        <button 
          onClick={handleScroll}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce hover:animate-pulse transition-all duration-300 p-3 rounded-full bg-background/80 backdrop-blur-sm shadow-lg hover:shadow-xl"
        >
          <ArrowDown className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors duration-300" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
