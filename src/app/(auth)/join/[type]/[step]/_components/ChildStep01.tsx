"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

import CameraIcon from "@/assets/icons/common/icon-24-camera.svg"
import Button from "@/components/common/button/button"
import Input from "@/components/common/input/input"
import { useGetChildInfoByQr } from "@/hooks/auth/useChildAuth"
import { useUserStore } from "@/stores/userStore"

import pageStyles from "../page.module.scss"
import styles from "./steps.module.scss"

const ChildStep01 = () => {
  const { updateChild } = useUserStore()
  const [qrValue, setQrValue] = useState("")
  const { mutate } = useGetChildInfoByQr()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQrValue(e.target.value)
  }
  const handleClickNext = () => {
    mutate({
      code: qrValue,
    })
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
      <Button
        label="다음"
        shape="rounded"
        size="large"
        variant="filled"
        classNames={pageStyles.join__content__btn}
        onClick={handleClickNext}
        aria-disabled={qrValue === ""}
      />
    </>
  )
}
export default ChildStep01
