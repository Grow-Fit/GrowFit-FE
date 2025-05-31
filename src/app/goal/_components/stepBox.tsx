import styles from "./stepBox.module.scss";
interface StepBoxProps {
  stepNum: string;
  stepTxt: string;
}
const StepBox = ({ stepNum, stepTxt }: StepBoxProps) => {
  return (
    <div className={styles.step}>
      <h2>
        <strong>{stepNum}</strong>
        <p>{stepTxt}</p>
      </h2>
    </div>
  )
}

export default StepBox