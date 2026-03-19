import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "QR-Rechnung erstellen Schweiz – Kostenlos & automatisch",
  description:
    "QR-Rechnung erstellen leicht gemacht. Seit Oktober 2022 Pflicht in der Schweiz. Automatische QR-Code-Generierung, IBAN-Eingabe, PDF-Export. Kostenlos starten.",
  alternates: { canonical: "/qr-rechnung" },
};

const REGISTER_URL = "https://app.finitopro.ch/register";

const steps = [
  {
    step: "01",
    title: "IBAN & Empfänger eingeben",
    desc: "Tragen Sie Ihre Schweizer IBAN ein und geben Sie die Kundendaten an. Der QR-Code wird automatisch befüllt.",
  },
  {
    step: "02",
    title: "Leistungen & Betrag erfassen",
    desc: "Fügen Sie Ihre Leistungspositionen und Beträge hinzu. MWST wird automatisch berechnet.",
  },
  {
    step: "03",
    title: "QR-Rechnung als PDF exportieren",
    desc: "Laden Sie die fertige QR-Rechnung als PDF herunter oder senden Sie sie direkt per E-Mail.",
  },
];

const faqs = [
  {
    q: "Was ist eine QR-Rechnung?",
    a: "Die QR-Rechnung ist der Schweizer Zahlungsstandard seit Oktober 2022. Sie enthält einen QR-Code mit allen Zahlungsinformationen (IBAN, Betrag, Referenz) und ersetzt den roten und orangefarbenen Einzahlungsschein.",
  },
  {
    q: "Seit wann ist die QR-Rechnung Pflicht?",
    a: "Die QR-Rechnung ist seit dem 1. Oktober 2022 der einzige gültige Zahlungsstandard in der Schweiz. Rote und orangefarbene Einzahlungsscheine sind seither nicht mehr gültig.",
  },
  {
    q: "Welche IBAN brauche ich für die QR-Rechnung?",
    a: "Sie benötigen eine Schweizer IBAN (beginnt mit CH) Ihres Schweizer Bank- oder Postkontos. Ausländische IBANs werden nicht unterstützt.",
  },
  {
    q: "Muss ich eine QR-Referenz angeben?",
    a: "Nein, die QR-Referenz ist optional. Sie können auch ohne Referenz eine gültige QR-Rechnung erstellen. Eine Referenz erleichtert jedoch die Zuordnung von Zahlungseingängen.",
  },
];

export default function QRRechnungPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-28 pb-20 lg:pt-36 lg:pb-28" style={{ background: "linear-gradient(135deg, #f3f0fa 0%, #ffffff 60%, #fff3ee 100%)" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium mb-6" style={{ backgroundColor: "#e8e1f5", color: "#6c4ea9" }}>
                Pflicht seit Oktober 2022
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
                QR-Rechnung erstellen –{" "}
                <span style={{ color: "#6c4ea9" }}>automatisch & korrekt</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Finitopro generiert Ihren QR-Code automatisch. Geben Sie einfach Ihre IBAN ein –
                der Rest wird berechnet. Vollständig konform mit dem Swiss QR Standard von SIX.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={REGISTER_URL}
                  className="inline-flex items-center px-6 py-3.5 rounded-xl text-white font-semibold text-base transition-colors shadow-lg"
                  style={{ backgroundColor: "#6c4ea9", boxShadow: "0 8px 24px #6c4ea940" }}
                >
                  Kostenlos QR-Rechnung erstellen
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* What is QR-Rechnung */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Was ist die QR-Rechnung?</h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Die QR-Rechnung ist seit Oktober 2022 der einzige offizielle Zahlungsstandard in der Schweiz.
                  Sie ersetzt den roten und orangefarbenen Einzahlungsschein und enthält alle Zahlungsinformationen
                  in einem maschinenlesbaren QR-Code.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Der QR-Code enthält IBAN, Betrag, Empfängeradresse und optionale Referenznummer.
                  Kunden können damit direkt über Mobile-Banking oder E-Banking zahlen – ohne manuelle Eingabe.
                </p>
                <ul className="space-y-3">
                  {[
                    "Swiss QR Code nach Standard von SIX",
                    "Unterstützt alle Schweizer Banken & PostFinance",
                    "Mit & ohne Referenznummer möglich",
                    "Kombinierbar mit MWST-Ausweis",
                  ].map((p) => (
                    <li key={p} className="flex items-center gap-2.5 text-sm text-gray-700">
                      <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#e8e1f5" }}>
                        <svg className="w-3 h-3" style={{ color: "#6c4ea9" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual QR mockup */}
              <div className="rounded-2xl p-8 border border-gray-100" style={{ backgroundColor: "#f8f7fc" }}>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Zahlbar an</p>
                      <p className="font-semibold text-gray-900">Maria Muster GmbH</p>
                      <p className="text-xs text-gray-500">CH56 0483 5012 3456 7800 9</p>
                    </div>
                    <span className="text-xs px-2 py-1 rounded-full font-medium" style={{ backgroundColor: "#e8e1f5", color: "#6c4ea9" }}>
                      QR-konform ✓
                    </span>
                  </div>
                  <div className="border-t border-gray-100 pt-4 flex items-center gap-4">
                    <div className="w-20 h-20 grid grid-cols-5 gap-0.5 p-1.5 bg-white border border-gray-200 rounded-lg flex-shrink-0">
                      {Array.from({ length: 25 }).map((_, i) => (
                        <div key={i} className={`rounded-sm ${[0,1,2,3,4,5,9,10,14,15,19,20,21,22,23,24,6,12,18,7,17].includes(i) ? "bg-gray-900" : "bg-gray-100"}`} />
                      ))}
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-0.5">Betrag</p>
                      <p className="text-xl font-bold text-gray-900">CHF 3&apos;243.00</p>
                      <p className="text-xs text-gray-400 mt-1">Zahlbar bis 30.04.2026</p>
                    </div>
                  </div>
                </div>
                <p className="text-center text-xs text-gray-400 mt-3">Automatisch generiert von Finitopro</p>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-20" style={{ backgroundColor: "#f8f7fc" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">In 3 Schritten zur QR-Rechnung</h2>
              <p className="text-gray-500">So einfach erstellen Sie Ihre erste QR-konforme Rechnung.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {steps.map((s, i) => (
                <div key={s.step} className="bg-white rounded-2xl p-6 border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl font-black" style={{ color: "#e8e1f5" }}>{s.step}</span>
                    <div className="h-px flex-1 bg-gray-100" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Häufige Fragen zur QR-Rechnung</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="rounded-xl p-6 border border-gray-100" style={{ backgroundColor: "#faf9fd" }}>
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20" style={{ background: "linear-gradient(135deg, #6c4ea9 0%, #4a2d8c 100%)" }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Jetzt erste QR-Rechnung erstellen</h2>
            <p className="mb-8" style={{ color: "rgba(255,255,255,0.75)" }}>Kostenlos starten – keine Kreditkarte nötig.</p>
            <a
              href={REGISTER_URL}
              className="inline-flex items-center px-8 py-4 rounded-xl bg-white font-bold text-base transition-colors"
              style={{ color: "#6c4ea9" }}
            >
              Kostenlos registrieren →
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
