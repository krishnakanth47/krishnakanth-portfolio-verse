
import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Send, MapPin, Instagram, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'krishnakanthj2006@gmail.com',
      href: 'mailto:krishnakanthj2006@gmail.com',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-950/20'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 80892 73331',
      href: 'tel:+918089273331',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50 dark:bg-green-950/20'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'LinkedIn Profile',
      href: 'https://linkedin.com/in/krishnakanth-j',
      color: 'from-blue-600 to-blue-700',
      bgColor: 'bg-blue-50 dark:bg-blue-950/20'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: 'Instagram Profile',
      href: 'https://www.instagram.com/krishna_kanth_j?igsh=MWd3cTJlcTFmbmJ3dA==&utm_source=ig_contact_invite',
      color: 'from-pink-500 to-purple-600',
      bgColor: 'bg-pink-50 dark:bg-pink-950/20'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Coimbatore, Tamil Nadu',
      href: '#',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50 dark:bg-red-950/20'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Get In <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to collaborate on exciting projects or discuss opportunities? Let's connect!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-10">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
                <MessageCircle className="h-8 w-8 text-primary" />
                Let's Start a Conversation
              </h3>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                I'm always excited to connect with fellow developers, potential collaborators, 
                and anyone interested in technology and innovation. Whether you have a project idea, 
                want to discuss opportunities, or just want to say hello, feel free to reach out!
              </p>
            </div>
            
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <Card key={info.label} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-card/50 backdrop-blur-sm hover:bg-card/80">
                  <CardContent className="p-6">
                    <a
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center space-x-6 group"
                    >
                      <div className={`p-4 rounded-2xl bg-gradient-to-r ${info.color} text-white group-hover:scale-110 transition-all duration-300`}>
                        <info.icon className="h-7 w-7" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide">{info.label}</p>
                        <p className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Enhanced Social Links */}
            <div className="pt-8">
              <h4 className="text-2xl font-bold mb-6 text-foreground">Connect on Social Media</h4>
              <div className="flex space-x-6">
                {[
                  { icon: Linkedin, href: "https://linkedin.com/in/krishnakanth-j", color: "from-blue-600 to-blue-700", hoverColor: "hover:shadow-blue-500/25" },
                  { icon: Github, href: "https://github.com/krishnakanth-j", color: "from-gray-800 to-gray-900", hoverColor: "hover:shadow-gray-500/25" },
                  { icon: Instagram, href: "https://www.instagram.com/krishna_kanth_j?igsh=MWd3cTJlcTFmbmJ3dA==&utm_source=ig_contact_invite", color: "from-pink-500 to-purple-600", hoverColor: "hover:shadow-pink-500/25" }
                ].map(({ icon: Icon, href, color, hoverColor }, index) => (
                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-5 bg-gradient-to-r ${color} text-white rounded-2xl shadow-lg hover:shadow-2xl ${hoverColor} transition-all duration-500 transform hover:scale-110 hover:-translate-y-2`}
                  >
                    <Icon className="h-8 w-8" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Enhanced Contact Form */}
          <div>
            <Card className="border-0 shadow-2xl bg-card/50 backdrop-blur-sm rounded-3xl overflow-hidden">
              <CardContent className="p-10">
                <h3 className="text-3xl font-bold mb-8 text-foreground">Send me a message</h3>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <label htmlFor="name" className="block text-lg font-semibold text-foreground mb-3">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 text-lg border-2 border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-background/50"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-lg font-semibold text-foreground mb-3">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 text-lg border-2 border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-background/50"
                      placeholder="Enter your email address"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-lg font-semibold text-foreground mb-3">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full px-6 py-4 text-lg border-2 border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 resize-none bg-background/50"
                      placeholder="Tell me about your project or just say hello!"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground py-4 px-8 text-lg rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  >
                    <Send className="mr-3 h-6 w-6" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
