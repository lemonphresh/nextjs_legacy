import "./globals.css";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeModeScript } from "flowbite-react";
import { Geist, Geist_Mono } from "next/font/google";

import { ObitWriterProvider } from "@/components/contexts/ObitWriter";
import { ToastContainer, ToastProvider } from "@/components/contexts/Toast";
import Footer from "@/components/molecules/Footer/Footer";
import Navbar from "@/components/organisms/Navbar/Navbar";
import { SanityLive } from "@/sanity/live";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: {
  title: {
    default: string;
    template: string;
  };
  description: string;
  keywords: string[];
  authors: { name: string; url: string }[];
} = {
  authors: [{ name: "Legacy.com", url: "https://www.legacy.com" }],
  description:
    "This is my super frickin cool Next.js app using the App Router.",
  keywords: ["Next.js", "SEO", "Tailwind", "Sanity CMS"],
  title: {
    default: "Lemon",
    template: "Lemon | %s",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <ThemeModeScript />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-gray-800`}
      >
        <ObitWriterProvider>
          <ToastProvider>
            <Navbar />
            <ToastContainer />
            {children}
            <Footer />
            <SanityLive />
          </ToastProvider>
        </ObitWriterProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
