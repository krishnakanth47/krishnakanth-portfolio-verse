import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import isteImage from '@/assets/certificates/iste-membership.jpg';
import footballImage from '@/assets/certificates/anna-university-football.jpg';
import ictrdImage from '@/assets/certificates/ictrd-python.jpg';
import aictsdImage from '@/assets/certificates/aictsd-quiz.jpg';
import asmeImage from '@/assets/certificates/asme-novate.jpg';
import nptelImage from '@/assets/certificates/nptel-design-thinking.jpg';
import infosysImage from '@/assets/certificates/infosys-ai-python.jpg';
import srit30DaysImage from '@/assets/certificates/srit-30-days-coding.jpg';

const certificates = [
  {
    id: 1,
    title: 'ISTE Student Membership',
    organization: 'ISTE',
    year: '2024',
    image: isteImage,
  },
  {
    id: 2,
    title: 'Anna University Football Zonal Tournament (Runner-Up)',
    organization: 'Anna University',
    year: '2024',
    image: footballImage,
  },
  {
    id: 3,
    title: '30 Days Coding Challenge (3rd Position)',
    organization: 'SRIT',
    year: '2024',
    image: srit30DaysImage,
  },
  {
    id: 4,
    title: 'ICTRD Python Programming Certificate',
    organization: 'ICTRD',
    year: '2024',
    image: ictrdImage,
  },
  {
    id: 5,
    title: 'AICTSD Aryabhata Quiz Certificate',
    organization: 'AICTSD',
    year: '2023',
    image: aictsdImage,
  },
  {
    id: 6,
    title: 'ASME TN-NOVATE Participation',
    organization: 'ASME',
    year: '2024',
    image: asmeImage,
  },
  {
    id: 7,
    title: 'NPTEL Design Thinking',
    organization: 'NPTEL',
    year: '2024',
    image: nptelImage,
  },
  {
    id: 8,
    title: 'Infosys AI Using Python',
    organization: 'Infosys Springboard',
    year: '2024',
    image: infosysImage,
  },
];

const Certificates = () => {
  const [imageError, setImageError] = useState<Record<number, boolean>>({});

  const handleImageError = (id: number) => {
    setImageError(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section id="certificates" className="py-20 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto section-padding relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Certificates & Achievements</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Recognition of continuous learning and excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <Dialog key={cert.id}>
              <DialogTrigger asChild>
                <div
                  className="group relative bg-card/50 backdrop-blur-sm rounded-xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Certificate Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    {!imageError[cert.id] ? (
                      <img
                        src={cert.image}
                        alt={`${cert.title} certificate`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={() => handleImageError(cert.id)}
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-muted text-muted-foreground">
                        Certificate Image
                      </div>
                    )}
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-primary font-semibold text-lg">View Certificate</span>
                    </div>
                  </div>

                  {/* Certificate Info */}
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-primary/80">{cert.organization}</span>
                      <span className="text-foreground/60">{cert.year}</span>
                    </div>
                  </div>

                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 blur-xl" />
                  </div>
                </div>
              </DialogTrigger>

              <DialogContent className="max-w-4xl w-full p-0 bg-background/95 backdrop-blur-md border-primary/20">
                <div className="relative">
                  <img
                    src={cert.image}
                    alt={`${cert.title} certificate - full view`}
                    className="w-full h-auto rounded-lg"
                    onError={() => handleImageError(cert.id)}
                  />
                  <div className="p-6 bg-gradient-to-t from-background to-transparent">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{cert.title}</h3>
                    <div className="flex gap-4 text-sm">
                      <span className="text-primary">{cert.organization}</span>
                      <span className="text-foreground/60">{cert.year}</span>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
