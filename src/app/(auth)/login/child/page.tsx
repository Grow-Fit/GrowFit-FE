import LoginStartCharacter from "@/assets/character/login/img-login-start.svg"
import LoginLogo from "@/assets/logo/logo-type01.svg"

import layoutStyles from "../layout.module.scss"
import styles from "./page.module.scss"

const Page = () => {
  return (
    <div className={`${layoutStyles.login__content} ${styles.login__child}`}>
      <LoginLogo className={styles.login__content__logo} width={125} height={32} />
      <p className={styles.login__child__desc}>
        로그인하고 <br />
        건강한 습관을 이어가요!
      </p>
      <form action="">
        <div>
          <label htmlFor="">아이디</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">비밀번호</label>
          <input type="password" />
        </div>
        <button>로그인</button>
      </form>
      <div>
        <button type="button">아이디 찾기</button>
        <button type="button">비밀번호 찾기</button>
        <button type="button">회원가입</button>
      </div>
      <LoginStartCharacter width={143} height={150} />
    </div>
  )
}

export default Page
