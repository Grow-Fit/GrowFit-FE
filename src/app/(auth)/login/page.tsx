import Logo from "@/assets/logo/logo-type01.svg"

const Page = () => {
  return (
    <div>
      <Logo width={125} height={32} />
      <p>
        몸도 마음도 튼튼하게 <br />
        아이와 함께 건강한 습관 만들기
      </p>
      <button type="button">부모 로그인</button>
      <button type="button">아이 로그인</button>
    </div>
  )
}

export default Page
