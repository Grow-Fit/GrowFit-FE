import LoginParentCharacter from '@/assets/character/login/img-login-start.svg'
import LoginLogo from '@/assets/logo/logo-type01.svg'

import layoutStyles from '../layout.module.scss'
import styles from './page.module.scss'

const Page = () => {
  return (
    <div className={`${layoutStyles.login__content} `}>
      <LoginLogo width={125} height={32} />
      <p className={`${layoutStyles.login__content__desc}`}>
        안녕하세요 여기는 <br />
        그로우핏 부모님 로그인 페이지입니다.
      </p>
      <LoginParentCharacter width={199} height={199} />
        <p>
          올해 목표는?
          <strong>
            그로우핏과 함께 <br />
            가족 모두 튼튼해지기
          </strong>
        </p>
      <div className={`${layoutStyles.login__content__btns}`}><button type="button">카카오톡으로 시작하기</button></div>
    </div>
  )
}

export default Page
