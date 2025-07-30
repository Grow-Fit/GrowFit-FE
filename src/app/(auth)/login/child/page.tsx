"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

import { useFormik } from "formik"
import * as Yup from "yup"

import LoginStartCharacter from "@/assets/character/login/img-login-start.svg"
import LoginLogo from "@/assets/logo/logo-type01.svg"
import Button from "@/components/common/button/button"
import Input from "@/components/common/input/input"
import { useChildLogin } from "@/hooks/auth/useAuth"

import layoutStyles from "../layout.module.scss"
import styles from "./page.module.scss"

const Page = () => {
  const validationSchema = Yup.object({})

  const router = useRouter()

  const { mutate } = useChildLogin()

  const [error, setError] = useState("")

  const formik = useFormik({
    initialValues: {
      childId: "",
      childPw: "",
    },
    validationSchema,
    onSubmit: (values) => {
      if (values) {
        setError("")
        mutate(
          {
            childId: values.childId,
            childPassword: values.childPw,
          },
          {
            onSuccess: (data) => {
              console.log("로그인 성공!", data)
              if (data.data) {
                router.push("/")

                localStorage.setItem("userType", "child")
              }
            },
            onError: (error) => {
              console.log("로그인 실패!", error)

              setError("로그인에 실패했습니다. \n아이디와 비밀번호를 확인해주세요.")
            },
          }
        )
      }
    },
  })
  return (
    <div className={`${layoutStyles.login__content} ${styles.login__child}`}>
      <LoginLogo width={125} height={32} />
      <p className={styles.login__child__desc}>
        로그인하고 <br />
        건강한 습관을 이어가요!
      </p>
      <form className="form-content" onSubmit={formik.handleSubmit}>
        <Input
          name="childId"
          id="childId"
          type="text"
          inputSize="w-full"
          variant="withoutLabel"
          shape="border"
          label="아이디"
          placeholder="아이디 입력"
          onChange={formik.handleChange}
          value={formik.values.childId}
        />
        <Input
          name="childPw"
          id="childPw"
          type="password"
          inputSize="w-full"
          variant="withoutLabel"
          shape="border"
          label="비밀번호"
          placeholder="비밀번호 입력"
          onChange={formik.handleChange}
          value={formik.values.childPw}
        />
        <Button
          label="로그인"
          shape="sharp"
          size="large"
          variant="filled"
          classNames={styles.login__child__btn}
        />
        {error !== "" && <p className={styles.login__child__error}>{error}</p>}
      </form>
      <div className={styles.login__util}>
        <Link href="/find/id" className={styles.login__util__id}>
          아이디 찾기
        </Link>
        <Link href="/find/pw" className={styles.login__util__pw}>
          비밀번호 찾기 찾기
        </Link>
        <Link href="/join/child/1" className={styles.login__util__join}>
          회원가입
        </Link>
      </div>
      <LoginStartCharacter width={143} height={150} />
    </div>
  )
}

export default Page
