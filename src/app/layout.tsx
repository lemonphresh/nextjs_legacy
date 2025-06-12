import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeModeScript } from "flowbite-react";

import { SanityLive } from "@/sanity/live";
import { ToastContainer, ToastProvider } from "@/components/contexts/Toast";
import Navbar from "@/components/organisms/Navbar/Navbar";
import { ObitWriterProvider } from "@/components/contexts/ObitWriter";
import Footer from "@/components/molecules/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
  title: {
    default: "Lemon",
    template: "Lemon | %s",
  },
  description:
    "This is my super frickin cool Next.js app using the App Router.",
  keywords: ["Next.js", "SEO", "Tailwind", "Sanity CMS"],
  authors: [{ name: "Legacy.com", url: "https://www.legacy.com" }],
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
