import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Layout } from "@/components/Layout";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kalyan Matka — Online Matka Gaming App",
  description: "Download the Kalyan Matka app for the fastest, most secure Satta Matka gaming experience. Instant payouts, 24/7 support.",
  openGraph: {
    title: "Kalyan Matka — Online Matka Gaming App",
    description: "The most trusted online Matka platform with instant payouts and secure transactions.",
    type: "website",
  },
  twitter: {
    card: "summary",
    site: "@Lovable",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full">
        <Layout>
          {children}
        </Layout>
        <Toaster />
      </body>
    </html>
  );
}
