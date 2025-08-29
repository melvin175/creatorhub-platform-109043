"use client";

import { useState } from "react";

type Item = { id: string; title: string };

export default function CalendarPage() {
  const [items, setItems] = useState<Item[]>([
    { id: "1", title: "Post: Product Teaser" },
    { id: "2", title: "Video: Behind the Scenes" },
    { id: "3", title: "Thread: Feature Tips" },
  ]);

  const onDrop = (day: number, e: React.DragEvent<HTMLDivElement>) => {
    const id = e.dataTransfer.getData("text/plain");
    const moved = items.find((i) => i.id === id);
    if (!moved) return;
    setItems((prev) => prev.map((p) => (p.id === id ? { ...p, title: `${p.title.split(" • ")[0]} • Day ${day}` } : p)));
  };

  return (
    <div className="grid" style={{ gap: "1rem" }}>
      <div className="card" style={{ padding: "1rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: ".5rem" }}>
          <div style={{ fontWeight: 700 }}>Content Calendar</div>
          <select className="select" style={{ marginLeft: "auto", maxWidth: 160 }}>
            <option>Monthly</option>
            <option>Weekly</option>
            <option>Daily</option>
          </select>
        </div>
        <div className="grid grid-4" style={{ marginTop: ".8rem" }}>
          {Array.from({ length: 12 }, (_, i) => i + 1).map((d) => (
            <div
              key={d}
              className="surface"
              style={{ minHeight: 120, padding: ".6rem" }}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => onDrop(d, e)}
            >
              <div style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 6 }}>Day {d}</div>
              {items
                .filter((it) => it.title.includes(`Day ${d}`))
                .map((it) => (
                  <div key={it.id} className="card" style={{ padding: ".5rem .6rem", marginBottom: ".4rem" }}>
                    {it.title}
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>

      <div className="card" style={{ padding: "1rem" }}>
        <div style={{ fontWeight: 700, marginBottom: ".5rem" }}>Unscheduled</div>
        <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
          {items
            .filter((it) => !it.title.includes("Day"))
            .map((it) => (
              <div
                key={it.id}
                className="btn"
                draggable
                onDragStart={(e) => e.dataTransfer.setData("text/plain", it.id)}
                title="Drag to a day"
              >
                📌 {it.title}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
