import styles from "./GoalStatus.module.scss"
import CharacterEmpty from "@/assets/character/step1.svg"
import CharacterCome from "@/assets/character/step2.svg"
import CharacterProgress from "@/assets/character/step3.svg"
import CharacterSuccess from "@/assets/character/step4.svg"

type GoalStatusType = "empty" | "comes" | "progress" | "success"

interface Props { 
  type: GoalStatusType
}

const statusMap: Record<GoalStatusType, { message: string; Icon: React.FC<React.SVGProps<SVGSVGElement>> }> = {
  empty: {
    message: "아직 목표가 없어요",
    Icon: CharacterEmpty,
  },
  comes: {
    message: "고마워요 목표가 있어요",
    Icon: CharacterCome,
  },
  progress: {
    message: "하나씩 잘 해내고 있어요",
    Icon: CharacterProgress,
  },
  success: {
    message: "우와! 목표를 달성했어요",
    Icon: CharacterSuccess,
  },
}

export default function GoalStatus({ type }: Props) {
    const status = statusMap[type]
  
    if (!status) {
      return <div>⚠️ 잘못된 상태입니다</div>
    }
  
    const { message, Icon } = status
  
    return (
      <div className={styles.goalStatus}>
        <Icon className={styles.icon} />
        <div className={styles.speechBubble}>
        {message}
      </div>
      </div>
    )
  }
  
