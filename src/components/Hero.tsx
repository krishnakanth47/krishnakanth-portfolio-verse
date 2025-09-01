import React, { useState, useEffect } from 'react';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [nameText, setNameText] = useState('');
  const [titleText, setTitleText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  
  const fullName = 'Krishnakanth J.';
  const fullTitle = 'Aspiring Computer Science Engineering student';

  useEffect(() => {
    const startTypingAnimation = () => {
      // Reset states
      setNameText('');
      setTitleText(fullTitle);
      
      // Forward typing animation for name
      let nameIndex = 0;
      const nameInterval = setInterval(() => {
        if (nameIndex < fullName.length) {
          setNameText(fullName.slice(0, nameIndex + 1));
          nameIndex++;
        } else {
          clearInterval(nameInterval);
          // Start backward typing for title after name is complete
          setTimeout(() => {
            let titleIndex = fullTitle.length;
            const titleBackwardInterval = setInterval(() => {
              if (titleIndex > 0) {
                setTitleText(fullTitle.slice(0, titleIndex - 1));
                titleIndex--;
              } else {
                clearInterval(titleBackwardInterval);
                // Forward typing for title
                setTimeout(() => {
                  let forwardIndex = 0;
                  const titleForwardInterval = setInterval(() => {
                    if (forwardIndex < fullTitle.length) {
                      setTitleText(fullTitle.slice(0, forwardIndex + 1));
                      forwardIndex++;
                    } else {
                      clearInterval(titleForwardInterval);
                      // Wait before starting the loop again
                      setTimeout(() => {
                        startTypingAnimation();
                      }, 3000);
                    }
                  }, 50);
                }, 500);
              }
            }, 30);
          }, 1000);
        }
      }, 100);
    };

    // Start the animation
    startTypingAnimation();

    // Cursor blinking effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(cursorInterval);
    };
  }, []);

  const handleScroll = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        {/* Primary floating orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse opacity-60"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-l from-accent/15 to-primary/15 rounded-full blur-3xl animate-pulse delay-1000 opacity-50"></div>
        
        {/* Central gradient orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-conic from-primary/10 via-accent/10 to-primary/10 rounded-full blur-3xl opacity-40 animate-spin" style={{ animationDuration: '20s' }}></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary/30 rotate-45 animate-bounce delay-300"></div>
        <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-accent/40 rounded-full animate-bounce delay-700"></div>
        <div className="absolute top-1/2 left-16 w-3 h-3 bg-primary/25 animate-ping delay-1000"></div>
        <div className="absolute bottom-1/3 left-3/4 w-5 h-5 bg-accent/35 rotate-12 animate-pulse delay-500"></div>
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-pulse" style={{ animationDuration: '3s' }}></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_hsl(var(--primary))_1px,_transparent_1px)] bg-[length:50px_50px] opacity-20"></div>
        </div>
        
        {/* Moving light rays */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-pulse delay-200"></div>
          <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent animate-pulse delay-800"></div>
        </div>
      </div>
      
      <div className="relative z-10 text-center section-padding max-w-5xl mx-auto">
        {/* Enhanced Profile Picture with animated ring */}
        <div className="mb-12 animate-fade-in">
          <div className="relative w-40 h-40 mx-auto">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent opacity-20 animate-spin" style={{ animationDuration: '3s' }}></div>
            <div className="relative w-full h-full rounded-full shadow-2xl overflow-hidden ring-4 ring-primary/20 ring-offset-8 ring-offset-background hover:ring-primary/40 transition-all duration-500 hover:scale-105 transform">
              <img 
                src="/lovable-uploads/bd984093-71e0-4e8f-a218-f62599e10d88.png" 
                alt="Krishnakanth J." 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="animate-fade-in delay-200 space-y-6">
          {/* Animated Name with typing effect */}
          <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight min-h-[1.2em]">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              {nameText}
              {showCursor && <span className="animate-pulse">|</span>}
            </span>
          </h1>
          
          {/* Animated Title with backward typing effect */}
          <div className="space-y-4 mb-8">
            <p className="text-2xl md:text-3xl font-semibold text-foreground/90 min-h-[1.5em]">
              {titleText}
              {showCursor && <span className="animate-pulse text-primary">|</span>}
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 text-sm font-medium animate-fade-in delay-1000">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full border border-primary/20 hover:bg-primary/20 transition-all duration-300 hover:scale-105">
                ASME Member
              </span>
              <span className="px-4 py-2 bg-accent/10 text-accent rounded-full border border-accent/20 hover:bg-accent/20 transition-all duration-300 hover:scale-105">
                Hackathon Enthusiast
              </span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full border border-primary/20 hover:bg-primary/20 transition-all duration-300 hover:scale-105">
                Team Leader
              </span>
            </div>
          </div>
          
          <blockquote className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto font-light italic animate-fade-in delay-500">
            "Driven by curiosity. Focused on impact."
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-4"></div>
          </blockquote>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in delay-700">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground px-10 py-4 text-lg rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 relative overflow-hidden group"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Mail className="mr-3 h-6 w-6 relative z-10" />
              <span className="relative z-10">Get In Touch</span>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground px-10 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 bg-background/50 backdrop-blur-sm relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Download className="mr-3 h-6 w-6 relative z-10" />
              <span className="relative z-10">Download Resume</span>
            </Button>
          </div>
          
          {/* Enhanced Social Links with animated backgrounds */}
          <div className="flex justify-center space-x-8 mb-16 animate-fade-in delay-1000">
            {[
              { icon: Linkedin, href: "https://linkedin.com/in/krishnakanth-j", color: "hover:bg-blue-500", bgGradient: "from-blue-500/20 to-blue-600/20" },
              { icon: Github, href: "https://github.com/krishnakanth-j", color: "hover:bg-gray-800", bgGradient: "from-gray-700/20 to-gray-900/20" },
              { icon: Mail, href: "mailto:krishnakanthj2006@gmail.com", color: "hover:bg-primary", bgGradient: "from-primary/20 to-accent/20" }
            ].map(({ icon: Icon, href, color, bgGradient }, index) => (
              <a 
                key={index}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`relative p-4 bg-background/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 border border-border/50 ${color} hover:text-white group overflow-hidden`}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <Icon className="h-7 w-7 text-foreground group-hover:text-white transition-colors duration-300 relative z-10" />
              </a>
            ))}
          </div>
        </div>
        
        {/* Enhanced Scroll Indicator with animated ring */}
        <button 
          onClick={handleScroll}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 group"
        >
          <div className="relative p-3 rounded-full bg-background/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
            <ArrowDown className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors duration-300 animate-bounce relative z-10" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
