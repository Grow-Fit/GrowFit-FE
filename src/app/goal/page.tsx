"use client"
import Link from "next/link"

import classNames from "classnames/bind"
import styles from "./goal.module.scss"

const cx = classNames.bind(styles)

import Character1 from "@/assets/character/step1.svg"
import SmallCalendar from "@/components/common/smallcalendar/smallcalendar"
import GaugeBar from "@/components/common/gaugebar/gaugebar"
import GaugeDonut from "@/components/common/gaugedonut/gaugedonut"
import AddButton from "@/components/common/addbutton/addbutton"
import TopSheet from "@/components/common/topsheet/topsheet"
import DefaultHeader from "@/components/layout/header/DefaultHeader"
import Navigation from "@/components/layout/Navigation"
import { useGoalMainQuery } from "@/queries/goal/userGoalQuery"
import { useState } from "react"
import dayjs from "dayjs"

const Page = () => {
  const today = dayjs().format("YYYY-MM-DD")
  const [clickedDate, setClickedDate] = useState(today)

  const { data } = useGoalMainQuery(clickedDate)
  return (
    <main className={cx("goal")}>
      <DefaultHeader />
      <div className={cx("goal__content")}>
        <div className={cx("goal__calendar")}>
          <TopSheet>
            <SmallCalendar clickedDate={clickedDate} setClickedDate={setClickedDate} />
          </TopSheet>
        </div>

        <div className={cx("goal__character")}>
          <Character1 />
        </div>

        <div className={cx("goal__profile")}>
          <span>미니민준님</span>
          <p>
            <strong>LV.1</strong> Flat Planet
          </p>
        </div>

        <div className={cx("goal__gauge")}>
          <GaugeBar />
        </div>

        <div className={cx("goal__box")}>
          <Link href={`${data?.data?.goals.length > 0 ? "/goal/detail" : "/goal/create"}`}>
            <h2>진행중인 목표</h2>
            {data?.data?.goals.length > 0 ? (
              <GaugeDonut goalLength={data?.data?.goals.length} />
            ) : (
              <div className={cx("goal__btn")}>
                <div className={cx("goal__btn-add")}>
                  <AddButton disabled={false} label={"추가하기"} onClick={() => {}} />
                  <p>목표 만들기</p>
                </div>
              </div>
            )}
          </Link>
        </div>
      </div>
      <Navigation />
    </main>
  )
}

export default Page
