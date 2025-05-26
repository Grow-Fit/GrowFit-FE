"use client"
import React from "react";
import styles from "./textarea.module.scss"
import {CloseIcon} from "@/components/common/icon";
const TextArea = ({placeholder} : { placeholder: string }) => {
  return (
    <div className={styles.textarea}>
      <textarea
        className={styles.textarea__field}
        placeholder={placeholder}
      />
    </div>
  )
}

export default TextArea