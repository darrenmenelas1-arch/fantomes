import { ImageResponse } from "next/og";

export const alt = "Fantômes — Trouve les abonnements que tu paies sans t’en servir";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f6f0e4",
          color: "#0f1b3d",
          padding: 72,
        }}
      >
        <div style={{ display: "flex", fontSize: 44, fontWeight: 800 }}>
          Fantômes
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 84,
            fontWeight: 800,
            lineHeight: 1.05,
          }}
        >
          Trouve les abonnements que tu paies sans t’en servir.
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 40,
            fontWeight: 700,
          }}
        >
          <div
            style={{
              display: "flex",
              background: "#e8431f",
              border: "4px solid #0f1b3d",
              borderRadius: 20,
              padding: "16px 36px",
            }}
          >
            Commencer, c’est gratuit
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
