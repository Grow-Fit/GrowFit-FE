import classNames from "classnames/bind";
import styles from "./smallcalendar.module.scss";
const cx = classNames.bind(styles);
const SmallCalendar = () => {
  return (
    <div className={cx("calendar")}>
      <div className={cx("calendar__content")}>
        <div className={cx("calendar-item")}>
          <h2>2020. 00</h2>
          <ul>
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
      </div>
    </div>
  )
}
export default SmallCalendar;