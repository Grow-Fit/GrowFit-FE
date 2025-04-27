"use client"
import Link from "next/link";
import classNames from "classnames/bind"
import styles from "./Header.module.scss"
import Profile from "@/assets/icons/profile.svg"
import Alarm from "@/assets/icons/noti.svg"
const cx = classNames.bind(styles)

const Header = () => {
  return (
    <div className={cx("header")}>
      <h1 className={cx("header__logo title-20")}>grow fit</h1>
      <div className={cx("header__menu")}>
        <div className={cx("header__menu-item")}>
          <Link href={"/"}>
            <Profile />
          </Link>
        </div>
        <div className={cx("header__menu-item")}>
          <Link href={"/"}>
            <Alarm />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header