import "./globals.css";
import PageCurtain from "@/components/PageCurtain";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata = {
  title: {
    default: "Jose Aquino",
    template: "Jose Aquino | %s",
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
        <div id="route-content">{children}</div>
        <SmoothScroll />
        <PageCurtain />
      </body>
    </html>
  );
}
