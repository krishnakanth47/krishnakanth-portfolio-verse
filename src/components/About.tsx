
import React from 'react';
import { GraduationCap, MapPin, Calendar, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Get to know more about my journey, education, and passion for technology.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image/Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-8 text-white shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <User className="h-8 w-8" />
                  <div>
                    <h3 className="text-xl font-semibold">Krishnakanth J.</h3>
                    <p className="opacity-90">CSE Student & ASME Member</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <GraduationCap className="h-8 w-8" />
                  <div>
                    <h4 className="font-semibold">Education</h4>
                    <p className="opacity-90">BE Computer Science Engineering</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <MapPin className="h-8 w-8" />
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="opacity-90">Coimbatore, Tamil Nadu</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Calendar className="h-8 w-8" />
                  <div>
                    <h4 className="font-semibold">Expected Graduation</h4>
                    <p className="opacity-90">2028</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Description */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">My Story</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                I'm a passionate Computer Science Engineering student at Sri Ramakrishna Institute of Technology, 
                Coimbatore. As an ASME student member, I have developed a deep interest in coding, prompt engineering, 
                and data analysis.
              </p>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                My journey in technology is driven by curiosity and a desire to create meaningful impact. I thrive 
                in collaborative environments and have successfully led teams in various hackathons and technical events.
              </p>
            </div>
            
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-3 text-gray-800">Educational Background</h4>
                <div className="space-y-2">
                  <p className="font-medium text-gray-800">Bachelor of Engineering in Computer Science Engineering</p>
                  <p className="text-gray-600">Sri Ramakrishna Institute of Technology</p>
                  <p className="text-gray-500">Expected Graduation: 2028</p>
                </div>
              </CardContent>
            </Card>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-3 text-gray-800">What Drives Me</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Innovation through technology and creative problem-solving
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Leadership and team collaboration in technical projects
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Continuous learning and staying updated with emerging technologies
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
