import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://Ritik26052000.github.io"),
  title: {
    default: "Ritik Sonwani — Full Stack Developer",
    template: "%s | Ritik Sonwani",
  },
  description:
    "Full Stack Developer with 2+ years of experience building scalable web platforms using Node.js, TypeScript, React, Next.js, PostgreSQL. Delivered production systems across EdTech, e-commerce, supply chain, and AI automation.",
  keywords: [
    "Ritik Sonwani",
    "Full Stack Developer",
    "Software Engineer",
    "Node.js",
    "React",
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "Web Developer",
    "Portfolio",
  ],
  authors: [{ name: "Ritik Sonwani", url: "https://Ritik26052000.github.io" }],
  creator: "Ritik Sonwani",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://Ritik26052000.github.io",
    title: "Ritik Sonwani — Full Stack Developer",
    description:
      "Full Stack Developer with 2+ years of experience building scalable web platforms.",
    siteName: "Ritik Sonwani Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ritik Sonwani — Full Stack Developer",
    description:
      "Full Stack Developer with 2+ years of experience building scalable web platforms.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://Ritik26052000.github.io",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-foreground antialiased" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            {children}
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
