import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SolCanvas",
  description: "SolCanvas is a decentralized platform.",
  openGraph: {
    type: "website",
    url: 'https://solcanvas.vercel.app/',
    title: 'SolCanvas',
    description: 'SolCanvas is a decentralized platform.',
    siteName: 'SolCanvas',
    images: {
      url: 'https://i.ibb.co/d5p56Y4/Screenshot-from-2024-02-18-16-21-00.png',
      alt: 'About Acme',
      width: 1200,
      height: 630,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
