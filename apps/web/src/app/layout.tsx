import type { Metadata, Viewport } from "next";
import { Fraunces, Outfit, Pinyon_Script } from "next/font/google";
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

// Cursiva de destaque (só títulos grandes)
const cursiva = Pinyon_Script({
  variable: "--font-cursiva",
  weight: "400", // fontes de peso único exigem o weight explícito
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SoFlores — Onde a exclusividade floresce",
  description:
  "Peças exclusivas em crochê, confeccionadas à mão por Sofia Furtado com fios premium.",
  // TODO: remover no lançamento oficial
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${fraunces.variable} ${outfit.variable} ${cursiva.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
