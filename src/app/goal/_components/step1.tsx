"use client"
import classNames from "classnames/bind"
import styles from "./step1.module.scss"

const cx = classNames.bind(styles)
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import StepBox from "@/app/goal/_components/stepBox"
import Goal1 from "@/assets/icons/goals/goal1.svg"
import Goal2 from "@/assets/icons/goals/goal2.svg"
import Goal3 from "@/assets/icons/goals/goal3.svg"
import Goal4 from "@/assets/icons/goals/goal4.svg"
import Goal5 from "@/assets/icons/goals/goal5.svg"
import Goal6 from "@/assets/icons/goals/goal6.svg"
import Goal7 from "@/assets/icons/goals/goal7.svg"
import Goal8 from "@/assets/icons/goals/goal8.svg"
import DefaultIcon from "@/assets/icons/goals/icon-default.svg"
import AddButton from "@/components/common/addbutton/addbutton"
import GoalResult from "@/app/goal/_components/goalresult"
import { useEffect, useRef, useState } from "react"

const Step1 = ({ data, setData }) => {
  const swiperRef = useRef()
  const goalList = [
    { id: 1, icon: Goal1, label: "하루 물 6컵" },
    { id: 2, icon: Goal2, label: "야채 먹기" },
    { id: 3, icon: Goal3, label: "삼시세끼 채소" },
    { id: 4, icon: Goal4, label: "가족과 운동" },
    { id: 5, icon: Goal5, label: "저녁 30분 운동" },
    { id: 6, icon: Goal6, label: "패스트 푸드 끊기" },
    { id: 7, icon: Goal7, label: "근력 운동" },
    { id: 8, icon: Goal8, label: "하루 물 6컵" },
  ]
  const [selectedGoals, setSelectedGoals] = useState<{ icon: any; name: string }[]>([])

  const handleClickGoal = (id: number, icon: any, label: string) => {
    if (selectedGoals.length >= 10) return alert("최대 10개의 목표까지 추가할 수 있어요")

    // 중복 방지
    const alreadyExists = selectedGoals.some((g) => g.name === label)
    if (alreadyExists) return alert("이미 추가된 목표예요")

    setSelectedGoals((prev) => {
      const updated = [...prev, { icon, name: label }]
      setTimeout(() => {
        swiperRef.current?.slideTo(updated.length - 1)
      }, 100) // 약간 delay 줘야 렌더링 이후 슬라이드됨
      return updated
    })
  }

  useEffect(() => {
    setData(selectedGoals)
  }, [selectedGoals, setData])

  return (
    <>
      <div className={cx("goal")}>
        <div className={cx("goal__content")}>
          <div className={cx("goal__title")}>
            <StepBox stepNum={"01"} stepTxt={"이번 주 아이와 몇 개의 목표를 계획할 예정인가요?"} />
            <p>최대 10개까지의 목표를 추가할 수 있어요</p>
          </div>

          <div className={cx("goal__result")}>
            <Swiper
              slidesPerView={3}
              centeredSlides={true}
              initialSlide={0}
              onSwiper={(swiper) => (swiperRef.current = swiper)}>
              {selectedGoals.map((goal, idx) => (
                <SwiperSlide key={idx}>
                  <GoalResult data={{ icon: goal.icon, name: goal.name, number: idx + 1 }} />
                </SwiperSlide>
              ))}
              <SwiperSlide>
                <GoalResult
                  data={{ icon: DefaultIcon, name: "미설정", number: selectedGoals.length + 1 }}
                />
              </SwiperSlide>
            </Swiper>
          </div>

          <div className={cx("goal__register")}>
            <h3>
              <strong>그로우핏 추천 목표</strong>
              <p>직접 설정하기</p>
            </h3>
            <Swiper slidesPerView={3} className={cx("goal__register-control")}>
              {goalList.map((goal) => {
                const Icon = goal.icon
                const isSelected = selectedGoals.some((g) => g.name === goal.label)
                return (
                  <SwiperSlide key={goal.id}>
                    <Icon />
                    <div className={cx("goal__register-txt")}>
                      <AddButton
                        disabled={isSelected}
                        label={goal.label}
                        onClick={() => handleClickGoal(goal.id, goal.icon, goal.label)}
                      />
                      <p>{goal.label}</p>
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  )
}

export default Step1
