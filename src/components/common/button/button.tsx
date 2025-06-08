import classNames from "classnames"

import "./button.scss"

const cx = classNames

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: "large" | "medium" | "small"
  variant: "filled" | "ghost"
  shape: "rounded" | "sharp"
  label: string
  disabled?: boolean
  classNames?: string
  onClick?: () => void
}

const Button = ({
  size,
  variant,
  shape,
  label,
  disabled,
  classNames,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cx("btn-comm", size, variant, shape, classNames)}
      disabled={disabled}
      onClick={onClick}
      {...props}>
      {label}
    </button>
  )
}

export default Button
