import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Network, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MultiAgent = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 md:px-6 py-12 max-w-5xl">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-8 hover:text-primary"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Header */}
          <header className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary p-4">
                <Network className="w-full h-full text-background" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-neon">
                  Multi-Agent System
                </h1>
                <p className="text-muted-foreground mt-2">AutoGen-Based Intelligent Collaboration</p>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="w-full h-64 md:h-96 rounded-lg bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center border border-border">
            <Network className="w-32 h-32 text-primary/40" />
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none space-y-6">
            <section className="holo-card p-6">
              <h2 className="text-2xl font-orbitron font-bold text-neon mb-4">Project Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                The Multi-Agent System is a sophisticated AI framework built using Microsoft's AutoGen, designed to orchestrate intelligent collaboration between multiple autonomous agents. This system enables complex problem-solving through distributed AI intelligence, where each agent specializes in specific tasks while working harmoniously toward common goals.
              </p>
            </section>

            <section className="holo-card p-6">
              <h2 className="text-2xl font-orbitron font-bold text-neon mb-4">Key Features</h2>
              <div className="space-y-4">
                {[
                  'Autonomous agent coordination and communication',
                  'Task-specific agent specialization and role assignment',
                  'Real-time collaboration with intelligent decision-making',
                  'Scalable architecture for complex workflow automation',
                  'Dynamic agent creation and lifecycle management',
                  'Advanced error handling and fallback mechanisms'
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">{feature}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="holo-card p-6">
              <h2 className="text-2xl font-orbitron font-bold text-neon mb-4">Technical Implementation</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Built on Microsoft's AutoGen framework, this multi-agent system leverages cutting-edge AI technologies to create a robust, scalable solution for complex automation tasks. The architecture employs:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <strong>Agent Orchestration:</strong> Centralized coordinator managing agent interactions</li>
                <li>• <strong>Message Passing:</strong> Efficient inter-agent communication protocols</li>
                <li>• <strong>State Management:</strong> Distributed state handling across the agent network</li>
                <li>• <strong>LLM Integration:</strong> GPT-4 powered reasoning and decision-making</li>
              </ul>
            </section>

            <section className="holo-card p-6">
              <h2 className="text-2xl font-orbitron font-bold text-neon mb-4">Use Cases</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This multi-agent system excels in scenarios requiring distributed intelligence and collaborative problem-solving:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <h3 className="font-semibold text-foreground mb-2">Business Automation</h3>
                  <p className="text-sm text-muted-foreground">Streamline complex workflows with intelligent task distribution</p>
                </div>
                <div className="p-4 bg-secondary/5 rounded-lg border border-secondary/20">
                  <h3 className="font-semibold text-foreground mb-2">Research Analysis</h3>
                  <p className="text-sm text-muted-foreground">Collaborative data analysis and insight generation</p>
                </div>
                <div className="p-4 bg-accent/5 rounded-lg border border-accent/20">
                  <h3 className="font-semibold text-foreground mb-2">Code Generation</h3>
                  <p className="text-sm text-muted-foreground">Multi-agent software development and debugging</p>
                </div>
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <h3 className="font-semibold text-foreground mb-2">Decision Support</h3>
                  <p className="text-sm text-muted-foreground">Complex decision-making through agent consensus</p>
                </div>
              </div>
            </section>

            <section className="holo-card p-6">
              <h2 className="text-2xl font-orbitron font-bold text-neon mb-4">Future Enhancements</h2>
              <p className="text-muted-foreground leading-relaxed">
                The roadmap includes integration with advanced monitoring dashboards, support for custom agent types, enhanced learning capabilities through reinforcement learning, and expanded API integrations for broader ecosystem compatibility.
              </p>
            </section>
          </div>

          {/* CTA */}
          <div className="flex justify-center pt-8">
            <Button
              onClick={() => navigate('/')}
              size="lg"
              className="font-orbitron bg-gradient-to-r from-primary to-secondary hover:glow-primary"
            >
              View All Projects
            </Button>
          </div>
        </motion.article>
      </div>
    </div>
  );
};

export default MultiAgent;
