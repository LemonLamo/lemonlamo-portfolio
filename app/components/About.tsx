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
      className="py-16 px-6 apple-grid relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto"
            style={{ color: 'var(--text-tertiary)' }}
          >
            Passionate about creating elegant digital experiences
          </p>
        </div>

        {/* Main Content */}
        <div ref={contentRef} className="max-w-4xl mx-auto">
          <div className="glass-effect rounded-3xl p-8 md:p-12 mb-12">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed"
                style={{ color: 'var(--text-tertiary)' }}
              >
                I'm currently a masters student with a passion for  <span className="font-semibold text-[#ff7b6c] highlight-line">Software Engineering </span>, 
                I have always had a passion for software and been highly intrigued by computer science and various technical and scientifical fields and now i am lucky enough to make it my job.
                
                for me There's something about solving complex problems with various technologies and discovering new concepts and bringing brilliant ideas to life 
                and that just clicks for me. 

                So Whether it's building a full-stack app or diving into a new framework or a totally differentfield, I'm always really excited to build and learn.
                could be all alone in my room or collaborating with a team, I just love the process of crafting something and seeing it come to life.
              </p>
           
    
            </div>

        
          </div>


        </div>
      </div>
    </section>
  );
}
