'use client';

import { useRef } from 'react';
import Image from 'next/image';

const projects = [
  {
    title: 'NutriFind',
    description: 'A mobile app that helps you discover food options tailored to your health needs and fitness goals, with delivery services and personalized recipe recommendations and interactive map.',
    technologies: ['React Native', 'Node.js', 'MongoDB'],
    image: '/nutrifind.png',
    link: 'https://github.com/Lazy-Skelly/NutriFind',
  },
  {
    title: 'Luna AI',
    description: 'AI-powered mobile platform designed to support breast cancer patients throughout their journey from diagnosis to recovery through intelligent guidance, community creation, and support through tools like interactive maps and automation.',
    technologies: ['AI/ML', 'Mobile Development', 'Healthcare'],
    image: '/luna.jpg',
    link: 'https://github.com/LemonLamo/Luna-AI',
  },
  {
    title: 'Shiny RP',
    description: 'Promotional website for SHINY RP, a Garry\'s Mod roleplay server set in a universe inspired by pocket monsters. Built with Astro and Tailwind CSS for fast, static-first delivery.',
    technologies: ['Astro', 'Tailwind CSS', 'Static Site'],
    image: '/Shiny-rp.png',
    link: 'https://shiny.roleway.fr/',
  },
  {
    title: 'OVA Concierge',
    description: 'A premium digital concierge platform serving Dubai\'s high-end residents and expatriates. Subscription-based mobile app paired with a web admin dashboard, designed for a refined, frictionless experience from request to fulfillment.',
    technologies: ['React Native', 'Next.js', 'Dashboard', 'UX Design'],
    image: '/Ova.png',
    link: 'https://github.com/LemonLamo',
  },
  {
    title: 'TraceIt',
    description: 'An interactive cybersecurity learning platform featuring Capture The Flag (CTF) challenges to help users develop and practice their security skills.',
    technologies: ['JavaScript', 'Express', 'PostgreSQL'],
    image: '/TraceIT.png',
    link: 'https://github.com/LemonLamo/Trace-IT',
  },
  {
    title: 'Healthcare Interoperability System',
    description: 'Blockchain-based solution automating secure data exchange between Algerian hospitals and government ministries for disability patients, using Hyperledger Fabric and smart contracts with AES-192 encryption.',
    technologies: ['Hyperledger Fabric', 'Node.js', 'React', 'Docker'],
    image: '/pfe.png',
    link: 'https://github.com/LemonLamo/PFE',
  },
  {
    title: 'Hollow Dev Challenges',
    description: 'A collection of programming challenges and solutions showcasing problem-solving skills across various algorithms and data structures.',
    technologies: ['JavaScript', 'Algorithms', 'Problem Solving'],
    image: '/hollow.png',
    link: 'https://github.com/LemonLamo/hollow-dev-challenges',
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const titleRef = useRef<HTMLHeadingElement>(null);
  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-20 px-6 relative overflow-hidden"
      style={{ backgroundColor: 'var(--bg-projects)' }}
    >

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-12 text-center">
          <h2
            ref={titleRef}
            className="display text-5xl sm:text-6xl md:text-7xl mb-3"
            style={{ color: 'var(--text-primary)' }}
          >
            Featured <span className="italic" style={{ color: 'var(--accent-purple)' }}>Projects</span>
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ backgroundColor: 'var(--accent-pink)' }} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const isOrphanLast = index === projects.length - 1 && projects.length % 2 === 1;
            return (
            <div
              key={project.title}
              ref={(el) => {
                projectRefs.current[index] = el;
              }}
              className={`chunky-card group relative overflow-hidden ${isOrphanLast ? 'md:col-span-2 md:w-[calc(50%-1rem)] md:mx-auto' : ''}`}
            >
              {/* Soft header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ 
                backgroundColor: index % 2 === 0 ? 'rgba(196, 181, 253, 0.1)' : 'rgba(251, 207, 232, 0.1)',
                borderBottomColor: 'var(--card-border)'
              }}>
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#c4b5fd' }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#f9a8d4' }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#e9d5ff' }} />
                <div className="ml-auto display italic text-xl leading-none" style={{ color: index % 2 === 0 ? 'var(--accent-purple)' : 'var(--accent-pink)' }}>{String(index + 1).padStart(2, '0')}</div>
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
                  <div className="flex flex-wrap gap-3 mb-4">
                    {project.technologies.map((tech, techIdx) => {
                      const tagColors = ['tag-yellow', 'tag-purple', 'tag-pink', 'tag-blue', 'tag-green', 'tag-peach'];
                      return (
                        <span key={tech} className={`tag ${tagColors[techIdx % tagColors.length]}`}>
                          {tech}
                        </span>
                      );
                    })}
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
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <p className="text-lg font-small" style={{ color: 'var(--text-secondary)' }}>
            And more projects soon to be displayed... 
          </p>
        </div>
      </div>
    </section>
  );
}
