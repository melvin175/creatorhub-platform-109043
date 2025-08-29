import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { ReactNode } from "react";
import { NavIcon } from "@/components/ui/NavIcon";

export const metadata: Metadata = {
  title: "CreatorHub",
  description: "All-in-one content management and analytics for creators",
};

type LayoutProps = {
  children: ReactNode;
};

const nav = [
  { href: "/", label: "Dashboard", icon: "dashboard" },
  { href: "/calendar", label: "Calendar", icon: "calendar" },
  { href: "/content-bank", label: "Content Bank", icon: "content" },
  { href: "/reports", label: "Reports", icon: "reports" },
  { href: "/settings", label: "Settings", icon: "settings" },
];

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", minHeight: "100dvh" }}>
          {/* Sidebar */}
          <aside className="surface" style={{ padding: "1rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
            <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
              <div className="card" style={{ padding: ".9rem 1rem", display: "flex", alignItems: "center", gap: ".6rem" }}>
                <div style={{ width: 28, height: 28, borderRadius: 8, background: "var(--primary)" }} />
                <div>
                  <div style={{ fontWeight: 700 }}>CreatorHub</div>
                  <div style={{ fontSize: 12, color: "var(--text-muted)" }}>Create. Schedule. Grow.</div>
                </div>
              </div>
            </Link>

            <nav style={{ display: "flex", flexDirection: "column", gap: ".4rem" }}>
              {nav.map((n) => (
                <Link key={n.href} href={n.href} style={{ textDecoration: "none", color: "inherit" }}>
                  <div className="btn" style={{ width: "100%", justifyContent: "flex-start" }}>
                    <NavIcon name={n.icon} />
                    <span>{n.label}</span>
                  </div>
                </Link>
              ))}
            </nav>

            <div style={{ marginTop: "auto" }}>
              <div className="surface" style={{ padding: ".9rem", display: "flex", flexDirection: "column", gap: ".6rem" }}>
                <div style={{ fontSize: 12, color: "var(--text-muted)" }}>Quick Stats</div>
                <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
                  <span className="badge">🔥 7-day streak</span>
                  <span className="badge">📈 +12% reach</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Main area with header */}
          <div style={{ display: "grid", gridTemplateRows: "auto 1fr", minHeight: "100dvh" }}>
            <header className="card" style={{ padding: ".8rem 1rem", display: "flex", alignItems: "center", gap: ".6rem", position: "sticky", top: 0, zIndex: 10 }}>
              <div style={{ display: "flex", gap: ".5rem", alignItems: "center" }}>
                <button className="btn">➕ New</button>
                <Link href="/posting-hub" className="btn btn-primary" style={{ textDecoration: "none" }}>
                  🚀 Unified Posting
                </Link>
                <Link href="/ai-tools" className="btn" style={{ textDecoration: "none" }}>
                  🤖 AI Tools
                </Link>
              </div>
              <div style={{ marginLeft: "auto", display: "flex", gap: ".5rem", alignItems: "center" }}>
                <input className="input" placeholder="Search…" style={{ width: 260 }} />
                <select className="select" style={{ width: 160 }}>
                  <option>All platforms</option>
                  <option>Twitter/X</option>
                  <option>Instagram</option>
                  <option>TikTok</option>
                  <option>YouTube</option>
                </select>
                <button className="btn">⚙️</button>
              </div>
            </header>

            <main style={{ padding: "1rem" }}>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
