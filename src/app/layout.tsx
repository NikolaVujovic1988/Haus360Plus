import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Haus360Plus | Reinigungs- & Hausmeisterdienste in Remscheid",
  description:
    "Ihr regionaler Partner für professionelle Reinigung, Hausmeisterservice, Grünanlagenpflege und Montagearbeiten in Remscheid. 360-Grad-Service mit dem Plus an Qualität.",
  keywords: [
    "Reinigung Remscheid",
    "Hausmeisterservice Remscheid",
    "Gebäudereinigung",
    "Grünanlagenpflege",
    "Renovierung Montage",
    "Haus360Plus",
  ],
  openGraph: {
    title: "Haus360Plus | Reinigungs- & Hausmeisterdienste in Remscheid",
    description:
      "360-Grad-Service mit dem Plus an Qualität. Reinigung, Hausmeisterservice, Grünanlagenpflege und Montagearbeiten.",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body
        className={`${inter.variable} ${dmSerif.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
