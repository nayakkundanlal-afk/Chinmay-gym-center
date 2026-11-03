import React from 'react';
import { Dumbbell, Phone, MapPin, Clock, ArrowUp } from 'lucide-react';
import { GYM_DATA, SOCIAL_LINKS } from '../data/gymData';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Membership', href: '#membership' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#050505] text-[#8e8e8e] border-t border-[#1a1a1a] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-[#181818]">
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#141414] border border-[#2b2b2b] flex items-center justify-center">
                <Dumbbell className="w-5 h-5 text-[#C6FF00] -rotate-45" />
              </div>
              <div>
                <span className="font-heading font-black text-2xl tracking-tighter text-white uppercase block leading-none">
                  CHINMAYA
                </span>
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#C6FF00]">
                  GYM CENTER • {GYM_DATA.odiaName}
                </span>
              </div>
            </div>

            <p className="text-sm text-[#A5A5A5] leading-relaxed max-w-sm">
              Building strength. Inspiring confidence. Creating a healthier community.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#141414] hover:bg-[#C6FF00] text-[#A5A5A5] hover:text-black flex items-center justify-center transition-colors border border-[#222]"
                title="Instagram (Configurable link)"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#141414] hover:bg-[#C6FF00] text-[#A5A5A5] hover:text-black flex items-center justify-center transition-colors border border-[#222]"
                title="Facebook (Configurable link)"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.slice(0, 5).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-[#C6FF00] transition-colors inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-white">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.slice(5).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-[#C6FF00] transition-colors inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={GYM_DATA.mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C6FF00] transition-colors inline-block"
                >
                  Directions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Summary (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-white">
              Location
            </h4>
            <p className="text-xs text-[#999] leading-relaxed">
              Acharya Vihar, Bhubaneswar, Odisha – 751013
            </p>
            <p className="text-xs text-[#C6FF00] font-semibold">
              <a href={`tel:${GYM_DATA.phone}`}>{GYM_DATA.phoneFormatted}</a>
            </p>
            <p className="text-[11px] text-[#777]">
              Open daily till 10:00 PM
            </p>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#666]">
          <p>© 2026 {GYM_DATA.name}. All Rights Reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-[#888] hover:text-[#C6FF00] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
