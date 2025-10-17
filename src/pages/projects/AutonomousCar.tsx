import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Car, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AutonomousCar = () => {
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
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-primary p-4">
                <Car className="w-full h-full text-background" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-neon">
                  Autonomous Vehicle
                </h1>
                <p className="text-muted-foreground mt-2">Self-Driving Algorithm Simulator</p>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="w-full h-64 md:h-96 rounded-lg bg-gradient-to-br from-accent/20 via-primary/20 to-secondary/20 flex items-center justify-center border border-border">
            <Car className="w-32 h-32 text-accent/40" />
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none space-y-6">
            <section className="holo-card p-6">
              <h2 className="text-2xl font-orbitron font-bold text-neon mb-4">Project Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                The Autonomous Vehicle Simulator is a comprehensive platform for developing, testing, and refining self-driving algorithms. Built with advanced computer vision and machine learning, this system simulates real-world driving scenarios, enabling safe and efficient development of autonomous navigation systems for the future of smart mobility.
              </p>
            </section>

            <section className="holo-card p-6">
              <h2 className="text-2xl font-orbitron font-bold text-neon mb-4">Core Technologies</h2>
              <div className="space-y-4">
                {[
                  'Deep learning-based object detection and classification',
                  'Advanced pathfinding with A* and RRT algorithms',
                  'Real-time sensor fusion (LiDAR, cameras, radar)',
                  'Predictive behavior modeling for traffic participants',
                  'Reinforcement learning for decision optimization',
                  'High-fidelity physics simulation engine'
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">{feature}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="holo-card p-6">
              <h2 className="text-2xl font-orbitron font-bold text-neon mb-4">Simulation Features</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The simulator provides a comprehensive testing environment with realistic scenarios:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <strong>Urban Navigation:</strong> Complex city driving with traffic signals and pedestrians</li>
                <li>• <strong>Highway Scenarios:</strong> High-speed merging, lane changing, and adaptive cruise</li>
                <li>• <strong>Weather Conditions:</strong> Rain, fog, snow simulation for robust testing</li>
                <li>• <strong>Edge Cases:</strong> Unusual scenarios for safety validation</li>
                <li>• <strong>Multi-Vehicle Interaction:</strong> Dynamic traffic flow simulation</li>
              </ul>
            </section>

            <section className="holo-card p-6">
              <h2 className="text-2xl font-orbitron font-bold text-neon mb-4">AI Decision Framework</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-accent/5 rounded-lg border border-accent/20">
                  <h3 className="font-semibold text-foreground mb-2">Perception Layer</h3>
                  <p className="text-sm text-muted-foreground">CNN-based object detection with 99.2% accuracy</p>
                </div>
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <h3 className="font-semibold text-foreground mb-2">Planning Layer</h3>
                  <p className="text-sm text-muted-foreground">Optimal trajectory generation with safety constraints</p>
                </div>
                <div className="p-4 bg-secondary/5 rounded-lg border border-secondary/20">
                  <h3 className="font-semibold text-foreground mb-2">Control Layer</h3>
                  <p className="text-sm text-muted-foreground">PID controllers for smooth vehicle dynamics</p>
                </div>
                <div className="p-4 bg-accent/5 rounded-lg border border-accent/20">
                  <h3 className="font-semibold text-foreground mb-2">Safety Layer</h3>
                  <p className="text-sm text-muted-foreground">Real-time risk assessment and emergency braking</p>
                </div>
              </div>
            </section>

            <section className="holo-card p-6">
              <h2 className="text-2xl font-orbitron font-bold text-neon mb-4">Smart City Integration</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Designed for the UAE's vision of smart cities, this system integrates seamlessly with:
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-muted-foreground">V2X Communication for infrastructure coordination</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-secondary/5 rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  <span className="text-muted-foreground">Smart traffic management systems</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-accent/5 rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <span className="text-muted-foreground">Electric vehicle charging network optimization</span>
                </div>
              </div>
            </section>

            <section className="holo-card p-6">
              <h2 className="text-2xl font-orbitron font-bold text-neon mb-4">Performance Benchmarks</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-accent/10 rounded-lg">
                  <div className="text-3xl font-bold text-accent">99.9%</div>
                  <div className="text-sm text-muted-foreground mt-1">Safety Score</div>
                </div>
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <div className="text-3xl font-bold text-primary">60ms</div>
                  <div className="text-sm text-muted-foreground mt-1">Decision Time</div>
                </div>
                <div className="text-center p-4 bg-secondary/10 rounded-lg">
                  <div className="text-3xl font-bold text-secondary">1M+</div>
                  <div className="text-sm text-muted-foreground mt-1">Test Miles</div>
                </div>
              </div>
            </section>
          </div>

          {/* CTA */}
          <div className="flex justify-center pt-8">
            <Button
              onClick={() => navigate('/')}
              size="lg"
              className="font-orbitron bg-gradient-to-r from-accent to-primary hover:glow-accent"
            >
              View All Projects
            </Button>
          </div>
        </motion.article>
      </div>
    </div>
  );
};

export default AutonomousCar;
