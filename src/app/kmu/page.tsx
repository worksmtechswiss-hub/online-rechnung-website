import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Rechnungssoftware für KMU Schweiz 2026 – QR-konform & MWST-korrekt",
  description:
    "Rechnungsprogramm für Schweizer KMU und Kleinunternehmen. Unbegrenzte Rechnungen, Debitorenliste, Serienrechnungen, alle MWST-Sätze. 14 Tage kostenlos testen.",
  alternates: { canonical: "/kmu", languages: { "de-CH": "/kmu" } },
};

const REGISTER_URL = "https://app.finitopro.ch/register";

const mwstRates = [
  { rate: "8.1%", name: "Normalsatz", examples: "Die meisten Dienstleistungen, Handwerk, IT, Beratung, Grosshandel" },
  { rate: "3.8%", name: "Sondersatz Beherbergung", examples: "Hotellerie, Ferienwohnungen, Campingplätze" },
  { rate: "2.6%", name: "Reduzierter Satz", examples: "Lebensmittel, Medikamente, Bücher, Zeitungen, Tiernahrung" },
  { rate: "0%", name: "Von MWST ausgenommen", examples: "Arztpraxen, Versicherungen, Banken, Bildungseinrichtungen" },
];

const faqs = [
  {
    q: "Was ist der Unterschied zwischen Rechnung und Offerte?",
    a: "Eine Offerte ist ein Angebot vor der Leistungserbringung, die Rechnung ist die Zahlungsaufforderung danach. Mit Finitopro können Sie Offerten erstellen und nach Auftragserteilung mit einem Klick in eine Rechnung umwandeln.",
  },
  {
    q: "Wie verwalte ich offene Rechnungen und Mahnungen?",
    a: "In der Debitorenliste von Finitopro sehen Sie auf einen Blick alle offenen, bezahlten und überfälligen Rechnungen. Bei Zahlungsverzug können Sie direkt aus der App eine Zahlungserinnerung oder Mahnung versenden.",
  },
  {
    q: "Kann ich Rechnungen automatisch wiederkehrend erstellen?",
    a: "Ja. Mit der Serienrechnungs-Funktion in Finitopro Pro können Sie monatliche oder wöchentliche Rechnungen automatisieren – ideal für Abonnements, Mietverträge oder wiederkehrende Dienstleistungen.",
  },
  {
    q: "Wie exportiere ich Rechnungen für meine Buchhaltung?",
    a: "Finitopro bietet einen CSV-Export aller Rechnungen, der mit gängigen Buchhaltungsprogrammen und Treuhändern kompatibel ist. Alle Belege sind als PDF archiviert und jederzeit abrufbar.",
  },
  {
    q: "Kann ich mehrere Mitarbeitende auf dasselbe Konto geben?",
    a: "Ja, im Pro-Plan können Sie Team-Mitglieder einladen, die ebenfalls Rechnungen erstellen und einsehen können. Berechtigungen sind konfigurierbar.",
  },
  {
    q: "Ist Finitopro mit meiner Buchhaltungssoftware kompatibel?",
    a: "Der CSV-Export von Finitopro ist mit den meisten Schweizer Buchhaltungslösungen kompatibel. Für spezifische Integrationen kontaktieren Sie bitte hello@finitopro.ch.",
  },
];

