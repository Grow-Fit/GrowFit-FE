import Link from "next/link"

import LoginStartCharacter from "@/assets/character/login/img-login-start.svg"
import LoginLogo from "@/assets/logo/logo-type01.svg"

import layoutStyles from "./layout.module.scss"
import styles from "./page.module.scss"

const Page = () => {
  return (
    <div className={`${layoutStyles.login__content}`}>
      <LoginLogo width={125} height={32} />
      <p className={`${styles.start__desc}`}>
        몸도 마음도 튼튼하게 <br />
        아이와 함께 건강한 습관 만들기
      </p>
      <LoginStartCharacter width={220} height={220} className={`${styles.start__img}`} />
      <div className={`${layoutStyles.login__content__btns}`}>
        <Link href="/login/parent" passHref>
          부모 로그인
        </Link>
        <Link href="/login/child" passHref>
          아이 로그인
        </Link>
      </div>
    </div>
  )
}

export default Page
