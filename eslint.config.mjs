import { dirname } from "path"
import { fileURLToPath } from "url"
import { FlatCompat } from "@eslint/eslintrc"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

import importPlugin from "eslint-plugin-import"
import simpleImportSortPlugin from "eslint-plugin-simple-import-sort"

const eslintConfig = [
  {
    ignores: ["**/.next/**", "**/node_modules/**"],
  },
  ...compat.extends("next/core-web-vitals", "next/typescript", "prettier"),
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    plugins: {
      import: importPlugin,
      "simple-import-sort": simpleImportSortPlugin,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react/no-unescaped-entities": "off",
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            // 1. React 관련 라이브러리
            ["^react$", "^react-dom$", "^react-.*", "^next", "^next/.*"],

            // 2. 서드파티 패키지 - 알파벳 순으로 정렬됨
            ["^[a-z@]"],

            // 3. 내부 컴포넌트 (`@/`로 시작하나 @/types, @/interfaces 아닌 것)
            ["^@/(?!types|interfaces).*"],

            // 4. 타입 정의
            ["^@/types", "^@/interfaces"],

            // 5. 스타일 관련
            ["^@/styles", ".*\\.module\\.scss$", ".*\\.scss$", ".*\\.css$"],

            // 6. 에셋
            ["^@/assets", ".*\\.(png|jpg|jpeg|gif|svg)$"],

            // 같은 폴더 내 상대 경로 파일
            ["^\\."],
          ],
        },
      ],
      "simple-import-sort/exports": "error",
      "import/newline-after-import": "error",
    },
  },
]

export default eslintConfig
