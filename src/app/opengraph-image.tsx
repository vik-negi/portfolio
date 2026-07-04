import { ImageResponse } from "next/og";
import { profile } from "@/data/portfolio";

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
          alignItems: "center",
          justifyContent: "center",
          background: "#f7f4ee",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            width: 96,
            height: 96,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 24,
            background: "#b5482f",
            color: "#f7f4ee",
            fontSize: 44,
            fontWeight: 700,
            fontStyle: "italic",
            fontFamily: "serif",
            marginBottom: 32,
          }}
        >
          VN
        </div>
        <div style={{ display: "flex", fontSize: 64, fontWeight: 700, fontFamily: "serif", color: "#1c1a17" }}>
          {profile.name}
        </div>
        <div style={{ display: "flex", fontSize: 32, color: "#6b6459", marginTop: 16 }}>
          {profile.role} · Systems, Backend &amp; Mobile
        </div>
      </div>
    ),
    { ...size }
  );
}
