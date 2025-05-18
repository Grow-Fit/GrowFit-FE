"use client"
import classNames from "classnames/bind"
import styles from "./BackHeader.module.scss"
import Image from "next/image";
const cx = classNames.bind(styles)

const DefaultHeader = ({ title }: { title: string }) => {
  return (
    <div className={cx("header")}>
      <h1 className={cx("header__icon")}>
        뒤로가기
      </h1>
      <div className={cx("header__title")}>
        {title}
      </div>
      <div>다음으로</div>
    </div>
  )
}

export default DefaultHeader