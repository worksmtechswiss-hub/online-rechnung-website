import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
});

const SITE_URL = "https://online-rechnung-erstellen.ch";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Online Rechnung erstellen – Kostenlos & QR-konform | Finitopro",
    template: "%s | Finitopro",
  },
  description:
    "Rechnung erstellen Schweiz – einfach, schnell & QR-konform. Für Freelancer und KMU. Jetzt kostenlos testen – keine Kreditkarte nötig.",
  keywords: [
    "Rechnung erstellen Schweiz",
    "QR-Rechnung erstellen",
    "Rechnungssoftware Schweiz",
    "Online Rechnung Schweiz",
    "Rechnung schreiben Schweiz",
    "Rechnungsprogramm Freelancer Schweiz",
    "Rechnungsprogramm KMU Schweiz",
    "QR-Rechnung kostenlos",
    "Faktura erstellen Schweiz",
  ],
  authors: [{ name: "Finitopro" }],
  creator: "Finitopro",
  publisher: "Finitopro",
  formatDetection: { email: false, address: false, telephone: false },
  alternates: {
    canonical: "/",
    languages: { "de-CH": "/" },
  },
  openGraph: {
    type: "website",
    locale: "de_CH",
    url: SITE_URL,
    siteName: "Finitopro",
    title: "Online Rechnung erstellen – Kostenlos & QR-konform",
    description:
      "Rechnung erstellen Schweiz – einfach, schnell & QR-konform. Für Freelancer und KMU. Kostenlos starten.",
    images: [
      {
        url: "https://finitopro.ch/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Finitopro – Online Rechnung erstellen Schweiz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Rechnung erstellen – Kostenlos & QR-konform",
    description:
      "Rechnung erstellen Schweiz – einfach, schnell & QR-konform. Für Freelancer und KMU.",
    images: ["https://finitopro.ch/og-image.jpg"],
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
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${outfit.variable} h-full scroll-smooth antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
