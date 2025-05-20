import StartCharacter from "@/assets/character/login/img-login-start.svg" 

const Page = () => {
  return (
    <div>
      <p>
        몸도 마음도 튼튼하게 <br />
        아이와 함께 건강한 습관 만들기
      </p>
      <StartCharacter width={220} height={201} />
      <button type="button">부모 로그인</button>
      <button type="button">아이 로그인</button>
    </div>
  )
}

export default Page
