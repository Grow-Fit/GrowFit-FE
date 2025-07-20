"use client"
import styles from "./edit.module.scss"
import BackHeader from "@/components/layout/header/BackHeader"
import Button from "@/components/common/button/button"
import { ProfileIconBig } from "@/components/common/icon"
import React, { useState } from "react"
import ToastMsg from "@/components/common/toastmsg/toastmsg"

const Page = () => {
  const [showToast, setShowToast] = useState(false)

  const handleComplete = () => {
    setShowToast(true)
  }
  return (
    <>
      <BackHeader title={"프로필 수정"} />
      <div className={styles.edit}>
        <div className={styles.edit__profile}>
          <ProfileIconBig />
        </div>
        <div className={styles.edit__form}>
          <div>
            <h3>사용자 이름</h3>
            <input name={"name"} type="text" value={"이현주"} />
          </div>
          <div>
            <h3>닉네임</h3>
            <input name={"nickname"} type="text" value={"민준맘"} />
          </div>
        </div>

        <div className={styles["complete-btn"]}>
          <Button
            size={"medium"}
            variant={"filled"}
            shape={"rounded"}
            label={"완료"}
            onClick={handleComplete}>
            완료
          </Button>
        </div>
      </div>

      {showToast && <ToastMsg message="프로필이 업데이트 되었습니다!" />}
    </>
  )
}
export default Page
