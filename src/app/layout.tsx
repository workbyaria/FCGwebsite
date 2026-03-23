import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  /* 含 200 / 700，避免 font-extralight、bold 落到系統字體 */
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Friendly Cat Group",
  description: "Technology for Humanity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} font-sans`}>
      <body className="bg-white font-sans font-normal text-brand-primary overflow-x-hidden">
        <SmoothScroll>
          <SiteHeader />
          <div className="flex min-h-dvh flex-col pt-[4.75rem] md:pt-[5.25rem]">
            <div className="flex-1">{children}</div>
            <SiteFooter />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
