import React from "react"
import styles from "./layout.module.scss"

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div className={styles.container}>{children}</div>
}
