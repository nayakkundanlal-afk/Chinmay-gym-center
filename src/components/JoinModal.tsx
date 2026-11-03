import React, { useState } from 'react';
import { X, CheckCircle2, MessageCircle, Phone, Sparkles, Dumbbell } from 'lucide-react';
import confetti from 'canvas-confetti';
import { GYM_DATA } from '../data/gymData';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlanName?: string;
}

export const JoinModal: React.FC<JoinModalProps> = ({
  isOpen,
  onClose,
  selectedPlanName = '',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [goal, setGoal] = useState('Muscle Building & Strength');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please provide your name.');
      return;
    }
    const clean = phone.replace(/\D/g, '');
    if (clean.length < 10) {
      setError('Please provide a valid 10-digit mobile number.');
      return;
    }

    try {
      confetti({
        particleCount: 70,
        spread: 50,
        origin: { y: 0.6 },
        colors: ['#C6FF00', '#ffffff', '#222222'],
      });
    } catch {
      // ignore
    }

    setSubmitted(true);
  };

  const handleWhatsAppInstant = () => {
    const text = encodeURIComponent(
      `Hello ${GYM_DATA.name}!\nI want to join the gym.\nName: ${name || 'Prospective Member'}\nPhone: ${phone || 'Not specified'}\nGoal: ${goal}\nPlan: ${selectedPlanName || 'General Membership'}\nPlease share current admission details and batch timings.`
    );
    window.open(`https://wa.me/${GYM_DATA.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      <div
        className="relative w-full max-w-lg bg-[#141414] border border-[#2e2e2e] rounded-3xl p-6 sm:p-8 shadow-2xl animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#1e1e1e] hover:bg-[#2c2c2c] text-white transition-colors cursor-pointer"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#C6FF00]/15 text-[#C6FF00] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="font-heading font-black text-2xl uppercase text-white">
              WELCOME TO {GYM_DATA.name}!
            </h3>

            <p className="text-sm text-[#A5A5A5]">
              Thank you, <strong className="text-white">{name}</strong>. Your request to join {GYM_DATA.name} has been recorded.
            </p>

            <div className="pt-3 flex flex-col gap-3">
              <button
                onClick={handleWhatsAppInstant}
                className="w-full py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-black font-heading font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageCircle className="w-4 h-4 fill-black" />
                <span>Confirm Instantly via WhatsApp</span>
              </button>

              <button
                onClick={onClose}
                className="w-full py-2.5 rounded-xl bg-[#1e1e1e] hover:bg-[#252525] text-xs font-semibold text-white"
              >
                Done / Back to Website
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-[#C6FF00]/10 flex items-center justify-center text-[#C6FF00]">
                <Dumbbell className="w-4 h-4 -rotate-45" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#C6FF00]">
                START YOUR JOURNEY
              </span>
            </div>

            <h3 className="font-heading font-black text-2xl sm:text-3xl uppercase tracking-tight text-white mb-1">
              JOIN {GYM_DATA.name}
            </h3>
            <p className="text-xs text-[#8c8c8c] mb-6">
              Acharya Vihar, Bhubaneswar • {GYM_DATA.odiaName}
            </p>

            {error && (
              <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs mb-4">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#A5A5A5] mb-1.5">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-[#2e2e2e] focus:border-[#C6FF00] text-white text-sm outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#A5A5A5] mb-1.5">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="10-digit mobile number"
                  className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-[#2e2e2e] focus:border-[#C6FF00] text-white text-sm outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#A5A5A5] mb-1.5">
                  Primary Fitness Goal
                </label>
                <select
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#1a1a1a] border border-[#2e2e2e] focus:border-[#C6FF00] text-white text-sm outline-none"
                >
                  <option value="Muscle Building & Strength">Muscle Building & Strength</option>
                  <option value="Fat Loss & Cardio Fitness">Fat Loss & Cardio Fitness</option>
                  <option value="General Health & Well-being">General Health & Well-being</option>
                  <option value="Personal Trainer Guided Split">Personal Trainer Guided Split</option>
                  <option value="Student Affordable Plan">Student Affordable Plan</option>
                </select>
              </div>

              <div className="pt-2 space-y-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-heading font-black text-xs uppercase tracking-wider bg-[#C6FF00] hover:bg-[#d5ff33] text-black shadow-lg shadow-[#C6FF00]/20 transition-all cursor-pointer"
                >
                  SUBMIT JOIN REQUEST
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppInstant}
                  className="w-full py-3 rounded-xl font-heading font-bold text-xs uppercase tracking-wider bg-[#1f1f1f] hover:bg-[#282828] text-white transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Or Enquire Direct on WhatsApp</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
