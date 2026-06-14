/**
 * Portfolio Grid Component
 * Neo-brutalist cyberpunk portfolio showcase
 * 
 * Design: Hot pink title, 2-column grid, project cards with tags and links
 */

import { ExternalLink } from 'lucide-react';

export default function PortfolioGrid() {
  const projects = [
    {
      title: 'Grand Egyptian Museum – Digital Concept Landing Page',
      description: 'A stunning landing page concept for the Grand Egyptian Museum featuring immersive design with Egyptian heritage aesthetics, smooth animations, and responsive layout.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      image: '/manus-storage/Screenshot2026-02-27204609_8c31d1e5.png',
      link: 'https://yahia-elshamy.github.io/grand-egyptian-museum--clone-page-/',
      type: 'Landing Page'
    },
    {
      title: 'SafeMeal — Health-Based Meal Recommendation System',
      description: 'A full-stack web application that recommends healthy meals based on user health conditions. Features user authentication, meal database, health condition filtering, and personalized recommendations.',
      tags: ['React', 'Node.js', 'MongoDB', 'Full-Stack'],
      image: '/manus-storage/Screenshot2026-06-02100708_650e8653.png',
      link: 'https://yahiaelshamy-safemeal.hf.space',
      type: 'Full-Stack Application'
    },
  ];

  return (
    <div className="w-full bg-black py-16 md:py-24" data-section="projects">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Title */}
        <h2 
          className="text-6xl md:text-8xl font-black uppercase mb-12 md:mb-16 text-[#FF00FF] tracking-tight"
          style={{ fontFamily: "'Pixelify Sans'" }}
        >
          MY WORK
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative bg-[#1a1a1a] rounded-lg border-2 border-[#333333] hover:border-[#FF00FF] transition-all duration-300 overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative w-full h-64 md:h-72 overflow-hidden bg-[#0F1535]">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              </div>

              {/* Project Card Content */}
              <div className="p-6 md:p-8 flex flex-col">
                {/* Type Badge */}
                <div className="mb-3">
                  <span 
                    className="text-xs font-bold text-[#A8FF00] bg-[#0F1535] px-3 py-1 rounded-full"
                    style={{ fontFamily: "'JetBrains Mono'" }}
                  >
                    {project.type}
                  </span>
                </div>

                {/* Title */}
                <h3 
                  className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-[#FF00FF] transition-colors duration-300"
                  style={{ fontFamily: "'Plus Jakarta Sans'" }}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p 
                  className="text-white text-sm md:text-base mb-6 flex-grow font-medium"
                  style={{ fontFamily: "'Plus Jakarta Sans'" }}
                >
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="text-xs font-bold text-white bg-[#0F1535] px-3 py-1 rounded-full border border-[#333333] group-hover:border-[#00FFFF] transition-colors duration-300"
                      style={{ fontFamily: "'JetBrains Mono'" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Project Button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF00FF] text-white font-bold uppercase text-sm rounded-lg hover:opacity-90 transition-opacity duration-200 active:scale-95 border-2 border-[#FF00FF] w-fit"
                  style={{ fontFamily: "'JetBrains Mono'" }}
                >
                  View Project
                  <ExternalLink size={16} strokeWidth={1.5} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
