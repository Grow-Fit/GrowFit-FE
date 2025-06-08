"use client"
import React from "react"
import styles from "./buttomsheet.module.scss"
import { CloseIcon } from "@/components/common/icon"

const BottomSheet = ({ children, close, title }: { children: React.ReactNode }) => {
  return (
    <div className={styles.bottomsheet}>
      <div className={styles.backdrop}></div>
      <div className={styles.content}>
        <div className={styles.modalHeader}>
          <span></span>
          <h2>{title}</h2>
          <CloseIcon onClick={() => close()} />
        </div>
        {children}
      </div>
    </div>
  )
}

export default BottomSheet
