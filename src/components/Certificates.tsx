import React, { useState } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger, DialogClose } from '@/components/ui/dialog';

// Import certificate images
import isteMembership from '@/assets/certificates/iste-membership.jpg';
import annaUniversityFootball from '@/assets/certificates/anna-university-football.jpg';
import ictrdPython from '@/assets/certificates/ictrd-python.jpg';
import aictsdQuiz from '@/assets/certificates/aictsd-quiz.jpg';
import asmeNovate from '@/assets/certificates/asme-novate.jpg';
import nptelDesignThinking from '@/assets/certificates/nptel-design-thinking.jpg';
import infosysAiPython from '@/assets/certificates/infosys-ai-python.jpg';

interface Certificate {
  id: string;
  title: string;
  authority: string;
  year: string;
  image: string;
  description?: string;
}

const certificates: Certificate[] = [
  {
    id: '1',
    title: 'ISTE Student Membership',
    authority: 'ISTE',
    year: '2024',
    image: isteMembership,
    description: 'Indian Society for Technical Education membership'
  },
  {
    id: '2',
    title: 'Anna University Football Zonal Tournament (Runner-Up)',
    authority: 'Anna University',
    year: '2024',
    image: annaUniversityFootball,
    description: 'Runner-up in inter-collegiate football tournament'
  },
  {
    id: '3',
    title: 'ICTRD Python Programming Certificate',
    authority: 'ICTRD',
    year: '2024',
    image: ictrdPython,
    description: 'Python programming course completion certificate'
  },
  {
    id: '4',
    title: 'AICTSD Aryabhata Quiz Certificate',
    authority: 'AICTSD',
    year: '2023',
    image: aictsdQuiz,
    description: 'Mathematics and science quiz competition'
  },
  {
    id: '5',
    title: 'ASME TN-NOVATE Participation',
    authority: 'ASME',
    year: '2024',
    image: asmeNovate,
    description: 'Engineering innovation competition participation'
  },
  {
    id: '6',
    title: 'NPTEL Design Thinking',
    authority: 'NPTEL',
    year: '2024',
    image: nptelDesignThinking,
    description: 'Design thinking and innovation course'
  },
  {
    id: '7',
    title: 'Infosys AI Using Python',
    authority: 'Infosys Springboard',
    year: '2024',
    image: infosysAiPython,
    description: 'Artificial Intelligence using Python course'
  }
];

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  return (
    <section id="certificates" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto section-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Certificates</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of certifications and achievements that showcase my continuous learning journey 
            and professional development in technology and beyond.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate, index) => (
            <Dialog key={certificate.id}>
              <DialogTrigger asChild>
                <Card 
                  className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden animate-fade-in border-border/50 hover:border-primary/50"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-0">
                    {/* Certificate Image */}
                    <div className="relative overflow-hidden">
                      <img
                        src={certificate.image}
                        alt={certificate.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <ExternalLink className="text-white w-8 h-8" />
                      </div>
                    </div>
                    
                    {/* Certificate Info */}
                    <div className="p-6">
                      <h3 className="font-bold text-lg mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                        {certificate.title}
                      </h3>
                      <p className="text-muted-foreground mb-1 font-medium">
                        {certificate.authority}
                      </p>
                      <p className="text-sm text-accent font-semibold">
                        {certificate.year}
                      </p>
                      {certificate.description && (
                        <p className="text-sm text-muted-foreground mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {certificate.description}
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              
              {/* Lightbox Modal */}
              <DialogContent className="max-w-4xl w-full p-0 bg-background border-border/50">
                <div className="relative">
                  <DialogClose className="absolute top-4 right-4 z-10 p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors duration-200">
                    <X className="w-6 h-6" />
                  </DialogClose>
                  
                  <div className="p-6">
                    <img
                      src={certificate.image}
                      alt={certificate.title}
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                    
                    <div className="mt-6 text-center">
                      <h3 className="text-2xl font-bold mb-2 gradient-text">
                        {certificate.title}
                      </h3>
                      <p className="text-lg text-muted-foreground mb-1">
                        Issued by <span className="font-semibold text-foreground">{certificate.authority}</span>
                      </p>
                      <p className="text-accent font-semibold">
                        {certificate.year}
                      </p>
                      {certificate.description && (
                        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                          {certificate.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="mt-16 text-center">
          <Card className="inline-block p-8 glass hover-glow">
            <div className="flex flex-wrap justify-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">7+</div>
                <div className="text-muted-foreground">Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">4</div>
                <div className="text-muted-foreground">Years Learning</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">3</div>
                <div className="text-muted-foreground">Different Domains</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certificates;