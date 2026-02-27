import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'SpectraStrike by NyxeraLabs | Offensive Security Execution Fabric',
    template: '%s | SpectraStrike'
  },
  description: siteConfig.description,
  icons: {
    icon: '/images/SpectraStrike_Logo.png',
    shortcut: '/images/SpectraStrike_Logo.png',
    apple: '/images/SpectraStrike_Logo.png'
  },
  alternates: { canonical: '/' },
  openGraph: {
    title: 'SpectraStrike by NyxeraLabs',
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SpectraStrike by NyxeraLabs',
    description: siteConfig.description
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="relative flex min-h-screen flex-col bg-grid bg-strike-canvas">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
