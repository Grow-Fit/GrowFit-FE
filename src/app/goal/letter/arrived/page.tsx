"use client"
import React, { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import styles from "./letter.module.scss"
import ProfileIcon from "@/assets/character/profile-default.svg"
import Button from "@/components/common/button/button"
import { useGetGoalLetter } from "@/queries/letter/useLetterQuery"
import BackHeader from "@/components/layout/header/BackHeader"

const LetterModal = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const weeklyGoalId = searchParams.get("weeklyGoalId")
  const { data } = useGetGoalLetter(Number(weeklyGoalId))
  const closeModal = () => {
    router.back()
  }
  return (
    <div className={styles.letter}>
      <BackHeader title={"도착한 편지"} />
      <div className={styles.letter__mission}>
        <p>1월 24일 ~ 1월 31일 목표</p>
        <h2>20분동안 걷기외 5개의 미션을 모두 마쳤어요!</h2>
        <div></div>
      </div>
      <div className={styles["letter__from"]}>
        <div className={styles["letter__from-content"]}>
          <div>
            <ProfileIcon />
            <h3>To. 미니준</h3>
            <p>블라블라블라블라블라</p>
          </div>
          <h3>From. 엄마가</h3>
        </div>
      </div>
      <div className={styles.btn}>
        <Button
          size={"medium"}
          variant={"filled"}
          shape={"rounded"}
          label={"확인"}
          onClick={() => {}}
        />
      </div>
    </div>
  )
}

export default LetterModal
