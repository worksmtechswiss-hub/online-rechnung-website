"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Konto erstellen",
    description: "Registrieren Sie sich kostenlos in 30 Sekunden. Keine Kreditkarte, keine versteckten Kosten.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: "Rechnung ausfüllen",
    description: "Kundendaten eingeben, Leistungen und Beträge erfassen. MWST und QR-Code werden automatisch berechnet.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    title: "Versenden & bezahlt werden",
    description: "PDF herunterladen oder direkt per E-Mail versenden. Der Kunde zahlt bequem per QR-Code.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            In 3 Schritten zur fertigen Rechnung
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            So einfach war Rechnungen schreiben in der Schweiz noch nie.
          </p>
        </div>

        <div className="relative grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.4 }}
              className="relative text-center"
            >
              <div
                className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-5 relative"
                style={{ backgroundColor: "#f3f0fa", color: "#6c4ea9" }}
              >
                {step.icon}
                <span
                  className="absolute -top-2 -right-2 w-6 h-6 rounded-full text-white text-xs font-bold flex items-center justify-center"
                  style={{ backgroundColor: "#6c4ea9" }}
                >
                  {i + 1}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">{step.description}</p>

              {/* Connector arrow between steps */}
              {i < steps.length - 1 && (
                <div className="hidden md:flex absolute top-10 -right-4 items-center justify-center">
                  <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
