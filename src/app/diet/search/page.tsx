"use client"
import styles from "./search.module.scss"
import BackHeader from "@/components/layout/header/BackHeader"
import SearchBar from "@/components/common/searchbar/searchbar"
import { NodataIcon } from "@/components/common/icon"
import { AddIcon } from "@/components/common/icon"
import Link from "next/link"
import AddButton from "@/components/common/addbutton/addbutton"

const Page = () => {
  const onSubmit = () => {
    console.log("onSubmit")
  }
  return (
    <div className={styles.search}>
      <BackHeader title={"검색"} />
      <div className={styles.search__search}>
        <SearchBar placeholder={"무엇을 드셨나요?"} onSubmit={onSubmit} />
      </div>
      <div className={styles.search__nodata}>
        <NodataIcon />
        <p>영양소 정보가 없어요</p>
        <Link href={`/diet/nutrient`}>
          <p>영양소 직접 추가하기</p>
          <AddIcon />
        </Link>
      </div>
      <div className={styles.search__result}>
        <div className={styles["search__result-item"]}>
          <div className={styles["search__result-text"]}>
            <h3>닭가슴살 샐러드</h3>
            <p>109kcal</p>
          </div>
          <div className={styles["search__result-icon"]}>
            <AddButton disabled={false} onClick={() => {}} />
          </div>
        </div>
      </div>
      <div className={styles.search__btn}>
        <p>
          <span>아침메뉴</span>에
        </p>
        <button>
          <span>1개</span> 기록하기
        </button>
      </div>
    </div>
  )
}

export default Page
