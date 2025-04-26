import localFont from "next/font/local"

import QueryProvider from "@/queries/QueryProvider"

import "@/styles/globals.scss"
import Layout from "@/components/layout/Layout";

const Pretendard = localFont({
  src: "../styles/fonts/PretendardVariable.woff2",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={Pretendard.className}>
        <Layout>
          <QueryProvider>{children}</QueryProvider>
        </Layout>
      </body>
    </html>
  )
}
