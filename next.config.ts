import type { NextConfig } from "next"

import path from "path"

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
    prependData: `
      @use "colors" as *;
      @use "typography" as *;
      @use "variables" as *;
    `,
  },
  modularizeImports: {},
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
        },
      ],
    })
    return config
  },
  // CORS 우회를 위한 프록시 설정 추가
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://api.growfit.co.kr/api/:path*",
      },
    ]
  },
}
export default nextConfig
