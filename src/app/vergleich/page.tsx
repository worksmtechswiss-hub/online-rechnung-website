import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rechnungssoftware Vergleich Schweiz 2026 – Finitopro vs. Bexio vs. Smallinvoice",
  description:
    "Ehrlicher Vergleich der besten Rechnungssoftware für die Schweiz 2026. Finitopro vs. Bexio, Smallinvoice und Magic Heidi – Preise, Funktionen, Vor- und Nachteile.",
  alternates: { canonical: "/vergleich", languages: { "de-CH": "/vergleich" } },
};

const REGISTER_URL = "https://app.finitopro.ch/register";

type FeatureKey = "qr" | "kostenlos" | "preis" | "mwst" | "einfachheit" | "serienrechnungen" | "teamzugriff" | "offerten" | "debitorenliste" | "chFokus";

const features: { key: FeatureKey; label: string; desc: string }[] = [
  { key: "qr", label: "QR-Rechnung", desc: "Swiss QR Code nach SIX-Standard" },
  { key: "kostenlos", label: "Kostenlos nutzbar", desc: "Ohne Kreditkarte, ohne Abo" },
  { key: "preis", label: "Preis ab", desc: "Monatlicher Grundpreis (CHF)" },
  { key: "mwst", label: "MWST-Berechnung", desc: "Alle Schweizer Sätze" },
  { key: "offerten", label: "Offerten", desc: "Angebote erstellen" },
  { key: "einfachheit", label: "Einfache Bedienung", desc: "Kein Buchhaltungswissen nötig" },
  { key: "serienrechnungen", label: "Serienrechnungen", desc: "Wiederkehrende Rechnungen" },
  { key: "debitorenliste", label: "Debitorenliste", desc: "Offene-Posten-Verwaltung" },
  { key: "teamzugriff", label: "Team-Zugriff", desc: "Mehrere Nutzer" },
  { key: "chFokus", label: "Fokus Schweiz", desc: "Für den CH-Markt entwickelt" },
];

const competitors: { name: string; highlight: boolean; tagline: string; target: string; data: Record<FeatureKey, string | boolean> }[] = [
  {
    name: "Finitopro",
    highlight: true,
    tagline: "Einfach & QR-konform",
    target: "Freelancer & KMU",
    data: { qr: true, kostenlos: true, preis: "CHF 0 / Mo.", mwst: true, offerten: true, einfachheit: true, serienrechnungen: true, debitorenliste: true, teamzugriff: true, chFokus: true },
  },
  {
    name: "Bexio",
    highlight: false,
    tagline: "ERP für grössere KMU",
    target: "KMU (5–50 MA)",
    data: { qr: true, kostenlos: false, preis: "CHF 45 / Mo.", mwst: true, offerten: true, einfachheit: false, serienrechnungen: true, debitorenliste: true, teamzugriff: true, chFokus: true },
  },
  {
    name: "Smallinvoice",
    highlight: false,
    tagline: "Buchhaltungsfokus",
    target: "KMU mit Buchhaltung",
    data: { qr: true, kostenlos: true, preis: "CHF 19 / Mo.", mwst: true, offerten: true, einfachheit: false, serienrechnungen: true, debitorenliste: true, teamzugriff: true, chFokus: true },
  },
  {
    name: "Magic Heidi",
    highlight: false,
    tagline: "Freelancer-Tool",
    target: "Einzelpersonen",
    data: { qr: true, kostenlos: false, preis: "CHF 30 / Mo.", mwst: true, offerten: true, einfachheit: true, serienrechnungen: false, debitorenliste: false, teamzugriff: false, chFokus: true },
  },
];

