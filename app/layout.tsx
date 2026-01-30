import type { Metadata } from 'next';
import '../styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Nidhi Rastogi - AI Security & Cyberthreat Intelligence Researcher',
  description: 'Assistant Professor at Rochester Institute of Technology specializing in Cyberthreat Intelligence, Explainable AI, and Security Research',
  keywords: ['Nidhi Rastogi', 'AI Security', 'Cyberthreat Intelligence', 'Explainable AI', 'RIT', 'Rochester Institute of Technology'],
  authors: [{ name: 'Nidhi Rastogi' }],
  openGraph: {
    title: 'Nidhi Rastogi - AI Security Researcher',
    description: 'Assistant Professor at RIT specializing in Cyberthreat Intelligence and Explainable AI',
    url: 'https://nidhirastogi.github.io',
    siteName: 'Nidhi Rastogi',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nidhi Rastogi - AI Security Researcher',
    description: 'Assistant Professor at RIT specializing in Cyberthreat Intelligence and Explainable AI',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