export default function KMUPage() {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Rechnungssoftware für KMU in der Schweiz 2026 – Vergleich und Ratgeber",
    description: "Welche Rechnungssoftware passt für Schweizer KMU? MWST-Sätze, Debitorenverwaltung, Serienrechnungen und QR-Rechnung erklärt.",
    author: { "@type": "Organization", name: "Finitopro" },
    publisher: { "@type": "Organization", name: "Finitopro", url: "https://online-rechnung-erstellen.ch" },
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq).replace(/</g, "\\u003c") }} />
      <Navbar />
      <main>

        {/* Hero */}
        <section className="pt-28 pb-20 lg:pt-36 lg:pb-24" style={{ background: "linear-gradient(135deg, #f3f0fa 0%, #ffffff 60%, #fff3ee 100%)" }}>
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
                ohne komplizierte Buchhaltungssoftware. QR-konform, MWST-korrekt für alle Sätze,
                mit Debitorenliste und Serienrechnungen.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <a href={REGISTER_URL} className="inline-flex items-center px-6 py-3.5 rounded-xl text-white font-semibold text-base shadow-lg" style={{ backgroundColor: "#6c4ea9" }}>
                  14 Tage kostenlos testen
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </a>
              </div>
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-500 font-medium">
                <span>✓ Alle Schweizer MWST-Sätze</span>
                <span>✓ QR-Rechnung inklusive</span>
                <span>✓ Keine Kreditkarte nötig</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Alle Funktionen für Ihr KMU</h2>
              <p className="text-gray-500 max-w-xl mx-auto">Von der ersten Offerte bis zur Mahnung – Finitopro begleitet Sie durch den gesamten Rechnungsprozess.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { emoji: "📋", title: "Unbegrenzte Rechnungen", desc: "Schreiben Sie so viele Rechnungen wie Sie brauchen – ohne Limits und ohne Aufpreis im Pro-Plan." },
                { emoji: "💼", title: "Offerten & Aufträge", desc: "Erstellen Sie Offerten und wandeln Sie diese nach Auftragserteilung mit einem Klick in Rechnungen um." },
                { emoji: "👥", title: "Kundenverwaltung", desc: "Alle Kunden an einem Ort. Kundendaten werden bei neuen Rechnungen automatisch vorausgefüllt." },
                { emoji: "🔄", title: "Serienrechnungen", desc: "Monatliche oder wöchentliche Rechnungen automatisch erstellen – ideal für Abos und Dauermandate." },
                { emoji: "📊", title: "Debitorenübersicht", desc: "Auf einen Blick: welche Rechnungen offen, bezahlt oder überfällig sind. Direktversand von Mahnungen." },
                { emoji: "📤", title: "Buchhaltungs-Export", desc: "CSV-Export aller Rechnungen für Ihr Buchhaltungsprogramm oder Ihren Treuhänder." },
                { emoji: "🏷️", title: "Alle MWST-Sätze", desc: "Normalsatz (8.1%), Sondersatz (3.8%), reduzierter Satz (2.6%) – alles korrekt berechnet." },
                { emoji: "🎨", title: "Corporate Design", desc: "Laden Sie Ihr Logo hoch und passen Sie Farben an – einheitliche Rechnungen nach Ihrem CI." },
                { emoji: "🔒", title: "Schweizer Datenspeicherung", desc: "Alle Daten verschlüsselt auf Schweizer Servern. Konform mit revDSG und DSGVO." },
              ].map((f) => (
                <div key={f.title} className="p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="text-3xl mb-3">{f.emoji}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MWST Sätze */}
        <section className="py-20" style={{ backgroundColor: "#f8f7fc" }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Schweizer MWST-Sätze 2024/2025</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Seit dem 1. Januar 2024 gelten in der Schweiz neue, erhöhte MWST-Sätze. Finitopro berechnet
              alle Sätze automatisch korrekt – Sie müssen nur den passenden Satz für Ihre Leistung auswählen.
            </p>
            <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
              <table className="w-full">
                <thead>
                  <tr style={{ backgroundColor: "#6c4ea9" }}>
                    <th className="px-5 py-3 text-left text-sm font-semibold text-white rounded-tl-2xl">Satz</th>
                    <th className="px-5 py-3 text-left text-sm font-semibold text-white">Bezeichnung</th>
                    <th className="px-5 py-3 text-left text-sm font-semibold text-white rounded-tr-2xl">Anwendung</th>
                  </tr>
                </thead>
                <tbody>
                  {mwstRates.map((r, i) => (
                    <tr key={r.rate} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-5 py-3 text-sm font-bold" style={{ color: "#6c4ea9" }}>{r.rate}</td>
                      <td className="px-5 py-3 text-sm font-medium text-gray-800">{r.name}</td>
                      <td className="px-5 py-3 text-sm text-gray-500">{r.examples}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-3">Stand: 2024. Die Sätze gelten seit 1. Januar 2024 (Erhöhung zur AHV-Finanzierung).</p>
          </div>
        </section>

        {/* Debitorenmanagement */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Debitorenmanagement leicht gemacht</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Viele KMU verlieren den Überblick über offene Rechnungen – besonders wenn das Kundenstamm wächst.
                  Finitopro zeigt Ihnen auf einen Blick den Zahlungsstatus jeder Rechnung.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Bei Zahlungsverzug können Sie direkt aus der App eine <strong>Zahlungserinnerung</strong> oder
                  <strong> Mahnung</strong> versenden. So behalten Sie den Cashflow im Griff, ohne wertvolle Zeit
                  mit manuellem Nachfassen zu verlieren.
                </p>
                <ul className="space-y-3">
                  {[
                    "Ampel-System: grün (bezahlt), gelb (fällig), rot (überfällig)",
                    "Automatische Erinnerung nach X Tagen ohne Zahlung",
                    "Mahnungsversand per E-Mail direkt aus Finitopro",
                    "Gesamtübersicht offene Debitoren auf Dashboard",
                  ].map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <svg className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#6c4ea9" }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl p-6 border border-gray-100" style={{ backgroundColor: "#f8f7fc" }}>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Debitorenübersicht (Beispiel)</p>
                <div className="space-y-3">
                  {[
                    { name: "Müller Bau GmbH", amount: "CHF 4'850.00", status: "bezahlt", color: "#16a34a", bg: "#f0fdf4" },
                    { name: "Tech AG", amount: "CHF 1'200.00", status: "fällig in 5 Tagen", color: "#d97706", bg: "#fffbeb" },
                    { name: "Berger & Partner", amount: "CHF 3'100.00", status: "14 Tage überfällig", color: "#dc2626", bg: "#fef2f2" },
                    { name: "Schmidt Handwerk", amount: "CHF 890.00", status: "bezahlt", color: "#16a34a", bg: "#f0fdf4" },
                  ].map((row) => (
                    <div key={row.name} className="bg-white rounded-xl px-4 py-3 flex items-center justify-between border border-gray-100">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{row.name}</p>
                        <p className="text-xs text-gray-400">{row.amount}</p>
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ color: row.color, backgroundColor: row.bg }}>
                        {row.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Onboarding */}
        <section className="py-20" style={{ backgroundColor: "#f8f7fc" }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-3 text-center">In 3 Schritten startklar</h2>
            <p className="text-gray-500 text-center mb-12">Einrichtung dauert weniger als 5 Minuten.</p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { n: "1", t: "Konto einrichten", d: "Firmendaten und Logo hinterlegen, IBAN eingeben – einmal, danach automatisch auf jeder Rechnung." },
                { n: "2", t: "Kunden & Produkte anlegen", d: "Stammkunden und häufige Leistungspositionen anlegen. Das spart beim nächsten Mal erheblich Zeit." },
                { n: "3", t: "Rechnungen erstellen", d: "Rechnung in Sekunden zusammenstellen, QR-Rechnung als PDF exportieren oder direkt per Mail versenden." },
              ].map((s) => (
                <div key={s.n} className="bg-white rounded-2xl p-6 border border-gray-100 text-center">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl font-black mx-auto mb-4" style={{ backgroundColor: "#e8e1f5", color: "#6c4ea9" }}>{s.n}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{s.t}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Häufige Fragen von KMU</h2>
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
            <h2 className="text-3xl font-bold text-white mb-4">Finitopro für Ihr KMU testen</h2>
            <p className="mb-8 text-lg" style={{ color: "rgba(255,255,255,0.75)" }}>14 Tage kostenlos – danach CHF 30 / Monat, monatlich kündbar.</p>
            <a href={REGISTER_URL} className="inline-flex items-center px-8 py-4 rounded-xl bg-white font-bold text-base" style={{ color: "#6c4ea9" }}>
              Kostenlos testen →
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
