"use client"

import { forwardRef } from "react"

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
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { type, inputSize, variant, shape, label, disabled, onChange, state, customBtn, ...props },
    ref
  ) => {
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
            <button type="button" className="inp-comm-btn body-40" {...customBtn}>
              {customBtn.name}
            </button>
          )}
        </div>
      </div>
    )
  }
)

Input.displayName = "Input"
export default Input
