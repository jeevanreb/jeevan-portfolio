import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const BASE_URL = "https://jeevan-rebeiro.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Jeevan Rebeiro | Full Stack Developer & Frontend Engineer",
    template: "%s | Jeevan Rebeiro",
  },

  description:
    "Portfolio of Jeevan Rebeiro — Full Stack Developer with 4+ years of experience specializing in React.js, Next.js, TypeScript, Node.js, and advanced UI animations with GSAP. Building scalable, high-performance SaaS web experiences.",

  keywords: [
    "Jeevan Rebeiro",
    "Full Stack Developer",
    "Frontend Developer",
    "React.js Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "GSAP Animations",
    "Node.js",
    "Portfolio",
    "Software Engineer",
    "Web Developer India",
    "SaaS Developer",
    "UI Developer",
    "React Three Fiber",
  ],

  authors: [{ name: "Jeevan Rebeiro", url: BASE_URL }],

  creator: "Jeevan Rebeiro",

  publisher: "Jeevan Rebeiro",

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

  alternates: {
    canonical: BASE_URL,
  },

  icons: {
    icon: "/jeev.jpg",
    shortcut: "/jeev.jpg",
    apple: "/jeev.jpg",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Jeevan Rebeiro Portfolio",
    title: "Jeevan Rebeiro | Full Stack Developer & Frontend Engineer",
    description:
      "Explore the portfolio of Jeevan Rebeiro — building scalable full stack applications with React.js, Next.js, TypeScript, and immersive GSAP-powered UI experiences.",
    images: [
      {
        url: `${BASE_URL}/jeev.jpg`,
        width: 1200,
        height: 630,
        alt: "Jeevan Rebeiro — Full Stack Developer Portfolio",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Jeevan Rebeiro | Full Stack Developer",
    description:
      "Full Stack Developer with 4+ years crafting scalable SaaS apps and immersive UI experiences. React.js, Next.js, TypeScript, GSAP.",
    images: [`${BASE_URL}/jeev.jpg`],
    creator: "@jeevanrebeiro",
  },

  category: "technology",
};

// JSON-LD structured data — Person schema
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jeevan Rebeiro",
  url: BASE_URL,
  jobTitle: "Full Stack Developer",
  description:
    "Full Stack Developer with 4+ years of experience specializing in React.js, Next.js, TypeScript, Node.js, and GSAP animations.",
  email: "jeevanrebeiro@gmail.com",
  sameAs: [
    "https://www.linkedin.com/in/jeevan-rebeiro-7682ba1ba/",
    "https://github.com/jeevanreb",
    "https://www.instagram.com/jeevan_rebeiro/",
  ],
  knowsAbout: [
    "React.js",
    "Next.js",
    "TypeScript",
    "Node.js",
    "GSAP",
    "Full Stack Development",
    "Frontend Architecture",
    "SaaS Development",
  ],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Bachelor of Engineering",
  },
  worksFor: {
    "@type": "Organization",
    name: "Swipewire Technologies",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#121212] overflow-x-hidden text-white flex flex-col">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
