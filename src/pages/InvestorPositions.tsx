const positions = [
  { name: 'xAI', type: 'logo' },
  { name: 'Anduril', type: 'logo' },
  { name: 'Scale AI', type: 'logo' },
  { name: 'Project VARDAN', type: 'codename' },
  { name: '[Redacted] $3.8B', type: 'redacted' },
  { name: 'Project AURORA', type: 'codename' },
  { name: 'Anthropic', type: 'logo' },
  { name: '[Stealth]', type: 'redacted' },
  { name: 'Project NEXUS', type: 'codename' },
];

const InvestorPositions = () => {
  return (
    <main className="min-h-screen bg-black pt-32 pb-24 px-8">
      <h1 className="text-section-title mb-24 text-center">
        SELECTED POSITIONS
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {positions.map((position, index) => (
          <div
            key={index}
            className="flex items-center justify-center h-32"
          >
            {position.type === 'redacted' ? (
              <div className="redacted-box">
                <span className="text-mono text-sm">{position.name}</span>
              </div>
            ) : position.type === 'codename' ? (
              <span className="text-mono text-white/40 text-lg tracking-wider">
                {position.name}
              </span>
            ) : (
              <span className="text-2xl font-light text-white tracking-wide">
                {position.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </main>
  );
};

export default InvestorPositions;