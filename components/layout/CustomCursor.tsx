'use client';

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = `${mouseX}px`;
        dotRef.current.style.top = `${mouseY}px`;
      }
    };

    const onDown = () => setClicked(true);
    const onUp = () => setClicked(false);

    // Detect hover on interactive elements
    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      setHovered(!!(el.closest('a, button, [role="button"]')));
    };

    // Smooth ring follow
    let raf: number;
    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = `${ringX}px`;
        ringRef.current.style.top = `${ringY}px`;
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mousedown', onDown);
    document.addEventListener('mouseup', onUp);
    document.addEventListener('mouseover', onOver);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('mouseup', onUp);
      document.removeEventListener('mouseover', onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* Small dot — snaps instantly */}
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform duration-100"
        style={{
          width: clicked ? '6px' : '8px',
          height: clicked ? '6px' : '8px',
          background: '#C6E700',
          boxShadow: '0 0 8px rgba(198,231,0,0.8)',
        }}
      />

      {/* Outer ring — follows with lag */}
      <div
        ref={ringRef}
        className="fixed pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: hovered ? '48px' : clicked ? '28px' : '36px',
          height: hovered ? '48px' : clicked ? '28px' : '36px',
          border: `2px solid ${hovered ? '#C6E700' : 'rgba(198,231,0,0.5)'}`,
          background: hovered ? 'rgba(198,231,0,0.08)' : 'transparent',
          transition: 'width 0.2s ease, height 0.2s ease, border-color 0.2s ease, background 0.2s ease',
          boxShadow: hovered ? '0 0 16px rgba(198,231,0,0.3)' : 'none',
        }}
      />
    </>
  );
}
