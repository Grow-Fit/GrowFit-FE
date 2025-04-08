"use client"

import classNames from "classnames/bind"

import styles from "./Button.module.scss"

const cx = classNames.bind(styles)

interface ButtonProps {
  children: React.ReactNode
}

const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <button
      className={cx("button", "title-10")}
      {...rest}
      onClick={() => {
        console.log("button clicked")
      }}>
      {children}
    </button>
  )
}

export default Button
