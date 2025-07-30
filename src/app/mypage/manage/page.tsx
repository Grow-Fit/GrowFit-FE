"use client"
import styles from "./manage.module.scss"
import BackHeader from "@/components/layout/header/BackHeader"
import React from "react"
import { ArrowIcon } from "@/components/common/icon"
import { useRouter } from "next/navigation"
import { useParentInfoQuery } from "@/queries/mypage/useMypageQuery"

const Page = () => {
  const router = useRouter()

  return (
    <>
      <BackHeader title={"계정 관리"} />
      <div className={styles.manage}>
        <div>
          <h3>이메일</h3>
          <p>did-619@naver.com</p>
        </div>
        <div>
          <h3>비밀번호</h3>
          <p onClick={() => router.push("/mypage/editpwd")}>비밀번호 변경</p>
        </div>
        <div>
          <h3>계정탈퇴</h3>
          <ArrowIcon />
        </div>
        <div>
          <h3>QR등록</h3>
          <ArrowIcon />
        </div>
      </div>
    </>
  )
}

export default Page
