"use client";

import { motion } from "framer-motion";

const points = [
  "Pflicht seit Oktober 2022 in der Schweiz",
  "Ersetzt den roten und orangefarbenen Einzahlungsschein",
  "Automatische QR-Code-Generierung mit IBAN und Betrag",
  "Kompatibel mit allen Schweizer Banken und Finanzinstituten",
  "Sofort zahlbar per Mobile-Banking oder E-Banking",
];

export default function QRSection() {
  return (
    <section className="py-20 lg:py-28 overflow-hidden" style={{ backgroundColor: "#1a1033" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left – visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="rounded-2xl p-8" style={{ backgroundColor: "rgba(108,78,169,0.15)", border: "1px solid rgba(108,78,169,0.3)" }}>
              {/* QR large preview */}
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-28 h-28 grid grid-cols-5 gap-1 p-2 bg-white rounded-xl">
                    {Array.from({ length: 25 }).map((_, i) => {
                      const dark = [0,1,2,3,4,5,9,10,14,15,19,20,21,22,23,24,6,12,18,7,17].includes(i);
                      return (
                        <div
                          key={i}
                          className={`rounded-sm ${dark ? "bg-gray-900" : "bg-gray-100"}`}
                        />
                      );
                    })}
                  </div>
                  <p className="text-center text-xs mt-2" style={{ color: "rgba(184,156,241,0.7)" }}>QR-Code</p>
                </div>
                <div className="text-white flex-1">
                  <p className="text-xs uppercase tracking-wider mb-1" style={{ color: "rgba(184,156,241,0.7)" }}>Zahlbar an</p>
                  <p className="text-sm font-semibold mb-1">Maria Muster GmbH</p>
                  <p className="text-xs mb-3" style={{ color: "rgba(184,156,241,0.6)" }}>CH56 0483 5012 3456 7800 9</p>
                  <p className="text-xs uppercase tracking-wider mb-1" style={{ color: "rgba(184,156,241,0.7)" }}>Betrag</p>
                  <p className="text-lg font-bold">CHF 3&apos;243.00</p>
                </div>
              </div>
              <div className="mt-6 pt-6 flex items-center gap-2" style={{ borderTop: "1px solid rgba(108,78,169,0.3)" }}>
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "#72bf78" }} />
                <p className="text-sm font-medium" style={{ color: "#72bf78" }}>
                  Bereit zum Versand – Swiss QR Standard
                </p>
              </div>
            </div>

            {/* Floating label */}
            <div
              className="absolute -bottom-4 -right-4 text-white rounded-xl px-4 py-2 text-sm font-semibold shadow-xl"
              style={{ backgroundColor: "#6c4ea9" }}
            >
              Automatisch generiert
            </div>
          </motion.div>

          {/* Right – text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span
              className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-4"
              style={{ backgroundColor: "rgba(108,78,169,0.2)", color: "#b89cf1" }}
            >
              QR-Rechnung Schweiz
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
              QR-Rechnung: Schweizer{" "}
              <span style={{ color: "#b89cf1" }}>Pflichtstandard</span>{" "}
              seit Oktober 2022
            </h2>
            <p className="mb-8 leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
              Seit Oktober 2022 ist die QR-Rechnung der einzige offizielle
              Zahlungsstandard in der Schweiz. Unsere Software generiert den
              QR-Code automatisch – Sie müssen sich um nichts kümmern.
            </p>

            <ul className="space-y-3 mb-8">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 flex-shrink-0 mt-0.5"
                    style={{ color: "#72bf78" }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>{p}</span>
                </li>
              ))}
            </ul>

            <a
              href="/qr-rechnung"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-gray-900 font-semibold text-sm hover:bg-gray-100 transition-colors"
            >
              Mehr zur QR-Rechnung
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
