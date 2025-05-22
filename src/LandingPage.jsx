import React from 'react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-serif">
      <header className="bg-white shadow-md py-6 px-4 md:px-12 flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-bold text-blue-900">Spluss Invest</h1>
        <button className="bg-blue-900 text-white px-4 py-2 rounded-2xl shadow">Jetzt starten</button>
      </header>

      <section className="bg-gradient-to-br from-blue-900 to-blue-600 text-white py-20 px-4 md:px-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Immobilien als Kapitalanlage</h2>
        <p className="text-xl mb-6">Schon ab 2.400 € netto – ohne Eigenkapital investieren</p>
        <button className="bg-white text-blue-900 px-6 py-3 rounded-2xl text-lg shadow-md font-semibold">
          Bin ich bereit Vermieter zu werden?
        </button>
      </section>

      <section className="py-16 px-4 md:px-12 grid gap-10 md:grid-cols-3">
        <div>
          <h3 className="text-xl font-bold text-blue-900 mb-2">1. Bonitätscheck</h3>
          <p>Beantworte 3 Fragen zu Einkommen, Beruf und Wohnort.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-blue-900 mb-2">2. Analyse & Gespräch</h3>
          <p>Unsere KI prüft deine Angaben und vereinbart ein Erstgespräch.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-blue-900 mb-2">3. Eigentümer werden</h3>
          <p>Du investierst steueroptimiert in eine vermietete Wohnung.</p>
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-4 md:px-12 text-center">
        <h3 className="text-2xl font-bold text-blue-900 mb-4">Jetzt unverbindlich starten</h3>
        <p className="mb-6">In weniger als 60 Sekunden prüfen, ob du geeignet bist.</p>
        <button className="bg-blue-900 text-white px-6 py-3 rounded-2xl text-lg shadow-md">
          Bin ich bereit Vermieter zu werden?
        </button>
      </section>

      <footer className="bg-white py-8 px-4 md:px-12 text-sm text-center text-gray-500">
        © 2025 Spluss Invest – Alle Rechte vorbehalten | Datenschutz | Impressum
      </footer>
    </div>
  );
}
