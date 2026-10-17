import "./globals.css";
import PageCurtain from "@/components/PageCurtain";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata = {
  metadataBase: new URL("https://example.com"),
  title: "Jose Aquino",
  description:
    "Portfolio of Jose Aquino, a software engineer building practical systems with AI, data, and modern web technologies.",
  openGraph: {
    title: "Jose Aquino",
    description:
      "Portfolio of Jose Aquino, a software engineer building practical systems with AI, data, and modern web technologies.",
    images: ["/assets/port_jose.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* The two Helixa weights used on first paint (body 450, headings 400). */}
        <link rel="preload" href="/fonts/Helixa-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Helixa-Book.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
        <SmoothScroll />
        <PageCurtain />
      </body>
    </html>
  );
}
