import Link from "next/link"

import ErrorIcon from "@/assets/character/comm/img-error.svg"

import LayoutStyles from "../layout.module.scss"

interface Props {
  userType: string
}

const RENDER_INFO = {
  qr: {
    title: "QR인증에 실패했어요!",
    desc: "코드 번호를 다시 확인해주시거나,\n 밝은 곳에서 촬영해주세요.",
    btns: [
      {
        label: "다시 시도하기",
        link: "/join/child/1",
        classNames: "btn-comm large filled rounded",
      },
    ],
  },
  join: {
    title: "회원가입에 실패했어요!",
    desc: "",
    btns: [
      {
        label: "부모 회원가입",
        link: "/join/parent/1",
        classNames: "btn-comm large filled rounded",
      },
    ],
  },
  login: {
    title: "로그인에 실패했어요!",
    desc: "",
    btns: [
      {
        label: "돌아가기",
        link: "/login/child",
        classNames: "btn-comm large filled rounded",
      },
    ],
  },
}

const Error = ({ userType }: Props) => {
  const successInfo = RENDER_INFO[userType as keyof typeof RENDER_INFO]
  return (
    <div className={LayoutStyles.result__content}>
      <ErrorIcon />
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
export default Error
