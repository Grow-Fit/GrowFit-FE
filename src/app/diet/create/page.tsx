import styles from "./create.module.scss"
import BackHeader from "@/components/layout/header/BackHeader"
import SearchBar from "@/components/common/searchbar/searchbar"
import Link from "next/link"

const Page = () => {
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
          <button>세트 저장</button>
        </div>
        <div className={styles.create__box}>
          <p>
            검색창에서 음식을 검색하여
            <br /> 식단에 추가해보세요.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Page
