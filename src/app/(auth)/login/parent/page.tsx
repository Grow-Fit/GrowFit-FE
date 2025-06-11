"use client"

import Link from "next/link"

import LoginParentCharacter from "@/assets/character/login/img-login-parent.svg"
// import KakaotalkIcon from "@/assets/icons/common/icon-kakaotalk.svg"
import LoginLogo from "@/assets/logo/logo-type01.svg"

// import { useKakaoAuth } from "@/hooks/useKakaoAuth"
import layoutStyles from "../layout.module.scss"
import styles from "./page.module.scss"

const Page = () => {
  // const { handleKakaoLogin, isLoading } = useKakaoAuth() TODO : api 수정되면 원복 예정

  return (
    <div className={`${layoutStyles.login__content} ${styles.login__parent} `}>
      <LoginLogo width={125} height={32} />
      <p className={`${layoutStyles.login__content__desc}`}>
        안녕하세요 여기는 <br />
        그로우핏 부모님 로그인 페이지입니다.
      </p>
      <LoginParentCharacter className={styles.login__parent__img} width={199} height={199} />
      <p className={styles.login__parent__desc}>
        올해 목표는?
        <strong>
          그로우핏과 함께 <br />
          가족 모두 튼튼해지기
        </strong>
      </p>
      <div className={`${layoutStyles.login__content__btns}`}>
        {/* TODO : api 수정되면 원복 예정
        <button
          type="button"
          className={`btn-comm rounded ${styles.btn_kakao_login}`}
          onClick={handleKakaoLogin}
          disabled={isLoading}>
          <KakaotalkIcon className={styles.icon_kakaotalk} />
          {isLoading ? "로그인 중..." : "카카오톡으로 시작하기"}
        </button> */}
        <Link href="/join/parent/1" className="btn-comm large filled rounded">
          부모 로그인
        </Link>
      </div>
    </div>
  )
}

export default Page
