"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

import Button from "@/components/common/button/button"
import Input from "@/components/common/input/input"
import { useUserStore } from "@/stores/userStore"

import pageStyles from "../page.module.scss"
import styles from "./steps.module.scss"

const ParentStep01 = () => {
  const router = useRouter()
  const { updateParent } = useUserStore()
  const [nickname, setNickname] = useState("")
  const [error, setError] = useState("")

  // 닉네임 유효성 검증 함수
  const validateNickname = (value: string) => {
    // 빈 값 체크
    if (!value.trim()) {
      return "닉네임을 입력해주세요"
    }

    // 길이 체크
    if (value.trim().length < 2) {
      return "닉네임은 최소 2자 이상이어야 합니다"
    }

    if (value.trim().length > 20) {
      return "닉네임은 최대 20자까지 입력 가능합니다"
    }

    // 한글 + 영문 + 숫자 + 언더스코어 + 하이픈만 허용
    const nicknameRegex = /^[가-힣a-zA-Z0-9_-]+$/
    if (!nicknameRegex.test(value.trim())) {
      return "닉네임은 한글, 영문, 숫자, _, - 만 사용 가능합니다"
    }

    return ""
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setNickname(value)

    // 실시간 검증 (선택사항)
    const validationError = validateNickname(value)
    setError(validationError)
  }

  const handleClickNext = () => {
    const validationError = validateNickname(nickname)

    if (validationError) {
      setError(validationError)
      return
    }

    updateParent({
      nickname: nickname.trim(),
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
          state={
            error
              ? {
                  type: "error",
                  message: error,
                }
              : null
          }
        />
      </div>
      <Button
        label="다음"
        shape="rounded"
        size="large"
        variant="filled"
        classNames={pageStyles.join__content__btn}
        onClick={handleClickNext}
        aria-disabled={!!error}
      />
    </>
  )
}
export default ParentStep01
