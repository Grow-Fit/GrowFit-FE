"use client"
import Link from "next/link";
import classNames from "classnames/bind"
import styles from "@/components/layout/Navigation.module.scss";
import Home from "@/assets/icons/home.svg"
import Meal from "@/assets/icons/meal.svg"
import Goal from "@/assets/icons/goal.svg"
import MyPage from "@/assets/icons/mypage.svg"
const cx = classNames.bind(styles)
const Navigation = () => {
  return (
    <div className={cx("navi")}>
      <ul className={cx("navi__menu")}>
        <li className={cx("navi__menu-item")}>
          <Link href={"/"}>
            <Home/>
            <p>홈</p>
          </Link>
        </li>
        <li className={cx("navi__menu-item")}>
          <Link href={"/"}>
            <Meal/>
            <p>식단 일지</p>
          </Link>
        </li>
        <li className={cx("navi__menu-item")}>
          <Link href={"/"}>
            <Goal/>
            <p>목표 보드</p>
          </Link>
        </li>
        <li className={cx("navi__menu-item")}>
          <Link href={"/"}>
            <MyPage/>
            <p>마이페이지</p>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Navigation