import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingDownload } from "./DownloadButton";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "var(--gradient-bg)" }}>
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <FloatingDownload />
    </div>
  );
}