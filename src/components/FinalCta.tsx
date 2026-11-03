import React from 'react';
import { ArrowRight, Phone, Dumbbell, Sparkles } from 'lucide-react';
import { GYM_DATA } from '../data/gymData';

interface FinalCtaProps {
  onJoinClick: () => void;
  onContactClick: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({
  onJoinClick,
  onContactClick,
}) => {
  return (
    <section className="relative py-28 overflow-hidden bg-[#080808] border-t border-[#1c1c1c]">
      {/* Background with dramatic lifter silhouette & lime green lighting */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2000&auto=format&fit=crop"
          alt="Athlete lifting weights with dark overlay and lime lighting"
          className="w-full h-full object-cover object-center filter brightness-[0.25] contrast-[1.25]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/90 via-[#080808]/70 to-[#080808]/90" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#C6FF00]/10 rounded-full blur-[140px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Odia & English Sub-Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#151515] border border-[#2e2e2e] mb-6 backdrop-blur-md">
          <Dumbbell className="w-3.5 h-3.5 text-[#C6FF00]" />
          <span className="text-xs font-bold uppercase tracking-widest text-white">
            Acharya Vihar, Bhubaneswar
          </span>
          <span className="text-[#C6FF00] text-xs font-semibold">
            • {GYM_DATA.odiaName}
          </span>
        </div>

        {/* Main Dramatic Heading */}
        <h2 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white leading-[0.95] mb-6">
          STOP WAITING. <br />
          <span className="text-[#C6FF00] text-glow">START TRANSFORMING.</span>
        </h2>

        {/* Supporting Copy */}
        <p className="max-w-xl text-base sm:text-lg text-[#B3B3B3] leading-relaxed mb-10">
          Your stronger, healthier lifestyle starts with one decision. Make today count at {GYM_DATA.name}.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={onJoinClick}
            className="w-full sm:w-auto px-9 py-4 rounded-full font-heading font-black text-sm tracking-wider uppercase bg-[#C6FF00] hover:bg-[#d5ff33] text-black shadow-xl shadow-[#C6FF00]/25 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 cursor-pointer group"
          >
            <span>JOIN CHINMAYA GYM TODAY</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onContactClick}
            className="w-full sm:w-auto px-8 py-4 rounded-full font-heading font-bold text-sm tracking-wider uppercase bg-[#161616] hover:bg-[#222222] text-white border border-[#333333] hover:border-[#C6FF00]/50 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Phone className="w-4 h-4 text-[#C6FF00]" />
            <span>CONTACT US</span>
          </button>
        </div>
      </div>
    </section>
  );
};
