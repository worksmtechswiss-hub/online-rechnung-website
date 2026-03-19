"use client";

import { motion } from "framer-motion";

const REGISTER_URL = "https://app.finitopro.ch/register";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

function InvoiceMockup() {
  return (
    <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 max-w-sm w-full">
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm mb-2"
            style={{ backgroundColor: "#6c4ea9" }}
          >
            M
          </div>
          <p className="font-semibold text-gray-900 text-sm">Maria Muster GmbH</p>
          <p className="text-xs text-gray-500">Zürich, Schweiz</p>
        </div>
        <div className="text-right">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Rechnung</p>
          <p className="text-sm font-bold text-gray-900">Nr. 2026-0042</p>
          <span
            className="inline-block mt-1 px-2 py-0.5 rounded-full text-xs font-medium"
            style={{ backgroundColor: "#f3f0fa", color: "#6c4ea9" }}
          >
            QR-konform ✓
          </span>
        </div>
      </div>

      {/* Line items */}
      <div className="space-y-2 mb-4">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Webdesign Projektarbeit</span>
          <span className="font-medium">CHF 2&apos;400.00</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Beratung (4h × CHF 150)</span>
          <span className="font-medium">CHF 600.00</span>
        </div>
      </div>

      <div className="border-t border-gray-100 pt-3 space-y-1 mb-4">
        <div className="flex justify-between text-sm text-gray-500">
          <span>Zwischentotal</span>
          <span>CHF 3&apos;000.00</span>
        </div>
        <div className="flex justify-between text-sm text-gray-500">
          <span>MWST 8.1%</span>
          <span>CHF 243.00</span>
        </div>
        <div className="flex justify-between text-base font-bold text-gray-900">
          <span>Total inkl. MWST</span>
          <span>CHF 3&apos;243.00</span>
        </div>
      </div>

      {/* QR Section */}
      <div className="flex items-center gap-3 rounded-xl p-3" style={{ backgroundColor: "#f3f0fa" }}>
        {/* QR placeholder */}
        <div className="flex-shrink-0 w-14 h-14 grid grid-cols-3 gap-0.5">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className={`rounded-sm ${[0, 2, 6, 8, 4].includes(i) ? "bg-gray-900" : "bg-gray-200"}`}
            />
          ))}
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-900">QR-Rechnung</p>
          <p className="text-xs text-gray-500">Zahlbar bis 30.04.2026</p>
          <p className="text-xs text-gray-500">IBAN: CH56 0483 5012 3456 7800 9</p>
        </div>
      </div>

      {/* Floating badge */}
      <div
        className="absolute -top-3 -right-3 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-lg"
        style={{ backgroundColor: "#fe7d43" }}
      >
        PDF-ready
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28" style={{ background: "linear-gradient(135deg, #f3f0fa 0%, #ffffff 50%, #fff3ee 100%)" }}>
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl" style={{ backgroundColor: "#e8e1f580" }} />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full blur-3xl" style={{ backgroundColor: "#fff3ee80" }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left – Text */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div variants={fadeUp}>
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium mb-6"
                style={{ backgroundColor: "#e8e1f5", color: "#6c4ea9" }}
              >
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#6c4ea9" }} />
                Neu: QR-Rechnung nach Schweizer Standard
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6"
            >
              Rechnung erstellen –{" "}
              <span style={{ color: "#6c4ea9" }}>einfach, schnell</span>
              {" "}&amp; QR-konform
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg text-gray-600 mb-8 leading-relaxed">
              Die einfachste Rechnungssoftware für Schweizer Freelancer und KMU.
              Erstellen Sie QR-konforme Rechnungen in wenigen Minuten –
              MWST-korrekt, professionell und kostenlos.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 mb-8">
              <a
                href={REGISTER_URL}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-white font-semibold text-base transition-colors shadow-lg"
                style={{ backgroundColor: "#6c4ea9", boxShadow: "0 8px 24px #6c4ea940" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#5a3d8c")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#6c4ea9")}
              >
                Kostenlos starten
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#funktionen"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl border border-gray-200 bg-white text-gray-700 font-semibold text-base hover:border-gray-300 transition-colors"
              >
                Funktionen ansehen
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-500">
              {[
                "✓ QR-Rechnung konform",
                "✓ MWST-korrekt",
                "✓ Keine Kreditkarte nötig",
              ].map((item) => (
                <span key={item} className="font-medium">{item}</span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right – Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <InvoiceMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
