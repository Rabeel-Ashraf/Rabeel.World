// AI Bot Detection & Protection Layer
// Client-side techniques that work against headless browsers

const AI_BOT_PATTERNS = [
  /GPTBot/i,
  /ChatGPT/i,
  /OAI-SearchBot/i,
  /anthropic/i,
  /Claude/i,
  /CCBot/i,
  /PerplexityBot/i,
  /Bytespider/i,
  /Amazonbot/i,
  /FacebookBot/i,
  /Meta-External/i,
  /Applebot-Extended/i,
  /Google-Extended/i,
  /Diffbot/i,
  /cohere-ai/i,
  /YouBot/i,
  /Grok/i,
  /xAI/i,
  /Scrapy/i,
  /PetalBot/i,
  /img2dataset/i,
  /HeadlessChrome/i,
  /PhantomJS/i,
  /Selenium/i,
  /Puppeteer/i,
];

// Detect headless browsers and bots
export const detectBot = (): boolean => {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') {
    return true; // Server-side = bot
  }

  const ua = navigator.userAgent;
  
  // Check against known AI bot patterns
  if (AI_BOT_PATTERNS.some(pattern => pattern.test(ua))) {
    return true;
  }

  // Headless browser detection
  const checks = [
    // WebDriver detection
    !!(navigator as any).webdriver,
    // Phantom.js
    !!(window as any)._phantom,
    !!(window as any).__nightmare,
    // Puppeteer/Playwright
    !!(window as any).__playwright,
    // Automation
    (navigator as any).languages === undefined,
    navigator.languages?.length === 0,
    // Chrome headless
    /HeadlessChrome/.test(ua),
    // Missing plugins (real browsers have plugins)
    navigator.plugins?.length === 0 && !/Mobile|Android/i.test(ua),
    // Missing WebGL (most bots don't have it)
    !hasWebGL(),
    // Selenium
    !!(document as any).$cdc_asdjflasutopfhvcZLmcfl_,
    !!(window as any).callSelenium,
    !!(window as any)._Selenium_IDE_Recorder,
  ];

  return checks.some(Boolean);
};

// WebGL fingerprint check
const hasWebGL = (): boolean => {
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    return !!gl;
  } catch {
    return false;
  }
};

// Invisible CAPTCHA-like challenge (runs automatically)
export const runBotChallenge = (): Promise<boolean> => {
  return new Promise((resolve) => {
    // Check if requestAnimationFrame works (bots often fake it)
    let rafCount = 0;
    const start = performance.now();
    
    const checkRaf = () => {
      rafCount++;
      if (rafCount < 3) {
        requestAnimationFrame(checkRaf);
      } else {
        const elapsed = performance.now() - start;
        // Real browsers take ~16ms per frame, bots often return instantly
        resolve(elapsed > 30);
      }
    };
    
    requestAnimationFrame(checkRaf);
  });
};

// Add honeypot elements that bots will interact with
export const createHoneypot = (): void => {
  if (typeof document === 'undefined') return;
  
  // Hidden links that only bots will follow
  const honeypot = document.createElement('a');
  honeypot.href = '/trap-for-bots-do-not-follow';
  honeypot.style.cssText = 'position:absolute;left:-9999px;opacity:0;pointer-events:none;';
  honeypot.setAttribute('aria-hidden', 'true');
  honeypot.textContent = 'Click here for more content';
  honeypot.dataset.botTrap = 'true';
  document.body.appendChild(honeypot);
};

// Log bot attempts (for monitoring)
export const logBotAttempt = (reason: string): void => {
  if (process.env.NODE_ENV === 'development') {
    console.warn(`[Bot Detection] Suspicious activity: ${reason}`);
  }
  // In production, you could send this to an analytics endpoint
};

// Initialize protection
export const initBotProtection = async (): Promise<void> => {
  if (detectBot()) {
    logBotAttempt('User-Agent or browser fingerprint');
    // Optionally: serve empty content, redirect, or slow response
    return;
  }
  
  const passedChallenge = await runBotChallenge();
  if (!passedChallenge) {
    logBotAttempt('Failed timing challenge');
  }
  
  // Add honeypot after DOM is ready
  if (document.readyState === 'complete') {
    createHoneypot();
  } else {
    window.addEventListener('load', createHoneypot);
  }
};
