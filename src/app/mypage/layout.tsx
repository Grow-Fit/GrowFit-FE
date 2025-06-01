"use client"
import React from "react"
import Navigation from "@/components/layout/Navigation"
import styles from "./layout.module.scss"

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <main className={styles.container}>{children}</main>
}
