import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/#game-rates", label: "Game Rates" },
  { href: "/#faq", label: "FAQ" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-2">
        <Link href="/" className="text-xl sm:text-2xl font-extrabold tracking-tight shrink-0" style={{ color: "var(--brand-deep)" }}>
          Kalyan Matka
        </Link>
        <nav className="flex items-center gap-3 sm:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-xs sm:text-base font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}