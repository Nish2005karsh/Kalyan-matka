import { DownloadButton } from "@/components/DownloadButton";
import { PhoneMockup } from "@/components/PhoneMockup";
import { Zap, ShieldCheck, Headphones } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const rates = [
  ["Single Digit", "10 Rs", "95 Rs"],
  ["Jodi Digit", "10 Rs", "950 Rs"],
  ["Red Brackets", "10 Rs", "950 Rs"],
  ["Single Pana", "10 Rs", "1500 Rs"],
  ["Double Digit", "10 Rs", "3000 Rs"],
  ["Triple Digit", "10 Rs", "7000 Rs"],
  ["Half Sangam", "10 Rs", "10000 Rs"],
  ["Full Sangam", "10 Rs", "100000 Rs"],
];

const faqs = [
  { q: "How do I register on Kalyan Matka?", a: "Registration is simple and quick. Click on the 'Download App' button, install the application, and follow the on-screen instructions to create your account using your mobile number." },
  { q: "Is it safe to add money to my wallet?", a: "Yes, absolutely. We use industry-standard encryption and partner with trusted payment gateways to ensure all your transactions are 100% secure." },
  { q: "How long does withdrawal take?", a: "We pride ourselves on instant payouts. Once you initiate a withdrawal request, the amount is typically credited to your bank account within 10-15 minutes." },
  { q: "What are the minimum deposit and withdrawal amounts?", a: "The minimum deposit amount is ₹300, and the minimum withdrawal amount is ₹500. There is no maximum limit for withdrawals." },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="container mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-8 text-center">
        <div className="mx-auto max-w-4xl">
          <DownloadButton large className="w-full max-w-3xl" />
          <p className="mt-5 text-sm text-muted-foreground inline-flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-green-600" /> 100% Safe & Secure Download
          </p>
        </div>
        <div className="mt-10 sm:mt-16">
          <PhoneMockup />
        </div>
      </section>

      {/* Welcome */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="rounded-3xl bg-card p-6 sm:p-10 md:p-14 text-center" style={{ boxShadow: "var(--shadow-card)" }}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground">Welcome to Kalyan Matka</h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience the next generation of Satta Matka gaming. At Kalyan Matka, we blend tradition with cutting-edge technology to provide you with the fastest, most secure, and most transparent gaming environment in the industry.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8">
          {[
            { Icon: Zap, title: "Instant Payouts", desc: "Get your winnings credited to your account within minutes. No delays, no excuses." },
            { Icon: ShieldCheck, title: "Secure Platform", desc: "State-of-the-art encryption ensures your data and transactions are always protected." },
            { Icon: Headphones, title: "24/7 Support", desc: "Our dedicated team is always ready to help you with any questions or concerns." },
          ].map(({ Icon, title, desc }) => (
            <div key={title} className="rounded-3xl bg-card p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-glow)] cursor-pointer" style={{ boxShadow: "var(--shadow-card)" }}>
              <Icon className="w-10 h-10 mx-auto" style={{ color: "var(--brand)" }} strokeWidth={1.8} />
              <h3 className="mt-4 text-xl font-bold">{title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Game Rates */}
      <section id="game-rates" className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center">
          Game <span className="relative inline-block">Rates<span className="absolute left-0 right-0 -bottom-1 h-1 rounded-full" style={{ background: "var(--brand)" }} /></span>
        </h2>
        <div className="mt-6 sm:mt-10 rounded-2xl sm:rounded-3xl overflow-hidden bg-card" style={{ boxShadow: "var(--shadow-card)" }}>
          <div className="grid grid-cols-3 text-white text-center font-bold py-3 sm:py-4 text-sm sm:text-base" style={{ background: "var(--gradient-primary)" }}>
            <div>Name</div><div>Bet</div><div>Winning</div>
          </div>
          {rates.map(([n, b, w], i) => (
            <div key={n} className={`grid grid-cols-3 text-center py-3 sm:py-5 font-medium text-sm sm:text-base transition-colors hover:bg-accent/20 ${i % 2 ? "bg-secondary/40" : ""}`}>
              <div>{n}</div><div>{b}</div><div className="font-bold" style={{ color: "var(--brand-deep)" }}>{w}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center">
          Frequently Asked <span className="relative inline-block">Questions<span className="absolute left-0 right-0 -bottom-1 h-1 rounded-full" style={{ background: "var(--brand)" }} /></span>
        </h2>
        <div className="mt-6 sm:mt-10 rounded-2xl sm:rounded-3xl bg-card p-4 sm:p-6 md:p-10" style={{ boxShadow: "var(--shadow-card)" }}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="rounded-2xl border border-border bg-background px-5 transition-colors hover:border-primary">
                <AccordionTrigger className="text-left font-semibold text-base hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
