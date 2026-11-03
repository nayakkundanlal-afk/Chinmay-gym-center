import React from 'react';
import { Star, MessageSquare, ExternalLink, Quote, ShieldCheck } from 'lucide-react';
import { GYM_DATA, VERIFIED_REVIEWS } from '../data/gymData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-[#0c0c0c] relative border-t border-[#1c1c1c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181818] border border-[#2b2b2b] text-[11px] font-bold tracking-widest text-[#C6FF00] uppercase mb-4">
            <Star className="w-3.5 h-3.5 fill-[#C6FF00] text-[#C6FF00]" />
            <span>4.8 / 5 RATED ON GOOGLE</span>
          </div>

          <h2 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white leading-tight mb-4">
            REAL PEOPLE. <br />
            <span className="text-[#C6FF00]">REAL EXPERIENCES.</span>
          </h2>

          <p className="text-base text-[#A5A5A5] leading-relaxed">
            Direct feedback and verified review themes from 448+ members who train at {GYM_DATA.name} in Acharya Vihar, Bhubaneswar.
          </p>
        </div>

        {/* Big Overall Rating Card */}
        <div className="max-w-3xl mx-auto mb-14 p-6 sm:p-8 rounded-3xl bg-[#141414] border border-[#2b2b2b] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-5">
            <div className="w-20 h-20 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex flex-col items-center justify-center text-amber-400 shrink-0">
              <span className="font-heading font-black text-3xl leading-none text-white">4.8</span>
              <span className="text-[10px] font-bold text-amber-400 mt-1">EXCELLENT</span>
            </div>
            <div>
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <h3 className="font-heading font-black text-xl text-white">
                Google Business Verified Rating
              </h3>
              <p className="text-xs text-[#8c8c8c]">
                Based on 448+ public customer reviews for Acharya Vihar branch
              </p>
            </div>
          </div>

          <a
            href={GYM_DATA.mapsReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#1c1c1c] hover:bg-[#C6FF00] text-white hover:text-black font-heading font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 border border-[#333] hover:border-[#C6FF00] shrink-0"
          >
            <span>READ ALL GOOGLE REVIEWS</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* 3 Review Excerpt Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VERIFIED_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-[#141414] rounded-2xl p-8 border border-[#242424] hover:border-[#C6FF00]/40 transition-all duration-300 flex flex-col justify-between relative group hover:-translate-y-1"
            >
              <Quote className="w-10 h-10 text-[#242424] group-hover:text-[#C6FF00]/20 transition-colors absolute top-6 right-6" />

              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Excerpt Quote */}
                <p className="font-heading font-bold text-xl sm:text-2xl text-white leading-snug mb-6 tracking-tight">
                  “{review.highlight}”
                </p>
              </div>

              <div className="pt-4 border-t border-[#1f1f1f] flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C6FF00] block">
                    {review.badge}
                  </span>
                  <span className="text-xs text-[#777777]">
                    {review.source}
                  </span>
                </div>
                <div className="w-6 h-6 rounded-full bg-[#1e1e1e] flex items-center justify-center">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C6FF00]" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Transparency note */}
        <div className="mt-10 text-center">
          <p className="text-xs text-[#666666] max-w-xl mx-auto">
            Review highlights shown above are direct excerpts from public Google reviews left by verified local visitors for {GYM_DATA.name}.
          </p>
        </div>
      </div>
    </section>
  );
};
