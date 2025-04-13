"use client"
import classNames from "classnames/bind"
import styles from "./addbutton.module.scss"
import Image from "next/image";
import Addable from "@/assets/icon/btn_add.svg"
import Added from "@/assets/icon/btn_added.svg"

const cx = classNames.bind(styles)

interface ButtonProps {
  disabled?: boolean;
  label: string;
  onClick: () => void;
}

const AddButton = ({
                  disabled,
                  onClick,
                  label
                }: ButtonProps) => {
  return (
    <div
      className={cx("button", {disabled})}
      onClick={onClick}
    >
      <Image src={disabled ? Added : Addable} alt={label} width={20} height={20} />
    </div>
  )
}

export default AddButton