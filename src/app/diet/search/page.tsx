import styles from "./search.module.scss"
import BackHeader from "@/components/layout/header/BackHeader"
import SearchBar from "@/components/common/searchbar/searchbar"
import Link from "next/link"

const Page = () => {
  return (
    <div className={styles.search}>
      <BackHeader title={"검색"} />
      <div className={styles.search__search}>
        <SearchBar placeholder={"무엇을 드셨나요?"} />
      </div>
    </div>
  )
}

export default Page
