"use client";

const REGISTER_URL = "https://app.finitopro.ch/register";

const plans = [
  {
    name: "Kostenlos",
    price: "CHF 0",
    period: "/ Monat",
    description: "Ideal zum Einstieg für Freelancer mit wenigen Rechnungen.",
    features: [
      "3 Rechnungen pro Monat",
      "QR-Rechnung inklusive",
      "PDF-Export",
      "1 Vorlage",
      "E-Mail-Support",
    ],
    notIncluded: ["Unbegrenzte Rechnungen", "Serienrechnungen", "Team-Zugriff"],
    ctaLabel: "Kostenlos starten",
    highlight: false,
  },
  {
    name: "Pro",
    price: "CHF 12",
    period: "/ Monat",
    description: "Für Freelancer und KMU die professionell wachsen wollen.",
    features: [
      "Unbegrenzte Rechnungen",
      "QR-Rechnung inklusive",
      "PDF-Export & E-Mail-Versand",
      "Alle Vorlagen & eigenes Logo",
      "Debitorenliste",
      "Serienrechnungen",
      "CSV-Export für Buchhaltung",
      "Prioritäts-Support",
    ],
    notIncluded: [],
    ctaLabel: "14 Tage kostenlos testen",
    highlight: true,
  },
];

export default function Pricing() {
  return (
    <section id="preise" className="py-20 lg:py-28" style={{ backgroundColor: "#f8f7fc" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Einfache, transparente Preise
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Starten Sie kostenlos. Upgraden Sie wenn Sie wachsen.
            Kein Abo-Dschungel, keine Überraschungen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="relative rounded-2xl p-8"
              style={
                plan.highlight
                  ? { backgroundColor: "#6c4ea9", boxShadow: "0 20px 60px rgba(108,78,169,0.3)" }
                  : { backgroundColor: "white", border: "1px solid #e5e7eb" }
              }
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ backgroundColor: "#fe7d43", color: "white" }}>
                    Beliebteste Wahl
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3
                  className="text-lg font-bold mb-1"
                  style={{ color: plan.highlight ? "white" : "#111827" }}
                >
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span
                    className="text-4xl font-extrabold"
                    style={{ color: plan.highlight ? "white" : "#111827" }}
                  >
                    {plan.price}
                  </span>
                  <span
                    className="text-sm"
                    style={{ color: plan.highlight ? "rgba(184,156,241,0.8)" : "#9ca3af" }}
                  >
                    {plan.period}
                  </span>
                </div>
                <p
                  className="text-sm"
                  style={{ color: plan.highlight ? "rgba(255,255,255,0.7)" : "#6b7280" }}
                >
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-2.5 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm">
                    <svg
                      className="w-4 h-4 flex-shrink-0"
                      style={{ color: plan.highlight ? "#b89cf1" : "#72bf78" }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span style={{ color: plan.highlight ? "rgba(255,255,255,0.9)" : "#374151" }}>{f}</span>
                  </li>
                ))}
                {plan.notIncluded.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm opacity-40">
                    <svg
                      className="w-4 h-4 flex-shrink-0 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-gray-500">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={REGISTER_URL}
                className="block text-center py-3 rounded-xl font-semibold text-sm transition-colors"
                style={
                  plan.highlight
                    ? { backgroundColor: "white", color: "#6c4ea9" }
                    : { backgroundColor: "#6c4ea9", color: "white" }
                }
                onMouseEnter={(e) => {
                  if (plan.highlight) e.currentTarget.style.backgroundColor = "#f3f0fa";
                  else e.currentTarget.style.backgroundColor = "#5a3d8c";
                }}
                onMouseLeave={(e) => {
                  if (plan.highlight) e.currentTarget.style.backgroundColor = "white";
                  else e.currentTarget.style.backgroundColor = "#6c4ea9";
                }}
              >
                {plan.ctaLabel}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-400 mt-8">
          Alle Preise in CHF, inkl. MWST. Monatlich kündbar.
        </p>
      </div>
    </section>
  );
}
