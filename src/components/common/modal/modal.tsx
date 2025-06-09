import styles from "./modal.module.scss"

const Modal = () => {
  return (
    <div className={styles.modal}>
      <div className={styles.modal__backdrop}></div>
      <div className={styles.modal__content}>
        <p>
          아침메뉴 2개를 올리셨어요! <br />
          이대로 식단업로드 할까요?
        </p>
        <div className={styles.modal__btn}>
          <button>아니요</button>
          <button>네</button>
        </div>
      </div>
    </div>
  )
}
export default Modal
