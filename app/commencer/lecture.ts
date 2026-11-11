import { parseAmount, parseDate, split } from "./csv";

export type Row = { t: number; out: number; key: string };

const NOISE = new Set([
  "PRLV", "SEPA", "CB", "CARTE", "PAIEMENT", "PAR", "ACHAT", "DU", "VIR",
  "FACTURE", "PRELEVEMENT", "REF", "ECH", "DE", "LA", "LE", "LES", "ET",
]);

function keyOf(label: string): string {
  return label
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase()
    .replace(/[^A-Z ]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 1 && !NOISE.has(w))
    .slice(0, 2)
    .join(" ");
}

export function readRows(text: string): Row[] {
  const used = text
    .replace(/^\uFEFF/, "")
    .split(/\r?\n/)
    .filter((l) => l.trim());
  const head = used.slice(0, 15).join("\n");
  const count = (c: string) => head.split(c).length;
  const sep = [";", "\t", ","].sort((a, b) => count(b) - count(a))[0];
  const h = used.findIndex(
    (l) => /date/i.test(l) && /libell|montant|d[ée]bit|descri|intitul/i.test(l),
  );
  if (h <
