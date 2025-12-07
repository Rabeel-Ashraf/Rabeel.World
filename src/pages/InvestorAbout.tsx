const InvestorAbout = () => {
  return (
    <main className="min-h-screen bg-black pt-24">
      {/* Portrait */}
      <div className="w-full h-[70vh] bg-black flex items-center justify-center mb-16">
        <div 
          className="w-full max-w-3xl h-full mx-8"
          style={{
            background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span className="text-mono text-white/20 text-sm tracking-widest uppercase">
            Portrait
          </span>
        </div>
      </div>

      {/* Bio */}
      <div className="max-w-3xl mx-auto px-8 pb-24 text-center">
        <p className="text-body-investor mb-6">
          Previously founded and exited multiple LLM infrastructure companies.
        </p>
        <p className="text-body-investor mb-6">
          Early investor in xAI, Anduril, Scale, and other $1B+ frontier labs.
        </p>
        <p className="text-body-investor mb-6">
          Current focus: model routing layers, defense autonomy, post-state capital.
        </p>
        <p className="text-body-investor">
          Based in Dubai, UAE.
        </p>
      </div>
    </main>
  );
};

export default InvestorAbout;