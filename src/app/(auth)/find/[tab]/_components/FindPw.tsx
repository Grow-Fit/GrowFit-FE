import { useState } from "react"

import classNames from "classnames/bind"

import Button from "@/components/common/button/button"
import Input from "@/components/common/input/input"

import styles from "./components.module.scss"

const cx = classNames.bind(styles)

const FindFw = () => {
  // #region state
  const [step, setStep] = useState<"find" | "result">("find")
  const [isCodeSent, setIsCodeSent] = useState(false)
  const [timerKey, setTimerKey] = useState(0)

  // #endregion

  // #region input
  // 비밀번호 찾기
  const [verifyInput, setVerifyInput] = useState({
    childId: "",
    email: "",
    code: "",
  })
  // 비밀번호 재설정
  const [password, setPassword] = useState({
    pw: "",
    pwCheck: "",
  })
  // #endregion

  //#region Event
  // 비밀번호 찾기
  const handleChangeVerifyInput = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
    const value = e.target.value

    setVerifyInput((prev) => ({
      ...prev,
      [name]: value,
    }))
  }
  // 비밀번호 재설정
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
    const value = e.target.value

    setPassword((prev) => ({
      ...prev,
      [name]: value,
    }))
  }
  // 아이디 확인
  const handleClickCheckId = () => {}
  // 인증번호 확인
  const handleClickSendCode = () => {
    setIsCodeSent(true)
    setTimerKey((prev) => prev + 1)
  }
  const handleFindPw = () => {
    // TODO : 비밀번호 재설정 api 적용후 필요
    setStep("result")
  }
  // #endregion

  if (step === "result") {
    return (
      <div className={cx(styles.result)}>
        <strong className={cx(styles.result__title__bold)}>비밀번호 재설정</strong>
        <p className={cx(styles.result__desc)}>
          안전한 비밀번호를 위해 영문(대/소문자), 숫자, 특수문자 조합으로 8~20자로 입력해주세요
        </p>
        <Input
          name="pw"
          id="pw"
          type="password"
          inputSize="w-full"
          variant="withLabel"
          shape="border"
          label="새 비밀번호"
          placeholder="새 비밀번호 입력"
          onChange={(e) => handleChangePassword(e, "pw")}
          value={password.pw}
        />
        <Input
          name="pwCheck"
          id="pwCheck"
          type="password"
          inputSize="w-full"
          variant="withLabel"
          shape="border"
          label="비밀번호 확인"
          placeholder="비밀번호 입력"
          onChange={(e) => handleChangePassword(e, "pwCheck")}
          value={password.pwCheck}
        />
        <Button
          type="button"
          label="완료"
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
      <strong className={cx(styles.title)}>부모님 이메일로 비밀번호 찾기</strong>
      <p className={cx(styles.desc)}>아이 아이디와 부모님 이메일로 비밀번호 찾기</p>
      <Input
        name="childId"
        id="childId"
        type="text"
        inputSize="w-full"
        variant="withLabel"
        shape="border"
        label="아이 아이디"
        placeholder="아이 아이디 입력"
        customBtn={{
          name: "확인",
          onClick: handleClickCheckId,
        }}
        onChange={(e) => handleChangeVerifyInput(e, "childId")}
        value={verifyInput.childId}
      />
      <Input
        name="email"
        id="email"
        type="text"
        inputSize="w-full"
        variant="withLabel"
        shape="border"
        label="부모 이메일"
        placeholder="부모 이메일 입력"
        customBtn={{
          name: "인증번호 전송",
          onClick: handleClickSendCode,
        }}
        onChange={(e) => handleChangeVerifyInput(e, "email")}
        value={verifyInput.email}
      />
      {isCodeSent && verifyInput.childId !== "" && verifyInput.email !== "" && (
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
          onChange={(e) => handleChangeVerifyInput(e, "code")}
          value={verifyInput.code}
        />
      )}
      <Button
        type="button"
        label="비밀번호 재설정"
        shape="rounded"
        size="large"
        variant="filled"
        disabled={verifyInput.code === ""}
        classNames={cx(styles.btn__next)}
        onClick={handleFindPw}
      />
    </>
  )
}
export default FindFw
