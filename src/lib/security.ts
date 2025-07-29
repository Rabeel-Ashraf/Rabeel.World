import DOMPurify from 'dompurify';

// Sanitize user input to prevent XSS
export const sanitizeInput = (input: string): string => {
  return DOMPurify.sanitize(input, { 
    ALLOWED_TAGS: [],
    ALLOWED_ATTR: []
  });
};

// Email obfuscation utility
export const obfuscateEmail = (email: string): string => {
  return email.replace('@', ' [at] ').replace('.', ' [dot] ');
};

// Validate external URLs before opening
export const isValidUrl = (url: string): boolean => {
  try {
    const urlObj = new URL(url);
    return ['https:', 'http:', 'mailto:'].includes(urlObj.protocol);
  } catch {
    return false;
  }
};

// Secure external link handler
export const openSecureLink = (url: string): void => {
  if (!isValidUrl(url)) {
    console.warn('Invalid URL blocked:', url);
    return;
  }
  
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
  if (newWindow) {
    newWindow.opener = null;
  }
};

// Rate limiting utility (simple client-side implementation)
class RateLimit {
  private attempts = new Map<string, number[]>();
  
  checkLimit(key: string, maxAttempts: number, windowMs: number): boolean {
    const now = Date.now();
    const windowStart = now - windowMs;
    
    if (!this.attempts.has(key)) {
      this.attempts.set(key, []);
    }
    
    const keyAttempts = this.attempts.get(key)!;
    
    // Remove old attempts outside the window
    const validAttempts = keyAttempts.filter(time => time > windowStart);
    this.attempts.set(key, validAttempts);
    
    if (validAttempts.length >= maxAttempts) {
      return false;
    }
    
    validAttempts.push(now);
    return true;
  }
}

export const rateLimit = new RateLimit();