"use client"
import styles from "./edit.module.scss"
import BackHeader from "@/components/layout/header/BackHeader"
import Button from "@/components/common/button/button"
import { ProfileIconBig } from "@/components/common/icon"
import React, { useEffect, useState } from "react"
import ToastMsg from "@/components/common/toastmsg/toastmsg"
import {
  useChildInfoQuery,
  useParentInfoMutation,
  useParentInfoQuery,
} from "@/queries/mypage/useMypageQuery"
import { useUserType } from "@/hooks/user/useUserType"

const Page = () => {
  const userType = useUserType()
  const [showToast, setShowToast] = useState(false)
  const [nickname, setNickname] = useState("")
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const isParent = userType === "parent"
  const { data: parentData } = useParentInfoQuery(isParent)
  const parentInfo = parentData?.data

  const { mutate } = useParentInfoMutation(() => {
    setShowToast(true)
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value)
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]
      setImageFile(file)

      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const onSubmit = () => {
    const formData = new FormData()
    formData.append("nickname", nickname)
    if (imageFile) {
      formData.append("image", imageFile)
    }

    mutate(formData)
  }

  useEffect(() => {
    setNickname(parentInfo?.nickname)
    setImageFile(parentInfo?.profileImage)
  }, [parentInfo])

  return (
    <>
      <BackHeader title={"프로필 수정"} />
      <div className={styles.edit}>
        <div className={styles.edit__profile}>
          <label htmlFor="profileImageInput">
            {imagePreview ? (
              <img src={imagePreview} alt="프로필 이미지" />
            ) : parentInfo?.profileImage && parentInfo.profileImage !== "" ? (
              <img src={parentInfo.profileImage} alt="프로필 이미지" />
            ) : (
              <ProfileIconBig />
            )}
          </label>
          <input
            id="profileImageInput"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
        </div>
        <div className={styles.edit__form}>
          {/*<div>*/}
          {/*  <h3>사용자 이름</h3>*/}
          {/*  <input name={"name"} type="text" value={"이현주"} />*/}
          {/*</div>*/}
          <div>
            <h3>닉네임</h3>
            <input
              name={"nickname"}
              type="text"
              value={nickname}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </div>

        <div className={styles["complete-btn"]}>
          <Button
            size={"medium"}
            variant={"filled"}
            shape={"rounded"}
            label={"완료"}
            onClick={onSubmit}>
            완료
          </Button>
        </div>
      </div>

      {showToast && <ToastMsg message="프로필이 업데이트 되었습니다!" />}
    </>
  )
}
export default Page
