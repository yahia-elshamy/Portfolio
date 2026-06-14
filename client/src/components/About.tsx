/**
 * About Section Component
 * Neo-brutalist cyberpunk about section
 * 
 * Design: Cyan title, white body text, grid layout
 */

import { Cpu, BarChart3, Zap } from 'lucide-react';

export default function About() {
  return (
    <section className="w-full bg-black py-16 md:py-24" data-section="about">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Title */}
        <h2 
          className="text-6xl md:text-8xl font-black uppercase mb-12 md:mb-16 text-[#00FFFF] tracking-tight"
          style={{ fontFamily: "'Pixelify Sans'" }}
        >
          ABOUT
        </h2>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Left Column */}
          <div>
            <h3 
              className="text-2xl md:text-3xl font-bold text-white mb-6 uppercase"
              style={{ fontFamily: "'JetBrains Mono'" }}
            >
              Who I Am
            </h3>
            <p 
              className="text-base md:text-lg text-white leading-relaxed mb-6 font-medium"
              style={{ fontFamily: "'Plus Jakarta Sans'" }}
            >
              I'm a junior developer with a unique background that bridges technical expertise and real-world business operations. With over 6 years of professional experience across multiple roles, I bring a practical perspective to software development that goes beyond just writing code.
            </p>
            <p 
              className="text-base md:text-lg text-white leading-relaxed font-medium"
              style={{ fontFamily: "'Plus Jakarta Sans'" }}
            >
              My technical foundation includes React.js, Node.js, MongoDB, MySQL, and cloud concepts. I specialize in creating scalable front-end components, optimizing database queries, and producing clean technical documentation.
            </p>
          </div>

          {/* Right Column */}
          <div>
            <h3 
              className="text-2xl md:text-3xl font-bold text-white mb-6 uppercase"
              style={{ fontFamily: "'JetBrains Mono'" }}
            >
              What Sets Me Apart
            </h3>
            <p 
              className="text-base md:text-lg text-white leading-relaxed mb-6 font-medium"
              style={{ fontFamily: "'Plus Jakarta Sans'" }}
            >
              What sets me apart is my ability to understand both the technical and operational sides of a system. I've managed 200+ monthly export orders with 95% on-time delivery, validated 5,000+ transactions monthly at 99% accuracy, and led teams to reduce errors by 30%.
            </p>
            <p 
              className="text-base md:text-lg text-white leading-relaxed font-medium"
              style={{ fontFamily: "'Plus Jakarta Sans'" }}
            >
              This unique blend of skills allows me to build solutions that are not just technically sound, but also operationally efficient and user-focused.
            </p>
          </div>
        </div>

        {/* Highlights */}
        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#1a1a1a] p-8 rounded-lg border-2 border-[#333333] hover:border-[#00FFFF] transition-colors duration-300 group">
            <div className="mb-4 inline-block p-3 bg-[#0F1535] rounded-lg group-hover:bg-[#1a1f3a] transition-colors">
              <Cpu size={32} color="#00FFFF" strokeWidth={1.5} />
            </div>
            <h4 
              className="text-xl font-bold text-white mb-3 uppercase"
              style={{ fontFamily: "'JetBrains Mono'" }}
            >
              Technical
            </h4>
            <p 
              className="text-white font-medium"
              style={{ fontFamily: "'Plus Jakarta Sans'" }}
            >
              Clean code, scalable solutions, and modern tech stack expertise
            </p>
          </div>

          <div className="bg-[#1a1a1a] p-8 rounded-lg border-2 border-[#333333] hover:border-[#A8FF00] transition-colors duration-300 group">
            <div className="mb-4 inline-block p-3 bg-[#0F1535] rounded-lg group-hover:bg-[#1a1f3a] transition-colors">
              <BarChart3 size={32} color="#A8FF00" strokeWidth={1.5} />
            </div>
            <h4 
              className="text-xl font-bold text-white mb-3 uppercase"
              style={{ fontFamily: "'JetBrains Mono'" }}
            >
              Operational
            </h4>
            <p 
              className="text-white font-medium"
              style={{ fontFamily: "'Plus Jakarta Sans'" }}
            >
              Real business workflow understanding and process optimization
            </p>
          </div>

          <div className="bg-[#1a1a1a] p-8 rounded-lg border-2 border-[#333333] hover:border-[#FF00FF] transition-colors duration-300 group">
            <div className="mb-4 inline-block p-3 bg-[#0F1535] rounded-lg group-hover:bg-[#1a1f3a] transition-colors">
              <Zap size={32} color="#FF00FF" strokeWidth={1.5} />
            </div>
            <h4 
              className="text-xl font-bold text-white mb-3 uppercase"
              style={{ fontFamily: "'JetBrains Mono'" }}
            >
              Results
            </h4>
            <p 
              className="text-white font-medium"
              style={{ fontFamily: "'Plus Jakarta Sans'" }}
            >
              99% accuracy, 30% error reduction, 95% on-time delivery
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
