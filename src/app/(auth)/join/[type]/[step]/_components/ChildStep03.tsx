"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

import { useFormik } from "formik"
import * as Yup from "yup"

import Button from "@/components/common/button/button"
import Input from "@/components/common/input/input"
import { useJoinChild } from "@/hooks/auth/useChildAuth"
import { useUserStore } from "@/stores/userStore"

import pageStyles from "../page.module.scss"

const INPUT_STATE_MSG = {
  error: "이미 가입된 아이디입니다.",
  success: "사용 가능한 아이디입니다.",
}

const ChildStep03 = () => {
  const router = useRouter()
  const { child } = useUserStore()

  const { mutate } = useJoinChild()

  // #region 유효성 검증
  const validationSchema = Yup.object({
    childNickname: Yup.string()
      .required("닉네임을 입력해주세요")
      .matches(/^[가-힣a-zA-Z0-9_-]+$/, "닉네임은 한글, 영문, 숫자, _, - 만 사용 가능합니다")
      .min(2, "닉네임은 최소 2자 이상이어야 합니다")
      .max(20, "닉네임은 최대 20자까지 입력 가능합니다"),
  })
  // #endregion

  // #region Formik
  const formik = useFormik({
    initialValues: {
      childNickname: "",
    },
    validationSchema,
    onSubmit: (values) => {
      if (values && child) {
        mutate({
          params: {
            child_id: child?.child_id || 0,
          },
          body: {
            childId: child?.childId || "",
            childPassword: child?.childPw || "",
            nickname: values.childNickname || "",
          },
        })
      }
    },
  })
  // #endregion
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
        customBtn={{
          name: "중복확인",
        }}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.childNickname}
        state={
          formik.touched.childNickname && formik.errors.childNickname
            ? {
                type: "error",
                message: formik.errors.childNickname,
              }
            : null
        }
      />
      <Button
        type="submit"
        label="완료"
        shape="rounded"
        size="large"
        variant="filled"
        classNames={pageStyles.join__content__btn}
        onClick={formik.handleSubmit}
      />
    </>
  )
}
export default ChildStep03
