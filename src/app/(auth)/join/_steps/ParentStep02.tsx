"use client"

import { ChangeEvent, useState } from "react"
import Link from "next/link"

import Input from "@/components/common/input/input"

import pageStyles from "../[type]/[step]/page.module.scss"
import styles from "./steps.module.scss"

const ParentStep02 = () => {
  const [childInfo, setChildInfo] = useState({
    childName: "",
    gender: "M",
    age: "",
    height: "",
    weight: "",
  })

  const handleChange = (key: string, e: ChangeEvent<HTMLInputElement>) => {
    setChildInfo((prev) => ({
      ...prev,
      [key]: e.target.value,
    }))
  }
  return (
    <>
      <div className={styles.box__step1}>
        <Input
          id="childName"
          type="text"
          inputSize="w-full"
          variant="withLabel"
          shape="border"
          label="아이 이름"
          placeholder="아이 이름 입력"
          onChange={(e) => handleChange("childName", e)}
          value={childInfo.childName}
        />
      </div>
      <Link href="/" className={`btn-comm large filled rounded ${pageStyles.join__content__btn}`}>
        다음
      </Link>
    </>
  )
}
export default ParentStep02
