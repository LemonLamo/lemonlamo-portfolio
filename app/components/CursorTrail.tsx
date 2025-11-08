'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CursorTrail() {
  const trailRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animate trail particles
    trailRefs.current.forEach((trail, index) => {
      if (!trail) return;

      gsap.to(trail, {
        x: () => mousePos.current.x,
        y: () => mousePos.current.y,
        duration: 0.3 + index * 0.1,
        ease: 'power2.out',
      });
    });

    // Continuous animation loop
    const animate = () => {
      trailRefs.current.forEach((trail, index) => {
        if (!trail) return;
        
        gsap.to(trail, {
          x: mousePos.current.x,
          y: mousePos.current.y,
          duration: 0.3 + index * 0.1,
          ease: 'power2.out',
        });
      });
      
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            trailRefs.current[i] = el;
          }}
          className="absolute w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background: i % 2 === 0 
              ? 'radial-gradient(circle, rgba(255, 123, 108, 0.4) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(167, 139, 250, 0.4) 0%, transparent 70%)',
            width: `${12 - i}px`,
            height: `${12 - i}px`,
          }}
        />
      ))}
    </div>
  );
}
