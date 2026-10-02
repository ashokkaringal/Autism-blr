type Props = { id: string };

export function Glyph({ id }: Props) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      {id === "wake" ? (
        <>
          <circle cx="24" cy="24" r="7" {...common} />
          <path d="M24 7v5M24 36v5M7 24h5M36 24h5M12 12l3.5 3.5M32.5 32.5 36 36M36 12l-3.5 3.5M15.5 32.5 12 36" {...common} />
        </>
      ) : null}
      {id === "wash" ? <path d="M24 8c6 8 10 12 10 18a10 10 0 0 1-20 0c0-6 4-10 10-18z" {...common} /> : null}
      {id === "breakfast" ? (
        <>
          <path d="M10 30c2 6 8 8 14 8s12-2 14-8" {...common} />
          <path d="M8 30h32" {...common} />
        </>
      ) : null}
      {id === "bus" ? (
        <>
          <rect x="8" y="12" width="32" height="18" rx="3" {...common} />
          <path d="M8 22h32M16 12v10M32 12v10" {...common} />
          <circle cx="16" cy="34" r="3" {...common} />
          <circle cx="32" cy="34" r="3" {...common} />
        </>
      ) : null}
      {id === "school" ? <path d="M8 20 24 10l16 10v16H8V20zM20 36V26h8v10" {...common} /> : null}
      {id === "garden" ? <path d="M24 40V22M24 26c-8-2-12-10-10-16 8 2 12 10 10 16zM24 28c8-2 12-10 10-16-8 2-12 10-10 16z" {...common} /> : null}
      {id === "lunch" ? (
        <>
          <circle cx="24" cy="26" r="12" {...common} />
          <circle cx="24" cy="26" r="5" {...common} />
        </>
      ) : null}
      {id === "music" ? <path d="M20 34V16l16-4v16M20 34a4 4 0 1 1-4-4 4 4 0 0 1 4 4zM36 28a4 4 0 1 1-4-4 4 4 0 0 1 4 4z" {...common} /> : null}
      {id === "home" ? <path d="M8 22 24 10l16 12M12 20v16h24V20" {...common} /> : null}
      {id === "sleep" ? <path d="M30 14a12 12 0 1 0 6 22 14 14 0 1 1-6-22z" {...common} /> : null}
    </svg>
  );
}
