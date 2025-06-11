"use client"
import DefaultHeader from "@/components/layout/header/DefaultHeader"
import Navigation from "@/components/layout/Navigation"
import styles from "./page.module.scss"
import SmallCalendar from "@/components/common/smallcalendar/smallcalendar"
import TopSheet from "@/components/common/topsheet/topsheet"

import DietIcon from "@/assets/icons/diet/diet.svg"
import StickerIcon from "@/assets/icons/diet/sticker.svg"
import AddIcon from "@/assets/icons/common/icon-add-skyblue.svg"
import { BalloonMessage } from "@/components/common/balloonmessage/balloonmessage"
import Link from "next/link"
import { ArrowIconGray } from "@/components/common/icon"
import { useState } from "react"
import Portal from "@/components/common/portal/portal"
import Bottomsheet from "@/components/common/buttomsheet/bottomsheet"
import Button from "@/components/common/button/button"

export default function Page() {
  const [isOpen, setIsOpen] = useState(false)
  const handleTimeClick = () => {
    setIsOpen(true)
  }
  const closeModal = () => {
    setIsOpen(false)
  }
  return (
    <main className={styles.diet}>
      <DefaultHeader />
      <div className={styles.diet__content}>
        <div className={styles.diet__calendar}>
          <TopSheet>
            <SmallCalendar />
          </TopSheet>
        </div>
        <div className={styles.diet__register}>
          <div className={styles["diet__register-title"]}>
            <h2>오늘의 식단</h2>
            <p>
              <StickerIcon />
              스티커 남기기
            </p>
          </div>
          <ul className={styles["diet__items"]}>
            <li>
              <div className={styles["diet__items-title"]}>
                <Link href={`/diet/create`}>
                  <p>아침</p>
                  <AddIcon />
                </Link>
              </div>
              <p onClick={handleTimeClick}>
                9:00
                <ArrowIconGray />
              </p>
              <DietIcon />
            </li>
            <li>
              <div className={styles["diet__items-title"]}>
                <Link href={`/diet/create`}>
                  <p>점심</p>
                  <AddIcon />
                </Link>
              </div>
              <p>
                9:00
                <ArrowIconGray />
              </p>
              <DietIcon />
              <BalloonMessage />
            </li>

            <li>
              <div className={styles["diet__items-title"]}>
                <Link href={`/diet/create`}>
                  <p>저녁</p>
                  <AddIcon />
                </Link>
              </div>
              <p>
                9:00
                <ArrowIconGray />
              </p>
              <DietIcon />
            </li>
            <li>
              <div className={styles["diet__items-title"]}>
                <Link href={`/diet/create`}>
                  <p>간식</p>
                  <AddIcon />
                </Link>
              </div>
              <p>
                9:00
                <ArrowIconGray />
              </p>
              <DietIcon />
            </li>
          </ul>
        </div>
      </div>
      <Navigation />
      {isOpen && (
        <Portal>
          <Bottomsheet title={"시간 선택"} close={closeModal}>
            <div className={styles.time}>
              <div className={styles.time__box}>
                <div className={styles["time__box-time"]}>
                  <input type={"number"} name={"time"} />
                  <p>시간</p>
                </div>

                <div className={styles["time__box-time"]}>
                  <input type={"number"} name={"minutes"} />
                  <p>분</p>
                </div>
                <div className={styles["time__box-ampm"]}>
                  <button className={styles.active}>오전</button>
                  <button>오후</button>
                </div>
              </div>
              <div className={styles.time__btn}>
                <Button size={"medium"} variant={"filled"} shape={"rounded"} label={"완료"} />
              </div>
            </div>
          </Bottomsheet>
        </Portal>
      )}
    </main>
  )
}
