"use client"
import { useEffect, useState } from "react"
import classNames from "classnames/bind"
import styles from "./step2.module.scss"

const cx = classNames.bind(styles)
import StepBox from "@/app/goal/_components/stepBox"
import CustomCalendar from "@/components/common/calendar/customcalendar"
import { DateRange } from "react-day-picker"
import dayjs from "dayjs"

const Step2 = ({ setData }) => {
  const [selectedWeek, setSelectedWeek] = useState<DateRange | undefined>()
  useEffect(() => {
    if (selectedWeek?.from && selectedWeek?.to) {
      setData((prev) => ({
        ...prev,
        startDate: dayjs(selectedWeek.from).format("YYYY-MM-DD"),
        endDate: dayjs(selectedWeek.to).format("YYYY-MM-DD"),
      }))
    }
  }, [selectedWeek, setData])

  const handleCertCountChange = (e) => {
    const value = Math.min(Number(e.target.value), 5)
    setData((prev) => ({
      ...prev,
      certificationCount: value,
    }))
  }

  return (
    <>
      <div className={cx("goal")}>
        <div className={cx("goal__content")}>
          <div className={cx("goal__title")}>
            <StepBox
              stepNum={"02"}
              stepTxt={"목표 7개를 언제부터 시작할까요? 기간과 인증 횟수를 정해주세요!"}
            />
          </div>
          <div className={cx("goal__period")}>
            <div>
              <CustomCalendar selectedWeek={selectedWeek} setSelectedWeek={setSelectedWeek} />
            </div>
          </div>
          <div className={cx("goal__times")}>
            <h3>인증횟수(최대 5회 가능)</h3>
            <div>
              <span>인증</span>
              <input
                type="number"
                name="count"
                id="count"
                onChange={handleCertCountChange}
                min={1}
                max={5}
              />
              <span>회</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Step2
