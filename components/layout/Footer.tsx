import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer style={{ background: '#1a2000', color: 'white' }}>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Image src="/Logo_PPCI-removebg-preview.png" alt="PPCI Logo" width={52} height={52} className="rounded-full object-contain" />
              <div>
                <h2 className="text-base font-bold leading-tight">Pari Pest Control India</h2>
                <p className="text-xs font-semibold" style={{ color: '#C6E700' }}>PPCI PVT. LTD.</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Making Indian homes and businesses Pest-Free! Best Pest Control in Bhopal.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold mb-4" style={{ color: '#C6E700' }}>Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-bold mb-4" style={{ color: '#C6E700' }}>Contact Us</h3>
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
            <h3 className="text-base font-bold mb-4" style={{ color: '#C6E700' }}>Follow Us</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">📘 Facebook</a></li>
              <li><a href="#" className="hover:text-white transition-colors">📸 Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">🐦 Twitter / X</a></li>
              <li><a href="#" className="hover:text-white transition-colors">💼 LinkedIn</a></li>
            </ul>
            <a
              href="tel:18003094947"
              className="inline-block mt-5 px-5 py-2 rounded-full text-sm font-bold text-gray-900 hover:opacity-90 transition-all"
              style={{ background: '#C6E700' }}
            >
              📞 Get a Free Quote
            </a>
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid #3a4a00' }}>
        <p className="text-center text-xs py-4 text-gray-500">
          © {new Date().getFullYear()} Pari Pest Control India Private Limited. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

