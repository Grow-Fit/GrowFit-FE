import classNames from "classnames/bind"
import styles from "./gaugedonut.module.scss"

const cx = classNames.bind(styles)

const GaugeDonut = ({ goalLength }) => {
  return (
    <div className={cx("donut")}>
      <div className={cx("donut-center")}>
        <span>{goalLength}</span>/5
      </div>
    </div>
  )
}
export default GaugeDonut
