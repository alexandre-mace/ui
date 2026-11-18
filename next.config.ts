import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Les seuls next/image du kit sont des emojis déjà `unoptimized`. Avec la config
    // par défaut, les images de /public restaient transformables en 15 largeurs sur
    // le quota Hobby de 5 000 par mois. Tout servi tel quel : zéro transformation,
    // plus de /_next/image.
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow, noarchive, nosnippet, noimageindex",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
