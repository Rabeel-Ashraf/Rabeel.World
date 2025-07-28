import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  const handleWhatsAppClick = () => {
    window.open(
      'https://wa.me/971501359046?text=Hi%20Rabeel,%20I%20would%20like%20to%20discuss%20a%20project%20with%20you',
      '_blank'
    );
  };

  return (
    <motion.button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, duration: 0.5 }}
    >
      <MessageCircle className="w-7 h-7 text-white group-hover:animate-pulse" />
      
      {/* Pulse Animation */}
      <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
      
      {/* Tooltip */}
      <div className="absolute bottom-16 right-0 bg-card text-foreground px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-border">
        Chat on WhatsApp
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-card"></div>
      </div>
    </motion.button>
  );
};

export default FloatingWhatsApp;