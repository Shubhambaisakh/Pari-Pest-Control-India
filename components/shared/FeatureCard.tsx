'use client';

import { useState } from 'react';

// Eye-catching gradients — one per card, cycling
const ICON_GRADIENTS = [
  'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',  // warm orange
  'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',  // purple pink
  'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)',  // mint blue
  'linear-gradient(135deg, #fccb90 0%, #d57eeb 100%)',  // peach purple
  'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',  // green teal
];

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  index?: number;
}

export default function FeatureCard({ icon, title, description, index = 0 }: FeatureCardProps) {
  const [hovered, setHovered] = useState(false);
  const gradient = ICON_GRADIENTS[index % ICON_GRADIENTS.length];

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="bg-white rounded-2xl p-6 text-center border border-gray-100 cursor-default"
      style={{
        boxShadow: hovered
          ? '0 20px 50px rgba(0,0,0,0.18)'
          : '0 2px 12px rgba(0,0,0,0.06)',
        transform: hovered ? 'scale(1.08) translateY(-6px)' : 'scale(1) translateY(0)',
        transition: 'all 0.28s cubic-bezier(0.34,1.56,0.64,1)',
        zIndex: hovered ? 10 : 1,
        position: 'relative',
      }}
    >
      {/* Icon with colorful gradient background */}
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4"
        style={{
          background: gradient,
          boxShadow: hovered ? '0 8px 20px rgba(0,0,0,0.15)' : '0 4px 10px rgba(0,0,0,0.08)',
          transform: hovered ? 'scale(1.12)' : 'scale(1)',
          transition: 'all 0.28s ease',
        }}
      >
        {icon}
      </div>
      <h3 className="text-sm font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-500 text-xs leading-relaxed">{description}</p>
    </div>
  );
}
