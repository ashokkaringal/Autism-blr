const BLOCKS: { id: string; start: number }[] = [
  { id: "arrive", start: 8 * 60 + 30 },
  { id: "circle", start: 9 * 60 },
  { id: "learn", start: 9 * 60 + 40 },
  { id: "move", start: 11 * 60 },
  { id: "talk", start: 11 * 60 + 30 },
  { id: "lunch", start: 12 * 60 + 30 },
  { id: "make", start: 13 * 60 + 15 },
  { id: "note", start: 14 * 60 + 30 },
  { id: "close", start: 15 * 60 },
];

export function bengaluruClock(now = new Date()) {
  return new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    hour: "numeric",
    minute: "2-digit",
    hourCycle: "h12",
  }).format(now);
}

export function activeBlockId(now = new Date()): string | null {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Kolkata",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(now);
  const weekday = parts.find((part) => part.type === "weekday")?.value ?? "";
  if (weekday.startsWith("Sat") || weekday.startsWith("Sun")) return null;
  const hour = Number(parts.find((part) => part.type === "hour")?.value);
  const minute = Number(parts.find((part) => part.type === "minute")?.value);
  if (Number.isNaN(hour) || Number.isNaN(minute)) return null;
  const mins = hour * 60 + minute;
  if (mins < 8 * 60 + 30 || mins >= 15 * 60 + 20) return null;
  let current = BLOCKS[0]?.id ?? null;
  for (const block of BLOCKS) {
    if (mins >= block.start) current = block.id;
  }
  return current;
}
