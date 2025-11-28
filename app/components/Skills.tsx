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
    color: 'from-[#ff7b6c] to-[#a78bfa]',
    bgColor: 'glass-effect',
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
    color: 'from-[#a78bfa] to-[#ff7b6c]',
    bgColor: 'glass-effect',
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
    color: 'from-[#ff7b6c] to-[#a78bfa]',
    bgColor: 'glass-effect',
    skills: [
      { name: 'React Native', icon: SiReact, color: '#61DAFB' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Figma', icon: SiFigma, color: '#147EFB' },
    ],
  },
  {
    title: 'Database',
    color: 'from-[#a78bfa] to-[#ff7b6c]',
    bgColor: 'glass-effect',
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
    color: 'from-[#ff7b6c] to-[#a78bfa]',
    bgColor: 'glass-effect',
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
        <div className="text-center mb-12">
          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto"
            style={{ color: 'var(--text-tertiary)' }}
          >
            Technologies I use to build exceptional digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="group backdrop-blur-md p-6 rounded-[28px] hover:scale-[1.02] transition-all duration-300 hover:shadow-lg hover:shadow-[#ff7b6c]/10"
              style={{
                backgroundColor: 'var(--card-bg)',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'var(--card-border)',
              }}
            >
              <div className="relative z-10">
                {/* Category Header with improved styling */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-300/40 dark:border-white/10">
                  <div className={`w-1 h-16 rounded-full bg-linear-to-b ${category.color} shadow-lg`} />
                  <h3 className={`text-2xl font-bold bg-linear-to-r ${category.color} bg-clip-text text-transparent tracking-tight`}>
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
                        className="skill-item flex items-center gap-3 cursor-pointer group/item hover:bg-linear-to-r hover:from-[#ff7b6c]/10 hover:to-[#a78bfa]/10 p-2.5 rounded-xl transition-all duration-300"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        <div className="relative shrink-0">
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover/item:scale-110 border-2 group-hover/item:shadow-lg"
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
                        <span className="font-semibold text-sm group-hover/item:text-[#ff7b6c] transition-all">
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
