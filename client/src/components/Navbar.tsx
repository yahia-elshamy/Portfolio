/**
 * Navbar Component
 * Neo-brutalist cyberpunk navigation bar
 * 
 * Design: Fixed at top, full-width with dark backdrop blur
 * Left: Cyberpunk styled "Yahia Elshamy" name
 * Center: Uppercase monospace links (HOME, ABOUT, PROJECTS)
 * Right: Cyan CTA button "LET'S TALK"
 */

import { useState } from 'react';

export default function Navbar() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-[#333333]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        {/* Left: Logo - Cyberpunk Name */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-200"
        >
          {/* Cyberpunk styled name */}
          <div className="relative flex items-center gap-1">
            <span 
              className="text-white font-black text-lg tracking-widest uppercase"
              style={{ fontFamily: "'Pixelify Sans'" }}
            >
              Yahia
            </span>
            <span 
              className="text-[#00FFFF] font-black text-lg tracking-widest uppercase"
              style={{ fontFamily: "'Pixelify Sans'" }}
            >
              Elshamy
            </span>
          </div>
          {/* Decorative accent */}
          <div className="w-2 h-2 bg-[#A8FF00] rounded-full animate-pulse" />
        </button>

        {/* Center: Links */}
        <div className="hidden md:flex gap-8 items-center">
          {[
            { label: 'HOME', id: 'home' },
            { label: 'ABOUT', id: 'about' },
            { label: 'PROJECTS', id: 'projects' }
          ].map((link) => (
            <button
              key={link.id}
              onClick={() => {
                const element = document.querySelector(`[data-section="${link.id}"]`);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                } else if (link.id === 'home') {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="text-white uppercase text-xs font-bold transition-colors duration-200 tracking-wide"
              style={{ fontFamily: "'JetBrains Mono'" }}
              onMouseEnter={() => setHoveredLink(link.label)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <span
                className={`${
                  hoveredLink === link.label ? 'text-[#A8FF00]' : 'text-white'
                } transition-colors duration-200`}
              >
                {link.label}
              </span>
            </button>
          ))}
        </div>

        {/* Right: CTA Button */}
        <button
          className="bg-[#00FFFF] text-black px-6 py-2 font-bold uppercase text-sm border-2 border-[#00FFFF] hover:opacity-90 transition-opacity duration-200 active:scale-95"
          style={{ fontFamily: "'JetBrains Mono'" }}
          onClick={() => {
            const contactSection = document.querySelector('[data-section="contact"]');
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          LET'S TALK
        </button>
      </div>
    </nav>
  );
}
