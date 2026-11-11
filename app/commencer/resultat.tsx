import Link from "next/link";
import type { Option } from "./questions";

export default function Resultat({ answers }: { answers: Option[] }) {
  const monthly = answers[2]?.value ?? 0;
  const yearly = monthly * 12;

  return (
    <section>
      <p className="step-count">Ton estimation</p>
      <h1>Voilà ce que tes abonnements te coûtent.</h1>
      <div className="pain" style={{ marginTop: "1.75rem" }}>
        <p className="pain-figure">{yearly.toLocaleString("fr-FR")} €</p>
        <p className="pain-text">
          par an, d’après ton estimation de {monthly} € par mois. Tu penses
          avoir {answers[0]?.label} abonnements.
        </p>
      </div>
      <p className="end-note">
        Ce chiffre vient de ce que tu crois dépenser. Ton relevé bancaire
        donnera la vraie somme, et c’est l’étape suivante.
      </p>
      <Link href="/" className="cta">
        Revenir à l’accueil
      </Link>
    </section>
  );
}
