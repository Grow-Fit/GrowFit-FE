"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

import Button from "@/components/common/button/button"
import Input from "@/components/common/input/input"
import { useUserStore } from "@/stores/userStore"

import pageStyles from "../page.module.scss"
import styles from "./steps.module.scss"

const ParentStep01 = () => {
  const router = useRouter()
  const { updateUser } = useUserStore()
  const [nickname, setNickname] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value)
  }

  const handleClickNext = () => {
    updateUser({
      nickname: nickname,
    })
    router.push("/join/parent/2")
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
      <Button
        label="다음"
        shape="rounded"
        size="large"
        variant="filled"
        classNames={pageStyles.join__content__btn}
        onClick={handleClickNext}
        aria-disabled={nickname === ""}
      />
    </>
  )
}
export default ParentStep01
