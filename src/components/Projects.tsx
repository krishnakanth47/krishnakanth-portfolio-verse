
import React from 'react';
import { Trophy, Users, Target, Award, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: 'National Road Safety Hackathon',
      role: 'Participant',
      type: 'hackathon',
      description: 'Participated in a nationwide hackathon focused on developing innovative solutions for road safety challenges.',
      icon: Target,
      color: 'from-blue-500 to-indigo-600',
      badges: ['Hackathon', 'National Level', 'Road Safety']
    },
    {
      title: 'Tamil Nadu Road Safety Hackathon',
      role: 'Reached 2nd Level',
      type: 'achievement',
      description: 'Advanced to the second level of the state-level hackathon, demonstrating strong problem-solving skills.',
      icon: Award,
      color: 'from-green-500 to-emerald-600',
      badges: ['State Level', '2nd Level', 'Achievement']
    },
    {
      title: 'ASME Hackathon & E-Fest',
      role: 'Team Leader',
      type: 'leadership',
      description: 'Led a team in ASME technical competitions, showcasing leadership and technical expertise.',
      icon: Users,
      color: 'from-purple-500 to-violet-600',
      badges: ['Team Leader', 'ASME', 'Technical']
    },
    {
      title: 'Techathon',
      role: 'Contributor',
      type: 'contribution',
      description: 'Actively contributed to technical solutions and collaborative development in this technology-focused event.',
      icon: Trophy,
      color: 'from-orange-500 to-red-600',
      badges: ['Contributor', 'Technology', 'Innovation']
    }
  ];

  const achievements = [
    {
      title: 'Anna University Football Tournament',
      achievement: 'Runner-Up & Goalkeeper',
      location: 'Zonal Level',
      description: 'Served as goalkeeper and helped lead the team to runner-up position in the zonal football tournament.',
      icon: Trophy,
      color: 'from-yellow-500 to-amber-600'
    },
    {
      title: 'Elocution Competitions',
      achievement: 'Advanced Levels',
      location: 'Multiple Events',
      description: 'Consistently performed at advanced levels in various elocution competitions.',
      icon: Award,
      color: 'from-pink-500 to-rose-600'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Projects & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A showcase of my technical projects, hackathon participations, and leadership achievements.
          </p>
        </div>

        {/* Technical Projects & Hackathons */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">Technical Projects & Hackathons</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className="group hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-0 shadow-lg overflow-hidden"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${project.color} text-white`}>
                      <project.icon className="h-6 w-6" />
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.badges.map((badge) => (
                        <Badge key={badge} variant="secondary" className="text-xs">
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <p className={`text-sm font-semibold bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                    {project.role}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Sports & Other Achievements */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">Sports & Other Achievements</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <Card 
                key={achievement.title}
                className="group hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-0 shadow-lg overflow-hidden bg-white"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${achievement.color} text-white flex-shrink-0`}>
                      <achievement.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors duration-300">
                        {achievement.title}
                      </h4>
                      <div className="flex items-center space-x-2 mb-3">
                        <Badge className={`bg-gradient-to-r ${achievement.color} text-white border-0`}>
                          {achievement.achievement}
                        </Badge>
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPin className="h-4 w-4 mr-1" />
                          {achievement.location}
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mt-16 bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold text-center mb-8">Achievement Statistics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">4+</div>
              <div className="text-sm opacity-90">Hackathons</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">2+</div>
              <div className="text-sm opacity-90">Leadership Roles</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">1</div>
              <div className="text-sm opacity-90">Runner-Up Achievement</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">∞</div>
              <div className="text-sm opacity-90">Learning Opportunities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
