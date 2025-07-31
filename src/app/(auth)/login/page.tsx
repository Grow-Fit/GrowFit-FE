"use client" // TODO : api 수정되면 제거예정
import Link from "next/link"

import LoginStartCharacter from "@/assets/character/login/img-login-start.svg"
import LoginLogo from "@/assets/logo/logo-type01.svg"
import { useKakaoAuth } from "@/hooks/auth/useKakaoAuth"

import layoutStyles from "./layout.module.scss"
import styles from "./page.module.scss"

const Page = () => {
  const { handleKakaoLogin, handleKakaoLogout, isLoading } = useKakaoAuth()

  return (
    <div className={`${layoutStyles.login__content}`}>
      <LoginLogo width={125} height={32} />
      <p className={`${styles.start__desc}`}>
        몸도 마음도 튼튼하게 <br />
        아이와 함께 건강한 습관 만들기
      </p>
      <LoginStartCharacter width={220} height={220} className={`${styles.start__img}`} />
      <div className={`${layoutStyles.login__content__btns}`}>
        {/* TODO : api 수정되면 제거예정 */}
        <button
          style={{ backgroundColor: "yellow" }}
          type="button"
          className={`btn-comm rounded ${styles.btn_kakao_login}`}
          onClick={handleKakaoLogin}
          disabled={isLoading}>
          {isLoading ? "로그인 중..." : "카카오톡으로 시작하기 (테스트용)"}
        </button>
        <button
          style={{ backgroundColor: "red" }}
          type="button"
          className={`btn-comm rounded ${styles.btn_kakao_login}`}
          onClick={handleKakaoLogout}>
          로그아웃
        </button>
        <Link href="/join/parent/1" className="btn-comm large filled rounded">
          부모 회원가입
        </Link>
        <Link href="/login/child" className="btn-comm large ghost rounded">
          아이 로그인
        </Link>
      </div>
    </div>
  )
}

export default Page
