import Logo from "@/assets/logo/logo-type01.svg"

const Page = () => {
  return (
    <div>
      <Logo width={125} height={32} />
      <p>
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
    </div>
  )
}

export default Page
