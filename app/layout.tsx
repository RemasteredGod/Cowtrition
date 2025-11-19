import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const inter = Inter({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const poppins = Poppins({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title:
    'Cowtrition Foundation | Empowering Rural India Through Sustainable Farming',
  description:
    'Cowtrition Foundation is dedicated to preserving Indian cow breeds, supporting rural farmers, and promoting organic, sustainable agriculture rooted in traditional Indian values.',
  keywords:
    'Cowtrition, Indian cow breeds, sustainable farming, rural India, organic agriculture, cow conservation, farmer support',
  authors: [{ name: 'Cowtrition Foundation' }],
  openGraph: {
    title: 'Cowtrition Foundation',
    description: 'Empowering Rural India Through Sustainable Farming',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
