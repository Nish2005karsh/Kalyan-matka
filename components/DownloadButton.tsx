const APK_URL = "/app/kalyan-satta.apk";

export function DownloadButton({ className = "", large = false }: { className?: string; large?: boolean }) {
  return (
    <a
      href={APK_URL}
      download
      className={`inline-flex items-center justify-center gap-3 rounded-full font-bold text-foreground transition-transform hover:scale-[1.02] active:scale-[0.98] ${
        large
          ? "px-6 sm:px-12 py-4 sm:py-5 text-base sm:text-xl"
          : "px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base"
      } ${className}`}
      style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
    >
      <span className="relative inline-flex items-center justify-center overflow-hidden" style={{ width: large ? 26 : 22, height: large ? 26 : 22 }}>
        {/* tray — static */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        </svg>
        {/* arrow — animated; stops at translateY(0%) = tip at tray line, never crosses it */}
        <svg className="absolute inset-0 w-full h-full animate-download-bounce" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="3" x2="12" y2="15" />
          <polyline points="7 10 12 15 17 10" />
        </svg>
      </span>
      <span className="whitespace-nowrap">{large ? "DOWNLOAD APP NOW" : "DOWNLOAD"}</span>
    </a>
  );
}

export function FloatingDownload() {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      <DownloadButton />
    </div>
  );
}