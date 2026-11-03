import React from 'react';
import { Star, MapPin, Award, ChevronDown, ArrowRight, ShieldCheck, Dumbbell } from 'lucide-react';
import { GYM_DATA } from '../data/gymData';

interface HeroSectionProps {
  onStartClick: () => void;
  onExploreClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartClick,
  onExploreClick,
}) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#080808]"
    >
      {/* Background Photography with Rich Dramatic Lighting & Radial Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=2000&auto=format&fit=crop"
          alt="Muscular athlete weight training in a modern gym with atmospheric lighting"
          className="w-full h-full object-cover object-center filter brightness-[0.42] contrast-[1.15] scale-105 transform animate-pulse duration-[10000ms]"
        />
        {/* Layered Gradient Overlays for contrast & electric lime ambient glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/60 to-transparent" />
        <div className="absolute top-1/4 -right-24 w-96 h-96 bg-[#C6FF00]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 -left-20 w-80 h-80 bg-[#C6FF00]/5 rounded-full blur-[120px] pointer-events-none" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 z-0 bg-carbon-pattern opacity-40 pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Small Brand Pill Label */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#151515]/90 border border-[#2b2b2b] mb-6 backdrop-blur-sm animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-[#C6FF00] animate-ping" />
          <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#e0e0e0]">
            YOUR FITNESS. YOUR STRENGTH. YOUR ENERGY.
          </span>
          <span className="text-[#C6FF00] text-[10px] hidden sm:inline font-semibold">
            | {GYM_DATA.odiaName}
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="font-heading font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-tight text-white leading-[0.92] max-w-5xl mb-6">
          BUILD YOUR <br />
          <span className="text-[#C6FF00] relative inline-block text-glow">
            STRONGEST
            <svg
              className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-3 text-[#C6FF00] opacity-80"
              viewBox="0 0 300 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 9C70 3 230 3 297 9"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </span>{' '}
          <br />
          SELF.
        </h1>

        {/* Supporting Text */}
        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-[#B3B3B3] font-normal leading-relaxed mb-10 text-center">
          Transform your lifestyle, build strength, and achieve your fitness goals at{' '}
          <span className="text-white font-semibold">{GYM_DATA.name}</span>. A welcoming,
          supportive, and student-friendly fitness destination in{' '}
          <span className="text-[#C6FF00] font-medium">Acharya Vihar, Bhubaneswar</span>.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-14">
          <button
            onClick={onStartClick}
            className="w-full sm:w-auto px-8 py-4 rounded-full font-heading font-black text-sm sm:text-base tracking-wider uppercase bg-[#C6FF00] hover:bg-[#d5ff33] text-black transition-all transform hover:-translate-y-1 hover:shadow-xl hover:shadow-[#C6FF00]/30 flex items-center justify-center gap-3 cursor-pointer group"
          >
            <span>START YOUR FITNESS JOURNEY</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto px-8 py-4 rounded-full font-heading font-bold text-sm sm:text-base tracking-wider uppercase bg-[#141414]/90 hover:bg-[#202020] text-white border border-[#333333] hover:border-[#C6FF00]/50 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Dumbbell className="w-4 h-4 text-[#C6FF00]" />
            <span>EXPLORE THE GYM</span>
          </button>
        </div>

        {/* Trust Indicators (Google Rating, Reviews, Location) */}
        <div className="w-full max-w-3xl pt-8 border-t border-[#1d1d1d] grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div className="flex items-center justify-center gap-3 bg-[#111111]/80 backdrop-blur-sm border border-[#222222] rounded-2xl py-3.5 px-4 hover:border-[#333333] transition-colors">
            <div className="w-9 h-9 rounded-full bg-amber-400/10 flex items-center justify-center text-amber-400">
              <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-black text-lg text-white">4.8 / 5</span>
              </div>
              <p className="text-xs text-[#A5A5A5] font-medium">Google Rating</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 bg-[#111111]/80 backdrop-blur-sm border border-[#222222] rounded-2xl py-3.5 px-4 hover:border-[#333333] transition-colors">
            <div className="w-9 h-9 rounded-full bg-[#C6FF00]/10 flex items-center justify-center text-[#C6FF00]">
              <Award className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-black text-lg text-white">448+</span>
              </div>
              <p className="text-xs text-[#A5A5A5] font-medium">Google Reviews</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 bg-[#111111]/80 backdrop-blur-sm border border-[#222222] rounded-2xl py-3.5 px-4 hover:border-[#333333] transition-colors">
            <div className="w-9 h-9 rounded-full bg-sky-400/10 flex items-center justify-center text-sky-400">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-black text-sm text-white">Acharya Vihar</span>
              </div>
              <p className="text-xs text-[#A5A5A5] font-medium">Bhubaneswar, Odisha</p>
            </div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <a
          href="#stats"
          className="mt-12 text-[#777] hover:text-[#C6FF00] transition-colors flex flex-col items-center gap-1 text-xs uppercase tracking-widest"
          aria-label="Scroll to stats"
        >
          <span>Scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#C6FF00]" />
        </a>
      </div>
    </section>
  );
};
