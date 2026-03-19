"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6"
      style={{ pointerEvents: "none" }}
    >
      <div
        className="max-w-3xl mx-auto rounded-2xl shadow-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4"
        style={{
          backgroundColor: "#0f0b1a",
          border: "1px solid rgba(108,78,169,0.3)",
          pointerEvents: "auto",
        }}
      >
        {/* Icon */}
        <span className="text-2xl flex-shrink-0">🍪</span>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <p className="text-sm text-gray-300 leading-relaxed">
            Wir verwenden Cookies und Google Analytics, um unsere Website zu
            verbessern. Weitere Infos in unserer{" "}
            <Link
              href="/datenschutz"
              className="underline underline-offset-2 hover:text-white transition-colors"
              style={{ color: "#b89cf1" }}
            >
              Datenschutzrichtlinie
            </Link>
            .
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-2 flex-shrink-0">
          <button
            onClick={decline}
            className="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            style={{ color: "rgba(255,255,255,0.5)", backgroundColor: "rgba(255,255,255,0.06)" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.06)")}
          >
            Ablehnen
          </button>
          <button
            onClick={accept}
            className="px-4 py-2 rounded-lg text-sm font-semibold text-white transition-colors"
            style={{ backgroundColor: "#6c4ea9" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#5a3d8c")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#6c4ea9")}
          >
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
