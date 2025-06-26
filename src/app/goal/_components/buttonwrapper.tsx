"use client"
import styles from "./buttonwrapper.module.scss"
import Button from "@/components/common/button/button"

type Props = {
  step: 1 | 2 | 3
  onNext: () => void
  onPrev: () => void
}

const ButtonWrapper = ({ step, onNext, onPrev }: Props) => {
  const handleClick = () => {
    if (step < 3) {
      onNext()
    } else {
      // 완료 동작
      alert("목표 설정이 완료되었습니다!")
    }
  }
  return (
    <div className={styles.goal__btn}>
      <Button
        size="large"
        variant="filled"
        shape="rounded"
        label={step < 3 ? "다음" : "완료"}
        onClick={handleClick}
      />
    </div>
  )
}

export default ButtonWrapper
