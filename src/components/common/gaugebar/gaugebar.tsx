import classNames from "classnames/bind";
import styles from "./gaugebar.module.scss";
const cx = classNames.bind(styles);
const GaugeBar = () => {
  return (
    <div className={cx("gauge")}>
      <p><span>0</span> / 100 EXP</p>
      <span></span>
    </div>
  )
}
export default GaugeBar