'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { label: 'Home',     href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery',  href: '/gallery' },
  { label: 'About',    href: '/about' },
  { label: 'Contact',  href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  function isActive(href: string) {
    return href === '/' ? pathname === '/' : pathname.startsWith(href);
  }

  return (
    <>
      {/* ── Top info bar — phone + email ── */}
      <div className="text-white py-2 px-4 hidden md:block" style={{ background: '#1A6B35' }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs">
          <div className="flex items-center gap-6">
            <a href="tel:8305890962" className="flex items-center gap-2 hover:text-yellow-300 transition-colors">
              <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              <span className="font-semibold">+91 8305890962</span>
            </a>
            <a href="mailto:sales@ppci.in" className="flex items-center gap-2 hover:text-yellow-300 transition-colors">
              <span>✉️</span>
              <span className="font-semibold">sales@ppci.in</span>
            </a>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span style={{ color: '#84CC4A' }}>🌿</span>
            <span className="font-semibold italic" style={{ color: '#84CC4A' }}>Touching People, Enhancing Lives</span>
          </div>
        </div>
      </div>

      {/* ── Main navbar ── */}
      <nav className="bg-white sticky top-0 z-50 shadow-sm" style={{ borderBottom: '3px solid #84CC4A' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <Image src="/Logo_PPCI-removebg-preview.png" alt="PPCI" width={52} height={52} className="rounded-full object-contain flex-shrink-0" />
              <div className="flex flex-col leading-tight">
                <span className="text-base font-extrabold text-gray-900">Pari Pest Control India Pvt. Ltd.</span>
              </div>
            </Link>

            {/* Desktop nav */}
            <ul className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}
                    className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${isActive(link.href) ? 'text-white font-bold' : 'text-gray-600 hover:text-gray-900'}`}
                    style={isActive(link.href) ? { background: 'linear-gradient(135deg, #1A6B35 0%, #84CC4A 100%)' } : {}}>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href="tel:18003094947"
                  className="ml-2 px-5 py-2 rounded-xl text-sm font-bold text-white shadow-md hover:opacity-90 transition-all flex items-center gap-2"
                  style={{ background: 'linear-gradient(135deg, #1A6B35 0%, #84CC4A 100%)', boxShadow: '0 4px 15px rgba(26,107,53,0.35)' }}>
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  Free Quote
                </a>
              </li>
            </ul>

            {/* Mobile right side */}
            <div className="flex md:hidden items-center gap-2">
              <a href="tel:18003094947"
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white shadow-sm"
                style={{ background: 'linear-gradient(135deg, #1A6B35 0%, #84CC4A 100%)' }}>
                <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                Call
              </a>
              <button
                className="w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-lg border border-gray-200"
                onClick={() => setIsOpen(p => !p)}
                aria-label="Toggle menu">
                <span className={`block w-5 h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block w-5 h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-5 h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </button>
            </div>
          </div>

          {/* Mobile drawer */}
          <div
            className="md:hidden overflow-hidden transition-all duration-300"
            style={{ maxHeight: isOpen ? '320px' : '0px' }}
          >
            <ul className="flex flex-col py-3 gap-1 border-t border-gray-100">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center px-4 py-3 rounded-xl text-sm font-semibold transition-all ${isActive(link.href) ? 'text-white' : 'text-gray-600'}`}
                    style={isActive(link.href) ? { background: 'linear-gradient(135deg, #1A6B35 0%, #84CC4A 100%)' } : {}}>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="px-4 pt-2 pb-1">
                <a href="tel:18003094947"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold text-white"
                  style={{ background: 'linear-gradient(135deg, #1A6B35 0%, #84CC4A 100%)' }}>
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  Call 1800-309-4947
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
