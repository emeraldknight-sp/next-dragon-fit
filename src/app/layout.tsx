import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Dragon Fit",
    template: "%s | Dragon Fit",
  },
  description:
    "Dragon Fit gera treinos personalizados e rotinas de alimentação para ajudar você a evoluir na academia.",

  applicationName: "Dragon Fit",

  keywords: [
    "treino",
    "fitness",
    "academia",
    "nutrição",
    "workout",
    "gym",
    "dragon fit",
  ],

  authors: [{ name: "Dragon Fit" }],

  creator: "Dragon Fit",
  publisher: "Dragon Fit",

  metadataBase: new URL("https://next-dragon-fit.vercel.app"),

  openGraph: {
    title: "Dragon Fit",
    description:
      "Treinos inteligentes e rotina alimentar personalizada.",
    url: "https://next-dragon-fit.vercel.app",
    siteName: "Dragon Fit",
    locale: "pt_BR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Dragon Fit",
    description:
      "Treinos inteligentes e rotina alimentar personalizada.",
  },

  manifest: "/assets/seo/manifest.json",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased bg-slate-950 text-white`}
      >
        {children}
      </body>
    </html>
  );
}
