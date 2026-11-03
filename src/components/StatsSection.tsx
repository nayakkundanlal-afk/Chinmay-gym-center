import React, { useState, useEffect, useRef } from 'react';
import { Star, MessageSquare, Clock, HeartHandshake } from 'lucide-react';
import { GYM_DATA } from '../data/gymData';

export const StatsSection: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [reviewCount, setReviewCount] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          // Counter animation for reviews
          let start = 0;
          const target = GYM_DATA.totalReviews; // 448
          const duration = 1600;
          const stepTime = 20;
          const totalSteps = duration / stepTime;
          const increment = Math.ceil(target / totalSteps);

          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setReviewCount(target);
              clearInterval(timer);
            } else {
              setReviewCount(start);
            }
          }, stepTime);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const stats = [
    {
      value: `${GYM_DATA.rating}/5`,
      label: 'Google Rating',
      sublabel: 'Consistently top-rated local gym',
      icon: Star,
      iconColor: 'text-amber-400',
      badgeColor: 'bg-amber-400/10 border-amber-400/20',
      isStar: true,
    },
    {
      value: `${reviewCount}+`,
      label: 'Google Reviews',
      sublabel: 'Real feedback from gym members',
      icon: MessageSquare,
      iconColor: 'text-[#C6FF00]',
      badgeColor: 'bg-[#C6FF00]/10 border-[#C6FF00]/20',
    },
    {
      value: GYM_DATA.closingTime,
      label: 'Listed Closing Time',
      sublabel: 'Convenient night workouts',
      icon: Clock,
      iconColor: 'text-sky-400',
      badgeColor: 'bg-sky-400/10 border-sky-400/20',
    },
    {
      value: '100%',
      label: 'Commitment to Your Fitness',
      sublabel: 'Supportive fitness community',
      icon: HeartHandshake,
      iconColor: 'text-rose-400',
      badgeColor: 'bg-rose-400/10 border-rose-400/20',
      statementNote: true,
    },
  ];

  return (
    <section id="stats" ref={sectionRef} className="py-14 bg-[#0d0d0d] border-y border-[#1c1c1c] relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group relative bg-[#141414] hover:bg-[#1a1a1a] border border-[#242424] hover:border-[#C6FF00]/40 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#C6FF00]/5 flex flex-col justify-between"
              >
                {/* Accent top border glow */}
                <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#C6FF00]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${stat.badgeColor}`}>
                    <Icon className={`w-6 h-6 ${stat.iconColor} ${stat.isStar ? 'fill-amber-400' : ''}`} />
                  </div>
                  <span className="text-[11px] font-bold tracking-widest uppercase text-[#666]">
                    0{index + 1}
                  </span>
                </div>

                <div>
                  <div className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight mb-1 flex items-baseline gap-1">
                    <span>{stat.value}</span>
                  </div>
                  <h3 className="text-base font-bold text-[#e0e0e0] mb-0.5">
                    {stat.label}
                  </h3>
                  <p className="text-xs text-[#8c8c8c] leading-relaxed">
                    {stat.sublabel}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
