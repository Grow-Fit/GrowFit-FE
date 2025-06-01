import styles from "./page.module.scss"
import { ArrowIcon, ProfileIcon, GoOutIcon } from "@/components/common/icon"
import Link from "next/link"

const Page = () => {
  return (
    <div className={styles.mypage}>
      <div className={styles.mypage__my}>
        <div className={styles.mypage__myname}>
          <div>
            <ProfileIcon />
            <p>현주님 안녕하세요!</p>
          </div>
          <ArrowIcon />
        </div>
        <div className={styles.mypage__myinfo}>
          <div>
            <ProfileIcon />
            <div>
              <p>
                <strong>김민준</strong>
                <span>11세</span>
                <span>남</span>
              </p>
              <p>
                <span>144cm</span>
                <span>60KG</span>
              </p>
            </div>
          </div>
          <p>정보수정</p>
        </div>
      </div>
      <ul className={styles.mypage__list}>
        <li>
          <Link href={"/"}>정보수정</Link>
          <ArrowIcon />
        </li>
        <li>
          <p>계정탈퇴</p>
          <ArrowIcon />
        </li>
        <li>
          <p>정보수정</p>
          <GoOutIcon />
        </li>
      </ul>
    </div>
  )
}
export default Page
