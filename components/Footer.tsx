import Link from "next/link";

export function Footer() {
  return (
    <footer style={{ background: "var(--footer)", color: "var(--footer-foreground)" }} className="mt-20">
      <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-14 grid gap-8 sm:gap-10 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <h3 className="text-2xl font-extrabold mb-4" style={{ color: "var(--brand)" }}>Kalyan Matka</h3>
          <p className="text-sm opacity-80 max-w-xs">
            Your premier destination for exciting online gaming adventures!
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/#game-rates">Game Rates</Link></li>
            <li><Link href="/#faq">FAQ</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li>Privacy Policy</li>
            <li>Data Deletion</li>
            <li>Terms &amp; Conditions</li>
            <li>Disclaimer</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li>+91 91222 57775</li>
            <li>support@kalyansatta.net</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-6 text-center text-xs opacity-70">
          Copyright © 2026 Kalyan Matka. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}