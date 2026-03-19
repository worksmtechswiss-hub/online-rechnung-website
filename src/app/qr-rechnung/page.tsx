import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "QR-Rechnung erstellen Schweiz – Kostenlos, automatisch & korrekt",
  description:
    "QR-Rechnung erstellen leicht gemacht. Pflicht seit Oktober 2022 in der Schweiz. Automatische QR-Code-Generierung mit IBAN, MWST-Berechnung, PDF-Export. Kostenlos starten.",
  alternates: { canonical: "/qr-rechnung", languages: { "de-CH": "/qr-rechnung" } },
};

const REGISTER_URL = "https://app.finitopro.ch/register";

const faqs = [
  {
    q: "Was ist eine QR-Rechnung?",
    a: "Die QR-Rechnung ist der offizielle Schweizer Zahlungsstandard seit Oktober 2022. Sie enthält einen Swiss QR Code mit allen Zahlungsinformationen – IBAN, Betrag, Empfängeradresse und optionale Referenznummer – und ersetzt vollständig den roten und orangefarbenen Einzahlungsschein.",
  },
  {
    q: "Seit wann ist die QR-Rechnung Pflicht in der Schweiz?",
    a: "Die QR-Rechnung ist seit dem 1. Oktober 2022 der einzige gültige Zahlungsstandard in der Schweiz. SIX und PostFinance haben die Abschaltung der alten Einzahlungsscheine per dieses Datum vollzogen. Alle Rechnungen mit Zahlschein müssen seither das QR-Format verwenden.",
  },
  {
    q: "Welche IBAN brauche ich für die QR-Rechnung?",
    a: "Sie benötigen eine Schweizer IBAN (beginnt immer mit CH) von Ihrem Bankkonto oder PostFinance-Konto. Ausländische IBANs (z. B. DE, AT) können nicht auf einer Schweizer QR-Rechnung verwendet werden.",
  },
  {
    q: "Was ist der Unterschied zwischen QR-IBAN und normaler IBAN?",
    a: "Eine QR-IBAN beginnt mit den Stellen 30 bis 31 mit den Ziffern 30–31 nach dem Ländercode (z. B. CH44 3199 9123 0008 8901 2). Sie wird von einigen Banken für strukturierte Referenznummern (QR-Referenz) genutzt. Eine normale IBAN (z. B. CH56 0483 5012...) funktioniert ebenfalls – in diesem Fall wird jedoch keine strukturierte Referenz, sondern eine freie Mitteilung verwendet. Finitopro unterstützt beide Varianten.",
  },
  {
    q: "Muss ich eine QR-Referenz angeben?",
    a: "Nein, die QR-Referenz ist optional. Sie können eine QR-Rechnung auch ohne Referenz ausstellen – dann wird das Feld 'Zusätzliche Informationen' (freie Mitteilung) genutzt. Eine Referenz erleichtert jedoch die automatische Zahlungszuordnung bei vielen Eingehenden Zahlungen.",
  },
  {
    q: "Kann ich eine QR-Rechnung auch ohne MWST erstellen?",
    a: "Ja, absolut. Wenn Sie als Freelancer oder Kleinunternehmen unter CHF 100'000 Jahresumsatz nicht MWST-pflichtig sind, erstellen Sie einfach eine QR-Rechnung ohne MWST-Ausweis. Finitopro unterstützt beide Varianten vollständig.",
  },
  {
    q: "Wie kann mein Kunde die QR-Rechnung bezahlen?",
    a: "Der Kunde scannt den QR-Code mit der Mobile-Banking-App seiner Bank oder photographiert ihn im E-Banking. Alle Zahlungsdaten werden automatisch übernommen. Alternativ kann der Zahlungsauftrag auch manuell anhand der aufgedruckten IBAN und des Betrags ausgeführt werden.",
  },
  {
    q: "Kann ich QR-Rechnungen als PDF versenden?",
    a: "Ja. Finitopro generiert eine druckfertige PDF-Rechnung mit korrekt formatiertem QR-Code (Swiss QR Code, Empfangsschein und Zahlteil). Diese können Sie herunterladen, ausdrucken oder direkt per E-Mail an Ihren Kunden senden.",
  },
];

