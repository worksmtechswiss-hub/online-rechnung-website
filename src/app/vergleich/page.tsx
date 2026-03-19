import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Rechnungssoftware Vergleich Schweiz 2026 – Bexio, Smallinvoice, Magic Heidi",
  description:
    "Ehrlicher Vergleich: Finitopro vs. Bexio vs. Smallinvoice vs. Magic Heidi. Welche Rechnungssoftware passt für Schweizer Freelancer und KMU? Jetzt vergleichen.",
  alternates: { canonical: "/vergleich" },
};

const REGISTER_URL = "https://app.finitopro.ch/register";

type FeatureKey =
  | "qr"
  | "kostenlos"
  | "preis"
  | "mwst"
  | "einfachheit"
  | "serienrechnungen"
  | "teamzugriff"
  | "chFokus";

const features: { key: FeatureKey; label: string }[] = [
  { key: "qr", label: "QR-Rechnung" },
  { key: "kostenlos", label: "Kostenloser Einstieg" },
  { key: "preis", label: "Preis ab" },
  { key: "mwst", label: "MWST-Berechnung" },
  { key: "einfachheit", label: "Einfach zu bedienen" },
  { key: "serienrechnungen", label: "Serienrechnungen" },
  { key: "teamzugriff", label: "Team-Zugriff" },
  { key: "chFokus", label: "Fokus Schweiz" },
];

const competitors: {
  name: string;
  highlight: boolean;
  tagline: string;
  data: Record<FeatureKey, string | boolean>;
}[] = [
  {
    name: "Finitopro",
    highlight: true,
    tagline: "Einfach & QR-konform",
    data: {
      qr: true,
      kostenlos: true,
      preis: "CHF 0 / Monat",
      mwst: true,
      einfachheit: true,
      serienrechnungen: true,
      teamzugriff: true,
      chFokus: true,
    },
  },
  {
    name: "Bexio",
    highlight: false,
    tagline: "Für grössere KMU",
    data: {
      qr: true,
      kostenlos: false,
      preis: "CHF 45 / Monat",
      mwst: true,
      einfachheit: false,
      serienrechnungen: true,
      teamzugriff: true,
      chFokus: true,
    },
  },
  {
    name: "Smallinvoice",
    highlight: false,
    tagline: "Buchhaltungsfokus",
    data: {
      qr: true,
      kostenlos: true,
      preis: "CHF 19 / Monat",
      mwst: true,
      einfachheit: false,
      serienrechnungen: true,
      teamzugriff: true,
      chFokus: true,
    },
  },
  {
    name: "Magic Heidi",
    highlight: false,
    tagline: "Freelancer-Tool",
    data: {
      qr: true,
      kostenlos: false,
      preis: "CHF 30 / Monat",
      mwst: true,
      einfachheit: true,
      serienrechnungen: false,
      teamzugriff: false,
      chFokus: true,
    },
  },
];

