import CompleteIcon from "@/assets/icons/goals/complete.svg"
import Link from "next/link"
import styles from "./complete.module.scss"
import GoalResult from "@/app/goal/_components/goalresult"

const Complete = () => {
  return (
    <div className={styles.complete}>
      <CompleteIcon />
      <div className={styles.complete__text}>
        <h2>
          목표가
          <br /> 설정되었어요!
        </h2>
        <p>2020년 5월 1일</p>
        <Link href={"/goal/detail"}>목표 보드로 이동하기</Link>
      </div>
      <div className={styles.complete__item}>
        <GoalResult />
      </div>
    </div>
  )
}
export default Complete
