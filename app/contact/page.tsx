import ContactForm from '@/components/contact/ContactForm';
import Link from 'next/link';

export const metadata = {
  title: 'Contact Us | Pari Pest Control India (PPCI)',
  description: 'Contact PPCI Pvt. Ltd. for pest control services in Bhopal. Call 1800-309-4947 or email sales@ppci.in for a free inspection.',
};

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-brand-700 text-white py-16 px-4 text-center">
        <p className="text-brand-200 text-sm mb-2">
          <Link href="/" className="hover:underline">Home</Link> / Contact Us
        </p>
        <h1 className="text-4xl font-bold mb-4">Contact Us &amp; Enjoy a Pest-Free Environment</h1>
        <p className="text-brand-100 text-lg">We&apos;re here to help — call, email, or visit us!</p>
      </section>

      {/* Toll-free banner */}
      <div className="bg-brand-500 text-white text-center py-4 px-4">
        <p className="text-lg font-semibold">
          📞 Call Us! We&apos;re here to help! &nbsp;
          <a href="tel:18003094947" className="underline font-bold text-xl hover:text-brand-100 transition-colors">
            1800-309-4947
          </a>
          <span className="ml-2 text-brand-100 text-sm">(Toll Free)</span>
        </p>
      </div>

      {/* Main Content */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left — Form */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Send Us a Message</h2>
            <p className="text-gray-500 text-sm mb-6">Fill in the form and our team will get back to you within 24 hours.</p>
            <ContactForm />
          </div>

          {/* Right — Contact Details */}
          <div className="space-y-6">

            {/* Contact Info */}
            <div className="bg-white rounded-2xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h2>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <span className="text-2xl">📞</span>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-0.5">Phone (Toll Free)</p>
                    <a href="tel:18003094947" className="text-gray-800 font-semibold text-lg hover:text-brand-600 transition-colors">
                      1800-309-4947
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-2xl">✉️</span>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-0.5">Email</p>
                    <a href="mailto:sales@ppci.in" className="text-gray-800 font-medium hover:text-brand-600 transition-colors block">
                      sales@ppci.in
                    </a>
                    <a href="mailto:ppcisolutions1@gmail.com" className="text-gray-600 text-sm hover:text-brand-600 transition-colors block">
                      ppcisolutions1@gmail.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-0.5">Address</p>
                    <p className="text-gray-800 font-medium leading-relaxed">
                      B-4 Commercial Complex, Vidhya Nagar,<br />
                      Nearby Hotel La Pearl,<br />
                      Bhopal 462026
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-2xl">🕐</span>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-0.5">Working Hours</p>
                    <p className="text-gray-800 font-medium">Mon – Sat: 8:00 AM – 8:00 PM</p>
                    <p className="text-gray-500 text-sm">Sunday: By Appointment</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Why PPCI */}
            <div className="bg-brand-50 rounded-2xl p-8">
              <h2 className="text-xl font-bold text-brand-700 mb-4">Why Choose PPCI?</h2>
              <ul className="space-y-3 text-gray-700 text-sm">
                {[
                  'Free inspection by trained professionals',
                  'Eco-friendly, family-safe treatments',
                  'Verified professionals with multinational experience',
                  'Quick response & budget-friendly pricing',
                  'Assured warranty on all services',
                  'Serving Bhopal & Mandideep since 1999',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="text-brand-500 mt-0.5">✅</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
