"use client"
import styles from "./amount.module.scss"
import { useState } from "react"

const Amount = () => {
  const [amount, setAmount] = useState(1)

  const increase = () => setAmount((prev) => prev + 1)
  const decrease = () => setAmount((prev) => (prev > 1 ? prev - 1 : 1)) // 최소값 1 제한

  return (
    <div className={styles.amount}>
      <button onClick={decrease} className={styles.button}>
        -
      </button>
      <span className={styles.value}>{amount}</span>
      <button onClick={increase} className={styles.button}>
        +
      </button>
    </div>
  )
}
export default Amount
