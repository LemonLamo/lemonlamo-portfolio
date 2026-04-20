'use client';

import { useRef } from 'react';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 px-6 relative overflow-hidden"
      style={{ backgroundColor: 'var(--bg-about)' }}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <div ref={titleRef} className="mb-12 text-center">
          <h2 className="display text-5xl sm:text-6xl md:text-7xl mb-3"
            style={{ color: 'var(--text-primary)' }}
          >
            About <span className="italic" style={{ color: 'var(--accent-purple)' }}>Me</span>
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ backgroundColor: 'var(--accent-pink)' }} />
          <p className="text-base sm:text-lg mt-4 px-4"
            style={{ color: 'var(--text-secondary)' }}
          >
            Passionate about creating elegant digital experiences
          </p>
        </div>

        {/* Main Content */}
        <div ref={contentRef} className="max-w-4xl mx-auto">
          <div className="chunky-card p-8 md:p-12 mb-12 relative overflow-hidden">
            <div className="space-y-6 relative z-10">
              <p className="text-xl md:text-2xl leading-relaxed"
                style={{ color: 'var(--text-primary)' }}
              >
                I&apos;m a <span className="display italic font-bold" style={{ color: 'var(--accent-purple)' }}>freelance software engineer</span> who likes turning complex problems into <span className="display italic font-bold" style={{ color: 'var(--accent-pink)' }}>simple, elegant products</span>.
              </p>
              <p className="text-base md:text-lg leading-relaxed"
                style={{ color: 'var(--text-tertiary)' }}
              >
                Full-stack by trade, curious by default — whether that&apos;s shipping a mobile app, picking up a new framework over the weekend, or collaborating with a team to bring an idea to life. I care about craft, clean code, and interfaces that feel good to use.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
