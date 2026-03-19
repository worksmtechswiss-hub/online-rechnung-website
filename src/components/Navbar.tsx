"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/qr-rechnung", label: "QR-Rechnung" },
  { href: "/freelancer", label: "Freelancer" },
  { href: "/kmu", label: "KMU" },
  { href: "/preise", label: "Preise" },
  { href: "/blog", label: "Blog" },
];

const REGISTER_URL = "https://app.finitopro.ch/register";
const LOGIN_URL = "https://app.finitopro.ch/login";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl" style={{ color: "#6c4ea9" }}>
            <span
              className="flex items-center justify-center w-8 h-8 rounded-lg text-white text-sm font-bold"
              style={{ backgroundColor: "#6c4ea9" }}
            >
              F
            </span>
            <span>Finitopro</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 transition-colors hover:text-[#6c4ea9]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={LOGIN_URL}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-[#6c4ea9]"
            >
              Anmelden
            </a>
            <a
              href={REGISTER_URL}
              className="inline-flex items-center px-4 py-2 rounded-lg text-white text-sm font-semibold transition-colors shadow-sm"
              style={{ backgroundColor: "#6c4ea9" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#5a3d8c")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#6c4ea9")}
            >
              Kostenlos starten
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label="Menü öffnen"
          >
            {open ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                style={{ ["--hover-color" as string]: "#6c4ea9" }}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-gray-100 space-y-2">
              <a
                href={LOGIN_URL}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Anmelden
              </a>
              <a
                href={REGISTER_URL}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm font-semibold text-white text-center transition-colors"
                style={{ backgroundColor: "#6c4ea9" }}
              >
                Kostenlos starten
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
