"use client";

import Link from "next/link";

const REGISTER_URL = "https://app.finitopro.ch/register";

const links = {
  Produkt: [
    { href: "/qr-rechnung", label: "QR-Rechnung" },
    { href: "/freelancer", label: "Für Freelancer" },
    { href: "/kmu", label: "Für KMU" },
    { href: "/preise", label: "Preise" },
    { href: "/vorlagen", label: "Rechnungsvorlagen" },
    { href: "/vergleich", label: "Vergleich" },
  ],
  Ressourcen: [
    { href: "/blog", label: "Blog" },
    { href: "/#faq", label: "FAQ" },
    { href: "/blog/rechnung-schreiben-schweiz", label: "Rechnung schreiben" },
    { href: "/blog/qr-rechnung-pflichtangaben", label: "Pflichtangaben" },
    { href: "/blog/mwst-rechnung-schweiz", label: "MWST Rechnung" },
  ],
  Rechtliches: [
    { href: "/datenschutz", label: "Datenschutz" },
    { href: "/agb", label: "AGB" },
    { href: "/impressum", label: "Impressum" },
    { href: "/cookies", label: "Cookie-Richtlinie" },
  ],
};

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0f0b1a" }} className="text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 text-white font-bold text-lg mb-4">
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
                style={{ backgroundColor: "#6c4ea9" }}
              >
                F
              </span>
              Finitopro
            </Link>
            <p className="text-sm leading-relaxed mb-4">
              Die einfachste Rechnungssoftware für Schweizer Freelancer und KMU.
              QR-konform, MWST-korrekt, kostenlos.
            </p>
            <a
              href={REGISTER_URL}
              className="inline-flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
              style={{ backgroundColor: "#6c4ea9", color: "white" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#5a3d8c")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#6c4ea9")}
            >
              Kostenlos starten →
            </a>
          </div>

          {/* Link groups */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <h3 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">
                {group}
              </h3>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(108,78,169,0.2)" }}
        >
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            © {new Date().getFullYear()} Finitopro – online-rechnung-erstellen.ch · Alle Rechte vorbehalten
          </p>
          <div className="flex items-center gap-1 text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#72bf78" }} />
            Daten sicher in der Schweiz gespeichert
          </div>
        </div>
      </div>
    </footer>
  );
}
