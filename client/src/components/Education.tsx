/**
 * Education & Certifications Section Component
 * Neo-brutalist cyberpunk education showcase
 * 
 * Design: Hot pink title, card layout with certifications
 */

import { Zap, Code, Cloud, Rocket } from 'lucide-react';

export default function Education() {
  const education = {
    degree: "Bachelor of Management Information Systems (MIS)",
    institution: "Higher Institute for Specific Studies",
    period: "Oct 2020 – Jul 2024",
    grade: "Very Good",
    location: "Giza, Egypt",
    details: [
      "Studied Web Development, Data Analysis, Accounting, Economics, Business Administration, and Desktop Programming",
      "Graduation Project: Survey website connected to a database (Graded: Excellent)"
    ]
  };

  const certifications = [
    {
      name: 'DevOps Complete Course Specialization',
      issuer: 'Coursera',
      date: 'May 2026',
      icon: Rocket,
      color: '#A8FF00'
    },
    {
      name: 'Meta Front-End Developer',
      issuer: 'Meta',
      date: 'Apr 2026',
      icon: Code,
      color: '#00FFFF'
    },
    {
      name: 'AWS Academy Graduate - Cloud Foundations',
      issuer: 'Amazon Web Services (AWS)',
      date: 'Feb 2026',
      icon: Cloud,
      color: '#FF00FF'
    },
    {
      name: 'Front-end Development (React.js)',
      issuer: 'Google Developer Groups on Campus: CIC',
      date: 'Sep 2025',
      icon: Zap,
      color: '#00FFFF'
    }
  ];

  return (
    <section className="w-full bg-black py-16 md:py-24" data-section="education">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Title */}
        <h2 
          className="text-6xl md:text-8xl font-black uppercase mb-12 md:mb-16 text-[#FF00FF] tracking-tight"
          style={{ fontFamily: "'Pixelify Sans'" }}
        >
          EDUCATION
        </h2>

        {/* Education Card */}
        <div className="mb-16 md:mb-24 bg-[#1a1a1a] p-8 md:p-12 rounded-lg border-2 border-[#333333] hover:border-[#FF00FF] transition-colors duration-300">
          <h3 
            className="text-2xl md:text-3xl font-bold text-white mb-3 uppercase"
            style={{ fontFamily: "'JetBrains Mono'" }}
          >
            {education.degree}
          </h3>
          <p 
            className="text-lg text-[#A8FF00] font-bold mb-2"
            style={{ fontFamily: "'Plus Jakarta Sans'" }}
          >
            {education.institution}
          </p>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-6 text-white font-medium">
            <span style={{ fontFamily: "'Plus Jakarta Sans'" }}>{education.period}</span>
            <span style={{ fontFamily: "'Plus Jakarta Sans'" }}>{education.location} • Grade: {education.grade}</span>
          </div>
          
          <ul className="space-y-2">
            {education.details.map((detail, idx) => (
              <li 
                key={idx}
                className="text-white flex items-start gap-3 font-medium"
                style={{ fontFamily: "'Plus Jakarta Sans'" }}
              >
                <span className="text-[#00FFFF] mt-1">✓</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Certifications Title */}
        <h3 
          className="text-3xl md:text-4xl font-bold text-white mb-8 uppercase"
          style={{ fontFamily: "'JetBrains Mono'" }}
        >
          Professional Certifications
        </h3>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, idx) => {
            const IconComponent = cert.icon;
            return (
              <div 
                key={idx}
                className="bg-[#1a1a1a] p-6 rounded-lg border-2 border-[#333333] hover:border-[#00FFFF] transition-all duration-300 group"
              >
                <div className="mb-4 inline-block p-3 bg-[#0F1535] rounded-lg group-hover:bg-[#1a1f3a] transition-colors">
                  <IconComponent size={32} color={cert.color} strokeWidth={1.5} />
                </div>
                <h4 
                  className="text-lg font-bold text-white mb-2"
                  style={{ fontFamily: "'Plus Jakarta Sans'" }}
                >
                  {cert.name}
                </h4>
                <p 
                  className="text-white text-sm font-medium mb-3"
                  style={{ fontFamily: "'Plus Jakarta Sans'" }}
                >
                  {cert.issuer}
                </p>
                <p 
                  className="text-[#A8FF00] text-xs font-bold"
                  style={{ fontFamily: "'JetBrains Mono'" }}
                >
                  {cert.date}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
