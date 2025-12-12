'use client';

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const mouse = useRef({ x: 0, y: 0 });
  const cursor = useRef({ x: 0, y: 0 });
  const cursorDot = useRef({ x: 0, y: 0 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Smooth animation using requestAnimationFrame
    const animate = () => {
      // Easing factor for smooth trailing effect
      const ease = 0.15;
      const easeDot = 0.1;

      // Update cursor position with easing
      cursor.current.x += (mouse.current.x - cursor.current.x) * ease;
      cursor.current.y += (mouse.current.y - cursor.current.y) * ease;
      
      // Update dot position (faster, more responsive)
      cursorDot.current.x += (mouse.current.x - cursorDot.current.x) * easeDot;
      cursorDot.current.y += (mouse.current.y - cursorDot.current.y) * easeDot;

      // Apply transforms directly to DOM for better performance
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${cursor.current.x}px, ${cursor.current.y}px)`;
      }
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate(${cursorDot.current.x}px, ${cursorDot.current.y}px)`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    const updateCursor = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      
      if (!isVisible) {
        setIsVisible(true);
        cursor.current.x = e.clientX;
        cursor.current.y = e.clientY;
        cursorDot.current.x = e.clientX;
        cursorDot.current.y = e.clientY;
      }
    };

    const handleMouseEnter = (e: MouseEvent) => {
      // Get element from target (handles text nodes)
      let target = e.target as Element | null;
      if (target?.nodeType === Node.TEXT_NODE) {
        target = target.parentElement;
      }
      
      // Check if target is an Element
      if (!target || typeof target.closest !== 'function') {
        return;
      }

      const isInteractive = 
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.closest('[data-cursor-hover]') ||
        (target instanceof Element && window.getComputedStyle(target).cursor === 'pointer');
      
      if (isInteractive) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    const handleMouseOut = (e: MouseEvent) => {
      // Only hide cursor when mouse leaves the document
      if (!e.relatedTarget && e.target === document.documentElement) {
        setIsVisible(false);
      }
    };

    // Start animation loop
    rafId.current = requestAnimationFrame(animate);

    // Event listeners
    window.addEventListener('mousemove', updateCursor, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter as EventListener, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
      window.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseenter', handleMouseEnter as EventListener, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [isVisible]);

  return (
    <>
      {/* Outer circle (trailing effect) */}
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-[9999] mix-blend-difference will-change-transform"
        style={{
          left: 0,
          top: 0,
          transform: 'translate(-50%, -50%)',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.2s ease-out',
        }}
      >
        <div
          className={`rounded-full bg-white transition-all duration-300 ease-out ${
            isHovering ? 'w-8 h-8 opacity-50' : 'w-6 h-6 opacity-100'
          }`}
        />
      </div>
      
      {/* Inner dot (main cursor) */}
      <div
        ref={cursorDotRef}
        className="fixed pointer-events-none z-[9999] mix-blend-difference will-change-transform"
        style={{
          left: 0,
          top: 0,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          className={`rounded-full bg-white transition-all duration-200 ease-out ${
            isHovering ? 'w-2 h-2' : 'w-1.5 h-1.5'
          }`}
        />
      </div>
    </>
  );
}

