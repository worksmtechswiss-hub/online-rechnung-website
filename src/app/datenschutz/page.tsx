import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung von Finitopro / SM Tech GmbH Swiss gemäss Schweizer DSG und DSGVO.",
  alternates: { canonical: "/datenschutz" },
  robots: { index: false, follow: false },
};

export default function DatenschutzPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Datenschutzerklärung</h1>
          <p className="text-sm text-gray-400 mb-10">Stand: März 2026</p>

          <div className="space-y-10 text-gray-600">

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Verantwortliche Stelle</h2>
              <p className="leading-relaxed">
                Verantwortlich für die Datenbearbeitung auf dieser Website ist:
              </p>
              <div className="mt-3 p-4 rounded-xl bg-gray-50 space-y-0.5">
                <p className="font-semibold text-gray-800">SM Tech GmbH Swiss</p>
                <p>Schlosstalstrasse 210, 8408 Winterthur, Schweiz</p>
                <p>E-Mail: <a href="mailto:hello@finitopro.ch" style={{ color: "#6c4ea9" }}>hello@finitopro.ch</a></p>
                <p>Tel: <a href="tel:+41798299070" style={{ color: "#6c4ea9" }}>+41 79 829 90 70</a></p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Welche Daten wir erheben</h2>
              <p className="leading-relaxed mb-3">
                Wir erheben und bearbeiten folgende Kategorien von Personendaten:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-sm">
                <li><strong>Kontodaten:</strong> Name, E-Mail-Adresse, Passwort (verschlüsselt)</li>
                <li><strong>Unternehmensdaten:</strong> Firmenname, Adresse, IBAN, MWST-Nummer (optional)</li>
                <li><strong>Rechnungsdaten:</strong> Kundendaten, Leistungsbeschreibungen, Beträge</li>
                <li><strong>Nutzungsdaten:</strong> Log-Daten, IP-Adresse, Browsertyp, besuchte Seiten</li>
                <li><strong>Zahlungsdaten:</strong> Abonnement- und Transaktionsdaten (verarbeitet über Stripe)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Zweck der Datenbearbeitung</h2>
              <ul className="list-disc pl-5 space-y-1.5 text-sm">
                <li>Bereitstellung und Betrieb der Finitopro-Software</li>
                <li>Erstellung und Verwaltung Ihres Benutzerkontos</li>
                <li>Erbringung des Kundensupports</li>
                <li>Abrechnung und Zahlungsabwicklung</li>
                <li>Verbesserung unserer Dienste und Behebung von Fehlern</li>
                <li>Einhaltung gesetzlicher Verpflichtungen</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Rechtsgrundlage</h2>
              <p className="leading-relaxed text-sm">
                Die Bearbeitung Ihrer Daten erfolgt auf Grundlage des Schweizer Datenschutzgesetzes (revDSG),
                der EU-Datenschutz-Grundverordnung (DSGVO) sowie Ihrer Einwilligung, der Vertragserfüllung
                und unserer berechtigten Interessen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Datenspeicherung & Sicherheit</h2>
              <p className="leading-relaxed text-sm mb-3">
                Alle Daten werden ausschliesslich auf Servern in der Schweiz oder innerhalb der EU gespeichert.
                Wir verwenden SSL-Verschlüsselung für alle Datenübertragungen. Passwörter werden nie im Klartext
                gespeichert, sondern mit modernen Hash-Verfahren (bcrypt) gesichert.
              </p>
              <p className="leading-relaxed text-sm">
                Wir bewahren Ihre Daten so lange auf, wie es für die Erbringung unserer Dienste notwendig ist
                oder gesetzliche Aufbewahrungsfristen es vorschreiben (in der Regel 10 Jahre für Geschäftsdaten
                gemäss OR Art. 958f).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Weitergabe an Dritte</h2>
              <p className="leading-relaxed text-sm mb-3">
                Wir geben Ihre Daten nicht an Dritte weiter, ausser:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-sm">
                <li><strong>Stripe:</strong> Zahlungsabwicklung (USA/EU, mit Standardvertragsklauseln)</li>
                <li><strong>Cloudflare:</strong> CDN und DDoS-Schutz</li>
                <li><strong>Gesetzliche Verpflichtung:</strong> Bei behördlicher Anforderung</li>
              </ul>
              <p className="mt-3 text-sm">
                Ihre Daten werden nie an Werbetreibende verkauft oder für Marketingzwecke Dritter genutzt.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Cookies</h2>
              <p className="leading-relaxed text-sm">
                Wir verwenden technisch notwendige Cookies für den Betrieb der Website (Session-Management,
                Authentifizierung) sowie optionale Analyse-Cookies (Google Analytics) zur Verbesserung
                unserer Dienste. Sie können Cookies in Ihren Browsereinstellungen deaktivieren.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Ihre Rechte</h2>
              <p className="text-sm mb-3">Sie haben folgende Rechte bezüglich Ihrer Personendaten:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-sm">
                <li><strong>Auskunft:</strong> Recht auf Information über gespeicherte Daten</li>
                <li><strong>Berichtigung:</strong> Recht auf Korrektur unrichtiger Daten</li>
                <li><strong>Löschung:</strong> Recht auf Löschung Ihrer Daten (Recht auf Vergessenwerden)</li>
                <li><strong>Einschränkung:</strong> Recht auf Einschränkung der Bearbeitung</li>
                <li><strong>Datenübertragbarkeit:</strong> Recht auf Herausgabe Ihrer Daten in maschinenlesbarem Format</li>
                <li><strong>Widerspruch:</strong> Recht auf Widerspruch gegen die Datenbearbeitung</li>
              </ul>
              <p className="mt-3 text-sm">
                Zur Wahrnehmung Ihrer Rechte wenden Sie sich an:{" "}
                <a href="mailto:hello@finitopro.ch" style={{ color: "#6c4ea9" }}>hello@finitopro.ch</a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Kontakt & Beschwerden</h2>
              <p className="text-sm leading-relaxed">
                Bei Fragen zum Datenschutz oder zur Geltendmachung Ihrer Rechte wenden Sie sich an
                SM Tech GmbH Swiss, hello@finitopro.ch. Sie haben ausserdem das Recht, bei der
                zuständigen Aufsichtsbehörde Beschwerde einzureichen. In der Schweiz ist dies der
                Eidgenössische Datenschutz- und Öffentlichkeitsbeauftragte (EDÖB),{" "}
                <a href="https://www.edoeb.admin.ch" target="_blank" rel="noopener noreferrer" style={{ color: "#6c4ea9" }}>
                  www.edoeb.admin.ch
                </a>.
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
