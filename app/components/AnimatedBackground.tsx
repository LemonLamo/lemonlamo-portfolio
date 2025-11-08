'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const shapes = containerRef.current.querySelectorAll('.float-shape');
    
    shapes.forEach((shape, index) => {
      // Floating animation
      gsap.to(shape, {
        y: `${Math.random() * 100 - 50}`,
        x: `${Math.random() * 100 - 50}`,
        rotation: 360,
        duration: 10 + index * 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // Parallax scroll effect
      gsap.to(shape, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
        y: index % 2 === 0 ? 200 : -200,
        opacity: 0.3,
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating geometric shapes */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="float-shape absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 100 + 50}px`,
            height: `${Math.random() * 100 + 50}px`,
          }}
        >
          {i % 3 === 0 ? (
            // Circle
            <div className="w-full h-full rounded-full bg-gradient-to-br from-[#ff7b6c]/10 to-[#a78bfa]/10 blur-xl" />
          ) : i % 3 === 1 ? (
            // Square
            <div className="w-full h-full rotate-45 bg-gradient-to-br from-[#a78bfa]/10 to-[#ff7b6c]/10 blur-xl" />
          ) : (
            // Triangle
            <div
              className="w-full h-full bg-gradient-to-br from-[#ff7b6c]/10 to-[#a78bfa]/10 blur-xl"
              style={{
                clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
              }}
            />
          )}
        </div>
      ))}

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ff7b6c]/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#a78bfa]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
    </div>
  );
}
