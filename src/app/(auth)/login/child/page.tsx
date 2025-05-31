import LoginStartCharacter from "@/assets/character/login/img-login-start.svg"
import LoginLogo from "@/assets/logo/logo-type01.svg"
import Button from "@/components/common/button/button"
import Input from "@/components/common/input/input"

import layoutStyles from "../layout.module.scss"
import styles from "./page.module.scss"

const Page = () => {
  return (
    <div className={`${layoutStyles.login__content} ${styles.login__child}`}>
      <LoginLogo width={125} height={32} />
      <p className={styles.login__child__desc}>
        로그인하고 <br />
        건강한 습관을 이어가요!
      </p>
      <form action="" className="form-content">
        <Input
          id="childId"
          type="text"
          size="w-full"
          variant="withoutLabel"
          shape="border"
          label="아이디"
          placeholder="아이디 입력"
        />
        <Input
          id="childPw"
          type="text"
          size="w-full"
          variant="withoutLabel"
          shape="border"
          label="비밀번호"
          placeholder="비밀번호 입력"
        />
        <Button label="로그인" shape="sharp" size="large" variant="filled" />
      </form>
      <div className={styles.login__util}>
        <button type="button" className={styles.login__util__id}>
          아이디 찾기
        </button>
        <button type="button" className={styles.login__util__pw}>
          비밀번호 찾기
        </button>
        <button type="button" className={styles.login__util__join}>
          회원가입
        </button>
      </div>
      <LoginStartCharacter width={143} height={150} />
    </div>
  )
}

export default Page
