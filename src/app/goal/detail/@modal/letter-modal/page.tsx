"use client"
import React, { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import styles from "./lettermodal.module.scss"
import BottomSheet from "@/components/common/buttomsheet/bottomsheet"
import ProfileIcon from "@/assets/character/profile-default.svg"
import Button from "@/components/common/button/button"
import { useGoalLetter } from "@/queries/goal/userGoalQuery"

const LetterModal = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const goalId = searchParams.get("goalId")
  const [letterContent, setLetterContent] = useState("")
  const { mutate } = useGoalLetter(goalId)
  const closeModal = () => {
    router.back()
  }
  const onSubmit = () => {
    if (!letterContent.trim()) {
      alert("편지 내용을 입력해주세요.")
      return
    }

    mutate({ content: letterContent }) // 여기에 맞게 payload 구조 조정
  }
  return (
    <div className={styles.letter}>
      <BottomSheet close={closeModal} title={"도착한 편지"}>
        <div className={styles["letter__from"]}>
          <div className={styles["letter__from-content"]}>
            <div>
              <ProfileIcon />
              <h3>To. 미니준</h3>
              <p>
                <textarea
                  value={letterContent}
                  onChange={(e) => setLetterContent(e.target.value)}
                  placeholder="편지 내용을 입력하세요"
                />
              </p>
            </div>
            <h3>From. 엄마가</h3>
          </div>
        </div>
        <div className={styles.bottom}>
          <h2>1월 24일 ~ 1월 31일 목표</h2>
          <ul className={styles["goal-box"]}>
            <li>
              <p>20분동안걷기</p>
              <div></div>
            </li>
            <li>
              <p>20분동안걷기</p>
              <div></div>
            </li>
            <li>
              <p>20분동안걷기</p>
              <div></div>
            </li>
          </ul>
        </div>
        <div className={styles.btn}>
          <Button
            size={"medium"}
            variant={"filled"}
            shape={"rounded"}
            label={"확인"}
            onClick={onSubmit}
          />
        </div>
      </BottomSheet>
    </div>
  )
}

export default LetterModal
