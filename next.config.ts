import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
    prependData: `@use "variables" as *;`, // 모든 SCSS 파일에서 자동 적용
  },
};

export default nextConfig;
