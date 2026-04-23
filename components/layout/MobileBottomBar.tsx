export default function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex border-t border-gray-200 shadow-2xl"
      style={{ background: 'white' }}>
      <a
        href="tel:18003094947"
        className="flex-1 flex flex-col items-center justify-center py-3 gap-0.5 text-gray-900 font-bold text-xs active:opacity-70 transition-opacity"
        style={{ background: '#C6E700' }}
      >
        <span className="text-xl">📞</span>
        <span>Call Now</span>
      </a>
      <a
        href="https://wa.me/919644594899?text=Hi%2C%20I%20want%20to%20book%20a%20pest%20control%20service"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center py-3 gap-0.5 text-white font-bold text-xs active:opacity-70 transition-opacity"
        style={{ background: '#25D366' }}
      >
        <span className="text-xl">💬</span>
        <span>WhatsApp</span>
      </a>
      <a
        href="/contact"
        className="flex-1 flex flex-col items-center justify-center py-3 gap-0.5 text-white font-bold text-xs active:opacity-70 transition-opacity"
        style={{ background: '#1a2000' }}
      >
        <span className="text-xl">📋</span>
        <span>Book Now</span>
      </a>
    </div>
  );
}
