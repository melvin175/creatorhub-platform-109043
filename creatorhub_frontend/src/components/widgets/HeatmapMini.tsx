"use client";

import { useMemo } from "react";

/**
 * PUBLIC_INTERFACE
 * Lightweight streak heatmap placeholder.
 */
export function HeatmapMini() {
  const days = 7 * 7; // last ~7 weeks
  const data = useMemo(() => Array.from({ length: days }, () => Math.floor(Math.random() * 4)), [days]);
  const levels = ["#e6f4ec", "#c9ead9", "#9fdbbd", "#67c090"];

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 6 }}>
      {data.map((v, i) => (
        <div
          key={i}
          title={`Day ${i + 1} • level ${v}`}
          style={{
            width: "100%",
            aspectRatio: "1 / 1",
            borderRadius: 6,
            background: levels[v],
            border: "1px solid var(--border)",
          }}
        />
      ))}
    </div>
  );
}
