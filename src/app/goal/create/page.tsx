"use client"

import Step1 from "@/app/goal/_components/step1"
import Step2 from "@/app/goal/_components/step2"
import ButtonWrapper from "@/app/goal/_components/buttonwrapper"
import Complete from "@/app/goal/_components/complete"
import BackHeader from "@/components/layout/header/BackHeader"
import { useState } from "react"
import { useGoalCreate } from "@/queries/goal/userGoalQuery"

const Page = () => {
  const [step, setStep] = useState<1 | 2 | 3>(1) // 단계: 1 → 2 → 3
  const [data, setData] = useState({
    startDate: "",
    endDate: "",
    certificationCount: 0,
    name: "",
    iconId: 0,
    icon: "",
  })

  const transformData = (rawData) => {
    const goals = Object.entries(rawData)
      .filter(([key]) => !["startDate", "endDate", "certificationCount"].includes(key))
      .map(([_, value], index) => ({
        name: value.name,
        iconId: index + 1,
      }))

    return {
      startDate: rawData.startDate,
      endDate: rawData.endDate,
      certificationCount: rawData.certificationCount,
      goals,
    }
  }

  const requestData = transformData(data)

  const handleNext = () => {
    setStep((prev) => (prev < 3 ? ((prev + 1) as 1 | 2 | 3) : prev))
  }
  const { mutate } = useGoalCreate(requestData)

  return (
    <main>
      <BackHeader title={"목표설정"} />

      {step === 1 && <Step1 data={data} setData={setData} />}
      {step === 2 && <Step2 data={data} setData={setData} />}
      {step === 3 && <Complete data={data} />}

      <ButtonWrapper step={step} onNext={handleNext} onMutate={mutate} />
    </main>
  )
}

export default Page
