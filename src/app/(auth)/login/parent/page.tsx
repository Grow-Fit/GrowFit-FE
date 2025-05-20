
import ParentCharacter from "@/assets/character/login/img-login-parent.svg"

import styles from "../layout.module.scss";


const Page = () => {
  return (
    <div >
      <p>
        안녕하세요 여기는 <br />
        그로우핏 부모님 로그인 페이지입니다.
      </p>
      <div>
        <ParentCharacter width={199} height={199} />
        <p>
          올해 목표는?
          <strong>
            그로우핏과 함께 <br />
            가족 모두 튼튼해지기
          </strong>
        </p>
      </div>
      <button type="button">카카오톡으로 시작하기</button>
    </div>
  )
}

export default Page
