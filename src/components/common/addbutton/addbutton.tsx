"use client"
import Image from "next/image";
import classNames from "classnames/bind"
import styles from "./addbutton.module.scss"
import Addable from "@/assets/icons/common/icon-add.svg"
import Added from "@/assets/icons/common/icon-added.svg"

const cx = classNames.bind(styles)
interface ButtonProps {
  disabled: boolean;
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
      className={cx("button")}
      onClick={onClick}
    >
      {disabled ? (
        <Added />
      ) : (
        <Addable />
      )}

    </div>
  )
}

export default AddButton