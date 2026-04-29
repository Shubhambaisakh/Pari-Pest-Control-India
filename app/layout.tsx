import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileBottomBar from '@/components/layout/MobileBottomBar';
import CustomCursor from '@/components/layout/CustomCursor';
import './globals.css';

export const metadata: Metadata = {
  title: 'Pari Pest Control India Private Limited | PPCI — Best Pest Control in Bhopal',
  description: "Pari Pest Control India Pvt. Ltd. — Best pest control in Bhopal. Eco-friendly solutions for homes and businesses. Call 1800-309-4947.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        <CustomCursor />
        <Navbar />
        <main className="pb-16 md:pb-0">{children}</main>
        <Footer />
        <MobileBottomBar />
      </body>
    </html>
  );
}
