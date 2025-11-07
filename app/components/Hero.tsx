'use client';

import { useEffect, useRef, Suspense } from 'react';
import gsap from 'gsap';
import dynamic from 'next/dynamic';

// Dynamically import 3D scene; use an inline fallback component to avoid a missing-module error
const Scene3D = dynamic(
  () =>
    Promise.resolve(function InlineScene3D() {
      return (
        <div className="w-full h-full bg-linear-to-br from-teal-50/50 via-white to-rose-50/30 dark:from-gray-900 dark:via-black dark:to-gray-900" />
      );
    }),
  { ssr: false }
);

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Staggered text animation with split effect
      tl.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.4,
        ease: 'expo.out',
      })
        .from(
          subtitleRef.current,
          {
            y: 50,
            opacity: 0,
            duration: 1.2,
          },
          '-=1'
        )
        .from(
          ctaRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 1,
          },
          '-=0.8'
        )
        .from(
          statsRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
          },
          '-=0.6'
        );

      // Floating animation for stats
      gsap.to(statsRef.current, {
        y: -10,
        duration: 2,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden"
      id="home"
    >
      {/* 3D Background Scene */}
      <div className="absolute inset-0 -z-10">
        <Suspense fallback={<div className="absolute inset-0 bg-linear-to-br from-teal-50/50 via-white to-rose-50/30 dark:from-gray-900 dark:via-black dark:to-gray-900" />}>
          <Scene3D />
        </Suspense>
      </div>

      {/* Overlay gradient for readability */}
      <div className="absolute inset-0 bg-white/40 dark:bg-black/40 backdrop-blur-[2px] -z-5" />

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left: Main Content */}
        <div className="space-y-8">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="px-4 py-2 bg-teal-500/10 border border-teal-500/30 rounded-full text-teal-600 dark:text-teal-400 text-sm font-semibold backdrop-blur-sm">
                👋 Welcome to my portfolio
              </span>
            </div>
            
            <h1
              ref={titleRef}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              I'm{' '}
              <span className="gradient-text block mt-2">
                Lamia Koucem
              </span>
            </h1>

            <p
              ref={subtitleRef}
              className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed"
            >
              Software Engineering Student crafting{' '}
              <span className="text-teal-600 dark:text-teal-400 font-semibold">innovative</span> and{' '}
              <span className="text-rose-500 font-semibold">elegant</span> solutions
            </p>
          </div>

          <div ref={ctaRef} className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="group px-8 py-4 bg-linear-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white rounded-2xl font-semibold text-lg transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-teal-500/30 flex items-center gap-2"
            >
              View My Work
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-2 border-teal-500 text-teal-600 dark:text-teal-400 hover:bg-teal-500 hover:text-white rounded-2xl font-semibold text-lg transition-all duration-500 hover:scale-105 hover:shadow-xl"
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* Right: Animated Stats/Highlights */}
        <div ref={statsRef} className="hidden lg:grid grid-cols-2 gap-6">
          {[
            { label: 'Projects', value: '10+', color: 'from-teal-500 to-cyan-500' },
            { label: 'Technologies', value: '20+', color: 'from-rose-500 to-pink-500' },
            { label: 'Experience', value: '2+ yrs', color: 'from-amber-500 to-orange-500' },
            { label: 'Code Quality', value: 'A+', color: 'from-emerald-500 to-green-500' },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="group relative bg-white/60 dark:bg-gray-900/60 backdrop-blur-md p-6 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 hover:scale-105 transition-all duration-500 hover:shadow-xl cursor-default"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`absolute inset-0 bg-linear-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
              <div className="relative z-10">
                <p className={`text-4xl font-bold mb-2 bg-linear-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </p>
                <p className="text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">Scroll Down</span>
          <svg
            className="w-6 h-6 text-teal-600 dark:text-teal-400"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
