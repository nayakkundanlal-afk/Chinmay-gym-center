import React, { useState } from 'react';
import { Check, MessageCircle, HelpCircle, Sparkles, ArrowRight } from 'lucide-react';
import { MEMBERSHIP_PLANS, GYM_DATA, MembershipPlan } from '../data/gymData';

interface MembershipSectionProps {
  onDirectEnquire: (planName: string) => void;
}

export const MembershipSection: React.FC<MembershipSectionProps> = ({
  onDirectEnquire,
}) => {
  const [selectedPlan, setSelectedPlan] = useState<string>('quarterly');

  const handleWhatsAppEnquiry = (planName: string) => {
    const text = encodeURIComponent(
      `Hello ${GYM_DATA.name}, I am interested in your ${planName} membership. Please share the pricing and details.`
    );
    window.open(`https://wa.me/${GYM_DATA.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="membership" className="py-24 bg-[#0d0d0d] relative border-t border-[#1c1c1c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#181818] border border-[#2b2b2b] text-[11px] font-bold tracking-widest text-[#C6FF00] uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C6FF00]" />
            <span>MEMBERSHIP OPTIONS</span>
          </div>

          <h2 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white leading-tight mb-4">
            CHOOSE YOUR <br />
            <span className="text-[#C6FF00]">FITNESS JOURNEY.</span>
          </h2>

          <p className="text-base text-[#A5A5A5] leading-relaxed">
            Pocket-friendly and student-conscious membership options in Acharya Vihar. Tap any plan to receive the latest rate card directly from our team on WhatsApp.
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {MEMBERSHIP_PLANS.map((plan) => {
            const isPopular = plan.isPopular;
            return (
              <div
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 cursor-pointer ${
                  isPopular
                    ? 'bg-[#151515] border-2 border-[#C6FF00] shadow-2xl shadow-[#C6FF00]/15 md:-translate-y-3 z-10'
                    : 'bg-[#121212] border border-[#242424] hover:border-[#3a3a3a] hover:-translate-y-1'
                }`}
              >
                {/* Popular Choice Floating Ribbon */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C6FF00] text-black font-heading font-black text-xs uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 fill-black" />
                    <span>POPULAR CHOICE</span>
                  </div>
                )}

                <div>
                  {/* Plan Duration Badge & Title */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-[#A5A5A5] uppercase tracking-wider">
                      {plan.duration}
                    </span>
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#1e1e1e] text-[#C6FF00]">
                      Acharya Vihar
                    </span>
                  </div>

                  <h3 className="font-heading font-black text-2xl uppercase tracking-tight text-white mb-2">
                    {plan.name}
                  </h3>

                  <p className="text-xs text-[#8e8e8e] mb-6 min-h-[36px]">
                    {plan.tagline}
                  </p>

                  {/* Price Placeholder (as per business specs) */}
                  <div className="py-4 px-5 rounded-2xl bg-[#0a0a0a] border border-[#222222] mb-6">
                    <div className="text-xs uppercase text-[#A5A5A5] font-semibold mb-1">
                      Membership Rate:
                    </div>
                    <div className="font-heading font-black text-2xl text-white tracking-tight flex items-baseline gap-2">
                      <span className="text-[#C6FF00]">{plan.pricePlaceholder}</span>
                    </div>
                    <p className="text-[11px] text-[#666666] mt-1">
                      * Official rate confirmed on inquiry
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#A5A5A5]">
                      What's Included:
                    </div>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-[#c5c5c5]">
                        <div className="w-4 h-4 rounded-full bg-[#C6FF00]/10 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-[#C6FF00]" />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions: Primary WhatsApp Enquiry & Secondary Web Form */}
                <div className="space-y-2.5 pt-4 border-t border-[#202020]">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleWhatsAppEnquiry(plan.name);
                    }}
                    className={`w-full py-3.5 px-4 rounded-xl font-heading font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      isPopular
                        ? 'bg-[#C6FF00] hover:bg-[#d5ff33] text-black shadow-lg shadow-[#C6FF00]/20'
                        : 'bg-[#1f1f1f] hover:bg-[#C6FF00] text-white hover:text-black'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>ENQUIRE NOW VIA WHATSAPP</span>
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onDirectEnquire(plan.name);
                    }}
                    className="w-full py-2 text-center text-xs font-semibold text-[#888] hover:text-[#C6FF00] transition-colors cursor-pointer"
                  >
                    Or fill contact form →
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing Transparency & Owner Note */}
        <div className="mt-12 p-4 rounded-2xl bg-[#141414] border border-[#222222] text-center max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-9 h-9 rounded-full bg-[#202020] flex items-center justify-center shrink-0">
              <HelpCircle className="w-4 h-4 text-[#C6FF00]" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase">Looking for special student packages?</h4>
              <p className="text-xs text-[#8c8c8c]">
                Ask our cooperative trainers at Acharya Vihar for student discounts and personalized batch timings.
              </p>
            </div>
          </div>
          <button
            onClick={() => handleWhatsAppEnquiry('General / Student')}
            className="shrink-0 px-4 py-2 rounded-lg bg-[#222] hover:bg-[#333] text-xs font-bold text-white transition-colors"
          >
            Chat with Desk
          </button>
        </div>
      </div>
    </section>
  );
};
