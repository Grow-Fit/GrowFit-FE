"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import dayjs from "dayjs"
import styles from "./detail.module.scss"
import Character1 from "@/assets/character/step1.svg"
import SmallCalendar from "@/components/common/smallcalendar/smallcalendar"
import StepBox from "@/components/common/stepbox/stepbox"
import TopSheet from "@/components/common/topsheet/topsheet"
import DefaultHeader from "@/components/layout/header/DefaultHeader"
import Navigation from "@/components/layout/Navigation"
import { useGoalMainQuery } from "@/queries/goal/userGoalQuery"

const Page = () => {
  const router = useRouter()
  const today = dayjs().format("YYYY-MM-DD")
  const [clickedDate, setClickedDate] = useState(today)
  const { data } = useGoalMainQuery(clickedDate)

  const formatStartDate = dayjs(data?.data?.startDate).format("M월 D일")
  const formatEndDate = dayjs(data?.data?.endDate).format("M월 D일")
  const openModal = (goalId: number) => {
    router.push(`/goal/detail/goal-modal?goalId=${goalId}`)
  }
  const openLetterModal = () => {
    const goalId = data?.data?.weeklyGoalId
    if (goalId) {
      router.push(`/goal/detail/letter-modal?goalId=${data?.data?.weeklyGoalId}`)
    }
  }
  return (
    <main className={styles.goal}>
      <DefaultHeader />
      <div className={styles.goal__content}>
        <div className={styles.goal__calendar}>
          <TopSheet>
            <SmallCalendar clickedDate={clickedDate} setClickedDate={setClickedDate} />
          </TopSheet>
        </div>

        <div className={styles.goal__character}>
          <Character1 />
        </div>

        <div className={styles.goal__profile}>
          <span>
            {formatStartDate} ~ {formatEndDate} 목표
          </span>
          <span>한 주 동안 레벨 업! 더 가볍고 건강하게!</span>
          <p>0/5개 달성</p>
          {!data?.data?.isLetterSent && <p onClick={openLetterModal}>편지 작성</p>}
        </div>

        <div className={styles.goal__box}>
          <StepBox goalList={data?.data?.goals || []} openModal={openModal} />
        </div>
      </div>
      <Navigation />
    </main>
  )
}

export default Page
