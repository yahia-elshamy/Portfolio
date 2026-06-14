/**
 * Hero Section Component
 * Neo-brutalist cyberpunk hero with asymmetric layout
 * 
 * Design: 
 * - Top area: White display title on left with photo on right
 * - Middle: Full-width slanted cyan banner with diagonal cut
 * - Left side: White text + CTA button
 * - Right side: Hot pink tilted badge
 */

export default function Hero() {
  return (
    <div className="pt-24 pb-0" data-section="home">
      {/* Top Section: Title + Photo */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20 flex justify-between items-center gap-8">
        {/* Left: Main Title */}
        <div className="flex-1">
          <h1 
            className="text-5xl md:text-7xl font-black uppercase tracking-tight leading-tight text-white"
            style={{ fontFamily: "'Pixelify Sans'" }}
          >
            BUILDING<br />CLEAN,<br />HIGH-IMPACT<br />DIGITAL<br />PRODUCTS
          </h1>
        </div>

        {/* Right: Professional Photo with Cyberpunk Styling */}
        <div className="hidden md:flex flex-col gap-4 items-center justify-start pt-4">
          {/* Photo Container with Cyberpunk Effects */}
          <div className="relative w-64 h-80 group">
            {/* Outer glow effect */}
            <div className="absolute -inset-2 bg-gradient-to-br from-[#00FFFF] via-[#A8FF00] to-[#FF00FF] rounded-lg blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Photo frame with borders */}
            <div className="relative w-full h-full bg-black rounded-lg border-2 border-[#00FFFF] overflow-hidden">
              {/* Scanline effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#00FFFF]/10 to-transparent pointer-events-none" />
              
              {/* Photo */}
              <img 
                src="/manus-storage/file_0000000011d07243a829755eec5fa880_d4d64ab5.png"
                alt="Yahia Ahmed El-Shamy"
                className="w-full h-full object-cover"
              />
              
              {/* Corner accents */}
              <div className="absolute top-2 left-2 w-3 h-3 border-2 border-[#A8FF00]" />
              <div className="absolute top-2 right-2 w-3 h-3 border-2 border-[#A8FF00]" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-2 border-[#FF00FF]" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-2 border-[#FF00FF]" />
            </div>
          </div>

          {/* Decorative elements */}
          <div className="text-2xl text-[#A8FF00]" style={{ fontFamily: "'Pixelify Sans'" }}>
            ✦ ✦ ✦
          </div>
        </div>
      </div>

      {/* Middle: Slanted Cyan Banner Section */}
      <div 
        className="relative w-full bg-[#00FFFF] overflow-hidden"
        style={{
          clipPath: 'polygon(0 8%, 100% 0, 100% 100%, 0 92%)'
        }}
      >
        {/* Add padding to compensate for clipped area */}
        <div className="pt-16 pb-16 md:pt-24 md:pb-24">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex flex-col gap-8 md:gap-16 items-start">
              {/* Left Side: Text Content */}
              <div className="flex-1 max-w-2xl">
                <h2 
                  className="text-3xl md:text-4xl font-black uppercase text-black mb-4"
                  style={{ fontFamily: "'Pixelify Sans'" }}
                >
                  JUNIOR MERN STACK DEVELOPER
                </h2>
                <p 
                  className="text-lg md:text-xl font-bold text-black mb-6"
                  style={{ fontFamily: "'Plus Jakarta Sans'" }}
                >
                  Specializing in React, Node.js, and Full-Stack Solutions
                </p>
                <p 
                  className="text-base md:text-lg text-black mb-8 font-medium"
                  style={{ fontFamily: "'Plus Jakarta Sans'" }}
                >
                  Building scalable web solutions by combining clean code with deep understanding of real operational workflows. Experienced in full-stack development, database optimization, and cloud technologies.
                </p>
                
                {/* CTA Button */}
                <button
                  className="bg-white text-black px-8 py-3 font-bold uppercase text-sm border-2 border-black hover:opacity-90 transition-opacity duration-200 active:scale-95"
                  style={{ fontFamily: "'JetBrains Mono'" }}
                  onClick={() => {
                    const contactSection = document.querySelector('[data-section="contact"]');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  LET'S WORK TOGETHER
                </button>
              </div>

              {/* Hot Pink Tilted Badge */}
              <div 
                className="bg-[#FF00FF] px-6 py-3 rounded-full border-2 border-black"
                style={{
                  transform: 'rotate(-5deg)',
                  fontFamily: "'Pixelify Sans'"
                }}
              >
                <span className="text-black font-bold text-sm uppercase">Full-Stack Developer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
