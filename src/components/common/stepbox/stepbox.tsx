import classNames from "classnames/bind"
import styles from "./stepbox.module.scss"

const cx = classNames.bind(styles)
const StepBox = ({ goalList, openModal }) => {
  return (
    <div className={cx("step")}>
      {goalList.map((item) => (
        <div className={cx("step__wrap")}>
          <div className={cx("step__wrap-circle")}></div>
          <div className={cx("step__wrap-item")}>
            <h3>{item.name}</h3>
            <button type="button" onClick={() => openModal(item.goalId)}>
              시작
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default StepBox
