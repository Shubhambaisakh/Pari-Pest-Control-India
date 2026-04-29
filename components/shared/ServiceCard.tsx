import Link from 'next/link';

interface ServiceCardProps {
  icon: string;
  name: string;
  description: string;
  detailed?: boolean;
  benefits?: string[];
  ctaHref?: string;
}

export default function ServiceCard({ icon, name, description, detailed = false, benefits, ctaHref }: ServiceCardProps) {
  return (
    <div className="group bg-white rounded-2xl shadow-md p-6 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300"
        style={{ background: '#84CC4A' }}
      >
        {icon}
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{name}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>

      {detailed && benefits && benefits.length > 0 && (
        <ul className="mt-4 space-y-2">
          {benefits.map((b, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
              <span className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 text-gray-900" style={{ background: '#84CC4A' }}>
                <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              {b}
            </li>
          ))}
        </ul>
      )}

      {detailed && ctaHref && (
        <Link
          href={ctaHref}
          className="inline-block mt-5 px-5 py-2 rounded-full text-sm font-bold text-gray-900 hover:opacity-90 transition-all duration-200 shadow"
          style={{ background: '#84CC4A' }}
        >
          Get a Free Quote →
        </Link>
      )}
    </div>
  );
}
