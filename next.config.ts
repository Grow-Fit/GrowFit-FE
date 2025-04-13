import type { NextConfig } from "next"

import path from "path"

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
    prependData: `
      @use "colors" as *;
      @use "typography" as *;
    `,
  },
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
}
export default nextConfig

