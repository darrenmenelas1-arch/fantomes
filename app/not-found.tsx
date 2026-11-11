import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page simple">
      <h1>Cette page n’existe pas.</h1>
      <p>Le lien est peut-être cassé, ou la page n’est pas encore prête.</p>
      <Link href="/" className="cta">
        Revenir à l’accueil
      </Link>
    </main>
  );
}
