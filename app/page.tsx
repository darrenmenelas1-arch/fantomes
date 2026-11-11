export default function Home() {
  return (
    <main
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
