import type { Metadata } from "import type { Metadata, Viewport } from "next";
import { Fraunces, Instrument_Sans } from "next/font/google";
import "./globals.css";

const serif = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const title = "Fantômes — Trouve les abonnements que tu paies sans t’en servir";
const description =
  "Dépose ton relevé bancaire : on repère les prélèvements oubliés, on les classe par coût annuel et on prépare ta lettre de résiliation.";

export const metadata: Metadata = {
  metadataBase: new URL("https://fantomes-pearl-tau.vercel.app"),
  title,
  description,
  openGraph: {
    title,
    description,
    siteName: "Fantômes",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f6f0e4",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}

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
