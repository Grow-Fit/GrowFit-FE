"use client"

import Picker from "react-mobile-picker"

import { useFormik } from "formik"
import * as Yup from "yup"

import BoyIcon from "@/assets/character/comm/img-boy.svg"
import GirlIcon from "@/assets/character/comm/img-girl.svg"
import ErrorIconSvg from "@/assets/icons/common/icon-error.svg"
import Button from "@/components/common/button/button"
import Input from "@/components/common/input/input"
import { useParentJoin } from "@/hooks/auth/useParentAuth"
import { useUserStore } from "@/stores/userStore"

import { ChildInfoType } from "@/types/auth"

import pageStyles from "../page.module.scss"
import styles from "./steps.module.scss"

function generateNumberArray(begin: number, end: number) {
  const arr = []
  for (let i = begin; i <= end; i++) {
    arr.push(i)
  }
  return arr
}

const ParentStep02 = () => {
  const { updateParent, parent } = useUserStore()
  const { mutate } = useParentJoin()
  // #region pickerValues
  const selections = {
    child_age: generateNumberArray(8, 19),
    child_height: generateNumberArray(100, 200),
    child_weight: generateNumberArray(20, 150),
  }
  // #endregion

  // #region 유효성 검증
  const validationSchema = Yup.object({
    child_name: Yup.string()
      .required("아이 이름은 필수입니다")
      .matches(/^[가-힣a-zA-Z\s]+$/, "아이 이름은 한글과 영문만 입력 가능합니다")
      .min(2, "이름은 최소 2자 이상이어야 합니다")
      .max(20, "이름은 최대 20자까지 입력 가능합니다"),

    child_gender: Yup.string()
      .required("성별을 선택해주세요")
      .oneOf(["MALE", "FEMALE"], "올바른 성별을 선택해주세요"),

    child_age: Yup.number().required("나이를 선택해주세요"),

    child_height: Yup.number().required("키를 선택해주세요"),

    child_weight: Yup.number().required("몸무게를 선택해주세요"),
  })

  // #endregion

  // #region  Formik
  const formik = useFormik({
    initialValues: {
      child_name: "",
      child_gender: "",
      child_age: 10,
      child_height: 120,
      child_weight: 20,
    },
    validationSchema,
    onSubmit: async (values: ChildInfoType) => {
      const updatedChildInfo = {
        ...values,
        child_age: values.child_age,
        child_height: values.child_height,
        childWeight: values.child_weight,
      }

      updateParent(updatedChildInfo)

      const requestData = {
        nickname: parent.nickname ?? "",
        child_name: values.child_name,
        child_gender: values.child_gender,
        child_age: values.child_age,
        child_height: values.child_height,
        child_weight: values.child_weight,
      }

      try {
        const response = await mutate(requestData)
        console.log("성공 응답:", response)
      } catch (error) {
        // 더 자세한 에러 정보
        console.error(error)
      }
    },
  })
  // #endregion

  // #region Event
  const handlePickerChange = (valueMap: Record<string, number>) => {
    Object.entries(valueMap).forEach(([key, value]) => {
      if (formik.values.hasOwnProperty(key) && value !== undefined) {
        formik.setFieldValue(key, value)
      }
    })
  }
  // #endregion

  return (
    <>
      <form className={styles.box__step2} onSubmit={formik.handleSubmit}>
        {/* 아이 이름 */}
        <Input
          id="childName"
          name="child_name"
          type="text"
          inputSize="w-full"
          variant="withLabel"
          shape="border"
          label="아이 이름"
          placeholder="아이 이름 입력"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.child_name}
          state={
            formik.touched.child_name && formik.errors.child_name
              ? {
                  type: "error",
                  message: formik.errors.child_name,
                }
              : null
          }
        />

        {/* 성별 */}
        <fieldset className={`input-comm ${formik.errors.child_gender ? "error" : ""}`}>
          <div className="lab-comm">
            <legend>성별</legend>
            {formik.touched.child_gender && formik.errors.child_gender && (
              <>
                <ErrorIconSvg />
                <p className="lab-state">{formik.errors.child_gender}</p>
              </>
            )}
          </div>

          <label
            htmlFor="genderM"
            className={`${styles.lab_radio} ${formik.values.child_gender === "MALE" ? styles.selected : ""}`}>
            <input
              id="genderM"
              type="radio"
              name="child_gender"
              value="MALE"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              checked={formik.values.child_gender === "MALE"}
            />
            남아
            <BoyIcon className={styles.img_gender} />
          </label>
          <label
            htmlFor="genderF"
            className={`${styles.lab_radio} ${formik.values.child_gender === "FEMALE" ? styles.selected : ""}`}>
            <input
              id="genderF"
              type="radio"
              name="child_gender"
              value="FEMALE"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              checked={formik.values.child_gender === "FEMALE"}
            />
            여아
            <GirlIcon className={styles.img_gender} />
          </label>
        </fieldset>
        {/* 나이 */}
        <div className="input-comm">
          <div className="lab-comm">
            <label htmlFor="childAge">나이</label>
            {formik.touched.child_age && formik.errors.child_age && (
              <p className="lab-state">{formik.errors.child_age}</p>
            )}
          </div>
          <div className={styles.item_picker}>
            <Picker
              id="childAge"
              name="child_age"
              value={{ child_age: formik.values.child_age }}
              onChange={handlePickerChange}
              height={133}
              itemHeight={44}
              wheelMode="natural">
              <Picker.Column name="child_age">
                {selections.child_age.map((item) => (
                  <Picker.Item key={item} value={item}>
                    {({ selected }) => (
                      <div
                        className={`${styles.pickerItem} ${selected ? styles.pickerSelected : styles.pickerUnSelected}`}>
                        {item}세
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
            {formik.touched.child_height && formik.errors.child_height && (
              <p className="lab-state">{formik.errors.child_height}</p>
            )}
          </div>
          <div className={styles.item_picker}>
            <Picker
              id="childHeight"
              name="child_height"
              value={{ child_height: formik.values.child_height }}
              onChange={handlePickerChange}
              height={133}
              itemHeight={44}
              wheelMode="natural">
              <Picker.Column name="child_height">
                {selections.child_height.map((item) => (
                  <Picker.Item key={item} value={item}>
                    {({ selected }) => (
                      <div
                        className={`${styles.pickerItem} ${selected ? styles.pickerSelected : styles.pickerUnSelected}`}>
                        {item}cm
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
            {formik.touched.child_weight && formik.errors.child_weight && (
              <p className="lab-state">{formik.errors.child_weight}</p>
            )}
          </div>
          <div className={styles.item_picker}>
            <Picker
              id="childWeight"
              name="child_weight"
              value={{ child_weight: formik.values.child_weight }}
              onChange={handlePickerChange}
              height={133}
              itemHeight={44}
              wheelMode="natural">
              <Picker.Column name="child_weight">
                {selections.child_weight.map((item) => (
                  <Picker.Item key={item} value={item}>
                    {({ selected }) => (
                      <div
                        className={`${styles.pickerItem} ${selected ? styles.pickerSelected : styles.pickerUnSelected}`}>
                        {item}kg
                      </div>
                    )}
                  </Picker.Item>
                ))}
              </Picker.Column>
            </Picker>
          </div>
        </div>
      </form>
      <Button
        type="submit"
        label="다음"
        shape="rounded"
        size="large"
        variant="filled"
        classNames={pageStyles.join__content__btn}
        onClick={() => formik.handleSubmit()}
      />
    </>
  )
}
export default ParentStep02
