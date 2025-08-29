import Link from "next/link";
import { MiniChart } from "@/components/widgets/MiniChart";
import { HeatmapMini } from "@/components/widgets/HeatmapMini";

export default function Home() {
  return (
    <div className="grid" style={{ gap: "1rem" }}>
      <section className="grid grid-4">
        {[
          { label: "Total Followers", value: "128,420", delta: "+2.4%" },
          { label: "Avg. Engagement", value: "4.8%", delta: "+0.6%" },
          { label: "Posts this week", value: "12", delta: "on track" },
          { label: "Best Time Today", value: "6:30 PM", delta: "in 3h" },
        ].map((s) => (
          <div key={s.label} className="card" style={{ padding: "1rem" }}>
            <div style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 6 }}>{s.label}</div>
            <div className="counter" style={{ fontSize: 24, fontWeight: 700 }}>{s.value}</div>
            <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 4 }}>{s.delta}</div>
          </div>
        ))}
      </section>

      <section className="grid grid-3">
        <div className="card" style={{ padding: "1rem" }}>
          <div style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
            <span style={{ fontWeight: 700 }}>Performance</span>
            <span className="badge" style={{ marginLeft: "auto" }}>📈 30d</span>
          </div>
          <MiniChart />
        </div>

        <div className="card" style={{ padding: "1rem" }}>
          <div style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
            <span style={{ fontWeight: 700 }}>Consistency Meter</span>
            <span className="badge" style={{ marginLeft: "auto" }}>🔥 Streak</span>
          </div>
          <HeatmapMini />
        </div>

        <div className="card" style={{ padding: "1rem", display: "flex", flexDirection: "column", gap: ".6rem" }}>
          <div style={{ fontWeight: 700 }}>Smart Suggestions</div>
          <div className="surface" style={{ padding: ".8rem" }}>📊 Try a carousel post on Instagram tonight for +10% reach.</div>
          <div className="surface" style={{ padding: ".8rem" }}>🕓 Your audience is active at 6–8 PM local time.</div>
          <div className="surface" style={{ padding: ".8rem" }}>💡 Repurpose last week’s thread into a short-form video.</div>
          <Link href="/ai-tools" className="btn btn-primary" style={{ textDecoration: "none", marginTop: "auto" }}>
            Generate with AI
          </Link>
        </div>
      </section>
    </div>
  );
}
