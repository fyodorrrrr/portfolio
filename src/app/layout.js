import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://example.com"),
  title: "Jose Aquino — Computer Science Student & Developer",
  description:
    "Portfolio of Jose Aquino, a computer science student building web and mobile apps with React, Next.js, and Flutter.",
  openGraph: {
    title: "Jose Aquino — Computer Science Student & Developer",
    description:
      "Portfolio of Jose Aquino, a computer science student building web and mobile apps with React, Next.js, and Flutter.",
    images: ["/assets/port_jose.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
