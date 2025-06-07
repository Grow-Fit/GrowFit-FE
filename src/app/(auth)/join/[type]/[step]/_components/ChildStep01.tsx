"use client"

import { useState } from "react"
import Link from "next/link"

import CameraIcon from "@/assets/icons/common/icon-24-camera.svg"
import Input from "@/components/common/input/input"

import pageStyles from "../page.module.scss"
import styles from "./steps.module.scss"

interface Props {
  currentStep: number
}

const ChildStep01 = ({ currentStep }: Props) => {
  const [qrValue, setQrValue] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQrValue(e.target.value)
  }
  return (
    <>
      <div className={styles.box__step1}>
        <Input
          id="qrCode"
          type="text"
          inputSize="w-full"
          variant="withoutLabel"
          shape="border"
          label="큐알코드"
          placeholder="코드 입력"
          onChange={handleChange}
          value={qrValue}
        />
        <button type="button" className={styles.btn_qr}>
          QR 스캔하기
          <CameraIcon />
        </button>
      </div>
      <Link
        href={`/join/child/${currentStep + 1}`}
        passHref
        aria-disabled={qrValue === ""}
        className={`btn-comm large filled rounded ${pageStyles.join__content__btn}`}>
        다음
      </Link>
    </>
  )
}
export default ChildStep01
