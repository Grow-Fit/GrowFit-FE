"use client"
import styles from "./buttonwrapper.module.scss"
import Button from "@/components/common/button/button"
import { useRouter } from "next/navigation"

type Props = {
  step: 1 | 2 | 3
  onNext: () => void
  onMutate: () => void
}

const ButtonWrapper = ({ step, onNext, onMutate }: Props) => {
  const router = useRouter()
  const handleClick = () => {
    if (step < 2) {
      onNext()
    } else if (step === 2) {
      onMutate()
      onNext()
    } else if (step === 3) {
      router.push("/goal/detail")
    }
  }
  return (
    <div className={styles.goal__btn}>
      <Button
        size="large"
        variant="filled"
        shape="rounded"
        label={step < 3 ? "다음" : "목표보드로 이동하기"}
        onClick={handleClick}
      />
    </div>
  )
}

export default ButtonWrapper
