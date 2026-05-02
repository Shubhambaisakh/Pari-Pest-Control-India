'use client';

import Image from 'next/image';

const CERTS = [
  { key: 'ministry', src: '/ministry-.png',    alt: 'Ministry of Corporate Affairs' },
  { key: 'iso',      src: '/iso.png',           alt: 'ISO 9001:2015 Certified' },
  { key: 'ipca',     src: '/ica.png',           alt: 'IPCA — Indian Pest Control Association' },
  { key: 'msme',     src: '/msme.png',          alt: 'MSME Registered' },
  { key: 'tm',       src: '/trade marks.jpg',   alt: 'Registered Trademark' },
  { key: 'fssai',    src: '/png-clipart-food-safety-and-standards-authority-of-india-logo-india-food-text.png', alt: 'FSSAI — Food Safety and Standards Authority of India' },
  { key: 'new2',     src: '/images.png',        alt: 'Certified Partner' },
];

// Triple for seamless infinite loop
const TRACK = [...CERTS, ...CERTS, ...CERTS];

export default function ClientsCarousel() {
  return (
    <section className="bg-white py-16 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center mb-10">
        {/* Heading first */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 tracking-wide mb-4">
          Our Certificates And Partners
        </h2>

        {/* #startupindia below heading */}
        <div className="flex items-center justify-center">
          <span className="text-2xl md:text-3xl font-black text-gray-900">#startup</span>
          <span className="text-2xl md:text-3xl font-black" style={{ color: '#FF6B00' }}>in</span>
          <span className="text-2xl md:text-3xl font-black text-gray-900">d</span>
          <span className="text-2xl md:text-3xl font-black" style={{ color: '#138808' }}>ia</span>
          <svg className="ml-2 w-8 h-8" viewBox="0 0 40 40" fill="none">
            <rect x="0"  y="28" width="12" height="12" fill="#FF6B00" />
            <rect x="14" y="18" width="12" height="22" fill="#FF6B00" />
            <rect x="28" y="8"  width="12" height="32" fill="#138808" />
          </svg>
        </div>
      </div>

      {/* Sliding track */}
      <div className="relative w-full overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, white, transparent)' }} />
        <div className="absolute right-0 top-0 h-full w-20 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, white, transparent)' }} />

        <div className="flex items-center gap-12 animate-slide-certs w-max py-4">
          {TRACK.map((cert, i) => (
            <div
              key={`${cert.key}-${i}`}
              className="flex-shrink-0 w-32 h-32 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center p-3 hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={cert.src}
                alt={cert.alt}
                width={100}
                height={100}
                className="object-contain w-full h-full rounded-full"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
