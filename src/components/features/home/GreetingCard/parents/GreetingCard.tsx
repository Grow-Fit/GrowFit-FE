import styles from './GreetingCard.module.scss'

interface Props {
  username: string;
}

export default function GreetingCard({ username }: Props) {
  return (
    <div className={styles.greetingCard}>
      <p className={styles.username}><strong>{username}님</strong></p>
      <p className={styles.subtitle}><strong>말랑별</strong>에서 아이의 모험이 시작됐어요!</p>
    </div>
  );
}
