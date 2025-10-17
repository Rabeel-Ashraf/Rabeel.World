import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, MessageSquare, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ChatWithData = () => {
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
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-accent p-4">
                <MessageSquare className="w-full h-full text-background" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-neon">
                  Chat With My Data
                </h1>
                <p className="text-muted-foreground mt-2">RAG Pipeline for Intelligent Document Q&A</p>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="w-full h-64 md:h-96 rounded-lg bg-gradient-to-br from-secondary/20 via-accent/20 to-primary/20 flex items-center justify-center border border-border">
            <MessageSquare className="w-32 h-32 text-secondary/40" />
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none space-y-6">
            <section className="holo-card p-6">
              <h2 className="text-2xl font-orbitron font-bold text-neon mb-4">Project Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                Chat With My Data is an advanced Retrieval-Augmented Generation (RAG) system that transforms static documents into interactive, intelligent knowledge bases. Using cutting-edge NLP and vector databases, this platform enables natural conversations with your data, extracting insights and answers from complex document collections with unprecedented accuracy.
              </p>
            </section>

            <section className="holo-card p-6">
              <h2 className="text-2xl font-orbitron font-bold text-neon mb-4">Key Features</h2>
              <div className="space-y-4">
                {[
                  'Advanced document parsing and embedding generation',
                  'Vector database for semantic search and retrieval',
                  'Context-aware question answering with source citations',
                  'Support for multiple document formats (PDF, DOCX, TXT)',
                  'Real-time conversational interface with memory',
                  'Customizable prompts and retrieval strategies'
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
                The RAG pipeline is built on a sophisticated architecture combining state-of-the-art AI technologies:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <strong>Document Processing:</strong> Advanced chunking and preprocessing algorithms</li>
                <li>• <strong>Embeddings:</strong> OpenAI's text-embedding-ada-002 for semantic understanding</li>
                <li>• <strong>Vector Storage:</strong> Pinecone/ChromaDB for efficient similarity search</li>
                <li>• <strong>LLM Integration:</strong> GPT-4 for intelligent response generation</li>
                <li>• <strong>Context Management:</strong> Sophisticated context window optimization</li>
              </ul>
            </section>

            <section className="holo-card p-6">
              <h2 className="text-2xl font-orbitron font-bold text-neon mb-4">Business Applications</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-secondary/5 rounded-lg border border-secondary/20">
                  <h3 className="font-semibold text-foreground mb-2">Enterprise Knowledge Base</h3>
                  <p className="text-sm text-muted-foreground">Transform corporate documents into searchable AI assistants</p>
                </div>
                <div className="p-4 bg-accent/5 rounded-lg border border-accent/20">
                  <h3 className="font-semibold text-foreground mb-2">Legal & Compliance</h3>
                  <p className="text-sm text-muted-foreground">Quick contract analysis and regulatory compliance checks</p>
                </div>
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <h3 className="font-semibold text-foreground mb-2">Research & Academia</h3>
                  <p className="text-sm text-muted-foreground">Literature review and academic paper analysis</p>
                </div>
                <div className="p-4 bg-secondary/5 rounded-lg border border-secondary/20">
                  <h3 className="font-semibold text-foreground mb-2">Customer Support</h3>
                  <p className="text-sm text-muted-foreground">AI-powered support from documentation and FAQs</p>
                </div>
              </div>
            </section>

            <section className="holo-card p-6">
              <h2 className="text-2xl font-orbitron font-bold text-neon mb-4">Performance Metrics</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The system achieves impressive performance across various benchmarks:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <div className="text-3xl font-bold text-primary">95%</div>
                  <div className="text-sm text-muted-foreground mt-1">Accuracy Rate</div>
                </div>
                <div className="text-center p-4 bg-secondary/10 rounded-lg">
                  <div className="text-3xl font-bold text-secondary">&lt;2s</div>
                  <div className="text-sm text-muted-foreground mt-1">Response Time</div>
                </div>
                <div className="text-center p-4 bg-accent/10 rounded-lg">
                  <div className="text-3xl font-bold text-accent">10K+</div>
                  <div className="text-sm text-muted-foreground mt-1">Documents</div>
                </div>
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground mt-1">Availability</div>
                </div>
              </div>
            </section>
          </div>

          {/* CTA */}
          <div className="flex justify-center pt-8">
            <Button
              onClick={() => navigate('/')}
              size="lg"
              className="font-orbitron bg-gradient-to-r from-secondary to-accent hover:glow-secondary"
            >
              View All Projects
            </Button>
          </div>
        </motion.article>
      </div>
    </div>
  );
};

export default ChatWithData;
