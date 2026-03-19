"use client";

import { motion } from "framer-motion";

const REGISTER_URL = "https://app.finitopro.ch/register";

export default function CTASection() {
  return (
    <section className="py-20 lg:py-28 overflow-hidden relative" style={{ background: "linear-gradient(135deg, #6c4ea9 0%, #4a2d8c 100%)" }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: "rgba(184,156,241,0.2)" }} />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: "rgba(254,125,67,0.15)" }} />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
            Jetzt kostenlos Ihre erste<br />
            QR-Rechnung erstellen
          </h2>
          <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.75)" }}>
            Starten Sie in 30 Sekunden. Kostenlos, ohne Kreditkarte.
            Tausende Schweizer Freelancer und KMU vertrauen Finitopro bereits.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={REGISTER_URL}
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white font-bold text-base transition-colors shadow-lg"
              style={{ color: "#6c4ea9" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f3f0fa")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "white")}
            >
              Kostenlos registrieren
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="/preise"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-base text-white transition-colors"
              style={{ border: "2px solid rgba(255,255,255,0.3)" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
            >
              Preise vergleichen
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-8 text-sm" style={{ color: "rgba(184,156,241,0.9)" }}>
            <span>✓ Keine Kreditkarte</span>
            <span>✓ Keine Vertragsbindung</span>
            <span>✓ QR-Rechnung inklusive</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
