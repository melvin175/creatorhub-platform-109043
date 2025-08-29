export default function ContentBankPage() {
  return (
    <div className="grid" style={{ gap: "1rem" }}>
      <div className="card" style={{ padding: "1rem" }}>
        <div style={{ display: "flex", gap: ".5rem", alignItems: "center" }}>
          <div style={{ fontWeight: 700 }}>Content Bank</div>
          <div className="badge">💼 24 items</div>
          <input className="input" placeholder="Search content…" style={{ marginLeft: "auto", maxWidth: 260 }} />
        </div>
        <div className="grid grid-3" style={{ marginTop: ".8rem" }}>
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="surface" style={{ padding: ".8rem" }}>
              <div style={{ fontWeight: 600 }}>Asset #{i + 1}</div>
              <div style={{ color: "var(--text-muted)", fontSize: 13, marginTop: 4 }}>Tag: evergreen</div>
              <div style={{ display: "flex", gap: ".5rem", marginTop: ".6rem" }}>
                <button className="btn">Use</button>
                <button className="btn">Preview</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
