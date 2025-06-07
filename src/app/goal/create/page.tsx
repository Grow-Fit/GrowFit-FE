import styles from "./page.module.scss"

import Step1 from "@/app/goal/_components/step1"
import Step2 from "@/app/goal/_components/step2"
import ButtonWrapper from "@/app/goal/_components/buttonwrapper"
import Complete from "@/app/goal/_components/complete"
import BackHeader from "@/components/layout/header/BackHeader"

const Page = () => {
  return (
    <main>
      <BackHeader title={"목표설정"} />
      {/*<Step1 />*/}
      {/*<Step2 />*/}
      <Complete />
      <ButtonWrapper />
    </main>
  )
}

export default Page
