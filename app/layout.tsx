import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";

export const metadata: Metadata = {
  title: "Jeevan Mahesha | Creative Engineer Portfolio",
  description:
    "Bridging the gap between pixel-perfect design and high-performance code.",
  keywords: [
    "Creative Engineer",
    "Full Stack Developer",
    "UX/UI",
    "Angular Developer",
    "AI Engineer",
    "Web Developer",
    "Jeevan Mahesha",
    "jeevan-mahesha.github.io",
    "jeevan-mahesha",
    "jeevan",
    "mahesha",
    "portfolio",
    "",
  ],
  authors: [{ name: "Jeevan Mahesha" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Source+Code+Pro:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased selection:bg-accent/30 overflow-x-hidden">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
