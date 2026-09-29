import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        // The developer portfolio is the front page; photography lives at /photography.
        source: "/",
        destination: "/developer",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
