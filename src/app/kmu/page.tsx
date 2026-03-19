import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Rechnungssoftware für KMU Schweiz – Einfach & QR-konform",
  description:
    "Rechnungsprogramm für Schweizer KMU und Kleinunternehmen. Unbegrenzte Rechnungen, Debitorenliste, MWST-korrekt, QR-Rechnung. Kostenlos testen.",
  alternates: { canonical: "/kmu" },
};

const REGISTER_URL = "https://app.finitopro.ch/register";

const features = [
  {
    icon: "📋",
    title: "Unbegrenzte Rechnungen",
    desc: "Schreiben Sie so viele Rechnungen wie Sie brauchen – ohne Limits und ohne Aufpreis.",
  },
  {
    icon: "👥",
    title: "Kundenverwaltung",
    desc: "Verwalten Sie alle Kunden an einem Ort. Kundendaten werden bei neuen Rechnungen automatisch übernommen.",
  },
  {
    icon: "🔄",
    title: "Serienrechnungen",
    desc: "Wiederkehrende Rechnungen automatisch erstellen – ideal für Abonnements und Monatsrechnungen.",
  },
  {
    icon: "📊",
    title: "Debitorenübersicht",
    desc: "Behalten Sie den Überblick über offene Rechnungen, überfällige Zahlungen und den Zahlungsstatus.",
  },
  {
    icon: "💼",
    title: "Buchhaltungs-Export",
    desc: "Exportieren Sie alle Rechnungen als CSV für Ihr Buchhaltungsprogramm oder Ihren Treuhänder.",
  },
  {
    icon: "🏷️",
    title: "MWST vollständig",
    desc: "Alle Schweizer MWST-Sätze (8.1%, 3.8%, 2.6%) korrekt berechnet und ausgewiesen.",
  },
];

const steps = [
  {
    num: "1",
    title: "Konto einrichten",
    desc: "Firmendaten und Logo hinterlegen, IBAN eingeben – einmal, danach automatisch auf jeder Rechnung.",
  },
  {
    num: "2",
    title: "Kunden & Produkte anlegen",
    desc: "Legen Sie Ihre Stammkunden und Ihre häufigsten Leistungen an. Das spart beim nächsten Mal Zeit.",
  },
  {
    num: "3",
    title: "Rechnungen erstellen & versenden",
    desc: "Rechnung in Sekunden zusammenstellen, QR-Rechnung als PDF exportieren oder direkt per Mail senden.",
  },
];

export default function KMUPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-28 pb-20 lg:pt-36 lg:pb-28" style={{ background: "linear-gradient(135deg, #f3f0fa 0%, #ffffff 60%, #fff3ee 100%)" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium mb-6" style={{ backgroundColor: "#fff3ee", color: "#fe7d43" }}>
                🏢 Für KMU & Kleinunternehmen
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Rechnungssoftware für{" "}
                <span style={{ color: "#6c4ea9" }}>Schweizer KMU</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Finitopro gibt Schweizer Kleinunternehmen alles, was sie für professionelles Rechnungswesen brauchen –
                ohne komplizierte Buchhaltungssoftware. QR-konform, MWST-korrekt, sofort einsatzbereit.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <a
                  href={REGISTER_URL}
                  className="inline-flex items-center px-6 py-3.5 rounded-xl text-white font-semibold text-base transition-colors shadow-lg"
                  style={{ backgroundColor: "#6c4ea9", boxShadow: "0 8px 24px #6c4ea940" }}
                >
                  14 Tage kostenlos testen
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-500 font-medium">
                <span>✓ Keine Kreditkarte nötig</span>
                <span>✓ QR-Rechnung inklusive</span>
                <span>✓ Alle Schweizer MWST-Sätze</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Alles für professionelles Rechnungswesen</h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Finitopro ist speziell für Schweizer KMU entwickelt – einfach genug für den Alltag, leistungsstark genug für Ihr Wachstum.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f) => (
                <div key={f.title} className="p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="text-3xl mb-3">{f.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Onboarding steps */}
        <section className="py-20" style={{ backgroundColor: "#f8f7fc" }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">In 3 Schritten startklar</h2>
              <p className="text-gray-500">Einrichtung dauert weniger als 5 Minuten.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {steps.map((s) => (
                <div key={s.num} className="bg-white rounded-2xl p-6 border border-gray-100 text-center">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xl font-black mx-auto mb-4"
                    style={{ backgroundColor: "#e8e1f5", color: "#6c4ea9" }}
                  >
                    {s.num}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20" style={{ background: "linear-gradient(135deg, #6c4ea9 0%, #4a2d8c 100%)" }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Finitopro jetzt für Ihr KMU testen</h2>
            <p className="mb-8 text-lg" style={{ color: "rgba(255,255,255,0.75)" }}>
              14 Tage kostenlos – danach CHF 30 / Monat, monatlich kündbar.
            </p>
            <a
              href={REGISTER_URL}
              className="inline-flex items-center px-8 py-4 rounded-xl bg-white font-bold text-base transition-colors"
              style={{ color: "#6c4ea9" }}
            >
              Kostenlos testen →
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
