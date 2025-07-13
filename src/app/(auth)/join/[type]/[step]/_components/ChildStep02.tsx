"use client"

import { useRouter } from "next/navigation"

import { useFormik } from "formik"
import * as Yup from "yup"

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

  // #region 유효성 검증
  const validationSchema = Yup.object({
    childId: Yup.string()
      .required("아이디를 입력해주세요.")
      .matches(/^[가-힣a-zA-Z0-9_-]+$/, "아이디는 한글, 영문, 숫자, _, - 만 사용 가능합니다"),

    childPw: Yup.string()
      .required("비밀번호를 입력해주세요.")
      .matches(
        /^[a-zA-Z0-9!@#$%&*]+$/,
        "비밀번호는 영문, 숫자, 특수문자(!@#$%&*)만 사용 가능합니다."
      )
      .matches(/[a-zA-Z]/, "비밀번호에는 최소 1개 이상의 영문이 포함되어야 합니다.")
      .matches(/[0-9]/, "비밀번호에는 최소 1개 이상의 숫자가 포함되어야 합니다.")
      .matches(/[!@#$%&*]/, "비밀번호에는 최소 1개 이상의 특수문자(!@#$%&*)가 포함되어야 합니다."),

    childPwCheck: Yup.string()
      .required("비밀번호를 입력해주세요.")
      .oneOf([Yup.ref("childPw")], "비밀번호가 일치하지 않습니다."),
  })

  // #endregion

  // #region Formik
  const formik = useFormik({
    initialValues: {
      childId: "",
      childPw: "",
      childPwCheck: "",
    },
    validationSchema,
    onSubmit: (values) => {
      updateChild({
        childId: values.childId,
        childPw: values.childPw,
      })

      router.push("/join/child/3")
    },
  })
  // #endregion

  return (
    <>
      <form className={styles.box__step2} onSubmit={formik.handleSubmit}>
        <Input
          id="childId"
          type="text"
          inputSize="w-full"
          variant="withLabel"
          shape="border"
          label="아이디"
          placeholder="아이디 입력"
          state={
            formik.touched.childId && formik.errors.childId
              ? {
                  type: "error",
                  message: formik.errors.childId,
                }
              : null
          }
          customBtn={{
            name: "중복확인",
          }}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.childId}
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
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.childPw}
            state={
              formik.touched.childPw && formik.errors.childPw
                ? {
                    type: "error",
                    message: formik.errors.childPw,
                  }
                : null
            }
          />
          <Input
            id="childPwCheck"
            type="password"
            inputSize="w-full"
            variant="withLabel"
            shape="border"
            label="비밀번호 확인"
            placeholder="비밀번호 확인"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.childPwCheck}
            state={
              formik.touched.childPwCheck && formik.errors.childPwCheck
                ? {
                    type: "error",
                    message: formik.errors.childPwCheck,
                  }
                : null
            }
          />
        </fieldset>
      </form>
      <Button
        type="submit"
        label="다음"
        shape="rounded"
        size="large"
        variant="filled"
        classNames={pageStyles.join__content__btn}
        onClick={formik.handleSubmit}
      />
    </>
  )
}
export default ChildStep02
