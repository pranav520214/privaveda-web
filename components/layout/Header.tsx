'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

interface HeaderProps {
  onOpenTechnicalDrawer: () => void;
  onScrollToSection: (id: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenTechnicalDrawer,
  onScrollToSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'pk-model', label: 'MODEL' },
    { id: 'workbench', label: 'SIMULATION' },
    { id: 'validation', label: 'VALIDATION' },
    { id: 'vision', label: 'VISION' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F4F1E9]/92 backdrop-blur-md border-b border-[rgba(18,23,21,0.13)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 h-14 flex items-center justify-between">
        {/* Left: Brand Identity */}
        <div className="flex items-baseline gap-4">
          <button
            onClick={() => onScrollToSection('hero')}
            className="flex items-baseline gap-3 text-left group"
          >
            <span className="font-serif text-xl tracking-[0.06em] font-medium text-ink group-hover:text-teal transition-colors">
              PRIVAVEDA
            </span>
            <span className="hidden sm:inline-block font-mono text-[10px] tracking-widest text-muted uppercase">
              यथा देहः तथा चिकित्सा
            </span>
          </button>
        </div>

        {/* Center/Right: Primary Four-Chapter Navigation */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onScrollToSection(link.id)}
              className="text-[11px] font-mono tracking-[0.2em] text-graphite hover:text-ink transition-colors uppercase font-medium"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right: Technical Telemetry & Drawer Trigger */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenTechnicalDrawer}
            className="flex items-center gap-1.5 px-3 py-1 rounded-[2px] border border-[rgba(18,23,21,0.16)] text-ink hover:border-ink text-[10px] font-mono tracking-widest uppercase transition-all bg-[#E9E5DB]/70"
            title="Inspect ODE differential equations, derivations, and parameter matrix"
          >
            <Terminal className="w-3 h-3 text-teal" />
            <span className="hidden sm:inline">Under The Model</span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-ink hover:text-teal"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[rgba(18,23,21,0.13)] bg-[#F4F1E9] px-6 py-5 space-y-3">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                onScrollToSection(link.id);
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-1.5 text-xs font-mono tracking-[0.2em] text-graphite hover:text-ink uppercase font-medium"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-3 border-t border-[rgba(18,23,21,0.13)] flex items-center justify-between text-[10px] font-mono text-muted tracking-wider">
            <span>OFFLINE &middot; PSEUDONYMIZED</span>
            <span>AUDIT ACTIVE</span>
          </div>
        </div>
      )}
    </header>
  );
};
