import styles from "./toastmsg.module.scss"

const ToastMsg = ({ message }: string) => {
  return (
    <div className={styles.toastmsg}>
      <div>{message}</div>
    </div>
  )
}

export default ToastMsg