function Cell({ value, highlight }: { value: string | boolean; highlight: boolean }) {
  const cellBg = highlight ? { backgroundColor: "rgba(108,78,169,0.07)" } : {};
  if (typeof value === "boolean") {
    return (
      <td className="px-4 py-3.5 text-center" style={cellBg}>
        {value ? (
          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full" style={{ backgroundColor: highlight ? "#6c4ea9" : "#e8e1f5" }}>
            <svg className="w-3.5 h-3.5" style={{ color: "white" }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
          </span>
        ) : (
          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-100">
            <svg className="w-3.5 h-3.5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </span>
        )}
      </td>
    );
  }
  return (
    <td className="px-4 py-3.5 text-center text-sm font-medium" style={{ ...cellBg, color: highlight ? "#6c4ea9" : "#374151" }}>
      {value}
    </td>
  );
}

const detailedComparisons = [
  {
    competitor: "Bexio",
    subtitle: "Finitopro vs. Bexio – Der ehrliche Vergleich",
    summary: "Bexio ist die bekannteste Schweizer Buchhaltungslösung und bietet ein umfassendes ERP-System. Für KMU mit komplexen Buchhaltungsanforderungen ist Bexio eine starke Lösung – allerdings zu einem entsprechend hohen Preis.",
    finitoPros: [
      "Deutlich günstiger: ab CHF 0 statt CHF 45/Monat",
      "Einfacher in der Bedienung – keine Einführungsschulung nötig",
      "Schnellerer Einstieg – in 5 Minuten einsatzbereit",
      "Ideal für Freelancer und kleine KMU ohne komplexe Buchhaltung",
    ],
    bexioPros: [
      "Vollständige Buchhaltung mit Jahresabschluss",
      "Lohnbuchhaltung und HR-Funktionen",
      "Grössere Unternehmen mit mehreren Kostenstellen",
      "Tiefe Integration mit Banken (Open Banking)",
    ],
    verdict: "Für Freelancer und KMU unter 10 Mitarbeitenden, die primär Rechnungen erstellen und verwalten wollen, ist Finitopro die bessere Wahl. Wer eine vollständige Buchhaltungslösung mit Jahresabschluss braucht, sollte Bexio evaluieren.",
  },
  {
    competitor: "Smallinvoice",
    subtitle: "Finitopro vs. Smallinvoice – Was passt besser?",
    summary: "Smallinvoice ist eine etablierte Schweizer Rechnungslösung mit starkem Fokus auf Buchhaltungsintegration. Die Software bietet viele Funktionen, wirkt aber in der Bedienung etwas veraltet.",
    finitoPros: [
      "Moderneres, intuitiveres Interface",
      "Schnellere Rechnungserstellung",
      "Gleichwertiger Funktionsumfang zu einem günstigeren Preis",
      "Bessere Mobile-Erfahrung",
    ],
    bexioPros: [
      "Längere Marktpräsenz und damit mehr Erfahrung",
      "PostFinance-Partnerschaft (Swiss Billing)",
      "Tiefere Buchhaltungsfunktionen",
    ],
    verdict: "Für Nutzer, die eine moderne, einfach bedienbare Rechnungslösung suchen, ist Finitopro die attraktivere Wahl. Smallinvoice punktet mit jahrelanger Erfahrung und Bankpartnerschaften.",
  },
  {
    competitor: "Magic Heidi",
    subtitle: "Finitopro vs. Magic Heidi – Für Freelancer",
    summary: "Magic Heidi ist speziell auf Schweizer Freelancer zugeschnitten und bekannt für aggressives Content-Marketing. Die Software ist einfach zu bedienen, hat aber klare Grenzen bei Team-Features und Wachstum.",
    finitoPros: [
      "Günstiger: ab CHF 0 statt CHF 30/Monat",
      "Serienrechnungen (fehlen bei Magic Heidi)",
      "Team-Zugriff für wachsende Unternehmen",
      "Debitorenliste und Mahnwesen",
    ],
    bexioPros: [
      "Starke Community und viel Content auf Deutsch",
      "Sehr freelancer-spezifische Features",
      "Zeiterfassung integriert",
    ],
    verdict: "Wer als Freelancer startet und wachsen möchte, findet in Finitopro eine günstigere und funktionsstärkere Alternative. Magic Heidi eignet sich gut für reine Einzelpersonen mit einfachen Bedürfnissen.",
  },
];

export default function VergleichPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Rechnungssoftware Schweiz Vergleich 2026 – Finitopro vs. Bexio, Smallinvoice, Magic Heidi",
    description: "Detaillierter Vergleich der führenden Rechnungssoftwares für den Schweizer Markt nach Preis, Funktionen und Zielgruppe.",
    author: { "@type": "Organization", name: "Finitopro" },
    publisher: { "@type": "Organization", name: "Finitopro", url: "https://online-rechnung-erstellen.ch" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <Navbar />
      <main>

        {/* Hero */}
        <section className="pt-28 pb-20 lg:pt-36 lg:pb-24" style={{ background: "linear-gradient(135deg, #f3f0fa 0%, #ffffff 60%, #fff3ee 100%)" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium mb-6" style={{ backgroundColor: "#e8e1f5", color: "#6c4ea9" }}>
                Vergleich 2026
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Rechnungssoftware Schweiz –{" "}
                <span style={{ color: "#6c4ea9" }}>ehrlicher Vergleich 2026</span>
              </h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Der Schweizer Markt für Rechnungssoftware ist gross: Bexio, Smallinvoice, Magic Heidi, Milkee und
                viele weitere kämpfen um die Gunst von Freelancern und KMU. Wir vergleichen die wichtigsten
                Lösungen – transparent, ehrlich und ohne Werbung.
              </p>
              <p className="text-sm text-gray-400">Hinweis: Dieser Vergleich wurde von Finitopro erstellt. Wir bemühen uns um Objektivität, empfehlen aber eine eigene Evaluation.</p>
            </div>
          </div>
        </section>

        {/* Quick comparison table */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Funktionsvergleich auf einen Blick</h2>
            <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
              <table className="w-full min-w-[700px]">
                <thead>
                  <tr>
                    <th className="px-4 py-4 text-left text-sm font-semibold text-gray-500 bg-gray-50 rounded-tl-2xl w-44">Funktion</th>
                    {competitors.map((c) => (
                      <th key={c.name} className="px-4 py-4 text-center text-sm font-bold" style={c.highlight ? { backgroundColor: "#6c4ea9", color: "white" } : { backgroundColor: "#f9f8fc", color: "#374151" }}>
                        <div>{c.name}</div>
                        <div className="text-xs font-normal mt-0.5" style={{ color: c.highlight ? "rgba(184,156,241,0.9)" : "#9ca3af" }}>{c.target}</div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {features.map((f, fi) => (
                    <tr key={f.key} className={fi % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                      <td className="px-4 py-3.5">
                        <p className="text-sm font-medium text-gray-700">{f.label}</p>
                        <p className="text-xs text-gray-400">{f.desc}</p>
                      </td>
                      {competitors.map((c) => (
                        <Cell key={c.name} value={c.data[f.key]} highlight={c.highlight} />
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-4 text-center">Stand: März 2026. Angaben ohne Gewähr. Preise können sich ändern.</p>
          </div>
        </section>

        {/* Detailed comparisons */}
        <section className="py-20" style={{ backgroundColor: "#f8f7fc" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-3 text-center">Detaillierter Vergleich</h2>
            <p className="text-gray-500 text-center mb-12">Was unterscheidet Finitopro von der Konkurrenz wirklich?</p>
            <div className="space-y-10">
              {detailedComparisons.map((comp) => (
                <div key={comp.competitor} className="bg-white rounded-2xl p-8 border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{comp.subtitle}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{comp.summary}</p>
                  <div className="grid sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "#6c4ea9" }}>Vorteile Finitopro</p>
                      <ul className="space-y-2">
                        {comp.finitoPros.map((p) => (
                          <li key={p} className="flex items-start gap-2 text-sm text-gray-700">
                            <svg className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#72bf78" }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider mb-3 text-gray-400">Wann {comp.competitor} besser passt</p>
                      <ul className="space-y-2">
                        {comp.bexioPros.map((p) => (
                          <li key={p} className="flex items-start gap-2 text-sm text-gray-500">
                            <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="rounded-xl p-4" style={{ backgroundColor: "#f3f0fa" }}>
                    <p className="text-sm" style={{ color: "#4a2d8c" }}><strong>Fazit:</strong> {comp.verdict}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Welche Software für wen */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Welche Rechnungssoftware passt für wen?</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { who: "Freelancer & Selbstständige", rec: "Finitopro", why: "Einfachste Bedienung, kostenloser Einstieg, QR-Rechnung ohne MWST möglich. Alles was Einzelpersonen brauchen.", link: "/freelancer" },
                { who: "KMU bis 10 Mitarbeitende", rec: "Finitopro", why: "Voller Funktionsumfang zu CHF 30/Monat: Serienrechnungen, Debitorenliste, Team-Zugriff, Export.", link: "/kmu" },
                { who: "KMU mit komplexer Buchhaltung", rec: "Bexio", why: "Wenn Sie einen vollständigen Jahresabschluss, Lohnbuchhaltung und tiefe Bankintegration benötigen, ist Bexio besser geeignet.", link: null },
                { who: "Solo-Freelancer mit Community", rec: "Magic Heidi", why: "Wenn Ihnen eine grosse deutschsprachige Community und spezifischer Freelancer-Content wichtig ist.", link: null },
              ].map((item) => (
                <div key={item.who} className="rounded-xl p-5 border border-gray-100" style={{ backgroundColor: "#faf9fd" }}>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Empfehlung für</p>
                  <p className="font-semibold text-gray-900 mb-1">{item.who}</p>
                  <p className="text-sm font-bold mb-2" style={{ color: "#6c4ea9" }}>→ {item.rec}</p>
                  <p className="text-sm text-gray-500 leading-relaxed mb-3">{item.why}</p>
                  {item.link && (
                    <Link href={item.link} className="text-xs font-semibold" style={{ color: "#6c4ea9" }}>Mehr erfahren →</Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20" style={{ background: "linear-gradient(135deg, #6c4ea9 0%, #4a2d8c 100%)" }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Selbst überzeugen – kostenlos</h2>
            <p className="mb-8 text-lg" style={{ color: "rgba(255,255,255,0.75)" }}>Keine Kreditkarte. Keine Vertragsbindung. Einfach loslegen.</p>
            <a href={REGISTER_URL} className="inline-flex items-center px-8 py-4 rounded-xl bg-white font-bold text-base" style={{ color: "#6c4ea9" }}>
              Kostenlos registrieren →
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
