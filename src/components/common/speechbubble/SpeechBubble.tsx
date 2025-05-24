import styles from "./SpeechBubble.module.scss"

interface Props {
  message: string
}

export default function SpeechBubble({ message }: Props) {
  return (
    <div className={styles.speechBubble}>
      {message}
    </div>
  )
}
