"use client"

import classNames from "classnames/bind"

import styles from "./input.module.scss"

const cx = classNames.bind(styles)

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string
  size: "w-full"
  variant: "withLabel" | "withoutLabel"
  shape: "border" | "underline"
  label: string
  disabled?: boolean
  onChange?: () => void
}

const Input = ({ type, size, variant, shape, label, disabled, onChange, ...props }: InputProps) => {
  return (
    <div className={cx("comm", variant)}>
      <label htmlFor={props.id}>{label}</label>
      <input
        id={props.id}
        type={type}
        className={cx("input", size, shape, { disabled })}
        disabled={disabled}
        onChange={onChange}
        {...props}
      />
    </div>
  )
}
export default Input
