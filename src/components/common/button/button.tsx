"use client"

import classNames from "classnames/bind"

import styles from "./button.module.scss"

const cx = classNames.bind(styles)

interface ButtonProps {
  size: "large" | "medium"
  variant: 'filled' | 'ghost';
  shape: 'rounded' | 'sharp';
  label: string;
  disabled?: boolean;
  onClick: () => void;
}

const Button = ({
  size,
  variant,
  shape,
  label,
  disabled,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cx("button", size, variant, shape, {disabled})}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  )
}

export default Button
