import React from 'react';
import { Smile, Users, GraduationCap, Wallet, Car, Flame, Check } from 'lucide-react';
import { WHY_CHOOSE_US, GYM_DATA } from '../data/gymData';

export const WhyChooseUs: React.FC = () => {
  // Map icon names to Lucide components
  const iconMap: Record<string, React.FC<{ className?: string }>> = {
    Smile,
    Users,
    GraduationCap,
    Wallet,
    Car,
    Flame,
  };

  return (
    <section id="why-us" className="py-24 bg-[#080808] relative overflow-hidden">
      {/* Glow gradient */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#C6FF00]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#181818] border border-[#2b2b2b] text-[11px] font-bold tracking-widest text-[#C6FF00] uppercase mb-4">
              <span>CORE ADVANTAGES</span>
            </div>
            <h2 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white leading-tight">
              YOUR GOALS. <br />
              <span className="text-[#C6FF00]">OUR ENERGY.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#A5A5A5] max-w-md leading-relaxed">
            Rated 4.8 stars with 448+ authentic Google reviews by local lifters, students, and fitness enthusiasts in Acharya Vihar, Bhubaneswar.
          </p>
        </div>

        {/* 6 Selling Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item) => {
            const IconComponent = iconMap[item.iconName] || Flame;
            return (
              <div
                key={item.number}
                className="group relative bg-[#121212] hover:bg-[#181818] rounded-2xl p-8 border border-[#222222] hover:border-[#C6FF00]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#C6FF00]/5 flex flex-col justify-between"
              >
                {/* Number Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#1c1c1c] group-hover:bg-[#C6FF00] text-[#C6FF00] group-hover:text-black flex items-center justify-center transition-all duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="font-heading font-black text-xl text-[#3b3b3b] group-hover:text-[#C6FF00] transition-colors">
                    {item.number}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-heading font-black text-xl uppercase tracking-tight text-white mb-2 group-hover:text-[#C6FF00] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#A5A5A5] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Subtle indicator */}
                <div className="mt-6 pt-4 border-t border-[#1c1c1c] flex items-center gap-2 text-[11px] font-semibold text-[#666] group-hover:text-white transition-colors">
                  <Check className="w-3.5 h-3.5 text-[#C6FF00]" />
                  <span>Verified Club Feature</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
