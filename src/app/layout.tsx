import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const basePath = process.env.GITHUB_PAGES === "true" ? "/bambam" : "";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://ajanaku1.github.io/bambam";

export const metadata: Metadata = {
  title: "Bambam — Product Engineer",
  description:
    "Product engineer building across applied AI, onchain systems, privacy, payments, and consumer software.",
  icons: {
    icon: `${basePath}/favicon.png`,
    apple: `${basePath}/apple-touch-icon.png`,
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Bambam — Product Engineer",
    description:
      "Selected products across applied AI, onchain systems, privacy, payments, and consumer software.",
    type: "website",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Bambam — Product Engineer",
    description:
      "Selected products across applied AI, onchain systems, privacy, payments, and consumer software.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Bambam",
  "jobTitle": "Product Engineer",
  "url": SITE_URL,
  "sameAs": [
    "https://github.com/ajanaku1",
    "https://linkedin.com/in/dahunsijajanaku",
    "https://x.com/curioswhispers",
  ],
  "email": "mailto:mykdahunsi@gmail.com",
  "knowsAbout": [
    "Artificial Intelligence",
    "Solana",
    "Solidity",
    "Privacy Engineering",
    "Payments",
    "DeFi",
    "React",
    "TypeScript",
    "Next.js",
    "Product Engineering",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.JSX.Element {
  return (
    <html lang="en">
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a href="#main" className="skip-to-content">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
