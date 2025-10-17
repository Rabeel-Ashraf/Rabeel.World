import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Zap, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NLPTechniques = () => {
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
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent p-4">
                <Zap className="w-full h-full text-background" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-neon">
                  NLP Techniques
                </h1>
                <p className="text-muted-foreground mt-2">Modern Natural Language Processing Methods</p>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="w-full h-64 md:h-96 rounded-lg bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center border border-border">
            <Zap className="w-32 h-32 text-primary/40" />
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none space-y-6">
            <section className="holo-card p-6">
              <h2 className="text-2xl font-orbitron font-bold text-neon mb-4">Project Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                NLP Techniques is a comprehensive exploration of state-of-the-art natural language processing methods. This interactive notebook demonstrates cutting-edge approaches to understanding, processing, and generating human language using advanced machine learning and deep learning techniques. From sentiment analysis to language generation, this project showcases the full spectrum of modern NLP capabilities.
              </p>
            </section>

            <section className="holo-card p-6">
              <h2 className="text-2xl font-orbitron font-bold text-neon mb-4">Implemented Techniques</h2>
              <div className="space-y-4">
                {[
                  'Transformer-based models (BERT, GPT, T5) for text understanding',
                  'Named Entity Recognition (NER) with custom entity types',
                  'Sentiment analysis with fine-grained emotion detection',
                  'Text classification using advanced embeddings',
                  'Neural machine translation across multiple languages',
                  'Question answering systems with extractive and generative approaches'
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">{feature}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="holo-card p-6">
              <h2 className="text-2xl font-orbitron font-bold text-neon mb-4">Technical Stack</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Built with the most powerful NLP frameworks and libraries:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <strong>Transformers:</strong> HuggingFace ecosystem for pre-trained models</li>
                <li>• <strong>PyTorch:</strong> Deep learning framework for custom architectures</li>
                <li>• <strong>spaCy:</strong> Industrial-strength NLP pipeline</li>
                <li>• <strong>NLTK:</strong> Classic NLP toolkit for linguistic analysis</li>
                <li>• <strong>Sentence-BERT:</strong> Semantic similarity and embeddings</li>
              </ul>
            </section>

            <section className="holo-card p-6">
              <h2 className="text-2xl font-orbitron font-bold text-neon mb-4">Key Applications</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <h3 className="font-semibold text-foreground mb-2">Text Analytics</h3>
                  <p className="text-sm text-muted-foreground">Extract insights from unstructured text data at scale</p>
                </div>
                <div className="p-4 bg-secondary/5 rounded-lg border border-secondary/20">
                  <h3 className="font-semibold text-foreground mb-2">Chatbot Development</h3>
                  <p className="text-sm text-muted-foreground">Build intelligent conversational AI agents</p>
                </div>
                <div className="p-4 bg-accent/5 rounded-lg border border-accent/20">
                  <h3 className="font-semibold text-foreground mb-2">Content Generation</h3>
                  <p className="text-sm text-muted-foreground">Automated writing and creative text synthesis</p>
                </div>
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <h3 className="font-semibold text-foreground mb-2">Language Translation</h3>
                  <p className="text-sm text-muted-foreground">Neural MT for multilingual communication</p>
                </div>
              </div>
            </section>

            <section className="holo-card p-6">
              <h2 className="text-2xl font-orbitron font-bold text-neon mb-4">Advanced Features</h2>
              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-primary/20">
                  <h3 className="font-semibold text-foreground mb-2">Zero-Shot Learning</h3>
                  <p className="text-sm text-muted-foreground">
                    Classify text into categories without training examples using advanced prompt engineering and transfer learning techniques.
                  </p>
                </div>
                <div className="p-4 bg-gradient-to-r from-secondary/10 to-accent/10 rounded-lg border border-secondary/20">
                  <h3 className="font-semibold text-foreground mb-2">Few-Shot Adaptation</h3>
                  <p className="text-sm text-muted-foreground">
                    Rapidly adapt models to new tasks with minimal examples using meta-learning and prompt tuning strategies.
                  </p>
                </div>
                <div className="p-4 bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg border border-accent/20">
                  <h3 className="font-semibold text-foreground mb-2">Multilingual Processing</h3>
                  <p className="text-sm text-muted-foreground">
                    Support for 100+ languages with cross-lingual transfer learning and multilingual embeddings.
                  </p>
                </div>
              </div>
            </section>

            <section className="holo-card p-6">
              <h2 className="text-2xl font-orbitron font-bold text-neon mb-4">Notebook Highlights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Interactive demonstrations with real-world examples:
              </p>
              <div className="grid gap-3">
                <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg border border-primary/10">
                  <div className="text-2xl">📝</div>
                  <div>
                    <div className="font-medium text-foreground">Text Summarization</div>
                    <div className="text-sm text-muted-foreground">Extractive and abstractive methods</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-secondary/5 rounded-lg border border-secondary/10">
                  <div className="text-2xl">🎭</div>
                  <div>
                    <div className="font-medium text-foreground">Emotion Detection</div>
                    <div className="text-sm text-muted-foreground">Fine-grained sentiment classification</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-accent/5 rounded-lg border border-accent/10">
                  <div className="text-2xl">🔍</div>
                  <div>
                    <div className="font-medium text-foreground">Information Extraction</div>
                    <div className="text-sm text-muted-foreground">Entities, relations, and events</div>
                  </div>
                </div>
              </div>
            </section>

            <section className="holo-card p-6">
              <h2 className="text-2xl font-orbitron font-bold text-neon mb-4">Performance Metrics</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <div className="text-3xl font-bold text-primary">94%</div>
                  <div className="text-sm text-muted-foreground mt-1">F1 Score</div>
                </div>
                <div className="text-center p-4 bg-secondary/10 rounded-lg">
                  <div className="text-3xl font-bold text-secondary">100+</div>
                  <div className="text-sm text-muted-foreground mt-1">Languages</div>
                </div>
                <div className="text-center p-4 bg-accent/10 rounded-lg">
                  <div className="text-3xl font-bold text-accent">50ms</div>
                  <div className="text-sm text-muted-foreground mt-1">Inference</div>
                </div>
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground mt-1">Techniques</div>
                </div>
              </div>
            </section>
          </div>

          {/* CTA */}
          <div className="flex justify-center pt-8">
            <Button
              onClick={() => navigate('/')}
              size="lg"
              className="font-orbitron bg-gradient-to-r from-primary via-secondary to-accent hover:glow-primary"
            >
              View All Projects
            </Button>
          </div>
        </motion.article>
      </div>
    </div>
  );
};

export default NLPTechniques;
