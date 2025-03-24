"use client"

import styles from "./Button.module.scss"
import classNames from "classnames/bind"

const cx = classNames.bind(styles)

interface ButtonProps {
  children: React.ReactNode
}

const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <button
      className={cx("button")}
      {...rest}
      onClick={() => {
        console.log("button clicked")
      }}>
      {children}
    </button>
  )
}

export default Button
