import styles from "./letter.module.scss"
import BackHeader from "@/components/layout/header/BackHeader";
import ProfileIcon from "@/assets/character/profile-default.svg"
import TextArea from "@/components/common/textarea/textarea";
const LetterCreate = () => {
  return (
    <div className={styles.letter}>
      <BackHeader />
      <div className={styles.letter__form}>
        <ProfileIcon/>
        <div className={styles.letter__title}>
          <p>아이가 목표를 멋지게 해냈어요!</p>
          <strong>칭찬 편지를 남겨볼까요?</strong>
        </div>
        <div className={styles.letter__field}>
          <h3>To.미니준</h3>
          <TextArea placeholder={"메시지를 입력해주세요."} />
        </div>
      </div>
    </div>
  )
}
export default LetterCreate