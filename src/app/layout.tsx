import localFont from "next/font/local"
import Script from "next/script"

import Layout from "@/components/layout/Layout"
import QueryProvider from "@/queries/QueryProvider"

import "@/styles/globals.scss"

const Pretendard = localFont({
  src: "../styles/fonts/PretendardVariable.woff2",
})

export const metadata = {
  title: "건강한 성장의 시작, 그로우핏(GrowFit)",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={Pretendard.className}>
        <Script
          src="https://t2.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js"
          integrity="sha384-TiCUE00h649CAMonG018J2ujOgDKW/kVWlChEuu4jK2vxfAAD0eZxzCKakxg55G4"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
        <Layout>
          <QueryProvider>{children}</QueryProvider>
        </Layout>
      </body>
    </html>
  )
}
