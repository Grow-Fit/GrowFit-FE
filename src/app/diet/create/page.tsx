"use client"
import styles from "./create.module.scss"
import BackHeader from "@/components/layout/header/BackHeader"
import SearchBar from "@/components/common/searchbar/searchbar"
import Link from "next/link"
import Amount from "@/components/common/amount/amount"
import Button from "@/components/common/button/button"
import Portal from "@/components/common/portal/portal"
import Modal from "@/components/common/modal/modal"
import { useState } from "react"

const Page = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => {
    setIsOpen(true)
  }
  return (
    <div className={styles.create}>
      <BackHeader title={"식단만들기"} />
      <div className={styles.create__search}>
        <Link href={"/diet/search"}>
          <SearchBar placeholder={"무엇을 드셨나요?"} />
        </Link>
      </div>
      <div className={styles.create__list}>
        <div className={styles.create__title}>
          <h2>
            아침 메뉴<span>0개</span>
          </h2>
          <button onClick={handleClick}>세트 저장</button>
        </div>
        <div className={styles.create__box}>
          <p>
            검색창에서 음식을 검색하여
            <br /> 식단에 추가해보세요.
          </p>
        </div>
        <div className={styles.create__set}>
          <div className={styles["create__set-item"]}>
            <div className={styles["create__set-top"]}>
              <div className={styles["create__set-menu"]}>
                반미 샌드위치 <span>326kcal</span>
              </div>
              <div className={styles["create__set-amount"]}>
                <Amount />
              </div>
            </div>
            <div className={styles["create__set-bottom"]}>
              <div className={styles["create__set-info"]}>
                <p>탄수화물</p>
                <div className={styles["create__set-unit"]}>
                  <p>0.6</p>
                  <span>g</span>
                </div>
              </div>
              <div className={styles["create__set-info"]}>
                <p>단백질</p>
                <div className={styles["create__set-unit"]}>
                  <p>0.6</p>
                  <span>g</span>
                </div>
              </div>
              <div className={styles["create__set-info"]}>
                <p>지방</p>
                <div className={styles["create__set-unit"]}>
                  <p>0.6</p>
                  <span>g</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.create__btn}>
        <Button size={"medium"} variant={"filled"} shape={"rounded"} label={"완료"} />
      </div>
      {isOpen && (
        <Portal>
          <Modal setIsOpen={setIsOpen} />
        </Portal>
      )}
    </div>
  )
}

export default Page
