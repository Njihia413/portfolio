import type { Metadata } from "next";
import { Rajdhani, Rubik, Parisienne } from "next/font/google";
import "@/styles/main.scss";
import "@/styles/plugins/odometer.css";
import "@/styles/plugins/odometer.css";
import LayoutWrapper from "@/components/common/LayoutWrapper";
import Script from "next/script";
import { Toaster } from "sonner";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani",
  display: "swap",
});

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-rubik",
  display: "swap",
});

const parisienne = Parisienne({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-parisienne",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maureen Njihia | Portfolio",
  description:
    "Professional portfolio of Maureen Njihia - showcasing projects, skills, and expertise in software development and design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${rajdhani.variable} ${rubik.variable} ${parisienne.variable}`}>
      <body>
        <Script src="/assets/js/smooth.js" strategy="beforeInteractive" />
        <LayoutWrapper>
          <Toaster richColors position="top-right" />
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
