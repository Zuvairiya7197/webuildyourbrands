import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "We Build Your Brands - High-converting websites built to bring inquiries";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          display: "flex",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          background:
            "radial-gradient(circle at 14% 12%, rgba(22, 216, 255, 0.26), transparent 30%), radial-gradient(circle at 86% 10%, rgba(124, 60, 255, 0.42), transparent 32%), linear-gradient(135deg, #00001f 0%, #060025 46%, #18004b 100%)",
          color: "white",
          fontFamily: "Inter, Arial, sans-serif"
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(0, 0, 31, 0.24), rgba(255, 255, 255, 0.04), rgba(0, 0, 31, 0.2))"
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 70,
            right: 70,
            top: 54,
            bottom: 54,
            border: "1px solid rgba(255, 255, 255, 0.18)",
            borderRadius: 44,
            background:
              "linear-gradient(145deg, rgba(255, 255, 255, 0.105), rgba(22, 216, 255, 0.045) 34%, rgba(124, 60, 255, 0.12) 72%, rgba(0, 0, 31, 0.56))"
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
            padding: "86px 94px"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
            <div
              style={{
                display: "flex",
                height: 84,
                width: 84,
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: 24,
                background: "rgba(0, 0, 31, 0.72)"
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element -- next/og renders static preview images and cannot use next/image here. */}
              <img
                src="https://webuildyourbrands.com/wbyblogo.webp"
                width="74"
                height="74"
                alt=""
                style={{ objectFit: "contain" }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div
                style={{
                  display: "flex",
                  color: "rgba(255, 255, 255, 0.9)",
                  fontSize: 32,
                  fontWeight: 800,
                  letterSpacing: "-0.02em"
                }}
              >
                We Build Your Brands
              </div>
              <div
                style={{
                  display: "flex",
                  color: "rgba(207, 247, 255, 0.68)",
                  fontSize: 20,
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase"
                }}
              >
                Custom websites built to convert
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 30, maxWidth: 900 }}>
            <div
              style={{
                display: "flex",
                fontSize: 74,
                fontWeight: 850,
                lineHeight: 1.02,
                letterSpacing: "-0.04em"
              }}
            >
              High-converting websites that turn visitors into clients.
            </div>
            <div
              style={{
                display: "flex",
                maxWidth: 790,
                color: "rgba(255, 255, 255, 0.72)",
                fontSize: 30,
                lineHeight: 1.32,
                fontWeight: 500
              }}
            >
              Premium design, clear messaging, fast performance, and conversion-focused structure.
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", gap: 14 }}>
              {["Fast to load", "Built to convert", "Ready for leads"].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    borderRadius: 999,
                    background: "rgba(255, 255, 255, 0.055)",
                    padding: "14px 20px",
                    color: "rgba(255, 255, 255, 0.82)",
                    fontSize: 20,
                    fontWeight: 800
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
            <div
              style={{
                display: "flex",
                borderRadius: 999,
                background: "linear-gradient(110deg, #001173 0%, #08015e 48%, #220067 100%)",
                padding: "16px 24px",
                color: "#fff",
                fontSize: 22,
                fontWeight: 850
              }}
            >
              webuildyourbrands.com
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
