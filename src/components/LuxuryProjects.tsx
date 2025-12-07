import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, Network, MessageSquare, Car, Zap, Brain } from 'lucide-react';
import HorizontalCarousel from './HorizontalCarousel';

const LuxuryProjects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: 'multi-agent',
      subtitle: 'ai orchestration',
      description: 'autogen-based multi-agent system with intelligent collaboration and automated workflows.',
      icon: Network,
      link: '/projects/multi-agent',
      tags: ['autogen', 'ai', 'automation'],
      year: '2024',
    },
    {
      id: 2,
      title: 'chat with data',
      subtitle: 'rag pipeline',
      description: 'intelligent document q&a system transforming knowledge into interactive conversations.',
      icon: MessageSquare,
      link: '/projects/chat-with-data',
      tags: ['rag', 'nlp', 'llm'],
      year: '2024',
    },
    {
      id: 3,
      title: 'autonomous car',
      subtitle: 'self-driving ai',
      description: 'advanced pathfinding algorithms and smart navigation for autonomous vehicle systems.',
      icon: Car,
      link: '/projects/autonomous-car',
      tags: ['computer vision', 'robotics'],
      year: '2023',
    },
    {
      id: 4,
      title: 'nlp techniques',
      subtitle: 'language processing',
      description: 'cutting-edge natural language understanding and generation capabilities.',
      icon: Zap,
      link: '/projects/nlp-techniques',
      tags: ['nlp', 'transformers'],
      year: '2023',
    },
    {
      id: 5,
      title: 'llm platform',
      subtitle: 'model integration',
      description: 'large language models integration and fine-tuning for intelligent automation.',
      icon: Brain,
      link: '/projects/llms',
      tags: ['gpt', 'fine-tuning'],
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
            <div className="w-14 h-14 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-accent transition-colors duration-500">
              <project.icon className="w-6 h-6 text-foreground" />
            </div>
            <span className="text-eyebrow">{project.year}</span>
          </div>

          {/* Content */}
          <div className="mb-6">
            <p className="text-eyebrow mb-2">
              {project.subtitle}
            </p>
            <h3 className="text-title text-foreground mb-4 group-hover:text-foreground/80 transition-colors duration-300">
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
                className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground lowercase"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="flex items-center justify-between pt-6 border-t border-border">
          <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors lowercase">
            view project
          </span>
          <motion.div
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:border-foreground/30 group-hover:bg-foreground transition-all duration-300"
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
        title="selected work"
        subtitle="featured projects"
      />
    </section>
  );
};

export default LuxuryProjects;