function Cell({ value, highlight }: { value: string | boolean; highlight: boolean }) {
  if (typeof value === "boolean") {
    return (
      <td className="px-4 py-4 text-center">
        {value ? (
          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full" style={{ backgroundColor: highlight ? "rgba(255,255,255,0.2)" : "#e8e1f5" }}>
            <svg className="w-3.5 h-3.5" style={{ color: highlight ? "white" : "#6c4ea9" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </span>
        ) : (
          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-100">
            <svg className="w-3.5 h-3.5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </span>
        )}
      </td>
    );
  }
  return (
    <td className="px-4 py-4 text-center text-sm" style={{ color: highlight ? "rgba(255,255,255,0.9)" : "#374151" }}>
      {value}
    </td>
  );
}

export default function VergleichPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-28 pb-20 lg:pt-36 lg:pb-28" style={{ background: "linear-gradient(135deg, #f3f0fa 0%, #ffffff 60%, #fff3ee 100%)" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium mb-6" style={{ backgroundColor: "#e8e1f5", color: "#6c4ea9" }}>
                Vergleich 2026
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Rechnungssoftware Schweiz –{" "}
                <span style={{ color: "#6c4ea9" }}>ehrlicher Vergleich 2026</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Welche Rechnungssoftware passt für Schweizer Freelancer und KMU?
                Wir vergleichen Finitopro mit Bexio, Smallinvoice und Magic Heidi – transparent und ehrlich.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison table */}
        <section className="py-20 bg-white overflow-x-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Funktionsvergleich</h2>
            <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
              <table className="w-full min-w-[640px]">
                <thead>
                  <tr>
                    <th className="px-4 py-4 text-left text-sm font-semibold text-gray-500 bg-gray-50 rounded-tl-2xl">
                      Funktion
                    </th>
                    {competitors.map((c) => (
                      <th
                        key={c.name}
                        className="px-4 py-4 text-center text-sm font-bold last:rounded-tr-2xl"
                        style={
                          c.highlight
                            ? { backgroundColor: "#6c4ea9", color: "white" }
                            : { backgroundColor: "#f9f8fc", color: "#374151" }
                        }
                      >
                        <div>{c.name}</div>
                        <div className="text-xs font-normal mt-0.5" style={{ color: c.highlight ? "rgba(184,156,241,0.9)" : "#9ca3af" }}>
                          {c.tagline}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {features.map((f, fi) => (
                    <tr key={f.key} className={fi % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                      <td className="px-4 py-4 text-sm font-medium text-gray-700">{f.label}</td>
                      {competitors.map((c) => (
                        <Cell key={c.name} value={c.data[f.key]} highlight={c.highlight} />
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-4 text-center">
              Stand: März 2026. Preise und Features können sich ändern. Angaben ohne Gewähr.
            </p>
          </div>
        </section>

        {/* Why Finitopro */}
        <section className="py-20" style={{ backgroundColor: "#f8f7fc" }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Warum Finitopro wählen?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  vs: "vs. Bexio",
                  title: "Einfacher & günstiger als Bexio",
                  desc: "Bexio ist mächtig, aber mit CHF 45/Monat und komplexer Oberfläche für viele Freelancer und kleine KMU überdimensioniert. Finitopro bietet alles Wesentliche zu einem Bruchteil des Preises.",
                },
                {
                  vs: "vs. Smallinvoice",
                  title: "Moderner als Smallinvoice",
                  desc: "Smallinvoice ist gut, aber die Benutzeroberfläche wirkt veraltet. Finitopro bietet ein modernes, intuitives Design das auf dem ersten Klick verständlich ist.",
                },
                {
                  vs: "vs. Magic Heidi",
                  title: "Mehr Funktionen als Magic Heidi",
                  desc: "Magic Heidi ist auf Freelancer zugeschnitten, bietet aber kein Team-Zugriff und keine Serienrechnungen. Finitopro wächst mit Ihnen mit.",
                },
                {
                  vs: "Kostenloser Einstieg",
                  title: "Kostenlos starten, keine Kreditkarte",
                  desc: "Anders als viele Mitbewerber können Sie Finitopro kostenlos nutzen – ohne Kreditkarte, ohne Vertrag. Erst wenn Sie wachsen, upgraden Sie.",
                },
              ].map((item) => (
                <div key={item.vs} className="bg-white rounded-2xl p-6 border border-gray-100">
                  <span className="text-xs font-semibold px-2 py-1 rounded-full mb-3 inline-block" style={{ backgroundColor: "#e8e1f5", color: "#6c4ea9" }}>
                    {item.vs}
                  </span>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20" style={{ background: "linear-gradient(135deg, #6c4ea9 0%, #4a2d8c 100%)" }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Selbst überzeugen – kostenlos</h2>
            <p className="mb-8 text-lg" style={{ color: "rgba(255,255,255,0.75)" }}>
              Keine Kreditkarte. Keine Vertragsbindung. Einfach loslegen.
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
