import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ashan Mir — Creative Full-Stack Developer",
    template: "%s | Ashan Mir",
  },
  description:
    "Ashan Mir is a Creative Full-Stack Developer crafting modern web applications, immersive 3D experiences, and meaningful digital products.",
  applicationName: "Ashan Mir Portfolio",
  openGraph: {
    type: "website",
    title: "Ashan Mir — Creative Full-Stack Developer",
    description:
      "Creative Full-Stack Developer crafting modern web applications, immersive 3D experiences, and meaningful digital products.",
  },
  robots: {
    index: true,
    follow: true,
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
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}