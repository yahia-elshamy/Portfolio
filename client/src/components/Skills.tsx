/**
 * Skills Section Component
 * Neo-brutalist cyberpunk skills showcase
 * 
 * Design: Grid layout with skill tags, no percentages
 * Lime green section title, white skill tags
 */

export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React.js', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Bootstrap']
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'Database Design']
    },
    {
      category: 'Databases',
      skills: ['MySQL', 'MongoDB', 'SQL', 'Data Optimization']
    },
    {
      category: 'Tools & Other',
      skills: ['Git', 'GitHub', 'AWS Basics', 'C++', 'Figma', 'Postman']
    }
  ];

  return (
    <section className="w-full bg-black py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Title */}
        <h2 
          className="text-6xl md:text-8xl font-black uppercase mb-12 md:mb-16 text-[#A8FF00] tracking-tight"
          style={{ fontFamily: "'Pixelify Sans'" }}
        >
          SKILLS
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {skillCategories.map((category, idx) => (
            <div key={idx}>
              {/* Category Title */}
              <h3 
                className="text-2xl md:text-3xl font-bold text-white mb-6 uppercase"
                style={{ fontFamily: "'JetBrains Mono'" }}
              >
                {category.category}
              </h3>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sidx) => (
                  <div
                    key={sidx}
                    className="bg-white text-black px-4 py-2 rounded-full font-bold text-sm border-2 border-white hover:bg-[#A8FF00] hover:border-[#A8FF00] transition-all duration-200"
                    style={{ fontFamily: "'Plus Jakarta Sans'" }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Professional Skills Section */}
        <div className="mt-16 md:mt-24 pt-12 md:pt-16 border-t-2 border-[#333333]">
          <h3 
            className="text-2xl md:text-3xl font-bold text-white mb-8 uppercase"
            style={{ fontFamily: "'JetBrains Mono'" }}
          >
            Professional Skills
          </h3>
          
          <div className="flex flex-wrap gap-3">
            {[
              'Problem-Solving',
              'Logical Reasoning',
              'Time Management',
              'Communication',
              'Teamwork',
              'Critical Thinking',
              'Fast Learning',
              'Detail-Oriented',
              'Technical Documentation'
            ].map((skill, idx) => (
              <div
                key={idx}
                className="bg-[#1a1a1a] text-white px-4 py-2 rounded-full font-semibold text-sm border-2 border-[#333333] hover:border-[#A8FF00] hover:text-[#A8FF00] transition-all duration-200"
                style={{ fontFamily: "'Plus Jakarta Sans'" }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
