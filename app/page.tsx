export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-24 px-6 text-center">
        <motion.h1
          className="text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Nyckelfärdiga AI-lösningar för e-handel
        </motion.h1>
        <motion.p
          className="text-lg max-w-xl mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Vi automatiserar din kundservice, försäljning och marknadsföring med skräddarsydda AI-lösningar.
        </motion.p>
        <Button className="text-lg px-6 py-3">Boka demo</Button>
      </section>

      {/* Tjänster */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-2">AI-chatbot</h2>
              <p>
                Dygnet-runt kundservice som svarar direkt på frågor och ökar konverteringar.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-2">E-postautomation</h2>
              <p>
                Automatiska flöden för övergivna varukorgar, uppföljning och nyhetsbrev.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-2">AI-texter</h2>
              <p>
                Produktbeskrivningar, annonser och SEO-optimerade texter skrivna automatiskt.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center bg-white">
        <h2 className="text-3xl font-bold mb-4">
          Klar att skala din e-handel med AI?
        </h2>
        <p className="mb-6">
          Boka ett kostnadsfritt möte så visar vi hur enkelt det är att komma igång.
        </p>
        <Button className="text-lg px-6 py-3">Kontakta oss</Button>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-6">
        &copy; {new Date().getFullYear()} Novexa AB. All rights reserved.
      </footer>
    </main>
  );
}
