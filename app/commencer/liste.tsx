import type { Fantome } from "./detect";

function eur(n: number, digits = 0): string {
  return n.toLocaleString("fr-FR", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
}

type Props = { list: Fantome[]; onRetry: () => void };

export default function Liste({ list, onRetry }: Props) {
  if (list.length === 0) {
    return (
      <section>
        <h1>Aucun prélèvement régulier trouvé.</h1>
        <p className="lead">
          Vérifie que le fichier couvre au moins 3 mois, ou essaie un autre
          export.
        </p>
        <button
          type="button"
          className="cta"
          onClick={onRetry}
          style={{ width: "100%", fontFamily: "inherit", cursor: "pointer" }}
        >
          Réessayer
        </button>
      </section>
    );
  }
  const total = list.reduce((sum, f) => sum + f.yearly, 0);
  return (
    <section>
      <p className="step-count">Ton relevé</p>
      <h1>Tes prélèvements réguliers, du plus cher au moins cher.</h1>
      <div className="pain" style={{ marginTop: "1.75rem" }}>
        <p className="pain-figure">{eur(total)}</p>
        <p className="pain-text">
          par an, sur {list.length} prélèvement{list.length > 1 ? "s" : ""}.
          Tous ne sont pas des fantômes : à toi de trier.
        </p>
      </div>
      <ol className="benefits">
        {list.map((f) => (
          <li className="benefit" key={f.name}>
            <h3>{f.name}</h3>
            <p>
              {eur(f.yearly)} par an ({eur(f.monthly, 2)} par mois)
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
