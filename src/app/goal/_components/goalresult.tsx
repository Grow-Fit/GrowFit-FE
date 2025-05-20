import styles from "./goalresult.module.scss"
import DefaultIcon from "@/assets/icons/goals/icon-default.svg";
const GoalResult = () => {
  return (
    <div className={styles.goal__result}>
      <div className={styles.goal__icon}>
        <DefaultIcon/>
      </div>
      <p><span>01</span> 하루 물 6컵</p>
    </div>
  )
}
export default GoalResult