'use client';

interface PopPhoneProps {
  number?: string;
  baseColor?: string;       // default digit color
  accentColor?: string;     // dash + hover color
  fontSize?: string;        // tailwind or css font size
}

export default function PopPhone({
  number      = '1800-309-4947',
  baseColor   = '#111',
  accentColor = '#1A6B35',
  fontSize    = 'inherit',
}: PopPhoneProps) {
  return (
    <span className="inline-flex items-end" style={{ textDecoration: 'none' }}>
      {number.split('').map((char, i) => (
        <span
          key={i}
          className="inline-block font-black"
          style={{
            color: char === '-' ? accentColor : baseColor,
            fontSize,
            transition: 'transform 0.18s cubic-bezier(0.34,1.56,0.64,1), color 0.15s ease, text-shadow 0.15s ease',
            cursor: 'pointer',
            lineHeight: 1,
          }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLSpanElement;
            el.style.transform = 'translateY(-12px) scale(1.35)';
            el.style.color = accentColor;
            el.style.textShadow = `0 8px 20px rgba(26,107,53,0.5)`;
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLSpanElement;
            el.style.transform = 'translateY(0) scale(1)';
            el.style.color = char === '-' ? accentColor : baseColor;
            el.style.textShadow = 'none';
          }}
        >
          {char}
        </span>
      ))}
    </span>
  );
}
