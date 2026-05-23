import { ImageResponse } from "next/og";
import { business } from "@/lib/business";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(135deg, #7B3FF2 0%, #FF7AC6 35%, #3FF2D3 70%, #C6B6FF 100%)",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "62%",
            height: "62%",
            borderRadius: "50%",
            background: business.brand.bg,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: business.brand.ink,
            fontSize: 18,
            fontWeight: 700,
            fontFamily: "sans-serif",
          }}
        >
          {business.name.charAt(0)}
        </div>
      </div>
    ),
    { ...size }
  );
}
