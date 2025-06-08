import Link from "next/link"

import CompleteIcon from "@/assets/character/comm/img-complete.svg"

import LayoutStyles from "../layout.module.scss"

interface Props {
  userType: string
}

const RENDER_INFO = {
  child: {
    title: "회원가입이 완료됐어요!",
    desc: "",
    btns: [
      {
        label: "홈으로 이동",
        link: "/",
        classNames: "btn-comm large filled rounded",
      },
    ],
  },
  parent: {
    title: "회원가입이 완료됐어요!",
    desc: "아이의 가입을 위한 QR 스캔을 생성해주세요!",
    btns: [
      {
        label: "QR 생성하기",
        link: "/join/qr/generate",
        classNames: "btn-comm large filled rounded",
      },
      {
        label: "다음에 등록할게요",
        link: "/",
        classNames: "btn-comm large ghost rounded",
      },
    ],
  },
}

const Success = ({ userType }: Props) => {
  const successInfo = RENDER_INFO[userType as keyof typeof RENDER_INFO]
  return (
    <div className={LayoutStyles.result__content}>
      <CompleteIcon />
      <h3 className={LayoutStyles.result__content__title}>{successInfo.title}</h3>
      {successInfo.desc !== "" && (
        <p className={LayoutStyles.result__content__desc}>{successInfo.desc}</p>
      )}
      <div className={LayoutStyles.result__content__btns}>
        {successInfo.btns.map((btn, idx) => (
          <Link key={`success-key${idx}`} href={btn.link} className={btn.classNames}>
            {btn.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
export default Success
