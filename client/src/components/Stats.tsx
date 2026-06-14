/**
 * Stats / Features Section Component
 * Neo-brutalist cyberpunk stats display
 * 
 * Design: 3-column horizontal layout on dark gray background
 * Large pixel-font numbers with descriptive text below
 */

export default function Stats() {
  const stats = [
    { number: '2+', label: 'Years of Experience' },
    { number: '15+', label: 'Happy Clients' },
    { number: '100%', label: 'Satisfaction Clients' },
  ];

  return (
    <div className="w-full bg-[#1a1a1a] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center flex flex-col items-center">
              <div 
                className="text-6xl md:text-8xl font-black text-white mb-4"
                style={{ fontFamily: "'Pixelify Sans'" }}
              >
                {stat.number}
              </div>
              <p 
                className="text-lg md:text-xl font-bold text-white"
                style={{ fontFamily: "'Plus Jakarta Sans'" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
