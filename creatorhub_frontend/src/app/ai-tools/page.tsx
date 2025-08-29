export default function AIToolsPage() {
  return (
    <div className="grid" style={{ gap: "1rem" }}>
      <div className="card" style={{ padding: "1rem" }}>
        <div style={{ fontWeight: 700, marginBottom: ".6rem" }}>AI Tools</div>
        <div className="grid grid-3">
          <div className="surface" style={{ padding: ".9rem" }}>
            <div style={{ fontWeight: 600 }}>Generate Tweet Thread</div>
            <textarea className="textarea" placeholder="Topic, keywords…" rows={4} />
            <button className="btn btn-primary" style={{ marginTop: ".6rem" }}>Generate</button>
          </div>
          <div className="surface" style={{ padding: ".9rem" }}>
            <div style={{ fontWeight: 600 }}>Content Ideas</div>
            <input className="input" placeholder="Your niche" />
            <button className="btn" style={{ marginTop: ".6rem" }}>Suggest Ideas</button>
            <div className="surface" style={{ padding: ".6rem", marginTop: ".6rem" }}>💡 10 carousel ideas for engagement boost.</div>
          </div>
          <div className="surface" style={{ padding: ".9rem" }}>
            <div style={{ fontWeight: 600 }}>Best Posting Time</div>
            <select className="select">
              <option>All platforms</option>
              <option>Twitter/X</option>
              <option>Instagram</option>
            </select>
            <div className="surface" style={{ padding: ".6rem", marginTop: ".6rem" }}>🕓 Today: 6:30 PM – 8:00 PM</div>
          </div>
        </div>
      </div>
    </div>
  );
}
