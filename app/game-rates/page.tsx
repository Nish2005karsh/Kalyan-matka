import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Game Rates — Kalyan Matka",
  description: "Latest Kalyan Matka Matka game rates for Single Digit, Jodi, Pana, Sangam and more.",
};

const rates = [
  ["Single Digit", "10-95"],
  ["Jodi Digit", "10-950"],
  ["Single Pana", "10-1500"],
  ["Double Digit", "10-3000"],
  ["Triple Digit", "10-7000"],
  ["Half Sangam", "10-10000"],
  ["Full Sangam", "10-100000"],
];

export default function GameRates() {
  return (
    <div className="container mx-auto px-4 py-12 sm:py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-10">
          Game <span className="relative inline-block">Rates<span className="absolute left-0 right-0 -bottom-1 h-1 rounded-full" style={{ background: "var(--brand)" }} /></span>
        </h1>
        <div className="space-y-4">
          {rates.map(([name, rate]) => (
            <div key={name} className="bg-card rounded-2xl px-6 py-5 flex items-center justify-between shadow-[var(--shadow-card)] border border-border transition-all hover:shadow-[var(--shadow-glow)] hover:-translate-y-1">
              <span className="font-bold text-lg" style={{ color: "var(--brand)" }}>{name}</span>
              <span className="font-extrabold text-2xl text-red-600">{rate}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
