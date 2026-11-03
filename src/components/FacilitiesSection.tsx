import React, { useState } from 'react';
import { Dumbbell, ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { FACILITIES, Facility, GYM_DATA } from '../data/gymData';

interface FacilitiesSectionProps {
  onFacilityInquire: (facilityName: string) => void;
}

export const FacilitiesSection: React.FC<FacilitiesSectionProps> = ({
  onFacilityInquire,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'Strength', 'Hypertrophy', 'Resistance', 'Endurance', 'Coaching', 'Wellness'];

  const filteredFacilities = activeFilter === 'All'
    ? FACILITIES
    : FACILITIES.filter(f => f.category === activeFilter);

  return (
    <section id="facilities" className="py-24 bg-[#0c0c0c] relative border-t border-[#1c1c1c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#181818] border border-[#2b2b2b] text-[11px] font-bold tracking-widest text-[#C6FF00] uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C6FF00]" />
            <span>TRAINING CATEGORIES</span>
          </div>

          <h2 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white leading-tight mb-4">
            EVERY REP. EVERY SET. <br />
            <span className="text-[#C6FF00]">EVERY GOAL.</span>
          </h2>

          <p className="text-base text-[#A5A5A5] leading-relaxed">
            From heavy compound lifting to stamina-boosting cardio and personal guidance, explore the training disciplines and focus areas available at {GYM_DATA.name}.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                activeFilter === cat
                  ? 'bg-[#C6FF00] text-black shadow-md shadow-[#C6FF00]/20'
                  : 'bg-[#181818] text-[#A5A5A5] hover:text-white hover:bg-[#222222] border border-[#2a2a2a]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 6 Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFacilities.map((item) => (
            <div
              key={item.id}
              className="group bg-[#141414] rounded-2xl overflow-hidden border border-[#222222] hover:border-[#C6FF00]/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#C6FF00]/10 flex flex-col justify-between"
            >
              {/* Image Frame */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/30 to-transparent" />
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold tracking-wider text-[#C6FF00] uppercase border border-[#333]">
                  {item.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-black text-2xl uppercase tracking-tight text-white mb-2 group-hover:text-[#C6FF00] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#A5A5A5] leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {item.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-medium text-[#7a7a7a] bg-[#1c1c1c] px-2.5 py-0.5 rounded-md"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Enquiry trigger */}
                  <button
                    onClick={() => onFacilityInquire(item.title)}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#1c1c1c] hover:bg-[#C6FF00] text-white hover:text-black font-heading font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Enquire About {item.title}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Proposed Categories Notice */}
        <div className="mt-12 p-4 rounded-xl bg-[#131313] border border-[#222222] text-center max-w-2xl mx-auto">
          <p className="text-xs text-[#777777] leading-relaxed">
            * Note: These reflect proposed fitness categories and training styles at {GYM_DATA.name}. Please speak directly with our cooperative training staff during your visit to design your personalized workout program.
          </p>
        </div>
      </div>
    </section>
  );
};
