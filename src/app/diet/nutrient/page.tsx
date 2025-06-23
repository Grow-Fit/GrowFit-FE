import styles from "./nutrient.module.scss"
import BackHeader from "@/components/layout/header/BackHeader"
import Button from "@/components/common/button/button"

const Page = () => {
  return (
    <div className={styles.nutrient}>
      <BackHeader title={"영양소 입력"} />
      <div className={styles.nutrient__content}>
        <h2>아침 메뉴</h2>
        <div className={styles.nutrient__input}>
          <h3>반미 샌드위치</h3>
          <div className={styles["nutrient__input-item"]}>
            <label htmlFor={"calorie"}>칼로리</label>
            <input type={"text"} name={"calorie"} id={"calorie"} />
          </div>
        </div>
      </div>
      <div className={styles.btn_wrap}>
        <Button size={"medium"} variant={"filled"} shape={"rounded"} label={"완료"} />
      </div>
    </div>
  )
}

export default Page
