/**
 * My Work Banner Component
 * Neo-brutalist cyberpunk section transition banner
 * 
 * Design: Full-width jagged/zigzag neon-lime banner
 * Stacked chevron arrows decoration
 * Tilted white box with "MY WORK" text
 * Pixelated eyes watching the text
 */

export default function MyWorkBanner() {
  return (
    <div 
      className="relative w-full bg-[#A8FF00] py-16 md:py-24 overflow-hidden"
      style={{
        clipPath: 'polygon(0 0, 5% 5%, 10% 0, 15% 8%, 20% 2%, 25% 6%, 30% 0, 35% 7%, 40% 1%, 45% 6%, 50% 0, 55% 7%, 60% 2%, 65% 8%, 70% 0, 75% 6%, 80% 3%, 85% 7%, 90% 1%, 95% 6%, 100% 0, 100% 100%, 0 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left: Chevron arrows decoration */}
          <div className="hidden md:flex flex-col gap-2">
            {[1, 2, 3].map((row) => (
              <div key={row} className="flex gap-1">
                {[1, 2, 3].map((col) => (
                  <span 
                    key={col}
                    className="text-2xl font-black text-[#A8FF00]"
                    style={{
                      fontFamily: "'Pixelify Sans'",
                      textShadow: '0 0 0 2px #000000'
                    }}
                  >
                    &gt;&gt;
                  </span>
                ))}
              </div>
            ))}
          </div>

          {/* Center: Tilted box with "MY WORK" text */}
          <div 
            className="flex-1 flex justify-center"
            style={{ transform: 'rotate(-2deg)' }}
          >
            <div className="bg-white border-4 border-black px-12 py-6 md:px-16 md:py-8">
              <h2 
                className="text-4xl md:text-6xl font-black uppercase text-black tracking-tight"
                style={{ fontFamily: "'Pixelify Sans'" }}
              >
                MY WORK
              </h2>
            </div>
          </div>

          {/* Right: Pixelated eyes */}
          <div className="hidden md:flex gap-4 items-center">
            <div className="flex gap-1">
              {/* Left eye */}
              <div className="w-4 h-4 bg-black" />
              <div className="w-2 h-2" />
              {/* Right eye */}
              <div className="w-4 h-4 bg-black" />
            </div>
            <div className="w-8 h-1 bg-black" />
          </div>
        </div>
      </div>
    </div>
  );
}
