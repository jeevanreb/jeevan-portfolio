import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jeevanportfolio.vercel.app"),
  title: "Jeevan Rebeiro | Full Stack Developer Portfolio",
  description:
    "Portfolio of Jeevan Rebeiro — Full Stack Developer specializing in React.js, Next.js, TypeScript, Node.js, and high-performance UI animations with GSAP. Crafting scalable, modern, and interactive web experiences.",

  icons: {
    icon: "/jeev.jpg",
    shortcut: "/jeev.jpg",
    apple: "/jeev.jpg",
  },

  openGraph: {
    title: "Jeevan Rebeiro | Full Stack Developer",
    description:
      "Explore the portfolio of Jeevan Rebeiro — building scalable full stack applications with modern technologies and immersive UI experiences.",
    // url: "https://your-domain.com", // replace with your domain
    siteName: "Jeevan Portfolio",
    images: [
      {
        url: "/jeev.jpg",
        width: 1200,
        height: 630,
        alt: "Jeevan Rebeiro Portfolio",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Jeevan Rebeiro | Full Stack Developer",
    description:
      "Full Stack Developer crafting scalable web apps and immersive UI experiences.",
    images: ["/jeev.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen bg-[#121212] overflow-x-hidden text-white flex flex-col">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
