'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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
  SiAmazon,
  SiSpringboot,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: 'Frontend Development',
    color: 'from-teal-400 to-cyan-400',
    skills: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff', darkColor: '#000000' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
      { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
    ],
  },
  {
    title: 'Backend & APIs',
    color: 'from-rose-400 to-pink-400',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express', icon: SiExpress, color: '#ffffff', darkColor: '#000000' },
      { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'Java', icon: FaJava, color: '#007396' },
      { name: 'PHP', icon: SiPhp, color: '#777BB4' },
      { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
      { name: 'C', icon: SiC, color: '#A8B9CC' },
    ],
  },
  {
    title: 'Databases',
    color: 'from-amber-400 to-orange-400',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'Redis', icon: SiRedis, color: '#DC382D' },
      { name: 'Oracle', icon: SiOracle, color: '#F80000' },
    ],
  },
  {
    title: 'DevOps & Cloud',
    color: 'from-emerald-400 to-green-400',
    skills: [
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
      { name: 'AWS', icon: SiAmazon, color: '#FF9900' },
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'Linux', icon: SiLinux, color: '#FCC624' },
      { name: 'RabbitMQ', icon: SiRabbitmq, color: '#FF6600' },
    ],
  },
  {
    title: 'Design & Tools',
    color: 'from-violet-400 to-purple-400',
    skills: [
      { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
    ],
  },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
        y: 30,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
      });

      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          y: 50,
          opacity: 0,
          duration: 1,
          delay: index * 0.08,
          ease: 'power3.out',
        });

        const skillItems = card.querySelectorAll('.skill-item');
        skillItems.forEach((item) => {
          item.addEventListener('mouseenter', () => {
            gsap.to(item, {
              x: 8,
              scale: 1.05,
              duration: 0.4,
              ease: 'power2.out',
            });
          });
          item.addEventListener('mouseleave', () => {
            gsap.to(item, {
              x: 0,
              scale: 1,
              duration: 0.4,
              ease: 'power2.out',
            });
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-24 px-6 bg-gray-50 dark:bg-black relative overflow-hidden"
    >
      {/* Vibrant animated background */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-rose-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            A versatile tech stack honed through real-world projects and continuous learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="group bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-800 relative overflow-hidden hover:-translate-y-2"
            >
              {/* Animated gradient border */}
              <div className={`absolute inset-0 bg-linear-to-br ${category.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl`} />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-2 h-8 rounded-full bg-linear-to-b ${category.color}`} />
                  <h3 className={`text-xl font-bold bg-linear-to-r ${category.color} bg-clip-text text-transparent`}>
                    {category.title}
                  </h3>
                </div>
                
                <ul className="space-y-3">
                  {category.skills.map((skill) => {
                    const Icon = skill.icon;
                    const isDarkMode = typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches;
                    const iconColor = skill.darkColor && !isDarkMode ? skill.darkColor : skill.color;
                    
                    return (
                      <li
                        key={skill.name}
                        className="skill-item flex items-center gap-3 text-gray-700 dark:text-gray-300 cursor-pointer group/item"
                      >
                        <div className="relative">
                          <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover/item:scale-110 shadow-sm"
                            style={{
                              backgroundColor: `${skill.color}15`,
                            }}
                          >
                            <Icon
                              className="w-7 h-7 transition-all duration-300 group-hover/item:rotate-6"
                              style={{
                                color: iconColor,
                                filter: iconColor === '#ffffff' || iconColor === '#000000' 
                                  ? 'none' 
                                  : 'drop-shadow(0 0 2px currentColor)',
                              }}
                            />
                          </div>
                          {/* Glow effect on hover */}
                          <div
                            className="absolute inset-0 rounded-xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"
                            style={{
                              boxShadow: `0 0 20px ${skill.color}40`,
                            }}
                          />
                        </div>
                        <span className="font-semibold text-sm group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors">
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

        {/* Additional note */}
        <div className="text-center mt-12">
          <p className="text-gray-500 dark:text-gray-400 italic">
            ...and continuously exploring emerging technologies 🚀
          </p>
        </div>
      </div>
    </section>
  );
}
