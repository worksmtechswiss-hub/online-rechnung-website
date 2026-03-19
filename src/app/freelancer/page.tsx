import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Rechnung schreiben als Freelancer Schweiz – Einfach & QR-konform",
  description:
    "Rechnungssoftware für Freelancer in der Schweiz. Mit & ohne MWST, QR-Rechnung inklusive. Kostenlos starten – keine Kreditkarte nötig.",
  alternates: { canonical: "/freelancer" },
};

const REGISTER_URL = "https://app.finitopro.ch/register";

const benefits = [
  {
    icon: "⚡",
    title: "Rechnung in 2 Minuten",
    desc: "Kundendaten einmal erfassen, beim nächsten Mal automatisch vorausfüllen. Rechnung fertig in Minuten.",
  },
  {
    icon: "🧾",
    title: "Mit oder ohne MWST",
    desc: "Bis CHF 100'000 Jahresumsatz sind Sie MWST-befreit. Unser System unterstützt beide Varianten.",
  },
  {
    icon: "📱",
    title: "QR-Rechnung inklusive",
    desc: "Jede Rechnung enthält automatisch den Schweizer QR-Code. Ihre Kunden zahlen per Mobile-Banking.",
  },
  {
    icon: "📁",
    title: "Rechnungshistorie",
    desc: "Alle Rechnungen geordnet gespeichert – ideal für die Steuererklärung am Jahresende.",
  },
  {
    icon: "🎨",
    title: "Professionelles Design",
    desc: "Laden Sie Ihr Logo hoch, wählen Sie Farben und Schriften. Ihre Rechnung – Ihre Marke.",
  },
  {
    icon: "🔔",
    title: "Zahlungserinnerungen",
    desc: "Behalten Sie offene Rechnungen im Blick. Erinnerungen helfen Ihnen, zeitig nachzufassen.",
  },
];

const testimonials = [
  {
    name: "Stefan K.",
    role: "Webdesigner, Zürich",
    text: "Endlich eine Rechnungslösung die nicht überkompliziert ist. In 2 Minuten fertig und QR-konform – genau was ich als Freelancer brauche.",
  },
  {
    name: "Laura B.",
    role: "Texterin, Basel",
    text: "Ich hatte vorher immer Word-Dokumente verwendet. Mit Finitopro geht alles viel schneller und die Rechnungen sehen viel professioneller aus.",
  },
  {
    name: "Marco V.",
    role: "Fotograf, Bern",
    text: "Die MWST-Berechnung macht es für mich automatisch. Ich muss nur noch meine Leistungen eingeben – fertig.",
  },
];

export default function FreelancerPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-28 pb-20 lg:pt-36 lg:pb-28" style={{ background: "linear-gradient(135deg, #f3f0fa 0%, #ffffff 60%, #fff3ee 100%)" }}>
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
                Als Selbstständige/r haben Sie Besseres zu tun als Stunden mit Buchhaltung zu verbringen.
                Finitopro macht Rechnungen schreiben so einfach wie möglich – QR-konform, MWST-korrekt und professionell.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <a
                  href={REGISTER_URL}
                  className="inline-flex items-center px-6 py-3.5 rounded-xl text-white font-semibold text-base transition-colors shadow-lg"
                  style={{ backgroundColor: "#6c4ea9", boxShadow: "0 8px 24px #6c4ea940" }}
                >
                  Kostenlos starten
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-500 font-medium">
                <span>✓ Keine Kreditkarte nötig</span>
                <span>✓ QR-Rechnung inklusive</span>
                <span>✓ Ohne MWST-Nummer möglich</span>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                Alles was Freelancer brauchen
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Keine unnötigen Features, keine komplizierte Buchhaltung. Nur das, was Sie wirklich brauchen.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((b) => (
                <div key={b.title} className="p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="text-3xl mb-3">{b.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{b.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MWST Info box */}
        <section className="py-16" style={{ backgroundColor: "#f8f7fc" }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl p-8" style={{ backgroundColor: "#e8e1f5" }}>
              <h2 className="text-xl font-bold mb-3" style={{ color: "#4a2d8c" }}>
                💡 MWST als Freelancer: Was gilt in der Schweiz?
              </h2>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#5a3d8c" }}>
                Wenn Ihr Jahresumsatz unter <strong>CHF 100'000</strong> liegt, sind Sie von der
                Mehrwertsteuerpflicht befreit. Sie können Rechnungen ohne MWST-Nummer und ohne MWST-Ausweis
                stellen. Finitopro unterstützt beide Varianten: mit und ohne MWST.
              </p>
              <p className="text-sm" style={{ color: "#5a3d8c" }}>
                Übersteigt Ihr Umsatz die Grenze, müssen Sie sich beim ESTV für die MWST registrieren
                und ab dann MWST auf Ihren Rechnungen ausweisen.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Was andere Freelancer sagen</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <div key={t.name} className="p-6 rounded-2xl border border-gray-100" style={{ backgroundColor: "#faf9fd" }}>
                  <div className="flex mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} className="w-4 h-4" style={{ color: "#fe7d43" }} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20" style={{ background: "linear-gradient(135deg, #6c4ea9 0%, #4a2d8c 100%)" }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Bereit? Erste Rechnung in 2 Minuten</h2>
            <p className="mb-8 text-lg" style={{ color: "rgba(255,255,255,0.75)" }}>
              Kostenlos starten, keine Kreditkarte, kein Abo.
            </p>
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
