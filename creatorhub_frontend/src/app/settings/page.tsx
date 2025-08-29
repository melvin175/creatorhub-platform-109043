export default function SettingsPage() {
  return (
    <div className="grid" style={{ gap: "1rem" }}>
      <div className="card" style={{ padding: "1rem" }}>
        <div style={{ fontWeight: 700, marginBottom: ".6rem" }}>Settings</div>
        <div className="grid grid-2">
          <div className="surface" style={{ padding: ".9rem" }}>
            <div style={{ fontWeight: 600 }}>Profile</div>
            <input className="input" placeholder="Display name" style={{ marginTop: ".6rem" }} />
            <input className="input" placeholder="Email" style={{ marginTop: ".4rem" }} />
            <button className="btn btn-primary" style={{ marginTop: ".6rem" }}>Save</button>
          </div>
          <div className="surface" style={{ padding: ".9rem" }}>
            <div style={{ fontWeight: 600 }}>Platform Connections</div>
            <div style={{ display: "flex", gap: ".5rem", marginTop: ".6rem", flexWrap: "wrap" }}>
              {["Twitter/X", "Instagram", "TikTok", "YouTube", "LinkedIn"].map((p) => (
                <button key={p} className="btn">{p}</button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
