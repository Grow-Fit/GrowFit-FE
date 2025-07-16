"use client"

import { useRouter } from "next/navigation"

import { useFormik } from "formik"
import * as Yup from "yup"

import Button from "@/components/common/button/button"
import Input from "@/components/common/input/input"
import { useUserStore } from "@/stores/userStore"

import pageStyles from "../page.module.scss"
import styles from "./steps.module.scss"

const ParentStep01 = () => {
  const router = useRouter()
  const { updateParent } = useUserStore()

  // 닉네임 유효성 검증 함수
  const validationSchema = Yup.object({
    parentNickname: Yup.string()
      .required("닉네임을 입력해주세요")
      .matches(/^[가-힣a-zA-Z0-9_-]+$/, "닉네임은 한글, 영문, 숫자, _, - 만 사용 가능합니다")
      .min(2, "닉네임은 최소 2자 이상이어야 합니다")
      .max(20, "닉네임은 최대 20자까지 입력 가능합니다"),
  })

  // #region Formik
  const formik = useFormik({
    initialValues: {
      parentNickname: "",
    },
    validationSchema,
    onSubmit: (values) => {
      updateParent({
        nickname: values.parentNickname.trim(),
      })
      router.push("/join/parent/2")
    },
  })
  // #endregion
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
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.parentNickname}
          state={
            formik.touched.parentNickname && formik.errors.parentNickname
              ? {
                  type: "error",
                  message: formik.errors.parentNickname,
                }
              : null
          }
        />
      </div>
      <Button
        type="button"
        label="다음"
        shape="rounded"
        size="large"
        variant="filled"
        classNames={pageStyles.join__content__btn}
        onClick={formik.handleSubmit}
        aria-disabled={!!formik.touched.parentNickname && !!formik.errors.parentNickname}
      />
    </>
  )
}
export default ParentStep01
