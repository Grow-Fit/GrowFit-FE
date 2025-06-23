"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

import Button from "@/components/common/button/button"
import Input from "@/components/common/input/input"
import { useUserStore } from "@/stores/userStore"

import pageStyles from "../page.module.scss"

const INPUT_STATE_MSG = {
  error: "이미 가입된 아이디입니다.",
  success: "사용 가능한 아이디입니다.",
}

const ChildStep03 = () => {
  const router = useRouter()
  const { updateChild, child } = useUserStore()
  const [nickname, setNickname] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value)
  }

  const handleComplete = () => {
    updateChild({
      nickname,
    })
    router.push("/success?type=child")
  }
  console.log(child)
  return (
    <>
      <Input
        id="childNickname"
        type="text"
        inputSize="w-full"
        variant="withLabel"
        shape="border"
        label="닉네임"
        placeholder="닉네임 입력"
        state={{
          type: "error",
          message: INPUT_STATE_MSG.error,
        }}
        customBtn={{
          name: "중복확인",
        }}
        value={nickname}
        onChange={handleChange}
      />
      <Button
        type="submit"
        label="완료"
        shape="rounded"
        size="large"
        variant="filled"
        classNames={pageStyles.join__content__btn}
        onClick={handleComplete}
      />
    </>
  )
}
export default ChildStep03
