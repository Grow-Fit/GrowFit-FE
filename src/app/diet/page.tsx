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

export default function Page() {
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
                <p>아침</p>
                <AddIcon />
              </div>
              <DietIcon />
            </li>
            <li>
              <div className={styles["diet__items-title"]}>
                <p>점심</p>
                <AddIcon />
              </div>
              <DietIcon />
              <BalloonMessage />
            </li>

            <li>
              <div className={styles["diet__items-title"]}>
                <p>저녁</p>
                <AddIcon />
              </div>
              <DietIcon />
            </li>
            <li>
              <div className={styles["diet__items-title"]}>
                <p>간식</p>
                <AddIcon />
              </div>
              <DietIcon />
            </li>
          </ul>
        </div>
      </div>
      <Navigation />
    </main>
  )
}
