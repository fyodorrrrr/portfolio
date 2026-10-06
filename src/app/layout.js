import "./globals.css";
import PageCurtain from "@/components/PageCurtain";

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
    <html lang="en">
      <body className="antialiased">
        {children}
        <PageCurtain />
      </body>
    </html>
  );
}
