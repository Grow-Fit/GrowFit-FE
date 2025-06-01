"use client"
import React from "react";
import DefaultHeader from "@/components/layout/header/DefaultHeader";
import Navigation from "@/components/layout/Navigation";
import styles from "./layout.module.scss"

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <DefaultHeader/>
      <div>
        <main className={styles.container}>
          {children}
        </main>
        <Navigation/>
      </div>
    </>
  )
}
