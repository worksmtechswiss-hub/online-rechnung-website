"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const REGISTER_URL = "https://app.finitopro.ch/register";

const tabs = [
  {
    id: "freelancer",
    label: "Freelancer",
    emoji: "💻",
    heading: "Rechnungen schreiben als Freelancer – endlich einfach",
    description:
      "Als Selbstständige/r in der Schweiz haben Sie Besseres zu tun als Buchhaltung. Erstellen Sie professionelle Rechnungen in Minuten und konzentrieren Sie sich auf Ihre eigentliche Arbeit.",
    points: [
      "Rechnung ohne MWST-Nummer möglich (bis CHF 100'000 Umsatz)",
      "Erinnerung an offene Rechnungen und Zahlungsfristen",
      "Professionelles Erscheinungsbild gegenüber Kunden",
      "Rechnungshistorie für die Steuererklärung",
      "Rechnungsvorlage nach Ihrem Design anpassbar",
    ],
    cta: { href: "/freelancer", label: "Freelancer-Features ansehen" },
    sectionBg: "#f9f7fd",
    cardBg: "rgba(108,78,169,0.06)",
    badgeBg: "#e8e1f5",
    badgeColor: "#6c4ea9",
  },
  {
    id: "kmu",
    label: "KMU",
    emoji: "🏢",
    heading: "Rechnungssoftware für Schweizer Kleinunternehmen",
    description:
      "Für KMU und Kleinunternehmen mit mehreren Kunden und regelmässigen Rechnungen. Behalten Sie den Überblick über Debitoren und offene Posten.",
    points: [
      "Mehrere Kunden und Kontakte verwalten",
      "Debitorenliste mit Zahlungsstatus",
      "Serienrechnungen für wiederkehrende Leistungen",
      "Export für Buchhaltungsprogramme (CSV, Excel)",
      "Team-Zugriff für Mitarbeitende",
    ],
    cta: { href: "/kmu", label: "KMU-Features ansehen" },
    sectionBg: "#fff7f4",
    cardBg: "rgba(254,125,67,0.06)",
    badgeBg: "#fff3ee",
    badgeColor: "#fe7d43",
  },
];

export default function AudienceSection() {
  const [active, setActive] = useState("freelancer");
  const current = tabs.find((t) => t.id === active)!;

  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: "#f8f7fc" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Gemacht für Sie – egal ob Freelancer oder KMU
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Wählen Sie Ihre Situation und sehen Sie, wie Finitopro Ihren Alltag vereinfacht.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white rounded-xl p-1 border border-gray-200 shadow-sm">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200"
                style={
                  active === tab.id
                    ? { backgroundColor: "#6c4ea9", color: "white" }
                    : { color: "#6b7280" }
                }
              >
                <span>{tab.emoji}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="rounded-3xl border border-gray-100 p-8 lg:p-12"
            style={{ backgroundColor: current.sectionBg }}
          >
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <span
                  className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-4"
                  style={{ backgroundColor: current.badgeBg, color: current.badgeColor }}
                >
                  {current.emoji} Für {current.label}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  {current.heading}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{current.description}</p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={REGISTER_URL}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-white text-sm font-semibold transition-colors"
                    style={{ backgroundColor: "#6c4ea9" }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#5a3d8c")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#6c4ea9")}
                  >
                    Kostenlos starten
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                  <a
                    href={current.cta.href}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-gray-200 bg-white text-gray-700 text-sm font-semibold hover:border-gray-300 transition-colors"
                  >
                    {current.cta.label}
                  </a>
                </div>
              </div>

              <ul className="space-y-3">
                {current.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-3 rounded-xl px-4 py-3"
                    style={{ backgroundColor: "rgba(255,255,255,0.7)" }}
                  >
                    <svg
                      className="w-5 h-5 flex-shrink-0 mt-0.5"
                      style={{ color: "#72bf78" }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
