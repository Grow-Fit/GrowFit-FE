import localFont from "next/font/local"

import QueryProvider from "@/queries/QueryProvider"

import "@/styles/globals.scss"
import Layout from "@/components/layout/Layout";
import Header from "@/components/layout/Header";
import Navigation from "@/components/layout/Navigation";

const Pretendard = localFont({
  src: "../styles/fonts/PretendardVariable.woff2",
})

export const metadata = {
  title: '건강한 성장의 시작, 그로우핏(GrowFit)',
  icons: {
    icon: '/favicon.ico',
  },
}

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
