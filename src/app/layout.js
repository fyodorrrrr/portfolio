import { Gaegu } from "next/font/google";
import "./globals.css";
import PageCurtain from "@/components/PageCurtain";

// Handwriting face for the hero's margin notes only; everything else is Helixa.
const hand = Gaegu({
  subsets: ["latin"],
  weight: "700",
  display: "swap",
  variable: "--font-hand",
});

export const metadata = {
  metadataBase: new URL("https://example.com"),
  title: "Jose Aquino — Software Engineer",
  description:
    "Portfolio of Jose Aquino, a software engineer building practical systems with AI, data, and modern web technologies.",
  openGraph: {
    title: "Jose Aquino — Software Engineer",
    description:
      "Portfolio of Jose Aquino, a software engineer building practical systems with AI, data, and modern web technologies.",
    images: ["/assets/port_jose.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={hand.variable}>
      <body className="antialiased">
        {children}
        <PageCurtain />
      </body>
    </html>
  );
}
