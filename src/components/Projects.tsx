import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Brain, Wallet, Mic, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'FinGenie',
      description: 'AI-powered financial research tool that analyzes market trends and provides intelligent investment insights using advanced machine learning algorithms.',
      icon: Brain,
      gradient: 'from-primary to-secondary',
      demo: '#',
      repo: '#',
      tags: ['AI', 'Finance', 'ML', 'React']
    },
    {
      title: 'Wallet Fusion',
      description: 'Comprehensive PKR local wallet system enabling seamless digital transactions with enhanced security and user-friendly interface for Pakistani market.',
      icon: Wallet,
      gradient: 'from-secondary to-accent',
      demo: '#',
      repo: '#',
      tags: ['FinTech', 'React', 'Node.js', 'Security']
    },
    {
      title: 'Bella Voice Assistant',
      description: 'Personal AI assistant with advanced natural language processing, voice recognition, and smart automation capabilities for daily tasks.',
      icon: Mic,
      gradient: 'from-accent to-primary',
      demo: '#',
      repo: '#',
      tags: ['AI', 'NLP', 'Voice', 'Assistant']
    },
    {
      title: 'Rabeel.World',
      description: 'My futuristic portfolio website showcasing cutting-edge 3D animations, cyberpunk aesthetics, and interactive user experiences.',
      icon: Globe,
      gradient: 'from-primary via-secondary to-accent',
      demo: '#',
      repo: 'https://github.com/Rabeel-Ashraf/Rabeel.world.portfolio',
      tags: ['Portfolio', '3D', 'React', 'Three.js']
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-neon mb-6">
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative solutions that push the boundaries of technology and create meaningful impact
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="holo-card p-8 h-full flex flex-col hover:glow-primary transition-all duration-500 group-hover:scale-105">
                {/* Project Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} p-4 mb-6 group-hover:pulse-glow transition-all duration-300`}>
                  <project.icon className="w-full h-full text-background" />
                </div>

                {/* Project Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-orbitron font-bold text-foreground mb-4 group-hover:text-neon transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary/50 hover:bg-primary/10 hover:glow-primary transition-all duration-300"
                    onClick={() => {
                      const newWindow = window.open(project.demo, '_blank', 'noopener,noreferrer');
                      if (newWindow) newWindow.opener = null;
                    }}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-secondary/50 hover:bg-secondary/10 hover:glow-secondary transition-all duration-300"
                    onClick={() => {
                      const newWindow = window.open(project.repo, '_blank', 'noopener,noreferrer');
                      if (newWindow) newWindow.opener = null;
                    }}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button
            size="lg"
            className="font-orbitron font-bold bg-gradient-to-r from-primary to-secondary hover:glow-primary transition-all duration-300"
            onClick={() => {
              const newWindow = window.open('https://github.com/Rabeel-Ashraf', '_blank', 'noopener,noreferrer');
              if (newWindow) newWindow.opener = null;
            }}
          >
            <Github className="mr-2" />
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;