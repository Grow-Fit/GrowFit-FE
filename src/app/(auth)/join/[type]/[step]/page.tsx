import styles from "./page.module.scss"

import ChildStep01 from "./_components/ChildStep01"
import ChildStep02 from "./_components/ChildStep02"
import ChildStep03 from "./_components/ChildStep03"
import ParentStep01 from "./_components/ParentStep01"
import ParentStep02 from "./_components/ParentStep02"

const STEPS = {
  parent: [
    {
      title: "그로우핏에서 사용할 닉네임을\n 입력해 주세요.",
      component: () => <ParentStep01 />,
    },
    {
      title: "아이의 정보를 입력해 주세요.",
      component: () => <ParentStep02 />,
    },
  ],
  child: [
    {
      title: "QR코드를 스캔해주시거나 \n 코드를 입력해 주세요.",
      component: () => <ChildStep01 />,
    },
    {
      title: "그로우핏 계정으로 사용할 \n 아이디와 비밀번호를 입력해 주세요.",
      component: () => <ChildStep02 />,
    },

    {
      title: "그로우핏에서 사용할 닉네임을\n 입력해 주세요.",
      component: () => <ChildStep03 />,
    },
  ],
}

interface Props {
  params: Promise<{
    type: string // "parent" | "child"
    step: string // "1" | "2" | "3"
  }>
}

const Page = async ({ params }: Props) => {
  const { type, step } = await params
  const currentType = type as keyof typeof STEPS
  const currentStep = parseInt(step)

  return (
    <section className={styles.join__content}>
      <div className={styles.join__content__title}>
        <em>0{currentStep}</em>
        <h3>{STEPS[currentType][currentStep - 1].title}</h3>
      </div>
      {STEPS[currentType][currentStep - 1].component()}
    </section>
  )
}
export default Page
