'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';

const projects = [
  {
    title: 'Luna AI',
    description: 'AI-powered mobile platform designed to empower and support breast cancer patients throughout their journey from diagnosis to recovery through intelligent guidance, emotional connection, and real human support.',
    technologies: ['AI/ML', 'Mobile Development', 'Healthcare'],
    gradient: 'from-pink-400/20 to-rose-400/20',
    borderColor: 'border-pink-400/30',
    image: '/luna.jpg',
    link: 'https://github.com/LemonLamo/Luna-AI',
  },
  {
    title: 'NutriFind',
    description: 'Smart nutrition tracking and meal planning application helping users make informed dietary choices and achieve their health goals.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    gradient: 'from-green-400/20 to-emerald-400/20',
    borderColor: 'border-green-400/30',
    image: '/nutrifind.png',
    link: 'https://github.com/LemonLamo/NutriFind',
  },
  {
    title: 'Apex Consulting',
    description: 'Professional consulting platform connecting businesses with expert advisors for strategic guidance and business development.',
    technologies: ['Next.js', 'TypeScript', 'Full Stack'],
    gradient: 'from-blue-400/20 to-cyan-400/20',
    borderColor: 'border-blue-400/30',
    image: '/apex.png',
    link: 'https://github.com/LemonLamo/apex-consulting-',
  },
  {
    title: 'TraceIt',
    description: 'Advanced tracking and logistics management system providing real-time visibility and optimization for supply chain operations.',
    technologies: ['JavaScript', 'Express', 'PostgreSQL'],
    gradient: 'from-orange-400/20 to-amber-400/20',
    borderColor: 'border-orange-400/30',
    image: '/TraceIT.png',
    link: 'https://github.com/LemonLamo/Trace-IT',
  },
  {
    title: 'PFE Project',
    description: 'End-of-studies project showcasing modern web development practices with TypeScript and scalable architecture.',
    technologies: ['TypeScript', 'Full Stack', 'Modern Web'],
    gradient: 'from-purple-400/20 to-violet-400/20',
    borderColor: 'border-purple-400/30',
    image: '/pfe.png',
    link: 'https://github.com/LemonLamo/PFE',
  },
  {
    title: 'Hollow Dev Challenges',
    description: 'Collaborative platform for developers to participate in coding challenges, share solutions, and showcase their skills.',
    technologies: ['React', 'WebSockets', 'Node.js'],
    gradient: 'from-teal-400/20 to-cyan-400/20',
    borderColor: 'border-teal-400/30',
    image: '/hollow.png',
    link: 'https://github.com/LemonLamo/hollow-dev-challenges',
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-16 px-6 apple-grid relative overflow-hidden"
    >

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-12 text-center">
          <h2
            ref={titleRef}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3"
            style={{ color: 'var(--text-primary)' }}
          >
            Featured <span style={{ color: 'var(--accent-purple)' }}>Projects</span>
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ backgroundColor: 'var(--accent-pink)' }} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              ref={(el) => {
                projectRefs.current[index] = el;
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative rounded-2xl hover:shadow-xl transition-all duration-500 overflow-hidden ${hoveredIndex === index ? 'scale-[1.02]' : 'scale-100'}`}
              style={{ 
                backgroundColor: 'var(--card-bg)',
                border: '2px solid',
                borderColor: index % 2 === 0 ? 'var(--accent-purple)' : 'var(--accent-pink)'
              }}
            >
              {/* Soft header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ 
                backgroundColor: index % 2 === 0 ? 'rgba(196, 181, 253, 0.1)' : 'rgba(251, 207, 232, 0.1)',
                borderBottomColor: 'var(--card-border)'
              }}>
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#c4b5fd' }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#f9a8d4' }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#e9d5ff' }} />
                <div className="ml-auto font-semibold text-xs" style={{ color: '#c4b5fd' }}>{String(index + 1).padStart(2, '0')}</div>
              </div>
              
              <div className="relative z-10">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 transition-all duration-500"
                    style={{ color: index % 2 === 0 ? 'var(--accent-purple)' : 'var(--accent-pink)' }}
                  >
                    {project.title}
                  </h3>
                  <p className="mb-4 leading-relaxed text-sm"
                    style={{ color: 'var(--text-tertiary)' }}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-1.5 text-xs rounded-full font-semibold transition-all duration-300"
                        style={{
                          backgroundColor: index % 2 === 0 ? 'rgba(139, 92, 246, 0.15)' : 'rgba(236, 72, 153, 0.15)',
                          color: index % 2 === 0 ? 'var(--accent-purple)' : 'var(--accent-pink)',
                          border: `1px solid ${index % 2 === 0 ? 'var(--accent-purple)' : 'var(--accent-pink)'}`,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-semibold hover:gap-3 transition-all duration-500 group/link"
                    style={{ color: index % 2 === 0 ? 'var(--accent-purple)' : 'var(--accent-pink)' }}
                  >
                    View Project
                    <svg
                      className="w-5 h-5 transition-transform duration-500 group-hover/link:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
