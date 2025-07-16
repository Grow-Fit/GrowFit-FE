"use client"

import { useEffect, useRef, useState } from "react"
import classNames from "classnames/bind"
import styles from "./smallcalendar.module.scss"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import generateDates from "@/lib/utils/generatedates"
import dayjs from "dayjs"

import "dayjs/locale/ko"

dayjs.locale("ko")

const cx = classNames.bind(styles)

const SmallCalendar = ({ clickedDate, setClickedDate }) => {
  const swiperRef = useRef<any>(null)
  const centerDate = clickedDate ? dayjs(clickedDate) : dayjs()
  const [dates, setDates] = useState(() => generateDates(centerDate, 30))
  const [currentCenterDate, setCurrentCenterDate] = useState<dayjs.Dayjs | null>(null)

  const todayIndex = dates.findIndex((d) => d.isToday)

  const handleSlideChange = (swiper: any) => {
    const center = dates[swiper.activeIndex]
    if (center) {
      setCurrentCenterDate(center.fullDate)
    }

    // 날짜 확장 로직
    const buffer = 5
    if (swiper.activeIndex < buffer) {
      const first = dates[0].fullDate
      const more = generateDates(first.subtract(30, "day"), 30)
      setDates((prev) => [...more.slice(0, 30), ...prev])
      swiper.slideTo(swiper.activeIndex + 30, 0)
    }

    if (swiper.activeIndex > dates.length - buffer) {
      const last = dates[dates.length - 1].fullDate
      const more = generateDates(last.add(1, "day"), 30)
      setDates((prev) => [...prev, ...more.slice(1)])
    }
  }

  useEffect(() => {
    if (!clickedDate || dates.length === 0) return

    const clickedIndex = dates.findIndex((d) => d.fullDate.format("YYYY-MM-DD") === clickedDate)

    if (clickedIndex !== -1 && swiperRef.current) {
      swiperRef.current.slideTo(clickedIndex, 0)
      setCurrentCenterDate(dates[clickedIndex].fullDate)
    }
  }, [clickedDate, dates])

  return (
    <div className={cx("calendar")}>
      {currentCenterDate && (
        <div className={cx("calendar-header")}>
          <h2>{currentCenterDate.format("YYYY년 M월")}</h2>
        </div>
      )}
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper
        }}
        onSlideChange={handleSlideChange}
        slidesPerView={7}
        centeredSlides
        spaceBetween={10}
        sx={{
          padding: "0 10px",
        }}>
        {dates.map((day) => (
          <SwiperSlide key={day.key}>
            <div
              className={cx("calendar-item")}
              onClick={() => {
                const dayString = String(day.date).padStart(2, "0")
                setClickedDate(`${currentCenterDate?.format("YYYY-MM")}-${dayString}`)
              }}>
              <p>{day.label}</p>
              <p
                className={cx({
                  clickedDate: clickedDate === day.fullDate.format("YYYY-MM-DD"),
                })}>
                {day.date}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <span className={cx("calendar-bar")}></span>
    </div>
  )
}

export default SmallCalendar
