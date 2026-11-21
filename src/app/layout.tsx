import type { Metadata, Viewport } from 'next';
import { Baloo_2, Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/navigation/navbar';
import { Footer } from '@/components/navigation/footer';

const baloo = Baloo_2({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-baloo',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://kovilgo.com'),
  title: {
    default: 'KovilGo — Every Journey, Brighter.',
    template: '%s | KovilGo',
  },
  description:
    'Discover places beyond the usual. Personalised journeys, curated destinations, and underrated travel experiences with KovilGo OFFBEAT.',
  applicationName: 'KovilGo',
  authors: [{ name: 'KovilGo Travel' }],
  keywords: [
    'KovilGo',
    'OFFBEAT',
    'underrated travel',
    'hidden places',
    'personalised journeys',
    'heritage travel',
    'india travel',
    'curated destinations',
  ],
  icons: {
    icon: [
      { url: '/brand/app-icons/kovilgo-app-icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/brand/app-icons/kovilgo-app-icon.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/brand/app-icons/kovilgo-app-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'KovilGo — Every Journey, Brighter.',
    description: 'Discover places beyond the usual. Personalised journeys and underrated travel experiences.',
    url: 'https://kovilgo.com',
    siteName: 'KovilGo',
    images: [
      {
        url: '/brand/logos/kovilgo-primary-yellow-on-black.png',
        width: 2048,
        height: 1024,
        alt: 'KovilGo — Every Journey, Brighter.',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KovilGo — Every Journey, Brighter.',
    description: 'Discover places beyond the usual. Personalised journeys and underrated travel experiences.',
    images: ['/brand/logos/kovilgo-primary-yellow-on-black.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#FFF9F0',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${baloo.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-brand-ivory text-brand-black font-sans antialiased selection:bg-brand-yellow selection:text-brand-black flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
