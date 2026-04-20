import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
});

export const metadata: Metadata = {
  title: {
    default: "Lamia Koucem | Software Engineer & Full-Stack Developer",
    template: "%s | Lamia Koucem"
  },
  description: "Lamia Koucem is a Software Engineer and Full-Stack Developer based in Algeria, specializing in React, Next.js, Node.js, and mobile development. View projects, skills, and services.",
  keywords: [
    "Lamia Koucem",
    "Lamia",
    "Koucem",
    "Software Engineer",
    "Full-Stack Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Mobile Developer",
    "Algeria Developer",
    "USTHB",
    "Freelance Developer",
    "Portfolio",
    "LemonLamo"
  ],
  authors: [{ name: "Lamia Koucem", url: "https://lemonlamo-portfolio.vercel.app" }],
  creator: "Lamia Koucem",
  publisher: "Lamia Koucem",
  metadataBase: new URL("https://lamia-koucem.vercel.app"),
  
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lamia-koucem.vercel.app",
    siteName: "Lamia Koucem Portfolio",
    title: "Lamia Koucem | Software Engineer & Full-Stack Developer",
    description: "Lamia Koucem is a Software Engineer and Full-Stack Developer specializing in React, Next.js, Node.js, and mobile development. Explore my projects and services.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lamia Koucem - Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lamia Koucem | Software Engineer & Full-Stack Developer",
    description: "Software Engineer specializing in React, Next.js, Node.js, and mobile development.",
    images: ["/og-image.png"],
    creator: "@lamia_koucem",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "0rYlpdFtVEjJnzeqD70axfPFJXdc1gv7tLu-82rEWEI",
    
  },
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Lamia Koucem",
  url: "https://lemonlamo-portfolio.vercel.app",
  image: "https://lemonlamo-portfolio.vercel.app/og-image.png",
  sameAs: [
    "https://github.com/LemonLamo",
    "https://www.linkedin.com/in/lamia-koucem-1a4447260/",
    "https://medium.com/@lamia.koucem"
  ],
  jobTitle: "Software Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Freelance"
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "USTHB"
  },
  knowsAbout: [
    "Web Development",
    "Mobile Development",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Python",
    "DevOps"
  ],
  description: "Software Engineer and Full-Stack Developer specializing in modern web and mobile technologies."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <meta name="theme-color" content="#8b5cf6" />
        <meta name="google-site-verification" content="0rYlpdFtVEjJnzeqD70axfPFJXdc1gv7tLu-82rEWEI" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
