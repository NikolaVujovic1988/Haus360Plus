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
  metadataBase: new URL("https://www.haus360plus.de"),
  title: {
    default: "Haus360Plus | Reinigungs- & Hausmeisterdienste in Remscheid",
    template: "%s | Haus360Plus",
  },
  description:
    "Ihr regionaler Partner für professionelle Gebäudereinigung, Hausmeisterservice, Grünanlagenpflege und Montagearbeiten in Remscheid. 360-Grad-Service mit Festpreisgarantie.",
  keywords: [
    "Reinigung Remscheid",
    "Hausmeisterservice Remscheid",
    "Gebäudereinigung Remscheid",
    "Grünanlagenpflege Remscheid",
    "Treppenhausreinigung Remscheid",
    "Renovierung Montage Remscheid",
    "Facility Management Remscheid",
    "Hausmeisterdienst NRW",
    "Haus360Plus",
  ],
  authors: [{ name: "Haus360Plus" }],
  creator: "Haus360Plus",
  alternates: {
    canonical: "https://www.haus360plus.de",
  },
  openGraph: {
    title: "Haus360Plus | Reinigungs- & Hausmeisterdienste in Remscheid",
    description:
      "360-Grad-Service mit dem Plus an Qualität. Professionelle Reinigung, Hausmeisterservice, Grünanlagenpflege und Montagearbeiten in Remscheid.",
    url: "https://www.haus360plus.de",
    siteName: "Haus360Plus",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Haus360Plus | Reinigungs- & Hausmeisterdienste in Remscheid",
    description:
      "Ihr regionaler Partner für Gebäudereinigung und Hausmeisterservice in Remscheid.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
