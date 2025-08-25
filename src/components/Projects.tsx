import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Network, MessageSquare, Car, Zap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Multi-Agent',
      description: 'AutoGen-based multi-agent system with intelligent collaboration. Abstract network of AI agents working together through automated workflows and smart coordination.',
      icon: Network,
      gradient: 'from-primary to-secondary',
      demo: '#',
      repo: '#',
      tags: ['Multi-Agent', 'AutoGen', 'AI', 'Automation']
    },
    {
      title: 'Chat_with_my_data',
      description: 'RAG pipeline for document Q&A enabling intelligent conversations with your data. Transform documents into interactive knowledge base with AI-powered insights.',
      icon: MessageSquare,
      gradient: 'from-secondary to-accent',
      demo: '#',
      repo: '#',
      tags: ['RAG', 'NLP', 'Q&A', 'Document AI']
    },
    {
      title: 'Autonomous_Car',
      description: 'Self-driving algorithm simulator with advanced pathfinding and smart navigation. Experience the future of mobility through AI-powered autonomous vehicle systems.',
      icon: Car,
      gradient: 'from-accent to-primary',
      demo: '#',
      repo: '#',
      tags: ['Autonomous', 'Simulation', 'AI', 'Mobility']
    },
    {
      title: 'NLP_Techniques',
      description: 'Modern NLP techniques notebook showcasing cutting-edge language processing methods. Explore advanced natural language understanding and generation capabilities.',
      icon: Zap,
      gradient: 'from-primary via-secondary to-accent',
      demo: '#',
      repo: '#',
      tags: ['NLP', 'Language AI', 'Notebook', 'Techniques']
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