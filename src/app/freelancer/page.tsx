import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Rechnung schreiben als Freelancer Schweiz 2026 – Einfach & QR-konform",
  description:
    "Rechnungen schreiben als Selbstständige/r in der Schweiz. Mit & ohne MWST, QR-Rechnung automatisch, alle Pflichtangaben. Kostenlos starten mit Finitopro.",
  alternates: { canonical: "/freelancer", languages: { "de-CH": "/freelancer" } },
};

const REGISTER_URL = "https://app.finitopro.ch/register";

const faqs = [
  {
    q: "Was muss auf einer Rechnung stehen, wenn ich kein MWST-pflichtig bin?",
    a: "Ohne MWST-Pflicht müssen Sie keine MWST-Nummer und keinen MWST-Betrag angeben. Pflichtangaben sind: Ihr Name und Adresse, Name und Adresse des Kunden, Rechnungsdatum, Rechnungsnummer, Leistungsbeschreibung, Betrag und – seit Oktober 2022 – Ihre IBAN für den Swiss QR Code.",
  },
  {
    q: "Ab wann muss ich als Freelancer MWST zahlen?",
    a: "Sie müssen sich für die MWST registrieren, wenn Ihr Jahresumsatz aus steuerbaren Leistungen CHF 100'000 überschreitet. Unterhalb dieser Grenze sind Sie von der MWST befreit und können freiwillig auf eine Registrierung verzichten. Finitopro unterstützt beide Varianten.",
  },
  {
    q: "Wie nummeriere ich meine Rechnungen richtig?",
    a: "Es gibt keine gesetzlich vorgeschriebene Nummerierung, aber die Nummer muss eindeutig und fortlaufend sein. Empfohlen wird ein System wie '2026-001', '2026-002' oder 'RE-2026-001'. Finitopro nummeriert automatisch fortlaufend.",
  },
  {
    q: "Wie lange muss ich als Freelancer Rechnungen aufbewahren?",
    a: "Gemäss Schweizer Obligationenrecht (OR Art. 958f) gilt eine Aufbewahrungspflicht von 10 Jahren für Geschäftsbücher und Buchungsbelege – also auch für Rechnungen. Finitopro speichert alle Rechnungen sicher und dauerhaft in der Cloud.",
  },
  {
    q: "Kann ich eine Rechnung nachträglich korrigieren?",
    a: "Einmal erstellte und versandte Rechnungen sollten im Idealfall nicht verändert werden. Bei einem Fehler erstellen Sie eine Stornorechnung (Gutschrift) über den gleichen Betrag und stellen eine neue korrekte Rechnung aus. Finitopro bietet dafür eine integrierte Gutschrift-Funktion.",
  },
  {
    q: "Was ist der Unterschied zwischen Rechnung und Offerte?",
    a: "Eine Offerte (Kostenvoranschlag/Angebot) ist ein unverbindliches oder verbindliches Preisangebot vor Auftragserteilung. Eine Rechnung ist die Zahlungsaufforderung nach erbrachter Leistung. Finitopro ermöglicht Ihnen, Offerten zu erstellen und mit einem Klick in Rechnungen umzuwandeln.",
  },
];

const checklist = [
  "Ihr vollständiger Name oder Firmenname",
  "Ihre Adresse (Strasse, PLZ, Ort, Schweiz)",
  "Name und Adresse des Kunden",
  "Eindeutige Rechnungsnummer",
  "Rechnungsdatum",
  "Zahlungsfrist (z. B. 30 Tage netto)",
  "Beschreibung der erbrachten Leistungen",
  "Betrag pro Leistungsposition",
  "Gesamtbetrag",
  "Ihre Schweizer IBAN (für QR-Code)",
  "MWST-Angaben (nur wenn MWST-pflichtig)",
];

