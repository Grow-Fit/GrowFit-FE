import classNames from "classnames/bind"
import styles from "./addbutton.module.scss"
import Addable from "@/assets/icons/common/icon-add_black.svg"
import Added from "@/assets/icons/common/icon-added_black.svg"

const cx = classNames.bind(styles)

interface ButtonProps {
  disabled: boolean
  onClick: () => void
}

const AddButton = ({ disabled, onClick }: ButtonProps) => {
  return (
    <div className={cx("button")} onClick={onClick}>
      {disabled ? <Added /> : <Addable />}
    </div>
  )
}

export default AddButton
