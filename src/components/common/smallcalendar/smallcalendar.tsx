import classNames from "classnames/bind";
import styles from "./smallcalendar.module.scss";
const cx = classNames.bind(styles);
const SmallCalendar = () => {
  return (
    <div className={cx("calendar")}>
      <ul className={cx("calendar-item")}>
        <li>
          <p>월</p>
          <p>24</p>
        </li>
        <li>
          <p>월</p>
          <p>24</p>
        </li>
        <li>
          <p>월</p>
          <p>24</p>
        </li>
        <li>
          <p>월</p>
          <p>24</p>
        </li>
        <li>
          <p>월</p>
          <p>24</p>
        </li>
        <li>
          <p>월</p>
          <p>24</p>
        </li>
        <li>
          <p>월</p>
          <p>24</p>
        </li>
      </ul>
      <span className={cx("calendar-bar")}></span>
    </div>
  )
}
export default SmallCalendar;