import React from 'react';
import { Users, GraduationCap, Wallet, Car, ArrowRight, ShieldCheck, Dumbbell } from 'lucide-react';
import { GYM_DATA } from '../data/gymData';

interface AboutSectionProps {
  onVisitClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onVisitClick }) => {
  const highlights = [
    {
      title: 'Helpful and Cooperative Trainers',
      desc: 'Guidance and posture check for both newcomers and seasoned athletes.',
      icon: Users,
    },
    {
      title: 'Student-Friendly Environment',
      desc: 'Approachable culture welcoming university & college students in Bhubaneswar.',
      icon: GraduationCap,
    },
    {
      title: 'Pocket-Friendly Fitness Experience',
      desc: 'High value fitness memberships planned to keep workouts accessible to all.',
      icon: Wallet,
    },
    {
      title: 'Spacious Parking',
      desc: 'Hassle-free parking space for two-wheelers and vehicles right at the premises.',
      icon: Car,
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#080808] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#C6FF00]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Gym Photography & Overlays */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#262626] shadow-2xl group">
              <img
                src="https://lh3.googleusercontent.com/grass-cs/AABkmLcCv7ST1gpy5Q_YUc-30iOB24CVPG2ZqpRx4wsm10c_sbOp79tCzEL9nhSOwwFwoYKUzNN1fhOgiXJeiZzZPGFqd79xuZZGb8ixtF80UAUYWw3ndTkuZbhW9bcwy0ALaidSkulo=w1280-h958-k-no"
                alt="Authentic training floor at ENERGYM FITNESS CLUB, Acharya Vihar, Bhubaneswar"
                className="w-full h-[480px] sm:h-[540px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              {/* Verified Authentic Badge Tag */}
              <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#C6FF00]/40 flex items-center gap-1.5 shadow-lg">
                <ShieldCheck className="w-4 h-4 text-[#C6FF00]" />
                <span className="text-[11px] font-bold text-white uppercase tracking-wider">
                  Verified Google Photos
                </span>
              </div>

              {/* Floating Badge on Image */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#141414]/90 backdrop-blur-md border border-[#333333] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#C6FF00] flex items-center justify-center text-black font-black">
                    <Dumbbell className="w-6 h-6 -rotate-45" />
                  </div>
                  <div>
                    <h4 className="font-heading font-black text-sm uppercase text-white">
                      Acharya Vihar, Bhubaneswar
                    </h4>
                    <p className="text-xs text-[#A5A5A5]">
                      {GYM_DATA.odiaName} • Real Club Interior
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[#C6FF00] font-black text-base">4.8 ★</div>
                  <div className="text-[10px] text-[#A5A5A5] uppercase">Google Rating</div>
                </div>
              </div>
            </div>

            {/* Accent floating stats tag */}
            <div className="absolute -top-4 -right-4 hidden sm:flex items-center gap-2 bg-[#1b1b1b] border border-[#C6FF00]/40 px-4 py-2 rounded-xl shadow-lg">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C6FF00] animate-ping" />
              <span className="text-xs font-bold text-white tracking-wide uppercase">Open Until 10:00 PM</span>
            </div>
          </div>

          {/* Right Column: Editorial & Philosophy */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#181818] border border-[#2b2b2b] text-[11px] font-bold tracking-widest text-[#C6FF00] uppercase mb-4 w-fit">
              <span>ABOUT CHINMAYA GYM</span>
            </div>

            {/* Main Section Heading */}
            <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-white leading-tight mb-6">
              MORE THAN A GYM. <br />
              <span className="text-[#C6FF00]">A COMMUNITY THAT BUILDS YOU.</span>
            </h2>

            {/* Narrative Paragraphs */}
            <div className="space-y-4 text-[#B3B3B3] text-base leading-relaxed mb-8">
              <p>
                Welcome to <strong className="text-white">{GYM_DATA.name}</strong> – your fitness destination in{' '}
                <span className="text-white font-medium">Acharya Vihar, Bhubaneswar</span>.
              </p>
              <p>
                We believe fitness is not just about lifting weights. It is about discipline,
                confidence, consistency, and becoming a stronger version of yourself each passing day.
              </p>
              <p>
                Whether you are beginning your fitness journey, working towards bodybuilding goals,
                or maintaining a healthy lifestyle, {GYM_DATA.name} aims to provide a supportive
                environment where you can work towards your goals.
              </p>
            </div>

            {/* Four Highlight Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#131313] border border-[#222222] hover:border-[#C6FF00]/40 transition-colors"
                  >
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="w-7 h-7 rounded-lg bg-[#C6FF00]/10 flex items-center justify-center text-[#C6FF00]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-white leading-snug">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-xs text-[#8c8c8c] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div>
              <button
                onClick={onVisitClick}
                className="px-7 py-3.5 rounded-full font-heading font-black text-sm tracking-wider uppercase bg-[#C6FF00] hover:bg-[#d5ff33] text-black transition-all flex items-center gap-2.5 shadow-lg shadow-[#C6FF00]/15 hover:scale-105 cursor-pointer"
              >
                <span>VISIT OUR GYM</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
