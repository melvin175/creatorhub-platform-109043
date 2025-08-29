"use client";

import { useEffect, useRef } from "react";

/**
 * PUBLIC_INTERFACE
 * Minimal canvas sparkline chart placeholder with mock data.
 */
export function MiniChart() {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;

    const w = (c.width = c.clientWidth * devicePixelRatio);
    const h = (c.height = c.clientHeight * devicePixelRatio);
    ctx.scale(devicePixelRatio, devicePixelRatio);

    // Mock data
    const data = Array.from({ length: 24 }, () => 40 + Math.random() * 60);
    const max = Math.max(...data);
    const min = Math.min(...data);

    // Axis baseline
    ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue("--border").trim();
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(8, h / devicePixelRatio - 18);
    ctx.lineTo(w / devicePixelRatio - 8, h / devicePixelRatio - 18);
    ctx.stroke();

    // Line
    ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue("--primary").trim();
    ctx.lineWidth = 2;
    ctx.beginPath();
    const padX = 10;
    const padY = 22;
    data.forEach((v, i) => {
      const x = padX + (i / (data.length - 1)) * ((w / devicePixelRatio) - padX * 2);
      const y = padY + (1 - (v - min) / (max - min + 0.0001)) * ((h / devicePixelRatio) - padY * 2);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();

    // Fill
    const grad = ctx.createLinearGradient(0, 0, 0, h / devicePixelRatio);
    grad.addColorStop(0, "rgba(103,192,144,0.25)");
    grad.addColorStop(1, "rgba(103,192,144,0.00)");
    ctx.fillStyle = grad;
    ctx.lineTo(w / devicePixelRatio - padX, h / devicePixelRatio - 18);
    ctx.lineTo(padX, h / devicePixelRatio - 18);
    ctx.closePath();
    ctx.fill();
  }, []);

  return <canvas ref={ref} style={{ width: "100%", height: 180, display: "block", borderRadius: 10 }} aria-label="Mini trend chart" />;
}
