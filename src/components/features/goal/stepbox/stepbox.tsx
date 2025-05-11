import classNames from "classnames/bind";
import styles from "./stepbox.module.scss";
const cx = classNames.bind(styles);
const StepBox = () => {
  return (
    <div className={cx("step")}>
      <div className={cx("step__wrap")}>
        <div className={cx("step__wrap-circle")}></div>
        <div className={cx("step__wrap-item")}>
          <h3>20분동안 걷기</h3>
          <button type="button">시작</button>
        </div>
      </div>
      <div className={cx("step__wrap")}>
        <div className={cx("step__wrap-circle")}></div>
        <div className={cx("step__wrap-item")}>
          <h3>20분동안 걷기</h3>
          <button type="button">시작</button>
        </div>
      </div>
      <div className={cx("step__wrap")}>
        <div className={cx("step__wrap-circle")}></div>
        <div className={cx("step__wrap-item")}>
          <h3>20분동안 걷기</h3>
          <button type="button">시작</button>
        </div>
      </div>
    </div>
  )
}

export default StepBox