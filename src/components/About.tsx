
import React from 'react';
import { GraduationCap, MapPin, Calendar, User, Code, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Get to know more about my journey, education, and passion for technology.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Enhanced Info Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-3xl blur-lg opacity-20"></div>
            <Card className="relative bg-gradient-to-br from-primary to-accent text-primary-foreground border-0 shadow-2xl rounded-3xl overflow-hidden">
              <CardContent className="p-10">
                <div className="space-y-8">
                  {[
                    { icon: User, title: "Krishnakanth J.", subtitle: "CSE Student & ASME Member" },
                    { icon: GraduationCap, title: "Education", subtitle: "BE Computer Science Engineering" },
                    { icon: MapPin, title: "Location", subtitle: "Coimbatore, Tamil Nadu" },
                    { icon: Calendar, title: "Expected Graduation", subtitle: "2028" }
                  ].map(({ icon: Icon, title, subtitle }, index) => (
                    <div key={index} className="flex items-center space-x-6 group">
                      <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm group-hover:bg-white/30 transition-all duration-300">
                        <Icon className="h-8 w-8" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold">{title}</h4>
                        <p className="opacity-90 text-lg">{subtitle}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Enhanced Story Section */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-foreground">My Story</h3>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I'm a passionate Computer Science Engineering student at Sri Ramakrishna Institute of Technology, 
                  Coimbatore. As an ASME student member, I have developed a deep interest in coding, prompt engineering, 
                  and data analysis.
                </p>
                
                <p>
                  My journey in technology is driven by curiosity and a desire to create meaningful impact. I thrive 
                  in collaborative environments and have successfully led teams in various hackathons and technical events.
                </p>
              </div>
            </div>
            
            <Card className="border-l-4 border-l-primary shadow-lg hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h4 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  Educational Background
                </h4>
                <div className="space-y-3">
                  <p className="text-xl font-semibold text-foreground">Bachelor of Engineering in Computer Science Engineering</p>
                  <p className="text-lg text-muted-foreground">Sri Ramakrishna Institute of Technology</p>
                  <p className="text-muted-foreground">Expected Graduation: 2028</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h4 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
                  <Award className="h-6 w-6 text-accent" />
                  What Drives Me
                </h4>
                <ul className="space-y-4 text-lg">
                  {[
                    "Innovation through technology and creative problem-solving",
                    "Leadership and team collaboration in technical projects",
                    "Continuous learning and staying updated with emerging technologies"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start group">
                      <div className="w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full mt-2 mr-4 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
