import classNames from "classnames/bind";
import styles from "./topsheet.module.scss";
const cx = classNames.bind(styles);
const TopSheet = ({ children }) => {
  return (
    <div className={cx("topsheet")}>
      <div className={cx("topsheet__content")}>
        <h2>2020. 00</h2>
        {children}
        <span className={cx("topsheet-bar")}></span>
      </div>
    </div>
  )
}
export default TopSheet;