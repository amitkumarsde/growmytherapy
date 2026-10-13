import type { Metadata, Viewport } from "next";
import { Ms_Madi, Mulish, Newsreader } from "next/font/google";
import "./globals.css";

const display = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-display",
  display: "swap",
});
const body = Mulish({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-body",
  display: "swap",
});
const hand = Ms_Madi({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-hand",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Maya Reynolds, PsyD",
  description: "Licensed clinical psychologist in Santa Monica, CA, offering anxiety, trauma, and burnout therapy in person and online across California.",
};

export const viewport: Viewport = {
  themeColor: "#faf5f0",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${hand.variable}`}>
      <body>{children}</body>
    </html>
  );
}
