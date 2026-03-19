import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Features from "@/components/Features";
import QRSection from "@/components/QRSection";
import AudienceSection from "@/components/AudienceSection";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import { faqItems } from "@/data/faqData";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Online Rechnung erstellen – Kostenlos & QR-konform",
  description:
    "Rechnung erstellen Schweiz – einfach, schnell & QR-konform. Für Freelancer und KMU. Jetzt kostenlos testen – keine Kreditkarte nötig.",
  alternates: { canonical: "/" },
};

const jsonLdOrg = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Finitopro",
  url: "https://online-rechnung-erstellen.ch",
  logo: "https://online-rechnung-erstellen.ch/logo.png",
  sameAs: ["https://finitopro.ch", "https://app.finitopro.ch"],
  address: {
    "@type": "PostalAddress",
    addressCountry: "CH",
  },
};

const jsonLdApp = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Finitopro – Online Rechnung erstellen Schweiz",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: "https://online-rechnung-erstellen.ch",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "CHF",
    description: "Kostenlos bis 3 Rechnungen pro Monat",
  },
  description:
    "Kostenlose Rechnungssoftware für Schweizer Freelancer und KMU – QR-konform, MWST-korrekt und einfach zu bedienen.",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "312",
    bestRating: "5",
  },
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const jsonLdHowTo = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Wie erstelle ich eine Rechnung in der Schweiz?",
  description:
    "Schritt-für-Schritt Anleitung zum Erstellen einer QR-konformen Rechnung in der Schweiz mit Finitopro.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Konto erstellen",
      text: "Registrieren Sie sich kostenlos auf finitopro.ch – keine Kreditkarte erforderlich.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Rechnung ausfüllen",
      text: "Kundendaten eingeben, Leistungen und Beträge erfassen. MWST und QR-Code werden automatisch berechnet.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Versenden und bezahlt werden",
      text: "PDF herunterladen oder direkt per E-Mail versenden. Der Kunde zahlt bequem per QR-Code.",
    },
  ],
};

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={jsonLdOrg} />
      <JsonLd data={jsonLdApp} />
      <JsonLd data={jsonLdFaq} />
      <JsonLd data={jsonLdHowTo} />

      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Features />
        <QRSection />
        <AudienceSection />
        <HowItWorks />
        <Pricing />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
