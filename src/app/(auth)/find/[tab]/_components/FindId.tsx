import { useState } from "react"

import classNames from "classnames/bind"

import Button from "@/components/common/button/button"
import Input from "@/components/common/input/input"

import styles from "./components.module.scss"

const cx = classNames.bind(styles)

const FindId = () => {
  // #region state
  const [step, setStep] = useState<"find" | "result">("find")
  const [isCodeSent, setIsCodeSent] = useState(false)
  const [timerKey, setTimerKey] = useState(0)
  // #endregion

  // #region input
  const [verifyInput, setVerifyInput] = useState({
    email: "",
    code: "",
  })
  // #endregion

  //#region Event
  const handleChangeVerifyCode = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
    const value = e.target.value

    setVerifyInput((prev) => ({
      ...prev,
      [name]: value,
    }))
  }
  const handleClickSendCode = () => {
    setIsCodeSent(true)
    setTimerKey((prev) => prev + 1)
  }

  const handleFindId = () => {
    // TODO : 아이디 찾기 api 적용후 아이디 결과 보여주는것으로 바꿔야함
    setStep("result")
  }
  // #endregion
  if (step === "result") {
    return (
      <div className={cx(styles.result)}>
        <strong className={cx(styles.result__title)}>가입된 아이디가 총1개 있습니다</strong>
        <div className={cx(styles.result__info)}>
          <dl>
            <dt>아이디 :</dt>
            <dd>test123</dd>
          </dl>
          <dl>
            <dt>가입일 :</dt>
            <dd>2025.1.24</dd>
          </dl>
        </div>
        <Button
          type="button"
          label="로그인"
          shape="rounded"
          size="large"
          variant="filled"
          disabled={verifyInput.code === ""}
          classNames={cx(styles.btn__next)}
        />
      </div>
    )
  }

  return (
    <>
      <strong className={cx(styles.title)}>부모님 이메일로 아이디 찾기</strong>
      <p className={cx(styles.desc)}>이미 가입된 부모님의 이메일로 아이디 찾기</p>
      <Input
        name="email"
        id="email"
        type="text"
        inputSize="w-full"
        variant="withoutLabel"
        shape="border"
        label="이메일"
        placeholder="이메일 입력"
        customBtn={{
          name: "인증번호 전송",
          onClick: handleClickSendCode,
        }}
        onChange={(e) => handleChangeVerifyCode(e, "email")}
        value={verifyInput.email}
      />
      {isCodeSent && verifyInput.email !== "" && (
        <Input
          key={timerKey}
          name="code"
          id="code"
          type="text"
          inputSize="w-full"
          variant="withoutLabel"
          shape="border"
          label="인증번호"
          placeholder="인증번호 입력"
          timer={180}
          onChange={(e) => handleChangeVerifyCode(e, "code")}
          value={verifyInput.code}
        />
      )}
      <Button
        type="button"
        label="아이디 찾기"
        shape="rounded"
        size="large"
        variant="filled"
        disabled={verifyInput.code === ""}
        classNames={cx(styles.btn__next)}
        onClick={handleFindId}
      />
    </>
  )
}
export default FindId
