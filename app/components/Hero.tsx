'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const ThemeLamp = ({ isDark, onClick }: { isDark: boolean; onClick: () => void }) => {
  const lampRef = useRef<SVGSVGElement>(null);
  const bulbRef = useRef<SVGCircleElement>(null);
  const glowRef = useRef<SVGEllipseElement>(null);

  useEffect(() => {
    if (!lampRef.current || !bulbRef.current || !glowRef.current) return;

    if (isDark) {
      gsap.to(bulbRef.current, { fill: '#e5e7eb', duration: 0.4 });
      gsap.to(glowRef.current, { opacity: 0, duration: 0.4 });
    } else {
      gsap.to(bulbRef.current, { fill: '#fde68a', duration: 0.4 });
      gsap.to(glowRef.current, { opacity: 1, duration: 0.4 });
    }
  }, [isDark]);

  return (
    <svg
      ref={lampRef}
      width="80"
      height="160"
      viewBox="0 0 80 160"
      className="cursor-pointer transition-transform hover:scale-105"
      onClick={onClick}
    >
      {/* Cord */}
      <line x1="40" y1="0" x2="40" y2="40" stroke="#64748b" strokeWidth="1.5" />

      {/* Top mounting bracket */}
      <ellipse cx="40" cy="40" rx="6" ry="2.5" fill="#9f7aea" />
      <rect x="34" y="40" width="12" height="3" fill="#9f7aea" />

      {/* Lamp shade top rim */}
      <ellipse cx="40" cy="43" rx="26" ry="5" fill="#b794f6" />

      {/* Main shade body - smooth dome */}
      <path
        d="M 14 43 L 14 68 Q 14 75, 22 78 L 58 78 Q 66 75, 66 68 L 66 43 Z"
        fill="#9f7aea"
      />

      {/* Shade bottom rim */}
      <ellipse cx="40" cy="78" rx="18" ry="3" fill="#8b5cf6" />

      {/* Light glow effect when on */}
      <ellipse
        ref={glowRef}
        cx="40"
        cy="95"
        rx="22"
        ry="12"
        fill="#fde68a"
        opacity="0"
      />

      {/* Light bulb */}
      <circle
        ref={bulbRef}
        cx="40"
        cy="88"
        r="8"
        fill="#e5e7eb"
      />
    </svg>
  );
};

