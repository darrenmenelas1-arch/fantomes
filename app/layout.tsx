import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fantômes",
  description: "Débusque les abonnements qu'on paie sans s'en servir.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
