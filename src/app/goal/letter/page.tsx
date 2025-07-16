"use client"
import styles from "./letter.module.scss"
import BackHeader from "@/components/layout/header/BackHeader"
import ProfileIcon from "@/assets/character/profile-default.svg"
import TextArea from "@/components/common/textarea/textarea"
import { useState } from "react"
import { useGoalLetterQuery } from "@/queries/letter/useLetterQuery"
import Button from "@/components/common/button/button"
import { useSearchParams } from "next/navigation"

const LetterCreate = () => {
  const searchParams = useSearchParams()
  const [content, setContent] = useState("")
  const weeklyGoalId = searchParams.get("weeklyGoalId")
  const { mutate } = useGoalLetterQuery(Number(weeklyGoalId))
  const handleChangeValue = (e) => {
    setContent(e.target.value)
  }
  const onSubmit = () => {
    mutate({
      content,
    })
  }

  return (
    <div className={styles.letter}>
      <BackHeader />
      <div className={styles.letter__form}>
        <ProfileIcon />
        <div className={styles.letter__title}>
          <p>아이가 목표를 멋지게 해냈어요!</p>
          <strong>칭찬 편지를 남겨볼까요?</strong>
        </div>
        <div className={styles.letter__field}>
          <h3>To.미니준</h3>
          <TextArea
            name={"content"}
            placeholder={"메시지를 입력해주세요."}
            value={content}
            onChange={handleChangeValue}
          />
        </div>
        <div className={styles.letter__btn}>
          <Button
            size={"medium"}
            variant={"filled"}
            shape={"rounded"}
            label={"확인"}
            onClick={onSubmit}
          />
        </div>
      </div>
    </div>
  )
}
export default LetterCreate
