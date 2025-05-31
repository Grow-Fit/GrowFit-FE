import styles from './GreetingCard.module.scss'

interface Props {
  chname: string;
}
export default function GreetingCard({chname}:Props) {
  return (
    <div className={styles.greetingCard}>
      <p className={styles.username}><strong>미니준님</strong></p>
      <p className={styles.subtitle}><strong>말랑별</strong>에서 조금씩 멋지게 변하고 있어요!</p>
    </div>
  )
}
