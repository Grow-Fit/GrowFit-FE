import CompleteIcon from "@/assets/icons/goals/complete.svg"
import Link from "next/link"
import styles from "./complete.module.scss"
import GoalResult from "@/app/goal/_components/goalresult"

const Complete = ({ data }) => {
  return (
    <div className={styles.complete}>
      <CompleteIcon />
      <div className={styles.complete__text}>
        <h2>
          목표가
          <br /> 설정되었어요!
        </h2>
        <p>
          {data.startDate} ~ {data.endDate}
        </p>
      </div>
    </div>
  )
}
export default Complete
