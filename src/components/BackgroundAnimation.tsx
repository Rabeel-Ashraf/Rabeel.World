import { memo } from 'react';

const BackgroundAnimation = memo(() => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Flowing gradient waves */}
      <div className="absolute inset-0 bg-gradient-animation opacity-20" />
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0">
        {/* Large floating orbs */}
        <div className="floating-orb floating-orb-1" />
        <div className="floating-orb floating-orb-2" />
        <div className="floating-orb floating-orb-3" />
        
        {/* Geometric grid pattern */}
        <div className="geometric-grid" />
        
        {/* Subtle particle dots */}
        <div className="particle-field">
          {Array.from({ length: 50 }, (_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
});

BackgroundAnimation.displayName = 'BackgroundAnimation';

export default BackgroundAnimation;