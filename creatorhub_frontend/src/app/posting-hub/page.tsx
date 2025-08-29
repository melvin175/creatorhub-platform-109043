export default function PostingHubPage() {
  return (
    <div className="grid" style={{ gap: "1rem" }}>
      <div className="card" style={{ padding: "1rem", display: "grid", gap: ".8rem" }}>
        <div style={{ fontWeight: 700 }}>Unified Posting Hub</div>
        <div className="grid grid-2">
          <div className="surface" style={{ padding: ".9rem" }}>
            <div style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 6 }}>Compose</div>
            <textarea className="textarea" placeholder="Write caption, paste links, or drop media…" rows={6} />
            <div style={{ display: "flex", gap: ".5rem", marginTop: ".6rem" }}>
              <button className="btn">📎 Add media</button>
              <button className="btn"># Hashtags</button>
              <button className="btn">@ Mentions</button>
            </div>
          </div>

          <div className="surface" style={{ padding: ".9rem" }}>
            <div className="grid" style={{ gap: ".6rem" }}>
              <div>
                <div style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 6 }}>Platforms</div>
                <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
                  {["Twitter/X", "Instagram", "TikTok", "YouTube", "LinkedIn"].map((p) => (
                    <label key={p} className="btn" style={{ cursor: "pointer" }}>
                      <input type="checkbox" style={{ marginRight: 6 }} /> {p}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <div style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 6 }}>Schedule</div>
                <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
                  <input type="datetime-local" className="input" style={{ maxWidth: 220 }} />
                  <select className="select" style={{ maxWidth: 200 }}>
                    <option>Auto (best time)</option>
                    <option>Morning</option>
                    <option>Afternoon</option>
                    <option>Evening</option>
                  </select>
                </div>
              </div>
              <div style={{ display: "flex", gap: ".5rem", marginTop: ".3rem" }}>
                <button className="btn btn-primary">Schedule</button>
                <button className="btn">Save Draft</button>
                <button className="btn">Preview</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card" style={{ padding: "1rem" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ fontWeight: 700 }}>Drafts</div>
          <span className="badge" style={{ marginLeft: "auto" }}>📝 3 drafts</span>
        </div>
        <div className="grid grid-3" style={{ marginTop: ".8rem" }}>
          {[1, 2, 3].map((i) => (
            <div key={i} className="surface" style={{ padding: ".8rem" }}>
              <div style={{ fontWeight: 600 }}>Draft #{i}</div>
              <div style={{ color: "var(--text-muted)", fontSize: 13, marginTop: 4 }}>Short caption preview goes here…</div>
              <div style={{ display: "flex", gap: ".5rem", marginTop: ".6rem" }}>
                <button className="btn">Edit</button>
                <button className="btn">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
