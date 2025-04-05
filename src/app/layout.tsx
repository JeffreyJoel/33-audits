import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans } from "next/font/google";
import MouseMoveEffect from "@/components/ui/mouse-move-effect";

const dm_sans = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const metadata: Metadata = {
  metadataBase: new URL("https://www.33audits.xyz/"),
  title: {
    default: "33 Audits",
    template: "%s | 33 Audits",
  },
  openGraph: {
  description:
    "We've got your back when it comes to protecting your protocol and securing your data. Clear processes, real results, and a commitment to top-notch delivery every step of the way.",
    title: "33 Audits",
    url: "https://www.33audits.xyz/",
    siteName: "33 Audits",
    type: "website",
    locale: "en_US",
  },
  keywords: [
    "33 Audits",
    "Smart Contract Audits",
    "Blockchain Security",
    "Web3 Security",
    "Smart Contract Security",
    "Blockchain Audits",
    "Web3 Audits"]


};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        ></link>
      </head>
      <body className={`${dm_sans.className} antialiased`}>
        <MouseMoveEffect />
        {children}
      </body>
    </html>
  );
}
