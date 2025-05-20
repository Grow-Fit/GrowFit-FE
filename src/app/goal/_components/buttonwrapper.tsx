"use client"
import styles from "./buttonwrapper.module.scss";
import Button from "@/components/common/button/button";

const ButtonWrapper = () => {
  return (
    <div className={styles.goal__btn}>
      <Button
        size={"large"}
        variant={"filled"}
        shape={"rounded"}
        label={"다음"}
        onClick={() => {
        }}
      />
    </div>
  )
}

export default ButtonWrapper;