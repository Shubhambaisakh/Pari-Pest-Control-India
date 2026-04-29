'use client';

interface PopTextProps {
  text: string;
  color?: string;
  className?: string;
}

export default function PopText({ text, color, className = '' }: PopTextProps) {
  return (
    <span className={`inline-flex flex-wrap ${className}`} style={{ color }}>
      {text.split('').map((char, i) => (
        <span
          key={i}
          className="inline-block"
          style={{
            transition: 'transform 0.18s cubic-bezier(0.34,1.56,0.64,1)',
            whiteSpace: char === ' ' ? 'pre' : 'normal',
            minWidth: char === ' ' ? '0.3em' : undefined,
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLSpanElement).style.transform = 'translateY(-10px) scale(1.25)';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLSpanElement).style.transform = 'translateY(0) scale(1)';
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
}
