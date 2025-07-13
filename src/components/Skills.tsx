
import React from 'react';
import { Code, Database, Palette, Brain, Trophy, Users, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['Python', 'C', 'C++'],
      color: 'from-blue-500 to-purple-600',
      bgColor: 'bg-blue-50 dark:bg-blue-950/20'
    },
    {
      title: 'Tools & Design',
      icon: Palette,
      skills: ['Canva', 'Photoshop'],
      color: 'from-pink-500 to-rose-600',
      bgColor: 'bg-pink-50 dark:bg-pink-950/20'
    },
    {
      title: 'Interests & Expertise',
      icon: Brain,
      skills: ['Prompt Engineering', 'Data Analysis'],
      color: 'from-green-500 to-teal-600',
      bgColor: 'bg-green-50 dark:bg-green-950/20'
    },
    {
      title: 'Leadership & Events',
      icon: Users,
      skills: ['Team Leadership', 'Project Management', 'Event Organization'],
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-50 dark:bg-orange-950/20'
    },
    {
      title: 'Achievements',
      icon: Trophy,
      skills: ['Hackathon Participant', 'Team Captain', 'ASME Member'],
      color: 'from-yellow-500 to-orange-600',
      bgColor: 'bg-yellow-50 dark:bg-yellow-950/20'
    },
    {
      title: 'Database & Analytics',
      icon: Database,
      skills: ['Data Structures', 'Algorithm Design', 'Problem Solving'],
      color: 'from-indigo-500 to-blue-600',
      bgColor: 'bg-indigo-50 dark:bg-indigo-950/20'
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            My <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical skills, tools, and areas of expertise.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-0 shadow-lg overflow-hidden bg-card/50 backdrop-blur-sm hover:bg-card/80"
            >
              <CardContent className="p-0">
                <div className={`h-1 bg-gradient-to-r ${category.color}`}></div>
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${category.color} text-white mr-5 group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skill}
                        className={`flex items-center justify-between p-4 ${category.bgColor} rounded-xl group-hover:bg-primary/5 transition-all duration-300 border border-transparent group-hover:border-primary/20`}
                      >
                        <span className="font-semibold text-foreground text-lg">{skill}</span>
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                i < 4 ? `bg-gradient-to-r ${category.color}` : 'bg-muted'
                              } group-hover:scale-110`}
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
        
        {/* Enhanced Programming Skills Section */}
        <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-0 shadow-2xl rounded-3xl overflow-hidden">
          <CardContent className="p-12">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
                <Zap className="h-8 w-8 text-primary" />
                Core Programming Skills
              </h3>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: 'Python', level: 85, description: 'Data analysis, automation, and development', color: 'from-blue-500 to-blue-600' },
                { name: 'C++', level: 80, description: 'Competitive programming and system development', color: 'from-purple-500 to-purple-600' },
                { name: 'C', level: 75, description: 'System programming and embedded development', color: 'from-green-500 to-green-600' }
              ].map((lang) => (
                <Card key={lang.name} className="bg-background/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <CardContent className="p-8">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="text-2xl font-bold text-foreground">{lang.name}</h4>
                      <span className="text-lg font-semibold text-muted-foreground">{lang.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3 mb-4 overflow-hidden">
                      <div 
                        className={`h-3 rounded-full bg-gradient-to-r ${lang.color} transition-all duration-1000 ease-out shadow-lg`}
                        style={{ width: `${lang.level}%` }}
                      ></div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{lang.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
