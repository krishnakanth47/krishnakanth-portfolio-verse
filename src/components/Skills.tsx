
import React from 'react';
import { Code, Database, Palette, Brain, Trophy, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['Python', 'C', 'C++'],
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Tools & Design',
      icon: Palette,
      skills: ['Canva', 'Photoshop'],
      color: 'from-pink-500 to-rose-600'
    },
    {
      title: 'Interests & Expertise',
      icon: Brain,
      skills: ['Prompt Engineering', 'Data Analysis'],
      color: 'from-green-500 to-teal-600'
    },
    {
      title: 'Leadership & Events',
      icon: Users,
      skills: ['Team Leadership', 'Project Management', 'Event Organization'],
      color: 'from-orange-500 to-red-600'
    },
    {
      title: 'Achievements',
      icon: Trophy,
      skills: ['Hackathon Participant', 'Team Captain', 'ASME Member'],
      color: 'from-yellow-500 to-orange-600'
    },
    {
      title: 'Database & Analytics',
      icon: Database,
      skills: ['Data Structures', 'Algorithm Design', 'Problem Solving'],
      color: 'from-indigo-500 to-blue-600'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical skills, tools, and areas of expertise.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="group hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-0 shadow-lg overflow-hidden"
            >
              <CardContent className="p-0">
                <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white mr-4`}>
                      <category.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skill}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg group-hover:bg-gray-100 transition-colors duration-300"
                      >
                        <span className="font-medium text-gray-700">{skill}</span>
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-2 h-2 rounded-full ${
                                i < 4 ? `bg-gradient-to-r ${category.color}` : 'bg-gray-200'
                              }`}
                            ></div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Programming Languages Highlight */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">Core Programming Skills</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Python', level: 85, description: 'Data analysis, automation, and development' },
              { name: 'C++', level: 80, description: 'Competitive programming and system development' },
              { name: 'C', level: 75, description: 'System programming and embedded development' }
            ].map((lang) => (
              <div key={lang.name} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="text-lg font-semibold text-gray-800">{lang.name}</h4>
                  <span className="text-sm font-medium text-gray-500">{lang.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                  <div 
                    className="h-2 rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out"
                    style={{ width: `${lang.level}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600">{lang.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
