import HeroSlider from '@/components/home/HeroSlider';
import ServicesOverview from '@/components/home/ServicesOverview';
import Features from '@/components/home/Features';
import Testimonials from '@/components/home/Testimonials';
import Gallery from '@/components/home/Gallery';
import Promise from '@/components/home/Promise';
import ClientsCarousel from '@/components/home/ClientsCarousel';
import HowItWorks from '@/components/home/HowItWorks';
import StatsCounter from '@/components/home/StatsCounter';
import Pricing from '@/components/home/Pricing';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <HeroSlider />

      {/* Pricing overlaps hero — negative margin desktop, no overlap mobile */}
      <div className="relative z-10 px-4 pricing-overlap-wrapper">
        <div className="max-w-6xl mx-auto rounded-3xl shadow-2xl overflow-hidden bg-white">
          <Pricing />
        </div>
      </div>

      {/* Horizontal green counter bar removed */}

      <ServicesOverview />
      <Promise />
      <HowItWorks />
      <Features />
      <ClientsCarousel />
      <Testimonials />

      {/* Final CTA */}
      <section className="py-16 px-4 text-center" style={{ background: '#C6E700' }}>
        <h2 className="text-3xl font-extrabold text-gray-900 mb-3">
          Ready to Live Pest-Free?
        </h2>
        <p className="text-gray-700 mb-2 font-medium">
          Contact Pari Pest Control India Private Limited today for a free inspection.
        </p>
        <p className="text-2xl font-extrabold text-gray-900 mb-8">
          <a href="tel:18003094947" className="hover:underline">1800-309-4947</a>
          <span className="text-sm font-normal text-gray-600 ml-2">(Toll Free)</span>
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="px-8 py-3 rounded-full font-bold text-white text-sm shadow-lg hover:opacity-90 transition-all duration-300 hover:scale-105"
            style={{ background: '#1a2000' }}
          >
            Get a Free Quote
          </Link>
          <a
            href="https://wa.me/919644594899"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full font-bold text-gray-900 text-sm border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
          >
            💬 WhatsApp Us
          </a>
        </div>
      </section>
    </>
  );
}
