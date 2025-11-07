'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'Luna AI - Breast Cancer Support',
    description: 'AI-powered mobile platform designed to empower and support breast cancer patients throughout their journey from diagnosis to recovery.',
    technologies: ['JavaScript', 'AI/ML', 'Mobile Development'],
    gradient: 'from-teal-400/20 to-cyan-400/20',
    borderColor: 'border-teal-400/30',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
    link: 'https://github.com/LemonLamo/Luna-AI',
  },
  {
    title: 'Ministry PFE System',
    description: 'Comprehensive project management system for government institutions with workflow automation and document management.',
    technologies: ['JavaScript', 'Node.js', 'Full Stack'],
    gradient: 'from-rose-400/20 to-pink-400/20',
    borderColor: 'border-rose-400/30',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
    link: 'https://github.com/LemonLamo/ministry-PFE',
  },
  {
    title: 'Hackathon Hollow',
    description: 'Collaborative hackathon platform built during a competitive coding event, featuring real-time collaboration and project showcasing.',
    technologies: ['JavaScript', 'React', 'WebSockets'],
    gradient: 'from-amber-400/20 to-orange-400/20',
    borderColor: 'border-amber-400/30',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop',
    link: 'https://github.com/SamiSelx/hackathon_hollow',
  },
  {
    title: 'Full Stack PFE',
    description: 'End-of-studies project showcasing modern web development practices with TypeScript and scalable architecture.',
    technologies: ['TypeScript', 'Full Stack', 'Modern Web'],
    gradient: 'from-emerald-400/20 to-teal-400/20',
    borderColor: 'border-emerald-400/30',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    link: 'https://github.com/LemonLamo/PFE',
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
        y: 20,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
      });

      // Animate projects with smooth effect
      projectRefs.current.forEach((project, index) => {
        if (!project) return;

        gsap.from(project, {
          scrollTrigger: {
            trigger: project,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          y: 40,
          opacity: 0,
          duration: 1.2,
          delay: (index % 2) * 0.15,
          ease: 'power2.out',
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-24 px-6 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
        >
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              ref={(el) => {
                projectRefs.current[index] = el;
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-700 border-2 ${project.borderColor} overflow-hidden`}
            >
              {/* Soft gradient overlay */}
              <div className={`absolute inset-0 bg-linear-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              
              <div className="relative z-10">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden rounded-t-2xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white transition-all duration-500">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full font-medium transition-all duration-500 hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-teal-600 dark:text-teal-400 font-semibold hover:gap-3 transition-all duration-500 group/link"
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
