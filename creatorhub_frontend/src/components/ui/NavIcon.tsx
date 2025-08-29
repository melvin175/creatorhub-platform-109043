"use client";

/** Allow any string key to avoid tight coupling with layout literal types while keeping known options for intellisense. */
type IconName = "dashboard" | "calendar" | "content" | "reports" | "settings" | (string & {});

/**
 * PUBLIC_INTERFACE
 * Sidebar/Navigation icon component rendering minimal inline SVGs.
 */
export function NavIcon({ name }: { name: IconName }) {
  /** Minimal inline SVG icons inspired by Linear/Notion style */
  const common = { width: 18, height: 18, stroke: "currentColor", strokeWidth: 1.5, fill: "none", strokeLinecap: "round", strokeLinejoin: "round" } as const;

  if (name === "dashboard") {
    return (
      <svg {...common} className="icon" viewBox="0 0 24 24">
        <path d="M3 13h8V3H3v10Z" />
        <path d="M13 21h8v-8h-8v8Z" />
        <path d="M13 3v6h8V3h-8Z" />
        <path d="M3 21h8v-6H3v6Z" />
      </svg>
    );
  }

  if (name === "calendar") {
    return (
      <svg {...common} className="icon" viewBox="0 0 24 24">
        <path d="M7 2v4" />
        <path d="M17 2v4" />
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M3 10h18" />
      </svg>
    );
  }

  if (name === "content") {
    return (
      <svg {...common} className="icon" viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M7 8h10" />
        <path d="M7 12h10" />
        <path d="M7 16h7" />
      </svg>
    );
  }

  if (name === "reports") {
    return (
      <svg {...common} className="icon" viewBox="0 0 24 24">
        <path d="M4 20V9" />
        <path d="M10 20V4" />
        <path d="M16 20v-6" />
        <path d="M22 20V7" />
      </svg>
    );
  }

  if (name === "settings") {
    return (
      <svg {...common} className="icon" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.05.05a2 2 0 1 1-2.83 2.83l-.05-.05a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V22a2 2 0 1 1-4 0v-.07a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.05.05a2 2 0 1 1-2.83-2.83l.05-.05a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H2a2 2 0 1 1 0-4h.07a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.05-.05A2 2 0 1 1 6.03 3.4l.05.05a1.65 1.65 0 0 0 1.82.33H8a1.65 1.65 0 0 0 1-1.51V2a2 2 0 1 1 4 0v.07a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.05-.05a2 2 0 1 1 2.83 2.83l-.05.05a1.65 1.65 0 0 0-.33 1.82V8c0 .66.39 1.26.99 1.51.16.07.33.1.51.1H22a2 2 0 1 1 0 4h-.07a1.65 1.65 0 0 0-1.51 1Z" />
      </svg>
    );
  }

  // Fallback: generic gear-like icon for unknown names
  return (
    <svg {...common} className="icon" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.05.05a2 2 0 1 1-2.83 2.83l-.05-.05a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V22a2 2 0 1 1-4 0v-.07a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.05.05a2 2 0 1 1-2.83-2.83l.05-.05a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H2a2 2 0 1 1 0-4h.07a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.05-.05A2 2 0 1 1 6.03 3.4l.05.05a1.65 1.65 0 0 0 1.82.33H8a1.65 1.65 0 0 0 1-1.51V2a2 2 0 1 1 4 0v.07a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.05-.05a2 2 0 1 1 2.83 2.83l-.05.05a1.65 1.65 0 0 0-.33 1.82V8c0 .66.39 1.26.99 1.51.16.07.33.1.51.1H22a2 2 0 1 1 0 4h-.07a1.65 1.65 0 0 0-1.51 1Z" />
    </svg>
  );
}
