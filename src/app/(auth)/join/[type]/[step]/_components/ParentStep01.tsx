"use client"

import { useState } from "react"
import Link from "next/link"

import Input from "@/components/common/input/input"

import pageStyles from "../page.module.scss"
import styles from "./steps.module.scss"

interface Props {
  currentStep: number
}

const ParentStep01 = ({ currentStep }: Props) => {
  const [nickname, setNickname] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value)
  }
  return (
    <>
      <div className={styles.box__step1}>
        <Input
          id="parentNickname"
          type="text"
          inputSize="w-full"
          variant="withLabel"
          shape="border"
          label="닉네임"
          placeholder="닉네임 입력"
          onChange={handleChange}
          value={nickname}
        />
      </div>
      <Link
        href={`/join/parent/${currentStep + 1}`}
        aria-disabled={nickname === ""}
        className={`btn-comm large filled rounded ${pageStyles.join__content__btn}`}>
        다음
      </Link>
    </>
  )
}
export default ParentStep01
