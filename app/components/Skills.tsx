'use client';

import { useRef } from 'react';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiPython,
  SiMongodb,
  SiMysql,
  SiGit,
  SiDocker,
  SiKubernetes,
  SiExpress,
  SiOracle,
  SiPhp,
  SiC,
  SiLinux,
  SiBootstrap,
  SiFigma,
  SiRabbitmq,
  SiPostman,
  SiTailwindcss,
  SiRedis,
  SiPostgresql,
  SiGraphql,
  SiSpringboot,
  SiFirebase,
  SiVuedotjs,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
   
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express', icon: SiExpress, color: '#ffffff' },
      { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'Java', icon: FaJava, color: '#007396' },
      { name: 'PHP', icon: SiPhp, color: '#777BB4' },
    ],
  },
  {
    title: 'Mobile',
    skills: [
      { name: 'React Native', icon: SiReact, color: '#61DAFB' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Figma', icon: SiFigma, color: '#147EFB' },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'Redis', icon: SiRedis, color: '#DC382D' },
      { name: 'Oracle', icon: SiOracle, color: '#F80000' },
      { name: 'FireStore', icon: SiFirebase, color: '#FFCA28' },
    ],
  },
  {
    title: 'DevOps & Tools',
    skills: [
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'Linux', icon: SiLinux, color: '#FCC624' },
      { name: 'RabbitMQ', icon: SiRabbitmq, color: '#FF6600' },
    ],
  },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const titleRef = useRef<HTMLHeadingElement>(null);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-16 px-6 apple-grid relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-12 text-center">
          <h2
            ref={titleRef}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3"
            style={{ color: 'var(--text-primary)' }}
          >
            Technical <span style={{ color: 'var(--accent-pink)' }}>Skills</span>
          </h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ backgroundColor: 'var(--accent-purple)' }} />
          <p className="text-base sm:text-lg mt-4 px-4"
            style={{ color: 'var(--text-secondary)' }}
          >
            Technologies I use to build exceptional digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="group rounded-2xl hover:scale-[1.02] hover:shadow-xl transition-all duration-500 overflow-hidden"
              style={{
                backgroundColor: 'var(--card-bg)',
                border: '2px solid',
                borderColor: index % 2 === 0 ? 'var(--accent-purple)' : 'var(--accent-pink)'
              }}
            >
              {/* Soft header like projects */}
              <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ 
                backgroundColor: index % 2 === 0 ? 'rgba(196, 181, 253, 0.1)' : 'rgba(251, 207, 232, 0.1)',
                borderBottomColor: 'var(--card-border)'
              }}>
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#c4b5fd' }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#f9a8d4' }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#e9d5ff' }} />
              </div>
              
              <div className="relative z-10 p-4 sm:p-6">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-300/40 dark:border-white/10">
                  <div className="w-1 h-16 rounded-full" style={{ 
                    backgroundColor: index % 2 === 0 ? 'var(--accent-purple)' : 'var(--accent-pink)' 
                  }} />
                  <h3 className="text-2xl font-bold tracking-tight" style={{ 
                    color: 'var(--text-primary)' 
                  }}>
                    {category.title}
                  </h3>
                </div>
                
                <ul className="space-y-2.5">
                  {category.skills.map((skill) => {
                    const Icon = skill.icon;
                    const isNextOrExpress = skill.name === 'Next.js' || skill.name === 'Express';
                    
                    return (
                      <li
                        key={skill.name}
                        className="skill-item flex items-center gap-3 cursor-pointer group/item p-2.5 rounded-xl transition-all duration-300"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        <div className="relative shrink-0">
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover/item:scale-110 border-2"
                            style={{
                              backgroundColor: `${skill.color}15`,
                              borderColor: `${skill.color}40`,
                            }}
                          >
                            <Icon
                              className="w-5 h-5 transition-all duration-300"
                              style={{
                                color: isNextOrExpress ? 'var(--icon-nextjs-express)' : skill.color,
                              }}
                            />
                          </div>
                        </div>
                        <span className="font-semibold text-sm transition-all" style={{ 
                          color: 'var(--text-primary)' 
                        }}>
                          {skill.name}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Note */}
        <div className="text-center mt-12">
          <p className="italic"
            style={{ color: 'var(--text-tertiary)' }}
          >
            + Many more tools and technologies in my toolkit...
          </p>
        </div>
      </div>
    </section>
  );
}
