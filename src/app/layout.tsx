import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Providers from "../process/providers/provider";

const BigShouldersDisplay = localFont({
  src: "./fonts/BigShouldersDisplay.ttf",
  variable: "--font-big-shoulders-display",
  weight: "400",
  style:"normal",
});

const Iceland = localFont({
  src: "./fonts/Iceland.ttf",
  variable: "--font-iceland",
  weight: "800",
  style: "normal",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={`bg-black ${BigShouldersDisplay.variable} ${Iceland.variable}`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}