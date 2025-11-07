'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaGraduationCap, FaLaptopCode, FaRocket, FaHeart } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
      });

      // Grid animation
      gsap.from(gridRef.current, {
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      // Animate stats cards with stagger
      statsRef.current.forEach((stat, index) => {
        if (!stat) return;
        
        gsap.from(stat, {
          scrollTrigger: {
            trigger: stat,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          y: 50,
          opacity: 0,
          scale: 0.9,
          duration: 0.8,
          delay: index * 0.1,
          ease: 'back.out(1.2)',
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    {
      icon: FaGraduationCap,
      title: 'Education',
      value: 'USTHB',
      subtitle: 'Software Engineering',
      color: 'from-teal-500 to-cyan-500',
    },
    {
      icon: FaLaptopCode,
      title: 'Experience',
      value: '2+ Years',
      subtitle: 'Building Projects',
      color: 'from-rose-500 to-pink-500',
    },
    {
      icon: FaRocket,
      title: 'Projects',
      value: '10+',
      subtitle: 'Completed Works',
      color: 'from-amber-500 to-orange-500',
    },
    {
      icon: FaHeart,
      title: 'Passion',
      value: '100%',
      subtitle: 'Dedication',
      color: 'from-emerald-500 to-green-500',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 px-6 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Vibrant animated background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-rose-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate software engineer crafting innovative solutions
          </p>
        </div>

        {/* Main Content Grid */}
        <div ref={gridRef} className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Bio */}
          <div className="space-y-6">
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm a <span className="font-semibold text-teal-600 dark:text-teal-400">software engineering student at USTHB</span>, 
                driven by a passion for building innovative and impactful solutions. With hands-on experience in 
                modern web technologies and full-stack development, I specialize in creating scalable, 
                performant applications that deliver exceptional user experiences.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                My journey in software development has equipped me with a versatile skill set spanning 
                <span className="font-semibold text-rose-500"> frontend frameworks</span> like React and Next.js, 
                <span className="font-semibold text-amber-500"> backend technologies</span> including Node.js and Spring Boot, 
                and <span className="font-semibold text-emerald-500"> modern DevOps practices</span>. 
                I'm constantly exploring emerging technologies and best practices to stay at the forefront of innovation.
              </p>
            </div>

            {/* Key Values */}
            <div className="flex flex-wrap gap-3 pt-4">
              {['Clean Code', 'Problem Solving', 'Continuous Learning', 'Team Collaboration'].map((value) => (
                <span
                  key={value}
                  className="px-4 py-2 bg-linear-to-r from-teal-500/10 to-rose-500/10 border border-teal-500/30 rounded-full text-sm font-semibold text-gray-700 dark:text-gray-300 hover:scale-105 transition-transform duration-300"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Interactive Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.title}
                  ref={(el) => {
                    statsRef.current[index] = el;
                  }}
                  className="group relative bg-white/60 dark:bg-gray-800/60 backdrop-blur-md p-6 rounded-2xl border border-gray-200 dark:border-gray-700 hover:scale-105 hover:shadow-xl transition-all duration-500 cursor-default"
                >
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-linear-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
                  
                  <div className="relative z-10 space-y-3">
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    
                    {/* Content */}
                    <div>
                      <p className={`text-3xl font-bold bg-linear-to-r ${stat.color} bg-clip-text text-transparent`}>
                        {stat.value}
                      </p>
                      <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                        {stat.title}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {stat.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
            Currently open to exciting opportunities and collaborations
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group px-8 py-4 bg-linear-to-r from-teal-500 to-rose-500 hover:from-teal-600 hover:to-rose-600 text-white rounded-2xl font-semibold text-lg transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-teal-500/30 flex items-center gap-2 mx-auto"
          >
            Let's Connect
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
