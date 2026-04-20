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

const DeskScene = () => (
  <svg
    viewBox="0 0 700 460"
    className="w-full h-auto"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* ---- Monitor: outer bezel ---- */}
    <rect x="90" y="25" width="520" height="320" rx="10" fill="#1e1b2e" />

    {/* ---- Screen (split panels + title bar) ---- */}
    {/* Title bar */}
    <rect x="102" y="37" width="496" height="24" fill="#c4b5fd" />
    <circle cx="120" cy="49" r="5" fill="#ef4444" />
    <circle cx="136" cy="49" r="5" fill="#f59e0b" />
    <circle cx="152" cy="49" r="5" fill="#10b981" />

    {/* Left panel — cream design mockup */}
    <rect x="102" y="61" width="206" height="272" fill="#f7f2ff" />

    {/* Salmon header lines */}
    <rect x="122" y="84" width="58" height="5" rx="2" fill="#fb7185" />
    <rect x="122" y="95" width="118" height="5" rx="2" fill="#fb7185" />
    <rect x="122" y="106" width="84" height="5" rx="2" fill="#fb7185" />

    {/* Pink photo card */}
    <rect x="122" y="128" width="166" height="72" rx="6" fill="#fbcfe8" />
    <circle cx="144" cy="162" r="13" fill="#f9a8d4" />
    <rect x="164" y="154" width="106" height="4" rx="2" fill="#f9a8d4" />
    <rect x="164" y="164" width="74" height="4" rx="2" fill="#f9a8d4" />
    <rect x="130" y="180" width="148" height="3" rx="1.5" fill="#f9a8d4" opacity="0.7" />
    <rect x="130" y="188" width="106" height="3" rx="1.5" fill="#f9a8d4" opacity="0.7" />

    {/* Purple-blue card */}
    <rect x="122" y="212" width="166" height="92" rx="6" fill="#c7d2fe" />
    <rect x="134" y="226" width="88" height="4" rx="2" fill="#6366f1" />
    <rect x="134" y="238" width="138" height="3" rx="1.5" fill="#6366f1" opacity="0.7" />
    <rect x="134" y="248" width="110" height="3" rx="1.5" fill="#6366f1" opacity="0.7" />
    <rect x="134" y="258" width="126" height="3" rx="1.5" fill="#6366f1" opacity="0.7" />
    <rect x="134" y="286" width="78" height="10" rx="5" fill="#6366f1" />

    {/* Right panel — dark code view */}
    <rect x="308" y="61" width="290" height="272" fill="#3b364a" />

    {/* Line numbers */}
    {[32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44].map((num, i) => (
      <text
        key={num}
        x="322"
        y={87 + i * 19}
        fontSize="11"
        fontFamily="ui-monospace, Menlo, monospace"
        fill="#7b7592"
        fontWeight="500"
      >
        {num}
      </text>
    ))}

    {/* Code bars */}
    {[
      { w: 95, c: '#8b8299' },
      { w: 145, c: '#8b8299' },
      { w: 70, c: '#b1a5c7' },
      { w: 175, c: '#8b8299' },
      { w: 110, c: '#8b8299' },
      { w: 155, c: '#b1a5c7' },
      { w: 85, c: '#8b8299' },
      { w: 195, c: '#8b8299' },
      { w: 105, c: '#8b8299' },
      { w: 150, c: '#b1a5c7' },
      { w: 75, c: '#8b8299' },
      { w: 165, c: '#8b8299' },
      { w: 120, c: '#8b8299' },
    ].map((bar, i) => (
      <rect
        key={i}
        x="350"
        y={82 + i * 19}
        width={bar.w}
        height="7"
        rx="2"
        fill={bar.c}
      />
    ))}

    {/* ---- Monitor stand ---- */}
    <rect x="335" y="345" width="30" height="24" fill="#d1d5db" />
    <polygon points="285,378 415,378 405,368 295,368" fill="#d1d5db" />
    <rect x="270" y="378" width="160" height="7" rx="3" fill="#9ca3af" />
    {/* Camera dot */}
    <circle cx="350" cy="338" r="3.5" fill="#1e1b2e" />

    {/* ---- Desk surface ---- */}
    <rect x="0" y="395" width="700" height="9" fill="#1e1b2e" />
    <rect x="0" y="404" width="700" height="3" fill="#3b364a" />

    {/* ---- Coffee mug ---- */}
    {/* Body (trapezoid) */}
    <path
      d="M 170 368 L 175 395 L 220 395 L 225 368 Z"
      fill="#f472b6"
      stroke="#1e1b2e"
      strokeWidth="2.5"
    />
    {/* Top rim */}
    <ellipse cx="197.5" cy="368" rx="27.5" ry="4.5" fill="#ec4899" stroke="#1e1b2e" strokeWidth="2.5" />
    <ellipse cx="197.5" cy="368" rx="22" ry="2.5" fill="#9d174d" />
    {/* Handle */}
    <path
      d="M 225 378 Q 245 381 245 388 Q 245 396 225 394"
      fill="none"
      stroke="#1e1b2e"
      strokeWidth="2.5"
    />
    {/* Steam */}
    <path
      d="M 185 358 Q 188 348, 182 341 Q 180 333, 188 325"
      stroke="#9ca3af"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      opacity="0.5"
    />
    <path
      d="M 205 358 Q 208 348, 202 341 Q 200 333, 208 325"
      stroke="#9ca3af"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      opacity="0.5"
    />
  </svg>
);

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
