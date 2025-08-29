import Link from "next/link";

export default function ReportsPage() {
  return (
    <div className="grid" style={{ gap: "1rem" }}>
      <div className="card" style={{ padding: "1rem" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ fontWeight: 700 }}>Reports</div>
          <div style={{ marginLeft: "auto", display: "flex", gap: ".5rem" }}>
            <button className="btn">Download CSV</button>
            <button className="btn btn-primary">Download PDF</button>
          </div>
        </div>
        <div className="grid grid-3" style={{ marginTop: ".8rem" }}>
          {[
            { t: "Reach Summary", d: "Last 30 days overview across platforms." },
            { t: "Engagement Breakdown", d: "Likes, comments, shares per platform." },
            { t: "Top Performing Posts", d: "Your most engaging content." },
          ].map((c) => (
            <div key={c.t} className="surface" style={{ padding: ".9rem" }}>
              <div style={{ fontWeight: 600 }}>{c.t}</div>
              <div style={{ color: "var(--text-muted)", fontSize: 13, marginTop: 4 }}>{c.d}</div>
              <Link href="/" className="btn" style={{ textDecoration: "none", marginTop: ".6rem", display: "inline-flex" }}>
                View in Dashboard
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
