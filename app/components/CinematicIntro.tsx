'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface CinematicIntroProps {
  onComplete: () => void;
}

export default function CinematicIntro({ onComplete }: CinematicIntroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const [lines, setLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    const terminalLines = [
      '$ npm run dev',
      '',
      '> portfolio@1.0.0 dev',
      '> next dev --turbopack',
      '',
      '▲ Next.js 16.0.1 (Turbopack)',
      '  - Local:        http://localhost:3000',
      '',
      '✓ Starting...',
      '✓ Compiled in 1.2s',
      '✓ Ready on http://localhost:3000',
      '',
    ];

    let lineIndex = 0;
    const typeLines = () => {
      if (lineIndex < terminalLines.length) {
        setLines(prev => [...prev, terminalLines[lineIndex]]);
        setCurrentLine(lineIndex);
        lineIndex++;
        setTimeout(typeLines, lineIndex === 1 || lineIndex === 5 || lineIndex === 8 ? 100 : 300);
      } else {
        // Wait a moment then start zoom out transition
        setTimeout(startZoomOut, 800);
      }
    };

    const startZoomOut = () => {
      if (!terminalRef.current || !containerRef.current) return;

      const tl = gsap.timeline({
        onComplete: () => {
          onComplete();
        }
      });

      // Calculate position to move terminal to right side (where Hero editor is)
      const screenWidth = window.innerWidth;
      const moveX = screenWidth > 1024 ? screenWidth * 0.2 : 0; // Move to right on large screens
      
      // Zoom out and shift to editor position
      tl.to(terminalRef.current, {
        scale: 0.45,
        x: moveX,
        y: 50,
        duration: 1.8,
        ease: 'power3.inOut',
      })
      .to(containerRef.current, {
        backgroundColor: 'transparent',
        duration: 0.6,
      }, '-=1')
      .to(containerRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.in',
      });
    };

    setTimeout(typeLines, 500);
  }, [onComplete]);



  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#1e1e1e] overflow-hidden"
    >
      {/* Terminal Window */}
      <div 
        ref={terminalRef}
        className="w-full max-w-4xl mx-auto glass-effect rounded-3xl shadow-2xl border border-white/10"
        style={{ transformOrigin: 'center center' }}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-white/5 rounded-t-3xl border-b border-white/10">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          <div className="text-gray-400 text-sm font-mono">
            terminal
          </div>
          <div className="w-3 h-3" /> {/* Spacer for centering */}
        </div>

        {/* Terminal Content */}
        <div className="p-6 font-mono text-sm min-h-[400px] bg-white/5"
        >
          {lines.map((line, index) => (
            <div
              key={index}
              className={`mb-1 ${
                line && line.startsWith('$') 
                  ? 'text-[#ff7b6c]' 
                  : line && line.startsWith('>')
                  ? 'text-gray-400'
                  : line && line.startsWith('✓')
                  ? 'text-[#10b981]'
                  : line && line.includes('Welcome')
                  ? 'text-[#a78bfa] text-lg font-bold mt-2'
                  : 'text-gray-300'
              }`}
            >
              {line || '\u00A0'}
            </div>
          ))}
          {currentLine === lines.length - 1 && (
            <div className="inline-block w-2 h-4 bg-[#ff7b6c] animate-pulse ml-1" />
          )}
        </div>
      </div>
    </div>
  );
}
