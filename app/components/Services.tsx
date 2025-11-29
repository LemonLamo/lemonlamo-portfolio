'use client';

import { useRef, useState } from 'react';

const services = [
  {
    title: 'Web Development',
    description: 'Creating modern, responsive web applications with cutting-edge technologies like React, Next.js, and Node.js. From concept to deployment, I build scalable solutions tailored to your needs.',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 64 64" fill="none">
        <rect x="6" y="10" width="52" height="44" rx="3" fill="#9f7aea" opacity="0.15"/>
        <rect x="6" y="10" width="52" height="44" rx="3" stroke="#9f7aea" strokeWidth="2"/>
        <rect x="6" y="10" width="52" height="10" fill="#9f7aea" opacity="0.3"/>
        <circle cx="12" cy="15" r="1.8" fill="#9f7aea"/>
        <circle cx="18" cy="15" r="1.8" fill="#9f7aea"/>
        <circle cx="24" cy="15" r="1.8" fill="#9f7aea"/>
        <line x1="16" y1="28" x2="32" y2="28" stroke="#9f7aea" strokeWidth="2" strokeLinecap="round"/>
        <line x1="16" y1="34" x2="42" y2="34" stroke="#ff8a7a" strokeWidth="2" strokeLinecap="round"/>
        <line x1="16" y1="40" x2="28" y2="40" stroke="#9f7aea" strokeWidth="2" strokeLinecap="round"/>
        <line x1="16" y1="46" x2="38" y2="46" stroke="#ff8a7a" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    features: ['Full-Stack Development', 'Responsive Design', 'API Integration', 'Performance Optimization'],
  },
  {
    title: 'Mobile Development',
    description: 'Building cross-platform mobile applications with React Native. Delivering seamless user experiences across iOS and Android with native performance and modern UI/UX.',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 64 64" fill="none">
        <rect x="20" y="8" width="24" height="48" rx="3" fill="#ff8a7a" opacity="0.2"/>
        <rect x="20" y="8" width="24" height="48" rx="3" stroke="#ff8a7a" strokeWidth="2"/>
        <line x1="24" y1="13" x2="30" y2="13" stroke="#ff8a7a" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="32" cy="13" r="1" fill="#ff8a7a"/>
        <rect x="22" y="17" width="20" height="34" rx="1" fill="#ff8a7a" opacity="0.3"/>
        <circle cx="32" cy="53" r="1.5" fill="#ff8a7a"/>
        <path d="M28 28L32 32L36 28" stroke="#ff8a7a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="26" y="36" width="12" height="2" rx="1" fill="#ff8a7a"/>
        <rect x="26" y="40" width="8" height="2" rx="1" fill="#ff8a7a"/>
      </svg>
    ),
    features: [ 'Native Features', 'Cloud Integration', 'App Store Deployment'],
  },
  {
    title: 'Technical Consulting',
    description: 'Providing expert guidance on technology strategy, architecture decisions, and best practices. Helping teams choose the right tools and implement efficient development workflows.',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 64 64" fill="none">
        <rect x="10" y="18" width="44" height="32" rx="2" fill="#9f7aea" opacity="0.15"/>
        <rect x="10" y="18" width="44" height="32" rx="2" stroke="#9f7aea" strokeWidth="2"/>
        <circle cx="32" cy="28" r="6" fill="#9f7aea" opacity="0.3"/>
        <circle cx="32" cy="28" r="6" stroke="#9f7aea" strokeWidth="2"/>
        <circle cx="32" cy="28" r="2" fill="#ff8a7a"/>
        <path d="M20 40L24 44L32 36" stroke="#9f7aea" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="36" y1="40" x2="44" y2="40" stroke="#ff8a7a" strokeWidth="2" strokeLinecap="round"/>
        <line x1="36" y1="44" x2="42" y2="44" stroke="#9f7aea" strokeWidth="2" strokeLinecap="round"/>
        <path d="M14 14L18 18" stroke="#9f7aea" strokeWidth="2" strokeLinecap="round"/>
        <path d="M50 14L46 18" stroke="#9f7aea" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="14" cy="14" r="1.5" fill="#ff8a7a"/>
        <circle cx="50" cy="14" r="1.5" fill="#ff8a7a"/>
      </svg>
    ),
    features: ['Architecture Design', 'Tech Stack Selection', 'Code Reviews', 'Project Planning'],
  },
  {
    title: 'Development Mentoring',
    description: 'Sharing knowledge through workshops, training sessions, and one-on-one mentoring. Helping aspiring developers level up their skills and build confidence in their coding journey.',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 64 64" fill="none">
        <path d="M32 8L12 20V36C12 46 20 52 32 56C44 52 52 46 52 36V20L32 8Z" fill="#ff8a7a" opacity="0.2"/>
        <path d="M32 8L12 20V36C12 46 20 52 32 56C44 52 52 46 52 36V20L32 8Z" stroke="#ff8a7a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 28L28 34L42 22" stroke="#ff8a7a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="20" cy="40" r="1.5" fill="#ff8a7a"/>
        <circle cx="44" cy="40" r="1.5" fill="#ff8a7a"/>
        <circle cx="32" cy="48" r="1.5" fill="#ff8a7a"/>
      </svg>
    ),
    features: ['Workshop Training', 'Code Mentoring', 'Best Practices'],
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-16 px-6 apple-grid relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-12 text-center">
          <h2
            ref={titleRef}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3"
            style={{ color: 'var(--text-primary)' }}
          >
            Services I <span style={{ color: 'var(--accent-purple)' }}>Offer</span>
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ backgroundColor: 'var(--accent-pink)' }} />
        <p className="text-base sm:text-lg mt-4 px-4" style={{ color: 'var(--text-secondary)' }}>
            Working as a freelancer has given me the hands-on experience to offer the following services:
        </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group rounded-2xl hover:scale-[1.02] hover:shadow-xl transition-all duration-500 overflow-hidden ${hoveredIndex === index ? 'shadow-xl' : ''}`}
              style={{
                backgroundColor: 'var(--card-bg)',
                border: '2px solid',
                borderColor: index % 2 === 0 ? 'var(--accent-purple)' : 'var(--accent-pink)'
              }}
            >
              {/* Header with dots */}
              <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ 
                backgroundColor: index % 2 === 0 ? 'rgba(196, 181, 253, 0.1)' : 'rgba(251, 207, 232, 0.1)',
                borderBottomColor: 'var(--card-border)'
              }}>
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#c4b5fd' }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#f9a8d4' }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#e9d5ff' }} />
              </div>

              <div className="p-6">
                {/* Icon */}
                <div className="mb-4">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 
                  className="text-2xl font-bold mb-3"
                  style={{ color: index % 2 === 0 ? 'var(--accent-purple)' : 'var(--accent-pink)' }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p 
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: 'var(--text-tertiary)' }}
                >
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div 
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: index % 2 === 0 ? 'var(--accent-purple)' : 'var(--accent-pink)' }}
                      />
                      <span 
                        className="text-xs font-medium"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  
  );

}
