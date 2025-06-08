"use client"

import { ChangeEvent, useState } from "react"
import Picker from "react-mobile-picker"
import Link from "next/link"
import { useRouter } from "next/navigation"

import BoyIcon from "@/assets/character/comm/img-boy.svg"
import GirlIcon from "@/assets/character/comm/img-girl.svg"
import Button from "@/components/common/button/button"
import Input from "@/components/common/input/input"
import { useUserStore } from "@/stores/userStore"

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
  const router = useRouter()
  const { updateUser } = useUserStore()
  const [childInfo, setChildInfo] = useState({
    childName: "",
    childGender: "",
  })

  const [pickerValues, setPickerValues] = useState<{
    childAge: string
    childHeight: string
    childWeight: string
  }>({
    childAge: "10세",
    childHeight: "120cm",
    childWeight: "20kg",
  })

  const selections = {
    childAge: generateNumberArray(8, 19, "세"),
    childHeight: generateNumberArray(100, 200, "cm"),
    childWeight: generateNumberArray(20, 150, "kg"),
  }

  const handleChange = (key: string, e: ChangeEvent<HTMLInputElement>) => {
    setChildInfo((prev) => ({
      ...prev,
      [key]: e.target.value,
    }))
  }

  const handlePickerChange = (valueMap: Record<string, string>) => {
    setPickerValues({
      childAge: valueMap.childAge || pickerValues.childAge,
      childHeight: valueMap.childHeight || pickerValues.childHeight,
      childWeight: valueMap.childWeight || pickerValues.childWeight,
    })
  }

  const handleClickNext = async () => {
    await updateUser({
      ...childInfo,
      childAge: parseInt(pickerValues.childAge.replace("세", "")),
      childHeight: parseInt(pickerValues.childHeight.replace("cm", "")),
      childWeight: parseInt(pickerValues.childWeight.replace("kg", "")),
    })
    router.push("/success?type=parent")
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
            className={`${styles.lab_radio} ${childInfo.childGender === "M" ? styles.selected : ""}`}>
            <input
              id="genderM"
              type="radio"
              name="childGender"
              value="M"
              onChange={(e) => handleChange("childGender", e)}
            />
            남아
            <BoyIcon className={styles.img_gender} />
          </label>
          <label
            htmlFor="genderF"
            className={`${styles.lab_radio} ${childInfo.childGender === "F" ? styles.selected : ""}`}>
            <input
              id="genderF"
              type="radio"
              name="childGender"
              value="F"
              onChange={(e) => handleChange("childGender", e)}
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
              <Picker.Column name="childAge">
                {selections.childAge.map((item) => (
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
              <Picker.Column name="childHeight">
                {selections.childHeight.map((item) => (
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
              <Picker.Column name="childWeight">
                {selections.childWeight.map((item) => (
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
      <Button
        label="다음"
        shape="rounded"
        size="large"
        variant="filled"
        classNames={pageStyles.join__content__btn}
        onClick={handleClickNext}
      />
    </>
  )
}
export default ParentStep02
