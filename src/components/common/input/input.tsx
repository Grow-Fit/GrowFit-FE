"use client"

import { forwardRef, useEffect, useState } from "react"

import classNames from "classnames"

import ErrorIconSvg from "@/assets/icons/common/icon-error.svg"
import SuccessIconSvg from "@/assets/icons/common/icon-success.svg"

import "./input.scss"

const cx = classNames

interface InputState {
  type: "error" | "success"
  message: string
}
interface CustomBtn extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  name: string
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string
  inputSize: "w-full"
  variant: "withLabel" | "withoutLabel"
  shape: "border" | "underline"
  label: React.ReactNode
  state?: InputState | null
  disabled?: boolean
  customBtn?: CustomBtn
  timer?: number
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type,
      inputSize,
      variant,
      shape,
      label,
      disabled,
      onChange,
      state,
      customBtn,
      timer,
      ...props
    },
    ref
  ) => {
    const [time, setTime] = useState(0)

    const handleTimerFormat = (num: number) => {
      const minute = Math.floor(num / 60)
      const second = num % 60

      const formatMinute = minute < 10 ? `0${minute}` : minute
      const formatSecond = second < 10 ? `0${second}` : second

      return `${formatMinute}:${formatSecond}`
    }

    useEffect(() => {
      if (!timer) return

      setTime(timer)

      const timerFunc = setInterval(() => {
        setTime((prev) => {
          if (prev > 0) return prev - 1
          else return 0
        })
      }, 1000)
      return () => clearInterval(timerFunc)
    }, [timer])
    return (
      <div className={cx("input-comm", variant, state?.type)}>
        <div className="lab-comm">
          <label htmlFor={props.id}>
            {label}
            {state?.type === "error" && <ErrorIconSvg />}
            {state?.type === "success" && <SuccessIconSvg />}
          </label>
          {!!state?.message && <p className="lab-state">{state?.message}</p>}
        </div>
        <div className="inp-comm">
          <input
            ref={ref}
            id={props.id}
            type={type}
            className={cx("input", inputSize, shape, { disabled })}
            disabled={disabled}
            onChange={onChange}
            {...props}
          />
          {customBtn && (
            <button
              type="button"
              className={cx("inp-comm-btn", "body-40", customBtn.className)}
              {...customBtn}>
              {customBtn.name}
            </button>
          )}
          {timer && <span className={cx("inp-timer")}>{handleTimerFormat(time)}</span>}
        </div>
      </div>
    )
  }
)

Input.displayName = "Input"
export default Input
