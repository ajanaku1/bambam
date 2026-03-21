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

const SITE_URL = "https://yourdomain.com"; // TODO: Replace with your actual domain

export const metadata: Metadata = {
  title: "Bambam — AI & Crypto Product Engineer",
  description:
    "I build AI-powered products at the intersection of crypto and full-stack engineering. From multimodal AI systems to on-chain privacy analysis — I ship products that solve real problems.",
  icons: {
    icon: `${basePath}/favicon.png`,
    apple: `${basePath}/apple-touch-icon.png`,
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Bambam — AI & Crypto Product Engineer",
    description:
      "I build AI-powered products at the intersection of crypto and full-stack engineering.",
    type: "website",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Bambam — AI & Crypto Product Engineer",
    description:
      "I build AI-powered products at the intersection of crypto and full-stack engineering.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Bambam",
  "jobTitle": "AI & Crypto Product Engineer",
  "url": SITE_URL,
  "sameAs": [
    "https://github.com/ajanaku1",
    "https://linkedin.com/in/dahunsijajanaku",
    "https://x.com/curioswhispers",
  ],
  "email": "mailto:mykdahunsi@gmail.com",
  "knowsAbout": [
    "Artificial Intelligence",
    "Machine Learning",
    "Crypto",
    "Web3",
    "React",
    "TypeScript",
    "Next.js",
    "Solana",
    "Full-Stack Development",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
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
