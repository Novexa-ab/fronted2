'use client';
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section 
      className="text-center py-20 bg-gray-900 text-white"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <img src="/logo.png" alt="Novexa AB Logotyp" className="mx-auto w-48 mb-6" />
      <h1 className="text-4xl font-bold text-yellow-400">Nyckelfärdiga AI-lösningar för e-handel</h1>
      <p className="mt-4 text-lg max-w-xl mx-auto text-gray-300">
        Novexa AB hjälper e-handelsföretag att automatisera kundsupport, marknadsföring och innehåll med färdiga AI-paket.
      </p>
    </motion.section>
  );
}