const mistakes = [
  {
    title: "Falsche IBAN-Länge",
    desc: "Schweizer IBANs haben genau 21 Zeichen (CH + 2 Prüfziffern + 17 Stellen). Finitopro validiert die IBAN automatisch.",
  },
  {
    title: "Ausländische IBAN verwenden",
    desc: "Nur Schweizer IBANs (CH...) sind für QR-Rechnungen zugelassen. Konten bei Revolut, Wise & Co. funktionieren nicht.",
  },
  {
    title: "Betrag ohne MWST ausweisen",
    desc: "MWST-pflichtige Unternehmen müssen den Nettobetrag, den MWST-Satz, den MWST-Betrag und den Gesamtbetrag separat angeben.",
  },
  {
    title: "Pflichtangaben vergessen",
    desc: "Name/Adresse Rechnungssteller, Name/Adresse Empfänger, Rechnungsdatum, Rechnungsnummer – alles Pflichtfelder. Finitopro erinnert Sie.",
  },
];

export default function QRRechnungPage() {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "QR-Rechnung erstellen in der Schweiz – Vollständiger Guide 2026",
    description: "Alles zur QR-Rechnung Schweiz: Was ist sie, wie erstellt man sie, welche Pflichtangaben gelten und welche Fehler vermieden werden sollten.",
    author: { "@type": "Organization", name: "Finitopro" },
    publisher: { "@type": "Organization", name: "Finitopro", url: "https://online-rechnung-erstellen.ch" },
    mainEntityOfPage: "https://online-rechnung-erstellen.ch/qr-rechnung",
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

  const jsonLdHowTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Wie erstelle ich eine QR-Rechnung in der Schweiz?",
    description: "Schritt-für-Schritt Anleitung zum Erstellen einer korrekten QR-Rechnung mit Swiss QR Code in der Schweiz.",
    step: [
      { "@type": "HowToStep", position: 1, name: "Konto erstellen", text: "Kostenlos auf Finitopro registrieren – keine Kreditkarte, in 30 Sekunden einsatzbereit." },
      { "@type": "HowToStep", position: 2, name: "Firmendaten hinterlegen", text: "Einmalig Firmenname, Adresse und Schweizer IBAN eingeben." },
      { "@type": "HowToStep", position: 3, name: "Kundendaten eingeben", text: "Name und Adresse des Rechnungsempfängers erfassen." },
      { "@type": "HowToStep", position: 4, name: "Leistungen & Beträge erfassen", text: "Leistungspositionen mit Beschreibung, Menge und Preis hinzufügen – MWST wird automatisch berechnet." },
      { "@type": "HowToStep", position: 5, name: "QR-Rechnung als PDF exportieren", text: "Mit einem Klick wird die fertige QR-Rechnung als druckfertiges PDF erstellt." },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHowTo).replace(/</g, "\\u003c") }} />
      <Navbar />
      <main>

        {/* Hero */}
        <section className="pt-28 pb-20 lg:pt-36 lg:pb-24" style={{ background: "linear-gradient(135deg, #f3f0fa 0%, #ffffff 60%, #fff3ee 100%)" }}>
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
                Die QR-Rechnung ist seit Oktober 2022 der einzige Zahlungsstandard in der Schweiz.
                Finitopro generiert Ihren Swiss QR Code automatisch – geben Sie einfach Ihre IBAN ein,
                der Rest wird berechnet. Vollständig konform mit dem Standard von SIX.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <a href={REGISTER_URL} className="inline-flex items-center px-6 py-3.5 rounded-xl text-white font-semibold text-base transition-colors shadow-lg" style={{ backgroundColor: "#6c4ea9" }}>
                  Kostenlos QR-Rechnung erstellen
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </a>
              </div>
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-500 font-medium">
                <span>✓ Swiss QR Code konform</span>
                <span>✓ Alle Schweizer Banken</span>
                <span>✓ PDF-Export inklusive</span>
              </div>
            </div>
          </div>
        </section>

        {/* Was ist die QR-Rechnung */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-5">Was ist die QR-Rechnung?</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Die QR-Rechnung ist der offizielle Schweizer Zahlungsstandard, der seit dem <strong>1. Oktober 2022</strong> den
                  roten Einzahlungsschein (ES) und den orangefarbenen Einzahlungsschein mit Referenznummer (ESR) vollständig ersetzt hat.
                  Sie wurde von SIX und PostFinance gemeinsam entwickelt und ist für alle Rechnungen mit Zahlschein in der Schweiz verbindlich.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Das Herzstück ist der <strong>Swiss QR Code</strong> – ein quadratischer QR-Code mit Schweizer Kreuz in der Mitte,
                  der alle Zahlungsinformationen maschinenlesbar enthält: IBAN, Betrag, Währung, Empfängeradresse und optional eine
                  Referenznummer. Kunden können damit direkt über ihre Mobile-Banking-App oder ihr E-Banking bezahlen.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Die QR-Rechnung besteht aus zwei Teilen: dem <strong>Empfangsschein</strong> (links, kleines Format) und dem
                  <strong>Zahlteil</strong> (rechts, grosses Format mit QR-Code). Beide Teile werden durch eine Perforation getrennt.
                  Finitopro erstellt beide Teile automatisch korrekt nach dem offiziellen Swiss Bill Standard.
                </p>
                <ul className="space-y-3">
                  {["Swiss QR Code nach SIX-Standard", "Unterstützt alle Schweizer Banken & PostFinance", "Mit QR-IBAN oder normaler IBAN", "Mit & ohne Referenznummer", "Mit & ohne MWST-Ausweis", "Druckfertige PDF-Ausgabe"].map((p) => (
                    <li key={p} className="flex items-center gap-2.5 text-sm text-gray-700">
                      <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#e8e1f5" }}>
                        <svg className="w-3 h-3" style={{ color: "#6c4ea9" }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              {/* QR Mockup */}
              <div className="rounded-2xl p-8 border border-gray-100 sticky top-24" style={{ backgroundColor: "#f8f7fc" }}>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Beispiel QR-Rechnung</p>
                <div className="bg-white rounded-xl p-5 shadow-sm space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Zahlbar an</p>
                      <p className="font-semibold text-gray-900 text-sm">Maria Muster GmbH</p>
                      <p className="text-xs text-gray-500">CH56 0483 5012 3456 7800 9</p>
                    </div>
                    <span className="text-xs px-2 py-1 rounded-full font-medium" style={{ backgroundColor: "#e8e1f5", color: "#6c4ea9" }}>✓ Swiss QR</span>
                  </div>
                  <div className="border-t border-gray-100 pt-4 flex items-center gap-4">
                    <div className="w-20 h-20 grid grid-cols-5 gap-0.5 p-1.5 bg-white border border-gray-200 rounded-lg flex-shrink-0">
                      {Array.from({ length: 25 }).map((_, i) => (
                        <div key={i} className={`rounded-sm ${[0,1,2,3,4,5,9,10,14,15,19,20,21,22,23,24,6,12,18,7,17].includes(i) ? "bg-gray-900" : "bg-gray-100"}`} />
                      ))}
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-0.5">Rechnungsbetrag</p>
                      <p className="text-xl font-bold text-gray-900">CHF 3&#39;243.00</p>
                      <p className="text-xs text-gray-400 mt-1">inkl. 8.1% MWST</p>
                      <p className="text-xs text-gray-400">Zahlbar bis 30.04.2026</p>
                    </div>
                  </div>
                  <div className="border-t border-gray-100 pt-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "#72bf78" }} />
                    <p className="text-xs font-medium" style={{ color: "#16a34a" }}>Automatisch generiert – Swiss Bill Standard</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pflichtangaben */}
        <section className="py-20" style={{ backgroundColor: "#f8f7fc" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Pflichtangaben auf der QR-Rechnung</h2>
              <p className="text-gray-500 mb-10">Diese Angaben müssen auf jeder Schweizer Rechnung vorhanden sein – Finitopro prüft automatisch die Vollständigkeit.</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { cat: "Rechnungssteller", items: ["Firmenname oder vollständiger Name", "Strasse und Hausnummer", "PLZ und Ort", "Schweiz als Land"] },
                  { cat: "Rechnungsempfänger", items: ["Name des Kunden", "Vollständige Adresse", "Referenz / Kundennummer (optional)"] },
                  { cat: "Rechnungsdetails", items: ["Eindeutige Rechnungsnummer", "Rechnungsdatum", "Fälligkeitsdatum (empfohlen)", "Leistungsbeschreibung pro Position"] },
                  { cat: "Zahlungsangaben", items: ["Schweizer IBAN (CH...)", "Betrag in CHF", "QR-Referenz oder freie Mitteilung (optional)", "MWST-Angaben (falls MWST-pflichtig)"] },
                ].map((block) => (
                  <div key={block.cat} className="bg-white rounded-xl p-5 border border-gray-100">
                    <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "#6c4ea9" }}>{block.cat}</p>
                    <ul className="space-y-2">
                      {block.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                          <svg className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#6c4ea9" }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Schritt für Schritt */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Wie erstelle ich eine QR-Rechnung? Schritt für Schritt</h2>
              <p className="text-gray-500 mb-10">Mit Finitopro dauert es weniger als 3 Minuten – auch für die erste Rechnung.</p>
              <div className="space-y-6">
                {[
                  { n: "1", t: "Konto erstellen", d: "Registrieren Sie sich kostenlos auf Finitopro – keine Kreditkarte, kein Abo. In 30 Sekunden einsatzbereit." },
                  { n: "2", t: "Firmendaten hinterlegen", d: "Geben Sie einmalig Ihren Firmennamen, Ihre Adresse und Ihre Schweizer IBAN ein. Diese Daten erscheinen automatisch auf jeder Rechnung." },
                  { n: "3", t: "Kundendaten eingeben", d: "Geben Sie Name und Adresse des Rechnungsempfängers ein. Stammkunden können gespeichert und wiederverwendet werden." },
                  { n: "4", t: "Leistungen & Beträge erfassen", d: "Fügen Sie Leistungspositionen mit Beschreibung, Menge und Preis hinzu. MWST wird automatisch berechnet." },
                  { n: "5", t: "QR-Rechnung als PDF exportieren", d: "Mit einem Klick wird die fertige QR-Rechnung als druckfertiges PDF erstellt – mit Swiss QR Code, Empfangsschein und Zahlteil." },
                ].map((s) => (
                  <div key={s.n} className="flex gap-5">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white text-sm" style={{ backgroundColor: "#6c4ea9" }}>{s.n}</div>
                    <div className="pt-1">
                      <h3 className="font-semibold text-gray-900 mb-1">{s.t}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{s.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Typische Fehler */}
        <section className="py-20" style={{ backgroundColor: "#f8f7fc" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Typische Fehler bei der QR-Rechnung – und wie Sie sie vermeiden</h2>
              <p className="text-gray-500 mb-10">Finitopro prüft automatisch auf diese häufigen Fehler und gibt Ihnen eine Warnung, bevor Sie die Rechnung versenden.</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {mistakes.map((m) => (
                  <div key={m.title} className="bg-white rounded-xl p-5 border border-gray-100">
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-50 flex items-center justify-center">
                        <svg className="w-3 h-3 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" /></svg>
                      </span>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm mb-1">{m.title}</p>
                        <p className="text-sm text-gray-500 leading-relaxed">{m.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* QR-IBAN vs IBAN */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-5">QR-IBAN oder normale IBAN – was ist der Unterschied?</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 border border-gray-100" style={{ backgroundColor: "#faf9fd" }}>
                <p className="font-semibold text-gray-900 mb-2">Normale IBAN</p>
                <p className="text-sm text-gray-500 mb-3 leading-relaxed">z. B. CH56 0483 5012 3456 7800 9<br />Beginnt mit CH, dann 2 Prüfziffern, dann BIC.</p>
                <ul className="space-y-1.5 text-sm text-gray-600">
                  <li>→ Freie Mitteilung (Text)</li>
                  <li>→ Für alle Rechnungen geeignet</li>
                  <li>→ Standard bei UBS, ZKB, Raiffeisen etc.</li>
                </ul>
              </div>
              <div className="rounded-xl p-6 border-2" style={{ borderColor: "#6c4ea9", backgroundColor: "#faf9fd" }}>
                <p className="font-semibold mb-2" style={{ color: "#6c4ea9" }}>QR-IBAN</p>
                <p className="text-sm text-gray-500 mb-3 leading-relaxed">z. B. CH44 3199 9123 0008 8901 2<br />Stellen 5–6 sind 30–31 (nach CH + 2 Prüfziffern).</p>
                <ul className="space-y-1.5 text-sm text-gray-600">
                  <li>→ Strukturierte QR-Referenz möglich</li>
                  <li>→ Automatische Zahlungszuordnung</li>
                  <li>→ Ideal für viele Rechnungen / Serienrechnungen</li>
                </ul>
              </div>
            </div>
            <p className="text-sm text-gray-400 mt-4">Finitopro erkennt automatisch, ob Sie eine QR-IBAN oder normale IBAN eingegeben haben und stellt die Rechnung entsprechend korrekt aus.</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20" style={{ backgroundColor: "#f8f7fc" }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Häufige Fragen zur QR-Rechnung</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="rounded-xl p-6 border border-gray-100 bg-white">
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
            <h2 className="text-3xl font-bold text-white mb-4">Jetzt erste QR-Rechnung kostenlos erstellen</h2>
            <p className="mb-8 text-lg" style={{ color: "rgba(255,255,255,0.75)" }}>Keine Kreditkarte. Keine Vertragsbindung. In 30 Sekunden einsatzbereit.</p>
            <a href={REGISTER_URL} className="inline-flex items-center px-8 py-4 rounded-xl bg-white font-bold text-base transition-colors" style={{ color: "#6c4ea9" }}>
              Kostenlos registrieren →
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
