'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { label: 'Home',     href: '/' },
  { label: 'Services', href: '/services' },
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
    <nav className="bg-white sticky top-0 z-50 shadow-sm" style={{ borderBottom: '3px solid #C6E700' }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/Logo_PPCI-removebg-preview.png" alt="PPCI" width={44} height={44} className="rounded-full object-contain flex-shrink-0" />
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-extrabold text-gray-900">Pari Pest Control India</span>
              <span className="text-[10px] font-bold" style={{ color: '#7a9900' }}>PPCI PVT. LTD.</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${isActive(link.href) ? 'text-gray-900 font-bold' : 'text-gray-600 hover:text-gray-900'}`}
                  style={isActive(link.href) ? { background: '#C6E700' } : {}}>
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a href="tel:18003094947"
                className="ml-2 px-5 py-2 rounded-full text-sm font-bold text-gray-900 shadow-md hover:opacity-90 transition-all"
                style={{ background: '#C6E700' }}>
                📞 Free Quote
              </a>
            </li>
          </ul>

          {/* Mobile right side — call button + hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <a href="tel:18003094947"
              className="px-4 py-2 rounded-full text-xs font-bold text-gray-900 shadow-sm"
              style={{ background: '#C6E700' }}>
              📞 Call
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

        {/* Mobile drawer — full width, smooth slide */}
        <div
          className="md:hidden overflow-hidden transition-all duration-300"
          style={{ maxHeight: isOpen ? '300px' : '0px' }}
        >
          <ul className="flex flex-col py-3 gap-1 border-t border-gray-100">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center px-4 py-3 rounded-xl text-sm font-semibold transition-all ${isActive(link.href) ? 'text-gray-900' : 'text-gray-600'}`}
                  style={isActive(link.href) ? { background: '#C6E700' } : {}}>
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="px-4 pt-2 pb-1">
              <a href="tel:18003094947"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold text-gray-900"
                style={{ background: '#C6E700' }}>
                📞 Call 1800-309-4947
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

