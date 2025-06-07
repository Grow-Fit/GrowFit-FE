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
      component: (currentStep: number) => <ParentStep01 currentStep={currentStep} />,
    },
    {
      title: "아이의 정보를 입력해 주세요.",
      component: () => <ParentStep02 />,
    },
  ],
  child: [
    {
      title: "QR코드를 스캔해주시거나 \n 코드를 입력해 주세요.",
      component: (currentStep: number) => <ChildStep01 currentStep={currentStep} />,
    },
    {
      title: "그로우핏 계정으로 사용할 \n 아이디와 비밀번호를 입력해 주세요.",
      component: (currentStep: number) => <ChildStep02 currentStep={currentStep} />,
    },

    {
      title: "그로우핏에서 사용할 닉네임을\n 입력해 주세요.",
      component: () => <ChildStep03 />,
    },
  ],
}

interface Props {
  params: {
    type: string
    step: string
  }
}

const Page = ({ params }: Props) => {
  const currentType = params.type as keyof typeof STEPS
  const currentStep = parseInt(params.step)

  // 안전성 검사 추가
  if (!STEPS[currentType] || !STEPS[currentType][currentStep - 1]) {
    return <div>페이지를 찾을 수 없습니다.?</div>
  }

  return (
    <section className={styles.join__content}>
      <div className={styles.join__content__title}>
        <em>0{currentStep}</em>
        <h3>{STEPS[currentType][currentStep - 1].title}</h3>
      </div>
      {STEPS[currentType][currentStep - 1].component(currentStep)}
    </section>
  )
}
export default Page
