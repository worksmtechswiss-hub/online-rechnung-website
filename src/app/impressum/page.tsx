import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von Finitopro / SM Tech GmbH Swiss – Angaben gemäss schweizer Recht.",
  alternates: { canonical: "/impressum" },
  robots: { index: false, follow: false },
};

export default function ImpressumPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Impressum</h1>

          <div className="prose prose-gray max-w-none space-y-8">

            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Anbieter</h2>
              <div className="text-gray-600 space-y-1">
                <p className="font-semibold text-gray-800">SM Tech GmbH Swiss</p>
                <p>Schlosstalstrasse 210</p>
                <p>8408 Winterthur</p>
                <p>Schweiz</p>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Kontakt</h2>
              <div className="text-gray-600 space-y-1">
                <p>
                  <span className="font-medium text-gray-700">Telefon: </span>
                  <a href="tel:+41798299070" className="hover:underline" style={{ color: "#6c4ea9" }}>+41 79 829 90 70</a>
                </p>
                <p>
                  <span className="font-medium text-gray-700">E-Mail: </span>
                  <a href="mailto:hello@finitopro.ch" className="hover:underline" style={{ color: "#6c4ea9" }}>hello@finitopro.ch</a>
                </p>
                <p>
                  <span className="font-medium text-gray-700">Website: </span>
                  <a href="https://finitopro.ch" className="hover:underline" style={{ color: "#6c4ea9" }}>finitopro.ch</a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Haftungsausschluss</h2>
              <p className="text-gray-600 leading-relaxed">
                Die Inhalte dieser Website wurden mit grösster Sorgfalt erstellt. Für die Richtigkeit,
                Vollständigkeit und Aktualität der Inhalte übernimmt SM Tech GmbH Swiss jedoch keine Gewähr.
                Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Externe Links</h2>
              <p className="text-gray-600 leading-relaxed">
                Diese Website enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben.
                Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte
                der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Urheberrecht</h2>
              <p className="text-gray-600 leading-relaxed">
                Die durch SM Tech GmbH Swiss erstellten Inhalte und Werke auf dieser Website unterliegen dem
                Schweizer Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung ausserhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
                jeweiligen Autors bzw. Erstellers.
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
