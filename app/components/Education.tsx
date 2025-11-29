'use client';

import { useRef } from 'react';

const education = [
  {
    degree: 'Master\'s Degree in Software Engineering',
    institution: 'USTHB',
    period: '2025 - Present',
    status: 'Currently Pursuing',
    description: 'Advanced studies in software engineering, focusing on modern development practices and system architecture.',
  },
  {
    degree: 'Bachelor\'s Degree in Software Engineering',
    institution: 'USTHB',
    period: '2022 - 2025',
    status: 'Completed',
    description: 'Graduated in June 2025 with comprehensive training in software development, algorithms, and system design.',
  },
  {
    degree: 'Baccalaureate in Mathematics',
    institution: 'Toufik Bouattoura High School',
    period: '2022',
    status: 'Completed',
    description: 'Specialized in mathematics field, building a strong analytical foundation.',
  },
];

export default function Education() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  return (
    <section
      ref={sectionRef}
      id="education"
      className="py-16 px-6 apple-grid relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-12 text-center">
          <h2
            ref={titleRef}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3"
            style={{ color: 'var(--text-primary)' }}
          >
            Education <span style={{ color: 'var(--accent-purple)' }}>Journey</span>
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ backgroundColor: 'var(--accent-pink)' }} />
          <p className="text-base sm:text-lg mt-4 px-4"
            style={{ color: 'var(--text-secondary)' }}
          >
            My academic background and continuous learning path
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div 
            className="absolute left-8 top-0 bottom-0 w-0.5"
            style={{ 
              background: 'linear-gradient(to bottom, var(--accent-purple), var(--accent-pink))'
            }}
          />

          {education.map((item, index) => (
            <div key={index} className="relative pl-20 pb-10 last:pb-0 group">
              {/* Timeline Dot */}
              <div 
                className="absolute left-5 top-1 w-6 h-6 rounded-full border-4 transition-all duration-300 group-hover:scale-125"
                style={{
                  backgroundColor: 'var(--card-bg)',
                  borderColor: index % 2 === 0 ? 'var(--accent-purple)' : 'var(--accent-pink)',
                  boxShadow: `0 0 0 4px ${index % 2 === 0 ? 'rgba(139, 92, 246, 0.1)' : 'rgba(236, 72, 153, 0.1)'}`
                }}
              />

              {/* Content */}
              <div className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                  <h3 
                    className="text-lg sm:text-xl font-bold transition-colors duration-300"
                    style={{ color: index % 2 === 0 ? 'var(--accent-purple)' : 'var(--accent-pink)' }}
                  >
                    {item.degree}
                  </h3>
                  <span 
                    className="text-xs font-semibold px-2.5 py-1 rounded-full self-start sm:self-center whitespace-nowrap"
                    style={{
                      backgroundColor: index % 2 === 0 ? 'rgba(139, 92, 246, 0.15)' : 'rgba(236, 72, 153, 0.15)',
                      color: index % 2 === 0 ? 'var(--accent-purple)' : 'var(--accent-pink)',
                    }}
                  >
                    {item.status}
                  </span>
                </div>
                
                <p 
                  className="text-sm sm:text-base font-semibold"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {item.institution}
                </p>
                
                <p 
                  className="text-xs sm:text-sm font-medium"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {item.period}
                </p>
                
                <p 
                  className="text-xs sm:text-sm leading-relaxed pt-1"
                  style={{ color: 'var(--text-tertiary)' }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
