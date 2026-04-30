import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer style={{ background: '#1A6B35', color: 'white' }}>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Image src="/Logo_PPCI-removebg-preview.png" alt="PPCI Logo" width={52} height={52} className="rounded-full object-contain" />
              <div>
                <h2 className="text-base font-bold leading-tight">Pari Pest Control India</h2>
                <p className="text-xs font-semibold" style={{ color: '#84CC4A' }}>PPCI PVT. LTD.</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Making Indian homes and businesses Pest-Free! Best Pest Control in Bhopal.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold mb-4" style={{ color: '#84CC4A' }}>Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-bold mb-4" style={{ color: '#84CC4A' }}>Contact Us</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <span>📞</span>
                <div>
                  <a href="tel:18003094947" className="hover:text-white transition-colors font-medium text-white">1800-309-4947</a>
                  <p className="text-xs text-gray-500">Toll Free</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span>✉️</span>
                <div>
                  <a href="mailto:sales@ppci.in" className="hover:text-white transition-colors">sales@ppci.in</a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span className="text-xs leading-relaxed">
                  Shop No. 01, First Floor 7-B, NH-12,<br />
                  Near Union Bank of India,<br />
                  Indra Nagar, Mandideep,<br />
                  Bhopal (M.P.) 462046
                </span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-base font-bold mb-4" style={{ color: '#84CC4A' }}>Follow Us</h3>
            <div className="flex flex-col gap-3">

              {/* Instagram */}
              <a
                href="https://www.instagram.com/ppci.in/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors group"
              >
                <span className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                  style={{ background: 'linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)' }}>
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </span>
                Instagram
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=61584042194599"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors group"
              >
                <span className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                  style={{ background: '#1877F2' }}>
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </span>
                Facebook
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com/shorts/ogaxrHrQVr4?si=XzZd5KvOn4_ecnKh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors group"
              >
                <span className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                  style={{ background: '#FF0000' }}>
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </span>
                YouTube
              </a>

            </div>

            <a
              href="tel:18003094947"
              className="inline-block mt-5 px-5 py-2 rounded-xl text-sm font-bold text-white hover:opacity-90 transition-all"
              style={{ background: 'linear-gradient(135deg, #1A6B35 0%, #84CC4A 100%)' }}
            >
              📞 Get a Free Quote
            </a>
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid #0d4a1f' }}>
        <p className="text-center text-xs py-3 text-gray-500">
          © {new Date().getFullYear()} Pari Pest Control India Private Limited. All rights reserved.
        </p>
        <p className="text-center text-xs pb-3" style={{ color: '#84CC4A' }}>
          Design by <span className="font-semibold">adwikindia</span>
        </p>
      </div>
    </footer>
  );
}

