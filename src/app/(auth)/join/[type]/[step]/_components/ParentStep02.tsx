"use client"

import { ChangeEvent, useState } from "react"
import Picker from "react-mobile-picker"
import Link from "next/link"

import BoyIcon from "@/assets/character/comm/img-boy.svg"
import GirlIcon from "@/assets/character/comm/img-girl.svg"
import Input from "@/components/common/input/input"

import pageStyles from "../page.module.scss"
import styles from "./steps.module.scss"

function generateNumberArray(begin: number, end: number, unit: string) {
  const arr = []
  for (let i = begin; i <= end; i++) {
    arr.push(`${i}${unit}`)
  }
  return arr
}

const ParentStep02 = () => {
  const [childInfo, setChildInfo] = useState({
    childName: "",
    gender: "",
  })

  const [pickerValues, setPickerValues] = useState<{
    age: string
    height: string
    weight: string
  }>({
    age: "10세",
    height: "140cm",
    weight: "30kg",
  })

  const selections = {
    age: generateNumberArray(8, 19, "세"),
    height: generateNumberArray(100, 200, "cm"),
    weight: generateNumberArray(20, 150, "kg"),
  }

  const handleChange = (key: string, e: ChangeEvent<HTMLInputElement>) => {
    setChildInfo((prev) => ({
      ...prev,
      [key]: e.target.value,
    }))
  }

  // Picker 값 변경 핸들러
  const handlePickerChange = (valueMap: Record<string, string>) => {
    setPickerValues({
      age: valueMap.age || pickerValues.age,
      height: valueMap.height || pickerValues.height,
      weight: valueMap.weight || pickerValues.weight,
    })
  }

  return (
    <>
      <div className={styles.box__step2}>
        {/* 아이 이름 */}
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
        {/* 성별 */}
        <fieldset className="input-comm">
          <div className="lab-comm">
            <legend>성별</legend>
          </div>

          <label
            htmlFor="genderM"
            className={`${styles.lab_radio} ${childInfo.gender === "M" ? styles.selected : ""}`}>
            <input
              id="genderM"
              type="radio"
              name="gender"
              value="M"
              onChange={(e) => handleChange("gender", e)}
            />
            남아
            <BoyIcon className={styles.img_gender} />
          </label>
          <label
            htmlFor="genderF"
            className={`${styles.lab_radio} ${childInfo.gender === "F" ? styles.selected : ""}`}>
            <input
              id="genderF"
              type="radio"
              name="gender"
              value="F"
              onChange={(e) => handleChange("gender", e)}
            />
            여아
            <GirlIcon className={styles.img_gender} />
          </label>
        </fieldset>
        {/* 나이 */}
        <div className="input-comm">
          <div className="lab-comm">
            <label htmlFor="childAge">나이</label>
          </div>
          <div className={styles.item_picker}>
            <Picker
              id="childAge"
              value={pickerValues}
              onChange={handlePickerChange}
              height={133}
              itemHeight={44}
              wheelMode="natural">
              <Picker.Column name="age">
                {selections.age.map((item) => (
                  <Picker.Item key={item} value={item}>
                    {({ selected }) => (
                      <div
                        className={`${styles.pickerItem} ${selected ? styles.pickerSelected : styles.pickerUnSelected}`}>
                        {item}
                      </div>
                    )}
                  </Picker.Item>
                ))}
              </Picker.Column>
            </Picker>
          </div>
        </div>
        {/* 키 */}
        <div className="input-comm">
          <div className="lab-comm">
            <label htmlFor="childHeight">키</label>
          </div>
          <div className={styles.item_picker}>
            <Picker
              id="childHeight"
              value={pickerValues}
              onChange={handlePickerChange}
              height={133}
              itemHeight={44}
              wheelMode="natural">
              <Picker.Column name="height">
                {selections.height.map((item) => (
                  <Picker.Item key={item} value={item}>
                    {({ selected }) => (
                      <div
                        className={`${styles.pickerItem} ${selected ? styles.pickerSelected : styles.pickerUnSelected}`}>
                        {item}
                      </div>
                    )}
                  </Picker.Item>
                ))}
              </Picker.Column>
            </Picker>
          </div>
        </div>
        {/* 몸무게 */}
        <div className="input-comm">
          <div className="lab-comm">
            <label htmlFor="childWeight">몸무게</label>
          </div>
          <div className={styles.item_picker}>
            <Picker
              id="childWeight"
              value={pickerValues}
              onChange={handlePickerChange}
              height={133}
              itemHeight={44}
              wheelMode="natural">
              <Picker.Column name="weight">
                {selections.weight.map((item) => (
                  <Picker.Item key={item} value={item}>
                    {({ selected }) => (
                      <div
                        className={`${styles.pickerItem} ${selected ? styles.pickerSelected : styles.pickerUnSelected}`}>
                        {item}
                      </div>
                    )}
                  </Picker.Item>
                ))}
              </Picker.Column>
            </Picker>
          </div>
        </div>
      </div>
      <Link
        href="/success?type=parent"
        passHref
        className={`btn-comm large filled rounded ${pageStyles.join__content__btn}`}>
        다음
      </Link>
    </>
  )
}
export default ParentStep02