const professions = [
  { emoji: "💻", job: "Webdesigner & Entwickler", tip: "Verrechnen Sie Stunden- oder Projekthonorare. Bei Projekten empfiehlt sich eine Aufschlüsselung nach Phasen (Konzept, Design, Entwicklung, Testing)." },
  { emoji: "📸", job: "Fotografen & Videografen", tip: "Verrechnen Sie Shooting-Honorar, Nachbearbeitung und Nutzungsrechte separat. Nennen Sie die Veranstaltung oder den Auftrag klar." },
  { emoji: "✍️", job: "Texter & Übersetzer", tip: "Rechnen Sie pro Zeichen, pro Wort oder pro Stunde ab – was vertraglich vereinbart wurde. Geben Sie Sprache und Dokumententyp an." },
  { emoji: "📐", job: "Grafiker & Designer", tip: "Nennen Sie das Endformat (Logo, Flyer, Webdesign) und die vereinbarten Revisionen. Nutzungsrechte als separate Position empfohlen." },
  { emoji: "🎓", job: "Berater & Coaches", tip: "Führen Sie Beratungseinheiten mit Datum, Dauer und Thema auf. Reisespesen und Nebenkosten separat ausweisen." },
  { emoji: "🔧", job: "IT & Systemtechniker", tip: "Stunden- oder Tagespauschale, Material/Lizenzen separat. Remote- vs. Vor-Ort-Einsätze können unterschiedlich berechnet werden." },
];

