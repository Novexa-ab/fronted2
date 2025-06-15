'use client';
export default function Services() {
  const services = [
    {
      title: "AI-flöden för övergivna varukorgar",
      description: "Automatiserade utskick som vinner tillbaka 10–30% av förlorade köp. Klart på 7 dagar."
    },
    {
      title: "AI-chatbot för kundsupport",
      description: "Svarar på 80% av vanliga frågor, dygnet runt, på flera språk. Klart på 10 dagar."
    },
    {
      title: "AI-genererade produkt- och annonstexter",
      description: "Snabbt, skalbart och SEO-optimerat innehåll. Klart på 5 dagar."
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {services.map((s, idx) => (
          <div key={idx} className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-yellow-400 font-bold text-xl mb-2">{s.title}</h3>
            <p className="text-gray-300">{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}