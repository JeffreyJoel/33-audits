import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Space_Grotesk } from "next/font/google";


const agrandir = localFont({
  src: "./fonts/Agrandir-GrandLight.otf",
  variable: "--font-geist-sans",
  weight: "100 400 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const space_grotesk = Space_Grotesk({
  subsets: ["latin"]
});
export const metadata: Metadata = {
  title: "33 Audits",
  description: "Smart Contract Auditor, Security Researcher, Solidity Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>
      </head>
      <body
        className={`${space_grotesk.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
