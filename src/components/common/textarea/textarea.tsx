"use client"
import React from "react"
import styles from "./textarea.module.scss"
import { CloseIcon } from "@/components/common/icon"

const TextArea = ({
  name,
  placeholder,
  onChange,
  value,
}: {
  name: string
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}) => {
  return (
    <div className={styles.textarea}>
      <textarea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={styles.textarea__field}
      />
    </div>
  )
}

export default TextArea
