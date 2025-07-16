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
  const initialGoalList = [
    { id: 1, icon: Goal1, name: "하루 물 6컵" },
    { id: 2, icon: Goal2, name: "야채 먹기" },
    { id: 3, icon: Goal3, name: "삼시세끼 채소" },
    { id: 4, icon: Goal4, name: "가족과 운동" },
    { id: 5, icon: Goal5, name: "저녁 30분 운동" },
    { id: 6, icon: Goal6, name: "패스트 푸드 끊기" },
    { id: 7, icon: Goal7, name: "근력 운동" },
    { id: 8, icon: Goal8, name: "간식 안 먹기" },
  ]
  const [goalList, setGoalList] = useState(initialGoalList)
  const [selectedGoals, setSelectedGoals] = useState<
    { icon: any; name: string; editable: boolean }[]
  >([])
  const handleClickGoal = (id: number, icon: any, label: string) => {
    if (selectedGoals.length >= 10) return alert("최대 10개의 목표까지 추가할 수 있어요")

    // 중복 방지
    const alreadyExists = selectedGoals.some((g) => g.name === label)
    if (alreadyExists) return alert("이미 추가된 목표예요")

    setSelectedGoals((prev) => {
      const updated = [...prev, { icon, name: label, editable: false }]
      setTimeout(() => {
        swiperRef.current?.slideTo(updated.length - 1)
      }, 100)
      return updated
    })
  }

  const handleAddGoal = () => {
    const newGoal = {
      id: goalList.length + 1,
      icon: DefaultIcon,
      name: "목표입력",
      editable: true,
    }

    setGoalList((prev) => [...prev, newGoal])
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
              <p onClick={handleAddGoal}>직접 설정하기</p>
            </h3>
            <Swiper slidesPerView={3} className={cx("goal__register-control")}>
              {goalList.map((goal, index) => {
                const Icon = goal.icon
                const isSelected = selectedGoals.some((g) => g.name === goal.name)

                return (
                  <SwiperSlide key={goal.id}>
                    <div className={cx("goal__icon")}>
                      <Icon />
                    </div>
                    <div className={cx("goal__register-txt")}>
                      <AddButton
                        disabled={isSelected}
                        label={goal.name}
                        onClick={() => handleClickGoal(goal.id, goal.icon, goal.name)}
                      />
                      {goal.editable ? (
                        <input
                          type="text"
                          value={goal.name}
                          onChange={(e) => {
                            const newName = e.target.value
                            setGoalList((prev) => {
                              const updated = [...prev]
                              updated[index].name = newName
                              return updated
                            })
                          }}
                          placeholder="입력하세요"
                          maxLength={20}
                        />
                      ) : (
                        <p>{goal.name}</p>
                      )}
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
