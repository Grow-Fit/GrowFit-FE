"use client"

import classNames from "classnames/bind"

import styles from "./Layout.module.scss"

const cx = classNames.bind(styles)

const Layout = ({children}:React.ReactNode) => {
  return (
    <div
      className={cx("layout")}>
      {children}
    </div>
  )
}
export default Layout;