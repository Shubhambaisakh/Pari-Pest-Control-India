import { teamMembers } from '@/lib/data';
import Link from 'next/link';
import Image from 'next/image';
import Certifications from '@/components/home/Certifications';

export const metadata = {
  title: 'About Us | Pari Pest Control India (PPCI)',
  description: "Learn about PPCI Pvt. Ltd. — Bhopal's best pest control company. Founded by Smt. Asha Manish Pal, serving residential and commercial clients across India.",
};

const VALUES = [
  { icon: '🏆', label: 'Excellence' },
  { icon: '🤝', label: 'Team Work' },
  { icon: '💎', label: 'Integrity' },
  { icon: '🦺', label: 'Safety' },
  { icon: '❤️', label: 'Passionate' },
];

export default function AboutPage() {
  return (
    <main>
      {/* Page Header */}
      <section className="bg-brand-500 text-brand-900 py-16 px-4 text-center">
        <p className="text-brand-900/70 text-sm mb-2">
          <Link href="/" className="hover:underline">Home</Link> / About Us
        </p>
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-brand-900/80 text-lg">PPCI Pvt. Ltd. — Best Pest Control in Bhopal</p>
      </section>

      {/* Who We Are */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-brand-600 font-semibold text-sm uppercase tracking-wide mb-2">Who We Are</p>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Touching People, Enhancing Lives.</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Pari Pest Control India is not the first pest control company in India — but we are the first to bring Indians the best in domestic and commercial Pest Management Services. Our aim is to be recognized as a company that delivers complete customer satisfaction.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We are coping with innovative products and technologies to manage pests without harming the environment. Our professional experts use state-of-the-art methods and fast equipment to carry out sanitation and pest control services.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We have a professional and committed team of experts capable of delivering services to assorted clients within the stipulated time. We also have a dedicated customer care unit that answers every query at any point of time.
            </p>
            <blockquote className="mt-6 border-l-4 border-brand-500 pl-4 text-brand-700 font-medium italic">
              &ldquo;Health is the Strongest Link Between Life&apos;s Progress and Life&apos;s Goal&rdquo;
            </blockquote>
          </div>
          <div className="bg-brand-50 rounded-2xl p-8 text-center">
            {/* Real PPCI team photo */}
            <div className="relative w-full rounded-xl overflow-hidden mb-6 shadow-md" style={{ aspectRatio: '4/3' }}>
              <Image
                src="/photo.jpg"
                alt="PPCI team at office Bhopal"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <p className="text-5xl font-bold text-brand-600">10+</p>
            <p className="text-gray-600 mb-6">Years of Experience</p>
            <p className="text-5xl font-bold text-brand-600">10,000+</p>
            <p className="text-gray-600 mb-6">Happy Customers</p>
            <p className="text-5xl font-bold text-brand-600">9+</p>
            <p className="text-gray-600">Pest Control Services</p>
          </div>
        </div>
      </section>

      {/* Founder Message */}
      <section className="bg-brand-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-brand-600 font-semibold text-sm uppercase tracking-wide mb-2">Message from the Founder</p>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Smt. Asha Manish Pal — Director</h2>
          <div className="bg-white rounded-2xl shadow-md p-8 text-left">
            <p className="text-gray-600 leading-relaxed mb-4">
              Pari Pest Control Service is the finest pest control company. We are coping with innovative products and technologies to manage pests without harming the environment.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We built this company to change and enhance your life. Customer Satisfaction is our key to entering this vast market. Our vision is to provide world-class services to the Indian market — connecting more and more people to change their health and economic life.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Our Vision &amp; Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-brand-50 rounded-2xl p-8">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-brand-700 mb-3">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                Customer Satisfaction is our key to entering this vast market. Our vision is to provide world-class pest management services to the Indian market — setting new standards in quality, safety, and reliability.
              </p>
            </div>
            <div className="bg-brand-50 rounded-2xl p-8">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-brand-700 mb-3">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                Our mission is very clear — connecting more and more people directly or indirectly to change their health and economic life. We aim to be India&apos;s most trusted one-stop destination for pest control and disinfection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-brand-500 text-brand-900 py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Our Core Values</h2>
        <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
          {VALUES.map((v) => (
            <div key={v.label} className="bg-white rounded-xl px-8 py-5 flex flex-col items-center gap-2 shadow-md min-w-[120px]">
              <span className="text-3xl">{v.icon}</span>
              <span className="text-brand-700 font-bold text-sm">{v.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Why We Are Best */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Why We Are Best?</h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-4">
            Pari Pest Control India is the best option for pest management services. We have an expert team of professionals who have worked in multinational companies and work in a professional manner — taking special care of price, quality, and time when serving our customers.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            When it comes to pest control, we rely only on an experienced team like PPCI.
          </p>
        </div>
      </section>

      {/* Work Photos */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">Our Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { src: '/pest control1.webp', alt: 'PPCI fogging treatment' },
              { src: '/pest control2.webp', alt: 'PPCI pest control at work' },
              { src: '/pest control 3.webp', alt: 'PPCI technician in action' },
            ].map((img) => (
              <div key={img.src} className="relative rounded-2xl overflow-hidden shadow-md" style={{ aspectRatio: '4/3' }}>
                <Image src={img.src} alt={img.alt} fill className="object-cover hover:scale-105 transition-transform duration-500" unoptimized />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-brand-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div className="bg-brand-200 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center text-4xl">
                  {member.name.charAt(0)}
                </div>
                <p className="text-xl font-semibold text-gray-800">{member.name}</p>
                <p className="text-brand-600 text-sm mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <Certifications />

      {/* CTA */}
      <section className="bg-brand-600 text-white py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
        <p className="text-brand-100 mb-2">Call us toll-free or send us a message today.</p>
        <p className="text-2xl font-bold">
          <a href="tel:18003094947" className="hover:underline">1800-309-4947</a>
        </p>
        <Link
          href="/contact"
          className="bg-white text-brand-700 font-semibold px-8 py-3 rounded-full hover:bg-brand-50 transition-colors inline-block"
        >
          Contact Us
        </Link>
      </section>
    </main>
  );
}

