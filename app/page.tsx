export default function Home() {
  return (
    <mainimport Link from "next/link";

const benefits = [
  {
    title: "Classé par coût annuel",
    text: "Un prélèvement de 4 € par mois passe inaperçu. À 48 € par an, il se remarque. Ta liste commence par ce qui coûte le plus.",
  },
  {
    title: "Une lettre de résiliation prête",
    text: "Pour chaque abonnement repéré, une lettre à envoyer. Tu relis, tu envoies, c’est réglé.",
  },
  {
    title: "Ton relevé reste chez toi",
    text: "Le fichier est lu sur ton téléphone. Il n’est ni envoyé ni stocké sur nos serveurs.",
  },
];

export default function Home() {
  return (
    <main className="page">
      <header className="top">
        <span className="logo">Fantômes</span>
      </header>

      <section className="hero">
        <h1>Trouve les abonnements que tu paies sans t’en servir.</h1>
        <p className="lead">
          Dépose ton relevé bancaire. On repère les prélèvements oubliés, on les
          classe par coût annuel et on te prépare la lettre de résiliation.
        </p>
        <Link href="/commencer" className="cta">
          Commencer, c’est gratuit
        </Link>
        <p className="fine">Sans carte bancaire. Sans compte à créer.</p>
      </section>

      <section className="pain">
        <p className="pain-figure">120 €</p>
        <p className="pain-text">
          C’est ce que coûte, en un an, un seul abonnement oublié à 9,99 € par
          mois. Ces prélèvements sont petits, donc invisibles sur un relevé, et
          ils tournent parfois pendant des années.
        </p>
      </section>

      <ol className="benefits">
        {benefits.map((b, i) => (
          <li className="benefit" key={b.title}>
            <span className="benefit-num">0{i + 1}</span>
            <h3>{b.title}</h3>
            <p>{b.text}</p>
          </li>
        ))}
      </ol>

      <section className="closing">
        <h2>Combien de fantômes dans ton relevé ?</h2>
        <Link href="/commencer" className="cta">
          Commencer, c’est gratuit
        </Link>
      </section>

      <footer className="footer">
        <p>Fantômes. Reprends la main sur tes charges fixes.</p>
      </footer>
    </main>
  );
}
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 24px",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: 48, margin: 0 }}>Fantômes</h1>
      <p style={{ marginTop: 16, maxWidth: 360, fontSize: 18 }}>
        Débusque les abonnements qu&apos;on paie sans s&apos;en servir.
      </p>
    </main>
  );
}
