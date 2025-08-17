import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';
import { Eye, Trophy, Award, Code, Brain, Users, Lightbulb } from 'lucide-react';

// Import certificate images
import isteImage from '@/assets/certificates/iste-membership.jpg';
import footballImage from '@/assets/certificates/anna-university-football.jpg';
import pythonImage from '@/assets/certificates/ictrd-python.jpg';
import quizImage from '@/assets/certificates/aictsd-quiz.jpg';
import asmeImage from '@/assets/certificates/asme-novate.jpg';
import npteldImage from '@/assets/certificates/nptel-design-thinking.jpg';
import infosysImage from '@/assets/certificates/infosys-ai-python.jpg';

interface Certificate {
  id: number;
  title: string;
  organization: string;
  year: string;
  image: string;
  icon: React.ReactNode;
  category: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: "ISTE Student Membership",
    organization: "ISTE",
    year: "2024",
    image: isteImage,
    icon: <Users className="w-4 h-4" />,
    category: "Membership"
  },
  {
    id: 2,
    title: "Football Zonal Tournament (Runner-Up)",
    organization: "Anna University",
    year: "2024",
    image: footballImage,
    icon: <Trophy className="w-4 h-4" />,
    category: "Sports"
  },
  {
    id: 3,
    title: "Python Programming Certificate",
    organization: "ICTRD",
    year: "2024",
    image: pythonImage,
    icon: <Code className="w-4 h-4" />,
    category: "Programming"
  },
  {
    id: 4,
    title: "Aryabhata Quiz Certificate",
    organization: "AICTSD",
    year: "2023",
    image: quizImage,
    icon: <Award className="w-4 h-4" />,
    category: "Competition"
  },
  {
    id: 5,
    title: "TN-NOVATE Participation",
    organization: "ASME",
    year: "2024",
    image: asmeImage,
    icon: <Lightbulb className="w-4 h-4" />,
    category: "Innovation"
  },
  {
    id: 6,
    title: "Design Thinking",
    organization: "NPTEL",
    year: "2024",
    image: npteldImage,
    icon: <Brain className="w-4 h-4" />,
    category: "Course"
  },
  {
    id: 7,
    title: "AI Using Python",
    organization: "Infosys Springboard",
    year: "2024",
    image: infosysImage,
    icon: <Brain className="w-4 h-4" />,
    category: "AI/ML"
  }
];

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  return (
    <>
      <section id="certificates" className="py-20 section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Certificates & Achievements
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of my professional certifications, academic achievements, and extracurricular accomplishments
            </p>
          </div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((certificate, index) => (
              <Card 
                key={certificate.id}
                className="group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 animate-fade-in border-gradient cursor-pointer overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedCertificate(certificate)}
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <AspectRatio ratio={16 / 9}>
                      <img
                        src={certificate.image}
                        alt={`${certificate.title} certificate`}
                        className="w-full h-full object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </AspectRatio>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-lg">
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center justify-center gap-2 text-white">
                          <Eye className="w-4 h-4" />
                          <span className="text-sm font-medium">View Certificate</span>
                        </div>
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-3 right-3">
                      <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                        <span className="mr-1">{certificate.icon}</span>
                        {certificate.category}
                      </Badge>
                    </div>
                  </div>

                  {/* Certificate Info */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {certificate.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-primary font-medium">{certificate.organization}</span>
                      <span className="text-muted-foreground">{certificate.year}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
      <Dialog open={!!selectedCertificate} onOpenChange={() => setSelectedCertificate(null)}>
        <DialogContent className="max-w-4xl w-full h-auto max-h-[90vh] overflow-hidden p-0">
          {selectedCertificate && (
            <>
              <DialogHeader className="p-6 pb-0">
                <DialogTitle className="text-xl font-semibold gradient-text">
                  {selectedCertificate.title}
                </DialogTitle>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    {selectedCertificate.icon}
                    {selectedCertificate.organization}
                  </span>
                  <span>{selectedCertificate.year}</span>
                  <Badge variant="outline">{selectedCertificate.category}</Badge>
                </div>
              </DialogHeader>
              
              <div className="p-6 pt-4">
                <img
                  src={selectedCertificate.image}
                  alt={`${selectedCertificate.title} certificate`}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Certificates;