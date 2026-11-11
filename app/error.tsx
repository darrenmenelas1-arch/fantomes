"use client";

import Link from "next/link";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <main className="page simple">
      <h1>Un fantôme s’est glissé dans la page.</h1>
      <p>Quelque chose n’a pas fonctionné. Ce n’est pas de ta faute.</p>
      <button
        type="button"
        onClick={reset}
        className="cta"
        style={{ width: "100%", fontFamily: "inherit", cursor: "pointer" }}
      >
        Réessayer
      </button>
      <p className="fine">
        <Link href="/">Revenir à l’accueil</Link>
      </p>
    </main>
  );
}
