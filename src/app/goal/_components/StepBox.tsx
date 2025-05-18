import classNames from "classnames/bind";
import styles from "./StepBox.module.scss";
const cx = classNames.bind(styles);

const StepBox = () => {
  return (
    <div className={cx("step")}>
      <h2>
        <strong>01</strong>
        <p>이번 주 아이와 몇 개의 목표를 계획할 예정인가요?</p>
      </h2>
    </div>
  )
}

export default StepBox