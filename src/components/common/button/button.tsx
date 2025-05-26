import "./button.scss"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: "large" | "medium" | "small"
  variant: "filled" | "ghost"
  shape: "rounded" | "sharp"
  label: string
  disabled?: boolean
  onClick?: () => void
}

const Button = ({ size, variant, shape, label, disabled, onClick, ...props }: ButtonProps) => {
  return (
    <button
      className={`btn-comm ${size} ${variant} ${shape}`}
      disabled={disabled}
      onClick={onClick}
      {...props}>
      {label}
    </button>
  )
}

export default Button
