import type { Metadata, Viewport } from "next";
import { Fraunces, Outfit } from "next/font/google";
import "./globals.css";

// Provisórias — substituem The Seasons e Garet (ver TODO.md)
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SoFlores — Onde a exclusividade floresce",
  description:
    "Peças exclusivas em crochê, confeccionadas à mão por Sofia Furtado com fios premium.",
};

export const viewport: Viewport = {
  themeColor: "#271f17",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
