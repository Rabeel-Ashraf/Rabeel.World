import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, Network, MessageSquare, Car, Zap, Brain } from 'lucide-react';
import HorizontalCarousel from './HorizontalCarousel';

const LuxuryProjects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: 'Multi-Agent',
      subtitle: 'AI Orchestration',
      description: 'AutoGen-based multi-agent system with intelligent collaboration and automated workflows.',
      icon: Network,
      link: '/projects/multi-agent',
      tags: ['AutoGen', 'AI', 'Automation'],
      year: '2024',
    },
    {
      id: 2,
      title: 'Chat with Data',
      subtitle: 'RAG Pipeline',
      description: 'Intelligent document Q&A system transforming knowledge into interactive conversations.',
      icon: MessageSquare,
      link: '/projects/chat-with-data',
      tags: ['RAG', 'NLP', 'LLM'],
      year: '2024',
    },
    {
      id: 3,
      title: 'Autonomous Car',
      subtitle: 'Self-Driving AI',
      description: 'Advanced pathfinding algorithms and smart navigation for autonomous vehicle systems.',
      icon: Car,
      link: '/projects/autonomous-car',
      tags: ['Computer Vision', 'Robotics'],
      year: '2023',
    },
    {
      id: 4,
      title: 'NLP Techniques',
      subtitle: 'Language Processing',
      description: 'Cutting-edge natural language understanding and generation capabilities.',
      icon: Zap,
      link: '/projects/nlp-techniques',
      tags: ['NLP', 'Transformers'],
      year: '2023',
    },
    {
      id: 5,
      title: 'LLM Platform',
      subtitle: 'Model Integration',
      description: 'Large Language Models integration and fine-tuning for intelligent automation.',
      icon: Brain,
      link: '/projects/llms',
      tags: ['GPT', 'Fine-tuning'],
      year: '2024',
    },
  ];

  const projectCards = projects.map((project) => ({
    id: project.id,
    content: (
      <motion.div
        className="luxury-card h-full p-8 flex flex-col justify-between group cursor-pointer"
        onClick={() => navigate(project.link)}
        whileHover={{ y: -8 }}
        transition={{ duration: 0.4 }}
      >
        {/* Top section */}
        <div>
          {/* Header */}
          <div className="flex items-start justify-between mb-8">
            <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-500">
              <project.icon className="w-6 h-6 text-primary" />
            </div>
            <span className="text-xs text-muted-foreground tracking-wider">{project.year}</span>
          </div>

          {/* Content */}
          <div className="mb-6">
            <p className="text-xs text-primary tracking-[0.2em] uppercase mb-2">
              {project.subtitle}
            </p>
            <h3 className="text-title text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-body text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="flex items-center justify-between pt-6 border-t border-border">
          <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
            View Project
          </span>
          <motion.div
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all duration-300"
            whileHover={{ rotate: 45 }}
          >
            <ArrowUpRight className="w-4 h-4 group-hover:text-primary-foreground transition-colors" />
          </motion.div>
        </div>
      </motion.div>
    ),
  }));

  return (
    <section id="projects">
      <HorizontalCarousel
        items={projectCards}
        itemWidth={380}
        gap={24}
        title="Selected Work"
        subtitle="Featured Projects"
      />
    </section>
  );
};

export default LuxuryProjects;
