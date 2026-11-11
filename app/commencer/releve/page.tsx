"use client";

import Link from "next/link";
import { useState } from "react";
import "../commencer.css";
import { detect } from "../detect";
import type { Fantome } from "../detect";
import Liste from "../liste";

async function readFile(file: File): Promise<string> {
  const buf = await file.arrayBuffer();
  try {
    return new TextDecoder("utf-8", { fatal: true }).decode(buf);
  } catch {
    return new TextDecoder("windows-1252").decode(buf);
  }
}

export default function Releve() {
  const [list, setList] = useState<Fantome[] | null>(null);
  const [error, setError] = useState("");

  async function onFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setError("");
    if (file.size > 5_000_000) {
      setError("Ce fichier est trop gros. Exporte seulement 6 mois.");
      return;
    }
    try {
      setList(detect(await readFile(file)));
    } catch {
      setError("Impossible de lire ce fichier. Essaie un export CSV.");
    }
  }

  return (
    <main className="page quiz">
      <div className="quiz-top">
        <Link href="/commencer" className="back" aria-label="Retour">
          ←
        </Link>
      </div>
      {list ? (
        <Liste list={list} onRetry={() => setList(null)} />
      ) : (
        <section>
          <h1>Dépose ton relevé bancaire.</h1>
          <p className="lead">
            Un fichier CSV d’au moins 3 mois. Il est lu sur ton téléphone : il
            n’est envoyé nulle part.
          </p>
          <label htmlFor="releve" className="cta" style={{ cursor: "pointer" }}>
            Choisir mon fichier CSV
          </label>
          <input
            id="releve"
            type="file"
            accept=".csv,.txt,text/csv,text/plain"
            onChange={onFile}
            style={{ position: "absolute", opacity: 0, width: 1, height: 1 }}
          />
          {error && (
            <p className="fine" role="alert">
              {error}
            </p>
          )}
        </section>
      )}
    </main>
  );
}
