import { ImageResponse } from "next/og";
import { business } from "@/lib/business";

export const alt = `${business.name} — ${business.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: business.brand.bg,
          color: business.brand.ink,
          fontFamily: "sans-serif",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 64,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 25% 30%, rgba(123,63,242,0.5), transparent 55%), radial-gradient(circle at 75% 70%, rgba(63,242,211,0.5), transparent 55%), radial-gradient(circle at 50% 100%, rgba(255,122,198,0.55), transparent 60%)",
            filter: "blur(20px)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              width: 120,
              height: 120,
              borderRadius: "50%",
              background:
                "linear-gradient(135deg, #7B3FF2 0%, #FF7AC6 35%, #3FF2D3 70%, #C6B6FF 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "70%",
                height: "70%",
                borderRadius: "50%",
                background: business.brand.bg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 60,
                fontWeight: 700,
                color: business.brand.ink,
              }}
            >
              {business.name.charAt(0)}
            </div>
          </div>
          <div
            style={{
              marginTop: 32,
              fontSize: 28,
              letterSpacing: "0.18em",
              fontWeight: 700,
              color: business.brand.ink,
              display: "flex",
            }}
          >
            {business.name}
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 72,
              fontStyle: "italic",
              fontFamily: "serif",
              lineHeight: 1.05,
              maxWidth: 920,
              color: business.brand.ink,
              display: "flex",
            }}
          >
            {business.tagline}
          </div>
          <div
            style={{
              marginTop: 36,
              fontSize: 22,
              fontFamily: "monospace",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#7B3FF2",
              display: "flex",
            }}
          >
            ● {new URL(business.url).hostname}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
