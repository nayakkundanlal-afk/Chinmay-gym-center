import React, { useState } from 'react';
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Send,
  Navigation,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Dumbbell
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { GYM_DATA } from '../data/gymData';

interface ContactSectionProps {
  initialPlan?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialPlan = '' }) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [membership, setMembership] = useState(initialPlan || 'Quarterly (3 Months)');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Handle plan update when prop changes
  React.useEffect(() => {
    if (initialPlan) {
      setMembership(initialPlan);
    }
  }, [initialPlan]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Frontend validation
    if (!fullName.trim()) {
      setError('Please provide your full name.');
      return;
    }
    const cleanPhone = phoneNumber.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setError('Please enter a valid 10-digit mobile number.');
      return;
    }

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#C6FF00', '#ffffff', '#222222'],
      });
    } catch {
      // ignore
    }

    setIsSubmitted(true);
  };

  const handleForwardToWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello ${GYM_DATA.name}!\nName: ${fullName}\nPhone: ${phoneNumber}\nInterested Plan: ${membership}\nNote: ${message || 'Please provide membership pricing and enrollment steps.'}`
    );
    window.open(`https://wa.me/${GYM_DATA.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-[#080808] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#181818] border border-[#2b2b2b] text-[11px] font-bold tracking-widest text-[#C6FF00] uppercase mb-4">
            <MapPin className="w-3.5 h-3.5 text-[#C6FF00]" />
            <span>VISIT & GET IN TOUCH</span>
          </div>

          <h2 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white leading-tight mb-4">
            YOUR FITNESS DESTINATION <br />
            <span className="text-[#C6FF00]">IS HERE.</span>
          </h2>

          <p className="text-base text-[#A5A5A5] leading-relaxed">
            Conveniently situated in Acharya Vihar, Bhubaneswar with spacious parking. Call, WhatsApp, or drop by for a tour of our training floor.
          </p>
        </div>

        {/* 3 Large Action Buttons (Call Now, WhatsApp Us, Get Directions) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-16">
          {/* 1. CALL NOW */}
          <a
            href={`tel:${GYM_DATA.phone}`}
            className="group p-6 rounded-2xl bg-[#141414] hover:bg-[#1a1a1a] border border-[#2b2b2b] hover:border-[#C6FF00] transition-all flex items-center justify-between shadow-lg"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#C6FF00]/10 group-hover:bg-[#C6FF00] text-[#C6FF00] group-hover:text-black flex items-center justify-center transition-colors">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#A5A5A5] block">
                  Tap to Call
                </span>
                <h3 className="font-heading font-black text-lg sm:text-xl text-white">
                  CALL NOW
                </h3>
                <p className="text-xs text-[#8c8c8c]">{GYM_DATA.phoneFormatted}</p>
              </div>
            </div>
            <ExternalLink className="w-5 h-5 text-[#555] group-hover:text-[#C6FF00] transition-colors" />
          </a>

          {/* 2. WHATSAPP US */}
          <a
            href={`https://wa.me/${GYM_DATA.whatsappNumber}?text=${encodeURIComponent(`Hello ${GYM_DATA.name}, I would like to inquire about gym membership and training.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-2xl bg-[#141414] hover:bg-[#1a1a1a] border border-[#2b2b2b] hover:border-[#25D366] transition-all flex items-center justify-between shadow-lg"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 group-hover:bg-[#25D366] text-[#25D366] group-hover:text-black flex items-center justify-center transition-colors">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#A5A5A5] block">
                  Quick Chat
                </span>
                <h3 className="font-heading font-black text-lg sm:text-xl text-white">
                  WHATSAPP US
                </h3>
                <p className="text-xs text-[#8c8c8c]">{GYM_DATA.phoneFormatted}</p>
              </div>
            </div>
            <ExternalLink className="w-5 h-5 text-[#555] group-hover:text-[#25D366] transition-colors" />
          </a>

          {/* 3. GET DIRECTIONS */}
          <a
            href={GYM_DATA.mapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-2xl bg-[#141414] hover:bg-[#1a1a1a] border border-[#2b2b2b] hover:border-sky-400 transition-all flex items-center justify-between shadow-lg"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-sky-400/10 group-hover:bg-sky-400 text-sky-400 group-hover:text-black flex items-center justify-center transition-colors">
                <Navigation className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#A5A5A5] block">
                  Google Navigation
                </span>
                <h3 className="font-heading font-black text-lg sm:text-xl text-white">
                  GET DIRECTIONS
                </h3>
                <p className="text-xs text-[#8c8c8c]">Acharya Vihar, BBSR</p>
              </div>
            </div>
            <ExternalLink className="w-5 h-5 text-[#555] group-hover:text-sky-400 transition-colors" />
          </a>
        </div>

        {/* Two-Column Grid: Left Details & Map / Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (5 cols): Verified Location Details & Embedded Map */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-[#121212] border border-[#242424]">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C6FF00]" />
                <span className="text-xs uppercase font-bold tracking-wider text-[#C6FF00]">
                  Official Location
                </span>
              </div>

              <h3 className="font-heading font-black text-2xl text-white mb-1">
                {GYM_DATA.name}
              </h3>
              <p className="text-sm font-medium text-[#C6FF00] mb-6">
                {GYM_DATA.odiaName}
              </p>

              <div className="space-y-4 text-sm text-[#A5A5A5]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C6FF00] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Address:</span>
                    <span>Acharya Vihar, Bhubaneswar, Odisha – 751013, India</span>
                    <span className="text-xs text-[#777] block mt-0.5">Plus Code: 7RWH+3Q</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#C6FF00] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Phone:</span>
                    <span>{GYM_DATA.phoneFormatted}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#C6FF00] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Closing Time:</span>
                    <span>10:00 PM (Listed Closing Time)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed iframe with verified pin */}
            <div className="rounded-3xl overflow-hidden border border-[#242424] shadow-2xl h-80 relative group">
              <iframe
                title="ENERGYM FITNESS CLUB Exact Location Map"
                src={`https://maps.google.com/maps?q=20.2951884,85.8294903+(ENERGYM+FITNESS+CLUB)&t=&z=17&ie=UTF8&iwloc=B&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(1.05)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                <div className="bg-black/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-[#333] text-[11px] text-white flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#C6FF00]" />
                  <span>20.2951° N, 85.8294° E • Acharya Vihar</span>
                </div>
                <a
                  href={GYM_DATA.mapsPlaceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pointer-events-auto bg-[#C6FF00] hover:bg-[#d5ff33] text-black px-3.5 py-2 rounded-xl text-xs font-heading font-black tracking-wider uppercase flex items-center gap-1.5 shadow-lg transition-transform hover:scale-105"
                >
                  <span>View on Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): Contact Enquiry Form */}
          <div className="lg:col-span-7 bg-[#121212] border border-[#242424] rounded-3xl p-8 sm:p-10 shadow-2xl relative">
            <h3 className="font-heading font-black text-2xl sm:text-3xl uppercase tracking-tight text-white mb-2">
              SEND MEMBERSHIP ENQUIRY
            </h3>
            <p className="text-sm text-[#A5A5A5] mb-8">
              Fill in your details below and our team will get in touch with membership rates, slot availability, and guidance.
            </p>

            {isSubmitted ? (
              <div className="py-10 text-center space-y-5 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-[#C6FF00]/15 text-[#C6FF00] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div>
                  <h4 className="font-heading font-black text-2xl text-white uppercase">
                    ENQUIRY RECEIVED!
                  </h4>
                  <p className="text-sm text-[#A5A5A5] max-w-md mx-auto mt-2">
                    Thank you, <span className="text-white font-semibold">{fullName}</span>. We've recorded your interest in the{' '}
                    <span className="text-[#C6FF00]">{membership}</span> program.
                  </p>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleForwardToWhatsApp}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-black font-heading font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 fill-black" />
                    <span>Instant Send via WhatsApp</span>
                  </button>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFullName('');
                      setPhoneNumber('');
                      setMessage('');
                    }}
                    className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#1e1e1e] hover:bg-[#2a2a2a] text-xs font-semibold text-white"
                  >
                    Submit Another Query
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#A5A5A5] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Rahul Mishra"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#181818] border border-[#2c2c2c] focus:border-[#C6FF00] text-white text-sm outline-none transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#A5A5A5] mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="e.g. 9876543210"
                      className="w-full px-4 py-3.5 rounded-xl bg-[#181818] border border-[#2c2c2c] focus:border-[#C6FF00] text-white text-sm outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#A5A5A5] mb-2">
                      Interested Membership
                    </label>
                    <select
                      value={membership}
                      onChange={(e) => setMembership(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#181818] border border-[#2c2c2c] focus:border-[#C6FF00] text-white text-sm outline-none transition-colors"
                    >
                      <option value="Monthly (1 Month)">Monthly (1 Month)</option>
                      <option value="Quarterly (3 Months)">Quarterly (3 Months) - Popular</option>
                      <option value="Annual (12 Months)">Annual (12 Months)</option>
                      <option value="Strength & Bodybuilding">Strength & Bodybuilding</option>
                      <option value="Personal Trainer Guidance">Personal Trainer Guidance</option>
                      <option value="Student Package">Student Special Plan</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#A5A5A5] mb-2">
                    Message / Fitness Goals (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your workout goals (muscle gain, fat loss, timings, etc.)..."
                    className="w-full px-4 py-3.5 rounded-xl bg-[#181818] border border-[#2c2c2c] focus:border-[#C6FF00] text-white text-sm outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-heading font-black text-sm tracking-wider uppercase bg-[#C6FF00] hover:bg-[#d5ff33] text-black shadow-lg shadow-[#C6FF00]/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>SEND ENQUIRY</span>
                </button>

                <p className="text-[11px] text-center text-[#666]">
                  By submitting, your enquiry can also be directly forwarded to our official WhatsApp line ({GYM_DATA.phoneFormatted}).
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
