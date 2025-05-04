import type { Metadata } from "next";
// import localFont from "next/font/local";
import { Inter } from 'next/font/google';
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data/index";

import "./globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Raja's Portfolio",
  description: "Mordern Portfolio built with Next.js and Tailwind CSS",
  icons:{
    icon:'/avatar.JPG',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} antialiased`}
      >
        <FloatingNav navItems={navItems} />
        {children}
      </body>
    </html>
  );
}
