interface TestimonialCardProps {
  customerName: string;
  rating: number;
  reviewText: string;
}

export default function TestimonialCard({ customerName, rating, reviewText }: TestimonialCardProps) {
  const stars = Array.from({ length: 5 }, (_, i) => i < rating ? '★' : '☆').join('');

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="text-xl mb-3" style={{ color: '#C6E700', filter: 'brightness(0.7)' }}>{stars}</div>
      <p className="text-gray-600 text-sm leading-relaxed italic mb-4">&ldquo;{reviewText}&rdquo;</p>
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-gray-900" style={{ background: '#C6E700' }}>
          {customerName.charAt(0)}
        </div>
        <p className="text-gray-800 font-bold text-sm">{customerName}</p>
      </div>
    </div>
  );
}
