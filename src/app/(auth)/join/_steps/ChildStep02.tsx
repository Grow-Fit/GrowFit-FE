import Link from "next/link"

import Button from "@/components/common/button/button"
import Input from "@/components/common/input/input"

import pageStyles from "../[type]/[step]/page.module.scss"
import styles from "./steps.module.scss"

interface Props {
  currentStep: number
}

const INPUT_STATE_MSG = {
  error: "이미 가입된 아이디입니다.",
  success: "사용 가능한 아이디입니다.",
}

const ChildStep02 = ({ currentStep }: Props) => {
  const handleClickJoin = () => {}
  return (
    <>
      <div className={styles.box__step2}>
        <Input
          id="qrCode"
          type="text"
          inputSize="w-full"
          variant="withLabel"
          shape="border"
          label="아이디"
          placeholder="아이디 입력"
          state={{
            type: "error",
            message: INPUT_STATE_MSG.error,
          }}
          customBtn={{
            name: "중복확인",
          }}
        />
        <fieldset>
          <Input
            id="qrCode"
            type="password"
            inputSize="w-full"
            variant="withLabel"
            shape="border"
            label="비밀번호"
            placeholder="비밀번호 입력"
          />
          <Input
            id="qrCode"
            type="password"
            inputSize="w-full"
            variant="withLabel"
            shape="border"
            label="비밀번호 확인"
            placeholder="비밀번호 확인"
          />
        </fieldset>
      </div>
      <Button
        label="다음"
        shape="rounded"
        size="large"
        variant="filled"
        className={pageStyles.join__content__btn}
        onClick={handleClickJoin}
      />
      {/* <Link
        href={`/join/child/${currentStep + 1}`}
        passHref
        aria-disabled={false}
        className={`btn-comm large filled rounded ${}`}>
        다음
      </Link> */}
    </>
  )
}
export default ChildStep02
