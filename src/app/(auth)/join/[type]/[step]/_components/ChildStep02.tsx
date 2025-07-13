"use client"

import { ChangeEvent, useState } from "react"
import { useRouter } from "next/navigation"

import { useFormik } from "formik"

import Button from "@/components/common/button/button"
import Input from "@/components/common/input/input"
import { useUserStore } from "@/stores/userStore"

import pageStyles from "../page.module.scss"
import styles from "./steps.module.scss"

const INPUT_STATE_MSG = {
  error: "이미 가입된 아이디입니다.",
  success: "사용 가능한 아이디입니다.",
}

const ChildStep02 = () => {
  const router = useRouter()
  const { updateChild } = useUserStore()

  const [childInfo, setChildInfo] = useState({
    childId: "",
    childPw: "",
  })

  // #region Formik
  const formik = useFormik({
    initialValues: {
      childId: "",
      childPw: "",
      childPwCheck: "",
    },
  })
  // #endregion

  // #region Event
  const handleChange = (key: string, e: ChangeEvent<HTMLInputElement>) => {
    setChildInfo((prev) => ({
      ...prev,
      [key]: e.target.value,
    }))
  }

  const handleClickNext = () => {
    updateChild({ ...childInfo })
    router.push("/join/child/3")
  }
  //#endregion
  return (
    <>
      <form className={styles.box__step2}>
        <Input
          id="childId"
          type="text"
          inputSize="w-full"
          variant="withLabel"
          shape="border"
          label="아이디"
          placeholder="아이디 입력"
          state={{
            type: "error",
            message: INPUT_STATE_MSG.error,
          }}
          customBtn={{
            name: "중복확인",
          }}
          value={childInfo.childId}
          onChange={(e) => handleChange("childId", e)}
        />
        <fieldset>
          <Input
            id="childPw"
            type="password"
            inputSize="w-full"
            variant="withLabel"
            shape="border"
            label="비밀번호"
            placeholder="비밀번호 입력"
            value={childInfo.childPw}
            onChange={(e) => handleChange("childPw", e)}
          />
          <Input
            id="childPwCheck"
            type="password"
            inputSize="w-full"
            variant="withLabel"
            shape="border"
            label="비밀번호 확인"
            placeholder="비밀번호 확인"
          />
        </fieldset>
      </form>
      <Button
        label="다음"
        shape="rounded"
        size="large"
        variant="filled"
        classNames={pageStyles.join__content__btn}
        onClick={handleClickNext}
      />
    </>
  )
}
export default ChildStep02