const DeskScene = () => {
  // Code bars: 13 rows (lines 32-44) with varied widths & muted syntax-like colors
  const codeBars = [
    { w: 130, c: '#6e6a7d' },
    { w: 175, c: '#6e6a7d' },
    { w: 95, c: '#9088a2' },
    { w: 75, c: '#6e6a7d' },
    { w: 115, c: '#6e6a7d' },
    { w: 160, c: '#a89cc8' },
    { w: 205, c: '#7d788e' },
    { w: 140, c: '#9088a2' },
    { w: 70, c: '#6e6a7d' },
    { w: 120, c: '#7d788e' },
    { w: 185, c: '#b3a5a5' },
    { w: 150, c: '#7d788e' },
    { w: 85, c: '#6e6a7d' },
  ];

  return (
    <svg
      viewBox="0 0 700 400"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* ============ MONITOR ============ */}
      {/* Outer bezel */}
      <rect x="85" y="25" width="530" height="320" rx="12" fill="var(--desk-chrome)" />
      {/* Subtle inner shadow line for depth */}
      <rect x="94" y="34" width="512" height="294" rx="4" fill="var(--desk-highlight)" />

      {/* Inner screen frame */}
      <rect x="97" y="37" width="506" height="288" rx="2" fill="var(--desk-screen-frame)" />

      {/* Title bar */}
      <rect x="97" y="37" width="506" height="22" fill="#b9c1dc" />
      <circle cx="117" cy="48" r="5" fill="#ef4444" />
      <circle cx="132" cy="48" r="5" fill="#f59e0b" />
      <circle cx="147" cy="48" r="5" fill="#10b981" />

      {/* ---- Left panel: design mockup ---- */}
      <rect x="97" y="59" width="200" height="266" fill="#f0e8e0" />

      {/* Scrollbar (vertical, lavender, on right side of left panel) */}
      <rect x="286" y="75" width="5" height="85" rx="2.5" fill="#c4b5fd" />

      {/* 3 salmon header lines */}
      <rect x="115" y="82" width="62" height="5" rx="2" fill="#d97878" />
      <rect x="115" y="93" width="116" height="5" rx="2" fill="#d97878" />
      <rect x="115" y="104" width="82" height="5" rx="2" fill="#d97878" />

      {/* Pink photo/profile card */}
      <rect x="115" y="124" width="164" height="78" rx="5" fill="#ecc5c5" />
      <circle cx="138" cy="158" r="13" fill="#d9a0a0" />
      <rect x="158" y="151" width="104" height="4" rx="2" fill="#d9a0a0" />
      <rect x="158" y="161" width="76" height="4" rx="2" fill="#d9a0a0" />
      <rect x="125" y="178" width="144" height="3" rx="1.5" fill="#d9a0a0" opacity="0.6" />
      <rect x="125" y="186" width="108" height="3" rx="1.5" fill="#d9a0a0" opacity="0.6" />

      {/* Purple-blue card */}
      <rect x="115" y="212" width="164" height="100" rx="5" fill="#b8bdd9" />
      <rect x="128" y="224" width="92" height="4" rx="2" fill="#7077a6" />
      <rect x="128" y="236" width="132" height="3" rx="1.5" fill="#7077a6" opacity="0.7" />
      <rect x="128" y="246" width="108" height="3" rx="1.5" fill="#7077a6" opacity="0.7" />
      <rect x="128" y="256" width="124" height="3" rx="1.5" fill="#7077a6" opacity="0.7" />
      <rect x="128" y="266" width="98" height="3" rx="1.5" fill="#7077a6" opacity="0.7" />
      <rect x="128" y="292" width="76" height="10" rx="5" fill="#7077a6" />

      {/* ---- Right panel: code view ---- */}
      <rect x="297" y="59" width="306" height="266" fill="#3b364a" />

      {/* Line numbers */}
      {[32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44].map((num, i) => (
        <text
          key={num}
          x="313"
          y={82 + i * 19}
          fontSize="11"
          fontFamily="ui-monospace, Menlo, monospace"
          fill="#756f86"
          fontWeight="500"
        >
          {num}
        </text>
      ))}

      {/* Code bars with varied widths and muted syntax colors */}
      {codeBars.map((bar, i) => (
        <rect
          key={i}
          x="338"
          y={77 + i * 19}
          width={bar.w}
          height="7"
          rx="2"
          fill={bar.c}
        />
      ))}

      {/* ============ STAND ============ */}
      {/* Camera dot on the monitor chin */}
      <circle cx="350" cy="335" r="3" fill="var(--desk-camera)" />
      {/* Thin trapezoidal neck */}
      <polygon points="344,345 356,345 359,360 341,360" fill="var(--desk-stand)" />
      {/* Slim base */}
      <rect x="322" y="360" width="56" height="6" rx="2" fill="var(--desk-stand)" />
      <rect x="322" y="366" width="56" height="2" fill="var(--desk-stand-shadow)" />

    </svg>
  );
};

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setIsDarkMode(isDark);

    const handleThemeChange = () => {
      const currentTheme = document.documentElement.classList.contains('dark');
      setIsDarkMode(currentTheme);
    };

    window.addEventListener('themechange', handleThemeChange);
    return () => window.removeEventListener('themechange', handleThemeChange);
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    const newTheme = !isDarkMode;

    gsap.to('body', {
      opacity: 0.7,
      duration: 0.2,
      onComplete: () => {
        if (newTheme) {
          html.classList.add('dark');
          localStorage.setItem('theme', 'dark');
        } else {
          html.classList.remove('dark');
          localStorage.setItem('theme', 'light');
        }
        setIsDarkMode(newTheme);
        gsap.to('body', { opacity: 1, duration: 0.3 });
        window.dispatchEvent(new Event('themechange'));
      },
    });
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-16 overflow-hidden"
      id="home"
      style={{
        background: `linear-gradient(to right, var(--hero-bg-left) 0%, var(--hero-bg-left) 50%, var(--hero-bg-right) 50%, var(--hero-bg-right) 100%)`,
      }}
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--accent-purple) 1px, transparent 1px),
            linear-gradient(to bottom, var(--accent-purple) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Theme toggle lamp */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-50">
        <ThemeLamp isDark={isDarkMode} onClick={toggleTheme} />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" style={{ paddingTop: '80px' }}>
        {/* Text */}
        <div className="text-center mb-8 relative">
          {/* Small star doodle — kept, arrow removed */}
          <svg
            className="hidden md:block absolute -top-2 left-6 w-10 h-10 opacity-70"
            viewBox="0 0 40 40"
            fill="none"
            style={{ color: 'var(--accent-purple)' }}
          >
            <path d="M20 4 L22 16 L34 18 L22 20 L20 32 L18 20 L6 18 L18 16 Z" fill="currentColor" />
          </svg>
          <svg
            className="hidden md:block absolute top-4 right-8 w-7 h-7 opacity-60"
            viewBox="0 0 40 40"
            fill="none"
            style={{ color: 'var(--accent-pink)' }}
          >
            <path d="M20 4 L22 16 L34 18 L22 20 L20 32 L18 20 L6 18 L18 16 Z" fill="currentColor" />
          </svg>

          <p
            className="display italic text-xl sm:text-2xl mb-3"
            style={{ color: 'var(--text-secondary)' }}
          >
            Hi, I&apos;m
          </p>

          <h1
            ref={titleRef}
            className="display text-6xl sm:text-7xl md:text-8xl mb-5"
            style={{ color: 'var(--text-primary)' }}
          >
            <span className="italic" style={{ color: 'var(--accent-purple)' }}>
              Lamia{' '}
            </span>
            <span className="italic" style={{ color: 'var(--accent-pink)' }}>
              Koucem
            </span>
          </h1>

          <p
            className="display text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto"
            style={{ color: 'var(--text-secondary)', fontWeight: 500 }}
          >
            I bring your{' '}
            <span className="italic font-bold" style={{ color: 'var(--accent-pink)' }}>creative</span>{' '}
            and{' '}
            <span className="italic font-bold" style={{ color: 'var(--accent-purple)' }}>innovative solutions</span>{' '}
            into life with code.
          </p>
        </div>

        {/* Desk scene */}
        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            <DeskScene />
          </div>
        </div>
      </div>
    </section>
  );
}
