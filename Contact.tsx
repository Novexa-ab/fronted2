'use client';
import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="kontakt" className="py-20 px-4 bg-gray-800 text-white text-center">
      <h2 className="text-3xl font-bold text-yellow-400 mb-6">Kontakta oss</h2>
      {!sent ? (
        <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="max-w-lg mx-auto flex flex-col gap-4">
          <input type="text" placeholder="Namn" className="p-3 rounded bg-gray-700 text-white" required />
          <input type="email" placeholder="E-post" className="p-3 rounded bg-gray-700 text-white" required />
          <textarea placeholder="Meddelande" rows={4} className="p-3 rounded bg-gray-700 text-white" />
          <button type="submit" className="bg-yellow-400 text-black font-bold py-2 rounded">Skicka</button>
        </form>
      ) : (
        <p className="text-green-400">Tack! Vi hör av oss inom kort.</p>
      )}
    </section>
  );
}