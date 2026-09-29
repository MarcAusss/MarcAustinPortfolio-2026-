import { ImageResponse } from "next/og";

/*
|--------------------------------------------------------------------------
| Link preview image for the developer section
|--------------------------------------------------------------------------
|
| Shared by opengraph-image.tsx and twitter-image.tsx.
|
*/

export const socialImageAlt =
  "Marc Austin, Laravel & React Developer. Built 5 internal systems for DOLE Regional Office V.";

export const socialImageSize = {
  width: 1200,
  height: 630,
};

export function renderSocialImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#f3f1ec",
          color: "#141414",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            letterSpacing: 5,
            textTransform: "uppercase",
            color: "#595550",
          }}
        >
          <span>Marc Austin</span>
          <span>Philippines · US hours</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 96,
              lineHeight: 1,
              letterSpacing: -3,
            }}
          >
            Laravel &amp; React Developer
          </div>

          <div
            style={{
              marginTop: 36,
              fontSize: 36,
              lineHeight: 1.35,
              color: "#595550",
              maxWidth: 940,
            }}
          >
            Built 5 internal systems for DOLE Regional Office V, including a
            PPE inventory used by every provincial office in the region.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            height: 4,
            width: 96,
            background: "#141414",
          }}
        />
      </div>
    ),
    socialImageSize,
  );
}
