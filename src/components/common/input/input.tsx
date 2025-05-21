"use client"

import classNames from "classnames/bind"

import styles from "./input.module.scss"

const cx = classNames.bind(styles)

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string
  variant: "withLabel" | "withoutLabel"
  shape: "border" | "underline"
  label: string
  disabled?: boolean
  onChange?: () => void
}

const Input = ({ type, size, variant, shape, label, disabled, onChange, ...props }: InputProps) => {
  return (
    <div>
      <label htmlFor="">{label}</label>
      <input
        type={type}
        className={cx("input", size, variant, shape, { disabled })}
        disabled={disabled}
        onChange={onChange}
        {...props}
      />
    </div>
  )
}
export default Input
