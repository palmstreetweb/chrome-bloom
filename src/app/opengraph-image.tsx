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
          padding: 64,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Iridescent orb */}
        <div
          style={{
            position: "absolute",
            top: -200,
            right: -160,
            width: 720,
            height: 720,
            borderRadius: "50%",
            background:
              "linear-gradient(135deg, #7B3FF2 0%, #FF7AC6 30%, #3FF2D3 60%, #C6B6FF 100%)",
            filter: "blur(60px)",
            opacity: 0.7,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -160,
            left: -100,
            width: 520,
            height: 520,
            borderRadius: "50%",
            background: "radial-gradient(circle, #C6B6FF, transparent 70%)",
            filter: "blur(40px)",
            opacity: 0.6,
            display: "flex",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            flex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              fontFamily: "sans-serif",
            }}
          >
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: "50%",
                background:
                  "linear-gradient(135deg, #7B3FF2 0%, #FF7AC6 35%, #3FF2D3 70%, #C6B6FF 100%)",
                display: "flex",
              }}
            />
            <div
              style={{
                fontSize: 32,
                fontWeight: 700,
                letterSpacing: "0.16em",
                color: business.brand.ink,
                display: "flex",
              }}
            >
              {business.name}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", maxWidth: 980 }}>
            <div
              style={{
                fontSize: 24,
                color: business.brand.inkMuted,
                marginBottom: 12,
                display: "flex",
              }}
            >
              Hi. We are {business.name} —
            </div>
            <div
              style={{
                fontSize: 86,
                fontWeight: 400,
                fontStyle: "italic",
                fontFamily: "serif",
                lineHeight: 1.02,
                letterSpacing: "-0.02em",
                color: business.brand.ink,
                display: "flex",
                flexWrap: "wrap",
                gap: 16,
              }}
            >
              <span>Software with a</span>
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #7B3FF2 0%, #FF7AC6 35%, #3FF2D3 70%, #7B3FF2 100%)",
                  backgroundClip: "text",
                  color: "transparent",
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontFamily: "sans-serif",
                  display: "flex",
                }}
              >
                soft chrome finish.
              </span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              fontFamily: "monospace",
              fontSize: 18,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: business.brand.ink,
              paddingTop: 24,
              borderTop: `1px solid ${business.brand.ink}33`,
            }}
          >
            <span>02 slots — Summer ’26</span>
            <span style={{ color: "#7B3FF2", display: "flex" }}>
              {new URL(business.url).hostname}
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
