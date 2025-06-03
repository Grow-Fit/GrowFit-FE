import Link from "next/link"

import Input from "@/components/common/input/input"

import pageStyles from "../[type]/[step]/page.module.scss"

const INPUT_STATE_MSG = {
  error: "이미 가입된 아이디입니다.",
  success: "사용 가능한 아이디입니다.",
}

const ChildStep03 = () => {
  return (
    <>
      <Input
        id="qrCode"
        type="text"
        inputSize="w-full"
        variant="withLabel"
        shape="border"
        label="닉네임"
        placeholder="닉네임 입력"
        state={{
          type: "error",
          message: INPUT_STATE_MSG.error,
        }}
        customBtn={{
          name: "중복확인",
        }}
      />
      <Link
        href={`/`}
        aria-disabled={false}
        className={`btn-comm large filled rounded ${pageStyles.join__content__btn}`}>
        완료
      </Link>
    </>
  )
}
export default ChildStep03
