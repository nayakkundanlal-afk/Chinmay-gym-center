import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Dumbbell, ChevronRight } from 'lucide-react';
import { GYM_DATA } from '../data/gymData';

interface NavbarProps {
  onJoinClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onJoinClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Why Chinmaya', href: '#why-us' },
    { name: 'Membership', href: '#membership' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080808]/95 backdrop-blur-md border-b border-[#222222] py-3 shadow-2xl'
          : 'bg-gradient-to-b from-black/90 via-black/50 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with Odia Subtitle */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-[#151515] border border-[#2e2e2e] group-hover:border-[#C6FF00] flex items-center justify-center transition-colors">
              <Dumbbell className="w-5 h-5 text-[#C6FF00] -rotate-45" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-black text-2xl tracking-tighter text-white uppercase group-hover:text-white transition-colors">
                  CHINMAYA
                </span>
                <span className="w-2 h-2 rounded-full bg-[#C6FF00] animate-pulse"></span>
              </div>
              <div className="flex items-center gap-2 -mt-1">
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#C6FF00]">
                  GYM CENTER
                </span>
                <span className="text-[9px] text-[#A5A5A5] font-normal hidden sm:inline">
                  {GYM_DATA.odiaName}
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#c5c5c5] hover:text-[#C6FF00] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C6FF00] hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${GYM_DATA.phone}`}
              className="flex items-center gap-2 text-xs font-semibold text-[#c5c5c5] hover:text-white bg-[#151515] hover:bg-[#202020] border border-[#2a2a2a] px-3.5 py-2 rounded-full transition-colors"
              title="Call Gym Front Desk"
            >
              <Phone className="w-3.5 h-3.5 text-[#C6FF00]" />
              <span>{GYM_DATA.phoneFormatted}</span>
            </a>

            <button
              onClick={onJoinClick}
              className="px-5 py-2.5 rounded-full font-heading font-black text-xs tracking-wider uppercase bg-[#C6FF00] hover:bg-[#d4ff33] text-black transition-all transform hover:scale-105 shadow-md shadow-[#C6FF00]/20 flex items-center gap-1.5 cursor-pointer"
            >
              <span>JOIN NOW</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={onJoinClick}
              className="px-3.5 py-1.5 rounded-full font-heading font-black text-[11px] tracking-wider uppercase bg-[#C6FF00] text-black sm:hidden"
            >
              JOIN
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#151515] border border-[#2a2a2a] text-white hover:text-[#C6FF00] transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-[#0c0c0c]/98 backdrop-blur-xl border-b border-[#222222] shadow-2xl transition-all">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
            <div className="text-xs uppercase text-[#A5A5A5] font-semibold tracking-wider pb-2 border-b border-[#1f1f1f] flex justify-between">
              <span>Navigation</span>
              <span className="text-[#C6FF00]">{GYM_DATA.odiaName}</span>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-white hover:text-[#C6FF00] py-1.5 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-[#444]" />
              </a>
            ))}

            <div className="pt-4 border-t border-[#1f1f1f] flex flex-col gap-3">
              <a
                href={`tel:${GYM_DATA.phone}`}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#151515] border border-[#2a2a2a] text-sm font-semibold text-white"
              >
                <Phone className="w-4 h-4 text-[#C6FF00]" />
                <span>Call {GYM_DATA.phoneFormatted}</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onJoinClick();
                }}
                className="w-full py-3.5 rounded-xl font-heading font-black text-sm tracking-wider uppercase bg-[#C6FF00] text-black shadow-lg shadow-[#C6FF00]/25 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>START YOUR FITNESS JOURNEY</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
