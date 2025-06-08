"use client"
import styles from "./search.module.scss"
import BackHeader from "@/components/layout/header/BackHeader"
import SearchBar from "@/components/common/searchbar/searchbar"
import { NodataIcon } from "@/components/common/icon"
import { AddIcon } from "@/components/common/icon"

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
        <button onClick={() => {}}>
          <p>영양소 직접 추가하기</p>
          <AddIcon />
        </button>
      </div>
    </div>
  )
}

export default Page
