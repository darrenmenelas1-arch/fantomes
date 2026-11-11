export function split(line: string, sep: string): string[] {
  const out: string[] = [];
  let cur = "";
  let quoted = false;
  for (const ch of line) {
    if (ch === '"') quoted = !quoted;
    else if (ch === sep && !quoted) {
      out.push(cur);
      cur = "";
    } else cur += ch;
  }
  out.push(cur);
  return out.map((c) => c.trim());
}

export function parseDate(raw: string): number | null {
  const s = raw.trim();
  const iso = s.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (iso) return Date.UTC(+iso[1], +iso[2] - 1, +iso[3]);
  const fr = s.match(/^(\d{1,2})[/.-](\d{1,2})[/.-](\d{2,4})/);
  if (!fr) return null;
  const year = +fr[3] < 100 ? 2000 + +fr[3] : +fr[3];
  return Date.UTC(year, +fr[2] - 1, +fr[1]);
}

export function parseAmount(raw: string): number {
  let s = raw.replace(/[\s€$]/g, "");
  if (s.includes(",") && s.includes(".")) s = s.replace(".", "");
  return Number.parseFloat(s.replace(",", "."));
}

export function median(values: number[]): number {
  const s = [...values].sort((a, b) => a - b);
  const m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
}
