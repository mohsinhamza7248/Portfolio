import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import StarCanvas from "@/components/main/StarCanvas";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: "Mohsin Portfolio | Full Stack Developer",
  description: "Portfolio of Mohsin Ansari, a Full Stack Developer specializing in React, Next.js, and Node.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} bg-background relative overflow-x-hidden`}>
        {/* Grainy Texture Overlay */}
        <div className="grain-overlay"></div>

        {/* StarCanvas z-index fix */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 cursor-none pointer-events-none">
          <StarCanvas />
        </div>

        <Navbar />
        <main className="relative z-10 w-full h-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
