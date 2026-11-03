import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Navigation, ArrowUp, X, Sparkles } from 'lucide-react';
import { GYM_DATA } from '../data/gymData';

interface FloatingActionsProps {
  onJoinClick: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onJoinClick }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showChatTooltip, setShowChatTooltip] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsAppChat = () => {
    const text = encodeURIComponent(
      `Hello ${GYM_DATA.name}, I would like to inquire about gym membership, facilities, and visiting times at Acharya Vihar.`
    );
    window.open(`https://wa.me/${GYM_DATA.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <>
      {/* 1. Desktop & Tablet Floating WhatsApp Button (Bottom Right) */}
      <div className="fixed bottom-20 sm:bottom-6 right-5 z-40 flex flex-col items-end gap-3 pointer-events-auto">
        {/* Optional Chat Prompt Tooltip */}
        {showChatTooltip && (
          <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#141414] border border-[#2e2e2e] shadow-2xl text-xs text-white backdrop-blur-md animate-bounce">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
            <span>Chat with Gym Team</span>
            <button
              onClick={() => setShowChatTooltip(false)}
              className="text-[#777] hover:text-white ml-1 p-0.5"
              aria-label="Dismiss tooltip"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        )}

        <div className="flex items-center gap-2">
          {/* Back to top button */}
          {showBackToTop && (
            <button
              onClick={scrollToTop}
              className="p-3 rounded-full bg-[#181818] hover:bg-[#252525] text-white border border-[#333] shadow-lg transition-all hover:scale-110 cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 text-[#C6FF00]" />
            </button>
          )}

          {/* WhatsApp Floating Circle */}
          <button
            onClick={handleWhatsAppChat}
            className="w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-black shadow-xl shadow-[#25D366]/30 flex items-center justify-center transition-all transform hover:scale-110 cursor-pointer group"
            aria-label="Chat with Energym on WhatsApp"
          >
            <MessageCircle className="w-7 h-7 fill-black group-hover:rotate-12 transition-transform" />
          </button>
        </div>
      </div>

      {/* 2. Mobile-Specific Fixed Bottom Contact Bar */}
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-[#0d0d0d]/95 backdrop-blur-xl border-t border-[#222222] px-3 py-2 flex items-center justify-between gap-2 shadow-2xl">
        {/* Call Now */}
        <a
          href={`tel:${GYM_DATA.phone}`}
          className="flex-1 py-2.5 px-2 rounded-xl bg-[#181818] border border-[#292929] text-white flex flex-col items-center justify-center gap-0.5"
        >
          <Phone className="w-4 h-4 text-[#C6FF00]" />
          <span className="text-[10px] font-bold tracking-wider uppercase">CALL NOW</span>
        </a>

        {/* WhatsApp */}
        <button
          onClick={handleWhatsAppChat}
          className="flex-1 py-2.5 px-2 rounded-xl bg-[#181818] border border-[#292929] text-white flex flex-col items-center justify-center gap-0.5"
        >
          <MessageCircle className="w-4 h-4 text-[#25D366]" />
          <span className="text-[10px] font-bold tracking-wider uppercase">WHATSAPP</span>
        </button>

        {/* Directions */}
        <a
          href={GYM_DATA.mapsDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-2 rounded-xl bg-[#181818] border border-[#292929] text-white flex flex-col items-center justify-center gap-0.5"
        >
          <Navigation className="w-4 h-4 text-sky-400" />
          <span className="text-[10px] font-bold tracking-wider uppercase">MAPS</span>
        </a>

        {/* Join Now */}
        <button
          onClick={onJoinClick}
          className="flex-[1.2] py-2.5 px-3 rounded-xl bg-[#C6FF00] text-black font-heading font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1 shadow-md shadow-[#C6FF00]/20"
        >
          <span>JOIN NOW</span>
        </button>
      </div>
    </>
  );
};
