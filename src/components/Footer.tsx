
import React from 'react';
import { Heart, ArrowUp, Code, Sparkles } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-accent rounded-full blur-2xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto section-padding relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Enhanced Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-primary to-accent rounded-lg">
                <Code className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Krishnakanth J.
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed text-lg">
              Aspiring Computer Science Engineer passionate about innovation, leadership, and creating meaningful impact through technology.
            </p>
            <div className="flex items-center space-x-2 text-primary">
              <Sparkles className="h-5 w-5" />
              <span className="text-sm font-medium">Building the future, one line of code at a time</span>
            </div>
          </div>
          
          {/* Enhanced Quick Links */}
          <div>
            <h4 className="text-2xl font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => document.querySelector(`#${item.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 text-lg font-medium flex items-center group"
                  >
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Enhanced Education Section */}
          <div>
            <h4 className="text-2xl font-bold mb-6 text-white">Education</h4>
            <div className="space-y-3">
              <div className="p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                <p className="font-bold text-white text-lg">BE Computer Science Engineering</p>
                <p className="text-gray-300">Sri Ramakrishna Institute of Technology</p>
                <p className="text-gray-400">Coimbatore, Tamil Nadu</p>
                <div className="mt-3 flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <p className="text-accent font-medium">Expected Graduation: 2028</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-300">
              <span className="text-lg">Made with</span>
              <Heart className="h-5 w-5 text-red-500 animate-pulse" fill="currentColor" />
              <span className="text-lg">by</span>
              <span className="font-bold text-white">Krishnakanth J.</span>
            </div>
            
            <div className="text-gray-400">
              <p>&copy; 2024 Krishnakanth J. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-primary to-accent text-white rounded-2xl shadow-2xl hover:shadow-primary/25 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 z-50 group"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-6 w-6 group-hover:animate-bounce" />
      </button>
    </footer>
  );
};

export default Footer;
