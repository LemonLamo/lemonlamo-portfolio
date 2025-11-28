'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    if (!cursor || !cursorDot) return;

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: 'power2.out',
      });

      gsap.to(cursorDot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out',
      });
    };

    // Mouse down handler
    const handleMouseDown = () => {
      setIsClicking(true);
      gsap.to(cursor, {
        scale: 0.8,
        duration: 0.1,
      });
    };

    // Mouse up handler
    const handleMouseUp = () => {
      setIsClicking(false);
      gsap.to(cursor, {
        scale: isHovering ? 1.5 : 1,
        duration: 0.2,
      });
    };

    // Add hover detection for interactive elements
    const handleMouseEnter = () => {
      setIsHovering(true);
      gsap.to(cursor, {
        scale: 1.5,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      gsap.to(cursor, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    // Attach listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, .cursor-pointer, input, textarea, [role="button"]'
    );
    
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [isHovering]);

  return (
    <>
      {/* Cursor dot only */}
      <div
        ref={cursorDotRef}
        className="custom-cursor-dot fixed pointer-events-none z-[9999]"
        style={{
          width: isHovering ? '16px' : '10px',
          height: isHovering ? '16px' : '10px',
          borderRadius: '50%',
          backgroundColor: 'white',
          transform: 'translate(-50%, -50%)',
          mixBlendMode: 'difference',
          transition: 'width 0.2s ease, height 0.2s ease',
        }}
      />

      <style jsx>{`
        @media (hover: none) and (pointer: coarse) {
          .custom-cursor,
          .custom-cursor-dot {
            display: none;
          }
        }
        
        * {
          cursor: none !important;
        }
      `}</style>
    </>
  );
}
