import type { Metadata } from 'next';
import '../styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';

export const metadata: Metadata = {
  title: 'Nidhi Rastogi - AI4SEC Lab | AI Security & Cyberthreat Intelligence',
  description: 'Assistant Professor at Rochester Institute of Technology leading AI4SEC Lab. Specializing in Cyberthreat Intelligence, Explainable AI, and Security Research',
  keywords: ['Nidhi Rastogi', 'AI4SEC', 'AI Security', 'Cyberthreat Intelligence', 'Explainable AI', 'RIT', 'Rochester Institute of Technology'],
  authors: [{ name: 'Nidhi Rastogi' }],
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Nidhi Rastogi - AI4SEC Lab | AI Security Researcher',
    description: 'Assistant Professor at RIT leading AI4SEC Lab, specializing in Cyberthreat Intelligence and Explainable AI',
    url: 'https://nidhirastogi.github.io',
    siteName: 'Nidhi Rastogi - AI4SEC Lab',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nidhi Rastogi - AI4SEC Lab | AI Security Researcher',
    description: 'Assistant Professor at RIT leading AI4SEC Lab, specializing in Cyberthreat Intelligence and Explainable AI',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