export default function FreelancerPage() {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Rechnung schreiben als Freelancer in der Schweiz – Vollständiger Guide 2026",
    description: "Alles, was Schweizer Freelancer und Selbstständige für korrekte Rechnungen brauchen: Pflichtangaben, MWST-Regeln, Tipps nach Berufsgruppe.",
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
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium mb-6" style={{ backgroundColor: "#e8e1f5", color: "#6c4ea9" }}>
                💻 Für Freelancer & Selbstständige
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Rechnung schreiben als{" "}
                <span style={{ color: "#6c4ea9" }}>Freelancer in der Schweiz</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Als Selbstständige/r in der Schweiz haben Sie Besseres zu tun als Stunden mit Buchhaltung zu verbringen.
                Finitopro erstellt professionelle, QR-konforme Rechnungen in Minuten – mit oder ohne MWST,
                für alle Branchen, kostenlos zum Einstieg.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <a href={REGISTER_URL} className="inline-flex items-center px-6 py-3.5 rounded-xl text-white font-semibold text-base shadow-lg" style={{ backgroundColor: "#6c4ea9" }}>
                  Kostenlos starten
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </a>
              </div>
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-500 font-medium">
                <span>✓ Ohne MWST-Nummer möglich</span>
                <span>✓ QR-Rechnung inklusive</span>
                <span>✓ Keine Kreditkarte nötig</span>
              </div>
            </div>
          </div>
        </section>

        {/* Pflichtangaben Checkliste */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Was muss auf einer Freelancer-Rechnung stehen?</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Das Schweizer Obligationenrecht (OR) und die MWST-Gesetzgebung definieren klar, welche Angaben auf einer
                  Rechnung vorhanden sein müssen. Die gute Nachricht: Finitopro stellt sicher, dass alle Pflichtangaben
                  automatisch auf Ihrer Rechnung erscheinen – Sie müssen sich um nichts kümmern.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Wenn Sie <strong>nicht MWST-pflichtig</strong> sind (Jahresumsatz unter CHF 100&#39;000), entfallen die
                  MWST-Angaben vollständig. Die restlichen Pflichtangaben gelten aber auch für Sie.
                </p>
                <a href={REGISTER_URL} className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-white text-sm font-semibold" style={{ backgroundColor: "#6c4ea9" }}>
                  Rechnung jetzt erstellen →
                </a>
              </div>
              <div className="rounded-2xl p-6 border border-gray-100" style={{ backgroundColor: "#f8f7fc" }}>
                <p className="text-sm font-semibold text-gray-700 mb-4">✅ Checkliste Pflichtangaben</p>
                <ul className="space-y-2.5">
                  {checklist.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm">
                      <svg className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#6c4ea9" }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* MWST Erklärung */}
        <section className="py-20" style={{ backgroundColor: "#f8f7fc" }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">MWST als Freelancer: Was gilt in der Schweiz?</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Die Mehrwertsteuer (MWST) ist für viele Freelancer ein Thema, das anfangs verwirrend wirkt.
              Hier die wichtigsten Regeln auf einen Blick:
            </p>
            <div className="space-y-4">
              {[
                { title: "Unter CHF 100'000 Jahresumsatz → MWST-befreit", desc: "Sie sind nicht verpflichtet, sich für die MWST zu registrieren. Sie stellen Rechnungen ohne MWST-Ausweis. Kein Hinweis wie 'exkl. MWST' nötig – einfach weglassen.", good: true },
                { title: "Über CHF 100'000 → MWST-pflichtig", desc: "Ab CHF 100'000 steuerbarem Umsatz müssen Sie sich beim ESTV anmelden. Ab dann weisen Sie 8.1% MWST auf Rechnungen aus, machen Vorsteuer geltend und reichen quartalsweise Abrechnungen ein.", good: false },
                { title: "Freiwillige MWST-Registrierung möglich", desc: "Auch unter CHF 100'000 können Sie sich freiwillig registrieren – das lohnt sich, wenn Sie viel Vorsteuer aus Einkäufen (z. B. Technik, Software) geltend machen können.", good: false },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-xl p-5 border border-gray-100">
                  <div className="flex items-start gap-3">
                    <span className={`flex-shrink-0 text-sm px-2 py-0.5 rounded-full font-semibold ${item.good ? "text-green-700 bg-green-50" : "bg-gray-100 text-gray-600"}`}>
                      {item.good ? "✓" : "→"}
                    </span>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm mb-1">{item.title}</p>
                      <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 rounded-xl" style={{ backgroundColor: "#e8e1f5" }}>
              <p className="text-sm" style={{ color: "#4a2d8c" }}>
                <strong>Aktueller MWST-Normalsatz:</strong> 8.1% (seit 1. Januar 2024) · Sondersatz Beherbergung: 3.8% · Reduzierter Satz: 2.6%
              </p>
            </div>
          </div>
        </section>

        {/* Nach Berufsgruppe */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-3 text-center">Rechnung schreiben nach Berufsgruppe</h2>
            <p className="text-gray-500 text-center mb-12 max-w-xl mx-auto">Je nach Branche gibt es unterschiedliche Gepflogenheiten beim Ausstellen von Rechnungen.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {professions.map((p) => (
                <div key={p.job} className="p-5 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="text-3xl mb-3">{p.emoji}</div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm">{p.job}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{p.tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Zahlungsfristen */}
        <section className="py-20" style={{ backgroundColor: "#f8f7fc" }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Zahlungsfristen & was tun bei Zahlungsverzug?</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              In der Schweiz ist keine gesetzliche Zahlungsfrist für Rechnungen vorgeschrieben – üblich und empfohlen sind
              <strong>30 Tage netto</strong>. Bei Kunden, die häufig spät zahlen, können Sie auch kürzere Fristen
              (14 Tage) oder einen Skonto für Frühzahler vereinbaren.
            </p>
            <div className="space-y-4">
              {[
                { step: "1. Zahlungserinnerung", desc: "Nach Ablauf der Frist senden Sie eine freundliche Zahlungserinnerung – oft reicht das aus. Finitopro erinnert Sie automatisch an offene Rechnungen." },
                { step: "2. Erste Mahnung", desc: "Nach weiteren 14 Tagen folgt die erste formelle Mahnung. Setzen Sie eine neue Frist (z. B. 10 Tage) und weisen Sie auf mögliche Folgen hin." },
                { step: "3. Betreibung", desc: "Bleibt die Zahlung aus, können Sie beim Betreibungsamt einen Zahlungsbefehl stellen. Das Betreibungsverfahren ist in der Schweiz standardisiert und kostengünstig." },
              ].map((s) => (
                <div key={s.step} className="bg-white rounded-xl p-5 border border-gray-100">
                  <p className="font-semibold text-gray-900 text-sm mb-1" style={{ color: "#6c4ea9" }}>{s.step}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Häufige Fragen von Freelancern</h2>
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
            <h2 className="text-3xl font-bold text-white mb-4">Bereit? Erste Rechnung in 2 Minuten</h2>
            <p className="mb-8 text-lg" style={{ color: "rgba(255,255,255,0.75)" }}>Kostenlos starten – keine Kreditkarte, kein Abo.</p>
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
