import type { Metadata } from 'next';
import { Inter } from "next/font/google"
import './globals.css';
import { COPY } from '@/constants/copy';
import dynamic from 'next/dynamic';

const MobileCTA = dynamic(() => import("@/components/MobileCTA"));

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Irving The AC Man | AC Repair Pompano Beach, FL",
    template: "%s | Irving The AC Man"
  },
  description: COPY.META_DESCRIPTION,
  keywords: [
    "AC repair Pompano Beach", 
    "HVAC Pompano Beach FL",
    "air conditioning repair Broward County",
    "emergency AC repair South Florida",
    "Irving The AC Man", 
    "CAC1821029"
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Irving The AC Man | AC Repair Pompano Beach, FL",
    description: COPY.META_DESCRIPTION,
    siteName: "Irving The AC Man"
  },
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: "https://irvingtheacman.com"
  },
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">❄️</text></svg>',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(COPY.STRUCTURED_DATA) }}
        />
      </head>
      <body className="font-sans text-navy antialiased bg-white overflow-x-hidden pb-[calc(64px+env(safe-area-inset-bottom,0px))] md:pb-0" suppressHydrationWarning>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-4 py-2 rounded-md z-[100]">
          Skip to main content
        </a>
        <main id="main-content">
          {children}
        </main>
        <MobileCTA />
      </body>
    </html>
  );
}
