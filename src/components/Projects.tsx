
import React from 'react';
import { Trophy, Users, Target, Award, Calendar, MapPin, Zap, Star } from 'lucide-react';
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
      bgColor: 'bg-blue-50 dark:bg-blue-950/20',
      badges: ['Hackathon', 'National Level', 'Road Safety']
    },
    {
      title: 'Tamil Nadu Road Safety Hackathon',
      role: 'Reached 2nd Level',
      type: 'achievement',
      description: 'Advanced to the second level of the state-level hackathon, demonstrating strong problem-solving skills.',
      icon: Award,
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50 dark:bg-green-950/20',
      badges: ['State Level', '2nd Level', 'Achievement']
    },
    {
      title: 'ASME Hackathon & E-Fest',
      role: 'Team Leader',
      type: 'leadership',
      description: 'Led a team in ASME technical competitions, showcasing leadership and technical expertise.',
      icon: Users,
      color: 'from-purple-500 to-violet-600',
      bgColor: 'bg-purple-50 dark:bg-purple-950/20',
      badges: ['Team Leader', 'ASME', 'Technical']
    },
    {
      title: 'Techathon',
      role: 'Contributor',
      type: 'contribution',
      description: 'Actively contributed to technical solutions and collaborative development in this technology-focused event.',
      icon: Zap,
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-50 dark:bg-orange-950/20',
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
      color: 'from-yellow-500 to-amber-600',
      bgColor: 'bg-yellow-50 dark:bg-yellow-950/20'
    },
    {
      title: 'Elocution Competitions',
      achievement: 'Advanced Levels',
      location: 'Multiple Events',
      description: 'Consistently performed at advanced levels in various elocution competitions.',
      icon: Award,
      color: 'from-pink-500 to-rose-600',
      bgColor: 'bg-pink-50 dark:bg-pink-950/20'
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Projects & <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my technical projects, hackathon participations, and leadership achievements.
          </p>
        </div>

        {/* Technical Projects & Hackathons */}
        <div className="mb-20">
          <h3 className="text-4xl font-bold text-center mb-12 text-foreground flex items-center justify-center gap-3">
            <Zap className="h-8 w-8 text-primary" />
            Technical Projects & Hackathons
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className="group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-0 shadow-lg overflow-hidden bg-card/50 backdrop-blur-sm hover:bg-card/80"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${project.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                      <project.icon className="h-8 w-8" />
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.badges.map((badge) => (
                        <Badge key={badge} variant="secondary" className="text-xs font-medium px-3 py-1 bg-primary/10 text-primary border border-primary/20">
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <p className={`text-lg font-semibold bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                    {project.role}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-lg">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Sports & Other Achievements */}
        <div className="mb-20">
          <h3 className="text-4xl font-bold text-center mb-12 text-foreground flex items-center justify-center gap-3">
            <Star className="h-8 w-8 text-accent" />
            Sports & Other Achievements
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <Card 
                key={achievement.title}
                className="group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-0 shadow-lg overflow-hidden bg-card/50 backdrop-blur-sm hover:bg-card/80"
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${achievement.color} text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <achievement.icon className="h-8 w-8" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                        {achievement.title}
                      </h4>
                      <div className="flex items-center space-x-3 mb-4">
                        <Badge className={`bg-gradient-to-r ${achievement.color} text-white border-0 px-4 py-1 text-sm font-medium`}>
                          {achievement.achievement}
                        </Badge>
                        <div className="flex items-center text-muted-foreground">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span className="text-sm">{achievement.location}</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed text-lg">{achievement.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Enhanced Statistics Section */}
        <Card className="bg-gradient-to-br from-primary to-accent text-primary-foreground border-0 shadow-2xl rounded-3xl overflow-hidden">
          <CardContent className="p-12">
            <h3 className="text-4xl font-bold text-center mb-12">Achievement Statistics</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '4+', label: 'Hackathons', icon: Target },
                { number: '2+', label: 'Leadership Roles', icon: Users },
                { number: '1', label: 'Runner-Up Achievement', icon: Trophy },
                { number: '∞', label: 'Learning Opportunities', icon: Award }
              ].map(({ number, label, icon: Icon }, index) => (
                <div key={index} className="text-center group">
                  <div className="mb-4 flex justify-center">
                    <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm group-hover:bg-white/30 transition-all duration-300">
                      <Icon className="h-8 w-8" />
                    </div>
                  </div>
                  <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">{number}</div>
                  <div className="text-lg opacity-90">{label}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Projects;
