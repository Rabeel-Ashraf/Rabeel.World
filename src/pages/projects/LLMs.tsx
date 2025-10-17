import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Brain, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LLMs = () => {
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
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary via-accent to-primary p-4">
                <Brain className="w-full h-full text-background" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-neon">
                  Large Language Models
                </h1>
                <p className="text-muted-foreground mt-2">Advanced LLM Integration & Fine-Tuning Platform</p>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="w-full h-64 md:h-96 rounded-lg bg-gradient-to-br from-secondary/20 via-accent/20 to-primary/20 flex items-center justify-center border border-border">
            <Brain className="w-32 h-32 text-secondary/40" />
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none space-y-6">
            <section className="holo-card p-6">
              <h2 className="text-2xl font-orbitron font-bold text-neon mb-4">Project Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                The LLM Platform is a comprehensive solution for integrating, fine-tuning, and deploying large language models at scale. Leveraging state-of-the-art AI models like GPT-4, Claude, and Llama, this platform empowers businesses to build intelligent automation systems, conversational AI, and advanced content generation tools with unprecedented capabilities.
              </p>
            </section>

            <section className="holo-card p-6">
              <h2 className="text-2xl font-orbitron font-bold text-neon mb-4">Platform Capabilities</h2>
              <div className="space-y-4">
                {[
                  'Multi-model integration (GPT-4, Claude, Llama, Mistral)',
                  'Custom fine-tuning with domain-specific datasets',
                  'Advanced prompt engineering and optimization',
                  'Real-time model performance monitoring',
                  'Cost-efficient inference with model caching',
                  'Enterprise-grade security and data privacy'
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">{feature}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="holo-card p-6">
              <h2 className="text-2xl font-orbitron font-bold text-neon mb-4">Technical Architecture</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Built on a robust, scalable infrastructure designed for production AI workloads:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <strong>Model Hub:</strong> Centralized management of multiple LLM providers</li>
                <li>• <strong>Fine-Tuning Pipeline:</strong> Automated training with LoRA and QLoRA</li>
                <li>• <strong>Inference Engine:</strong> Optimized serving with vLLM and TensorRT</li>
                <li>• <strong>Vector Storage:</strong> Semantic caching for reduced latency and costs</li>
                <li>• <strong>Evaluation Suite:</strong> Comprehensive benchmarking and testing</li>
              </ul>
            </section>

            <section className="holo-card p-6">
              <h2 className="text-2xl font-orbitron font-bold text-neon mb-4">Use Cases & Applications</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-secondary/5 rounded-lg border border-secondary/20">
                  <h3 className="font-semibold text-foreground mb-2">Intelligent Assistants</h3>
                  <p className="text-sm text-muted-foreground">Build custom AI copilots for business workflows</p>
                </div>
                <div className="p-4 bg-accent/5 rounded-lg border border-accent/20">
                  <h3 className="font-semibold text-foreground mb-2">Content Generation</h3>
                  <p className="text-sm text-muted-foreground">Automated marketing copy, reports, and documentation</p>
                </div>
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <h3 className="font-semibold text-foreground mb-2">Code Assistance</h3>
                  <p className="text-sm text-muted-foreground">AI-powered code generation and debugging</p>
                </div>
                <div className="p-4 bg-secondary/5 rounded-lg border border-secondary/20">
                  <h3 className="font-semibold text-foreground mb-2">Data Analysis</h3>
                  <p className="text-sm text-muted-foreground">Natural language queries on complex datasets</p>
                </div>
              </div>
            </section>

            <section className="holo-card p-6">
              <h2 className="text-2xl font-orbitron font-bold text-neon mb-4">Fine-Tuning Capabilities</h2>
              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-secondary/10 to-accent/10 rounded-lg border border-secondary/20">
                  <h3 className="font-semibold text-foreground mb-2">Domain Adaptation</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Customize models for specific industries like healthcare, legal, finance, and engineering with specialized knowledge bases.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-secondary/20 px-2 py-1 rounded">Healthcare</span>
                    <span className="text-xs bg-accent/20 px-2 py-1 rounded">Legal</span>
                    <span className="text-xs bg-primary/20 px-2 py-1 rounded">Finance</span>
                    <span className="text-xs bg-secondary/20 px-2 py-1 rounded">Engineering</span>
                  </div>
                </div>
                <div className="p-4 bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg border border-accent/20">
                  <h3 className="font-semibold text-foreground mb-2">Instruction Tuning</h3>
                  <p className="text-sm text-muted-foreground">
                    Train models to follow specific instruction patterns, improving task performance and alignment with business requirements.
                  </p>
                </div>
                <div className="p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-primary/20">
                  <h3 className="font-semibold text-foreground mb-2">RLHF Integration</h3>
                  <p className="text-sm text-muted-foreground">
                    Reinforcement Learning from Human Feedback to align model outputs with human preferences and safety guidelines.
                  </p>
                </div>
              </div>
            </section>

            <section className="holo-card p-6">
              <h2 className="text-2xl font-orbitron font-bold text-neon mb-4">Enterprise Features</h2>
              <div className="grid gap-3">
                <div className="flex items-center gap-3 p-3 bg-secondary/5 rounded-lg border border-secondary/10">
                  <div className="text-2xl">🔒</div>
                  <div>
                    <div className="font-medium text-foreground">Data Privacy</div>
                    <div className="text-sm text-muted-foreground">On-premise deployment with zero data retention</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-accent/5 rounded-lg border border-accent/10">
                  <div className="text-2xl">⚡</div>
                  <div>
                    <div className="font-medium text-foreground">High Performance</div>
                    <div className="text-sm text-muted-foreground">GPU-optimized inference with &lt;100ms latency</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg border border-primary/10">
                  <div className="text-2xl">📊</div>
                  <div>
                    <div className="font-medium text-foreground">Analytics Dashboard</div>
                    <div className="text-sm text-muted-foreground">Real-time monitoring and usage insights</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-secondary/5 rounded-lg border border-secondary/10">
                  <div className="text-2xl">🔄</div>
                  <div>
                    <div className="font-medium text-foreground">Auto-Scaling</div>
                    <div className="text-sm text-muted-foreground">Dynamic resource allocation based on demand</div>
                  </div>
                </div>
              </div>
            </section>

            <section className="holo-card p-6">
              <h2 className="text-2xl font-orbitron font-bold text-neon mb-4">Performance & Scale</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-secondary/10 rounded-lg">
                  <div className="text-3xl font-bold text-secondary">100K+</div>
                  <div className="text-sm text-muted-foreground mt-1">Requests/Day</div>
                </div>
                <div className="text-center p-4 bg-accent/10 rounded-lg">
                  <div className="text-3xl font-bold text-accent">&lt;100ms</div>
                  <div className="text-sm text-muted-foreground mt-1">Latency</div>
                </div>
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <div className="text-3xl font-bold text-primary">99.9%</div>
                  <div className="text-sm text-muted-foreground mt-1">Uptime</div>
                </div>
                <div className="text-center p-4 bg-secondary/10 rounded-lg">
                  <div className="text-3xl font-bold text-secondary">10+</div>
                  <div className="text-sm text-muted-foreground mt-1">Models</div>
                </div>
              </div>
            </section>

            <section className="holo-card p-6">
              <h2 className="text-2xl font-orbitron font-bold text-neon mb-4">Future Roadmap</h2>
              <p className="text-muted-foreground leading-relaxed">
                Upcoming features include multimodal capabilities (vision, audio), advanced reasoning with chain-of-thought, integration with enterprise knowledge graphs, and support for open-source models like Falcon and Mistral for on-premise deployment in UAE smart city initiatives.
              </p>
            </section>
          </div>

          {/* CTA */}
          <div className="flex justify-center pt-8">
            <Button
              onClick={() => navigate('/')}
              size="lg"
              className="font-orbitron bg-gradient-to-r from-secondary via-accent to-primary hover:glow-secondary"
            >
              View All Projects
            </Button>
          </div>
        </motion.article>
      </div>
    </div>
  );
};

export default LLMs;
