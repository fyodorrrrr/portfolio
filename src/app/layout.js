import "./globals.css";

export const metadata = {
  title: "Portfolio",
  description: "Showcasing my work and projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
