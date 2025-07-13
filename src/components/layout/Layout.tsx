"use client"

import classNames from "classnames/bind"

import styles from "./Layout.module.scss"

const cx = classNames.bind(styles)

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return <div className={cx("layout")}>{children}</div>
}
export default Layout
