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
      className="py-8 px-6 apple-grid relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <div ref={titleRef} className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3"
            style={{ color: 'var(--text-primary)' }}
          >
            About <span style={{ color: 'var(--accent-purple)' }}>Me</span>
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
          <div className="glass-effect rounded-3xl p-8 md:p-12 mb-12 relative overflow-hidden">
            <div className="space-y-6 relative z-10">
              <p className="text-lg leading-relaxed"
                style={{ color: 'var(--text-tertiary)' }}
              >
                I'm currently a master's student with a passion for{' '}
                <span className="font-semibold text-[#ff7b6c] highlight-line">Software Engineering</span>. 
                I've always been highly intrigued by computer science and various technical and scientific fields, 
                and now I'm lucky enough to make it my job.
              </p>
              <p className="text-lg leading-relaxed"
                style={{ color: 'var(--text-tertiary)' }}
              >
                For me, there's something about solving complex problems with various technologies, 
                discovering new concepts, and bringing brilliant ideas to life that just <em>clicks</em>. 
              </p>
              <p className="text-lg leading-relaxed"
                style={{ color: 'var(--text-tertiary)' }}
              >
                Whether it's building a full-stack app, diving into a new framework, or exploring a totally different field, 
                I'm always really excited to build and learn. Could be all alone in my room or collaborating with a team .I just 
                love the process of crafting something and seeing it come to life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
