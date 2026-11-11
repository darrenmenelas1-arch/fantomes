import { median } from "./csv";
import { readRows } from "./lecture";
import type { Row } from "./lecture";

export type Fantome = {
  name: string;
  monthly: number;
  yearly: number;
  count: number;
};

export function detect(text: string): Fantome[] {
  const groups = new Map<string, Row[]>();
  for (const r of readRows(text)) {
    groups.set(r.key, [...(groups.get(r.key) ?? []), r]);
  }
  const found: Fantome[] = [];
  for (const [key, all] of groups) {
    const med = median(all.map((r) => r.out));
    const rows = all
      .filter((r) => Math.abs(r.out - med) <= med * 0.2)
      .sort((a, b) => a.t - b.t);
    const months = new Set(
      rows.map((r) => new Date(r.t).toISOString().slice(0, 7)),
    );
    if (rows.length < 3 || months.size < 3) continue;
    const gaps = rows.slice(1).map((r, i) => (r.t - rows[i].t) / 864e5);
    const gap = median(gaps);
    if (gap < 25 || gap > 35) continue;
    const name = key.charAt(0) + key.slice(1).toLowerCase();
    const yearly = Math.round(med * 12);
    found.push({ name, monthly: med, yearly, count: rows.length });
  }
  return found.sort((a, b) => b.yearly - a.yearly);
}
