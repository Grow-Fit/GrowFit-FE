import styles from "./goalresult.module.scss"

const GoalResult = ({ data }) => {
  const Icon = data?.icon
  return (
    <div className={styles.goal__result}>
      <div className={styles.goal__icon}>
        <Icon />
      </div>
      <p>
        <span>{String(data?.number || 1).padStart(2, "0")}</span> {data?.name || "목표 추가"}
      </p>
    </div>
  )
}
export default GoalResult
