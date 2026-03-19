const stats = [
  { value: "5'000+", label: "Schweizer Nutzer" },
  { value: "120'000+", label: "erstellte Rechnungen" },
  { value: "100%", label: "QR-konform" },
  { value: "4.9 ★", label: "Durchschnittsbewertung" },
];

export default function TrustBar() {
  return (
    <section className="border-y border-gray-100 bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-gray-400 mb-8 uppercase tracking-wider">
          Vertraut von Schweizer Freelancern &amp; KMU
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
