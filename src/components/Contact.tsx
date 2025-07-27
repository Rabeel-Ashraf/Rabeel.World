import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MessageCircle, Instagram, Mail, Send, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Let\'s chat directly',
      action: () => window.open('https://wa.me/971501359046?text=Hi%20Rabeel,%20I%20would%20like%20to%20discuss%20a%20project%20with%20you', '_blank'),
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: Instagram,
      title: 'Instagram',
      description: 'Follow my journey',
      action: () => window.open('https://instagram.com/xavernox?igsh=bDZ2bjF3aWM3b3k1', '_blank'),
      gradient: 'from-pink-500 to-purple-600'
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'Professional inquiries',
      action: () => window.location.href = 'mailto:rabeel.ashraf@example.com',
      gradient: 'from-primary to-secondary'
    }
  ];

  return (
    <section id="contact" className="min-h-screen py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-neon mb-6">
            Let's Connect
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss how we can create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="holo-card p-8 hover:glow-primary transition-all duration-300">
              <h3 className="text-2xl font-orbitron font-bold text-foreground mb-6">
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-input border-border focus:border-primary focus:glow-primary transition-all duration-300"
                    required
                  />
                </div>
                
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-input border-border focus:border-primary focus:glow-primary transition-all duration-300"
                    required
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell me about your project or idea..."
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="bg-input border-border focus:border-primary focus:glow-primary transition-all duration-300 resize-none"
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  size="lg"
                  className="w-full font-orbitron font-bold bg-gradient-to-r from-primary to-secondary hover:glow-primary transition-all duration-300 group"
                >
                  <Send className="mr-2 group-hover:animate-pulse" />
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Methods & Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Quick Contact Methods */}
            <div className="space-y-4">
              <h3 className="text-2xl font-orbitron font-bold text-foreground mb-6">
                Quick Connect
              </h3>
              
              {contactMethods.map((method, index) => (
                <motion.button
                  key={index}
                  onClick={method.action}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="w-full holo-card p-6 flex items-center space-x-4 hover:glow-primary transition-all duration-300 group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.gradient} p-3 group-hover:pulse-glow transition-all duration-300`}>
                    <method.icon className="w-full h-full text-white" />
                  </div>
                  <div className="flex-1 text-left">
                    <h4 className="font-semibold text-foreground group-hover:text-neon transition-colors duration-300">
                      {method.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {method.description}
                    </p>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="holo-card p-6 space-y-4"
            >
              <h3 className="text-xl font-orbitron font-bold text-foreground mb-4">
                Contact Information
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">United Arab Emirates</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">+971 50 135 9046</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">rabeel.ashraf@example.com</span>
                </div>
              </div>
            </motion.div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-lg text-center"
            >
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse mx-auto mb-3"></div>
              <h4 className="font-orbitron font-bold text-foreground mb-2">
                Available for Projects
              </h4>
              <p className="text-sm text-muted-foreground">
                Currently accepting new projects and collaborations
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;