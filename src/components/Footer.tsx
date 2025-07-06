
import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12 relative">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Krishnakanth J.</h3>
            <p className="text-gray-400 leading-relaxed">
              Aspiring Computer Science Engineer passionate about innovation, leadership, and creating meaningful impact through technology.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => document.querySelector(`#${item.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-400 hover:text-white transition-colors duration-300 hover:underline"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Education */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Education</h4>
            <div className="text-gray-400">
              <p className="font-medium text-white">BE Computer Science Engineering</p>
              <p>Sri Ramakrishna Institute of Technology</p>
              <p>Coimbatore, Tamil Nadu</p>
              <p className="mt-2">Expected Graduation: 2028</p>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-1 text-gray-400 mb-4 md:mb-0">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500" fill="currentColor" />
            <span>by Krishnakanth J.</span>
          </div>
          
          <div className="text-gray-400 text-sm">
            <p>&copy; 2024 Krishnakanth J. All rights reserved.</p>
          </div>
        </div>
      </div>
      
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 p-3 bg-gradient-to-r from-primary to-accent text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
};

export default Footer;
