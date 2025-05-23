import GoalCard from "./GoalCard"
import styles from "./GoalCardList.module.scss"
import Img1 from "@/assets/icons/img-1.svg"
import Img2 from "@/assets/icons/img.svg"

const cardData = [
  { icon: Img1, title: "오늘의 목표", subtitle: "주간 목표", gaugeStep: 5 as const},
  { icon: Img2, title: "오늘의 칼로리", subtitle: "식단 일지", gaugeStep: 6 as const},
]

export default function GoalCardList() {
    return (
      <div className={styles.goalCards}>
        {cardData.map((card, index) => (
          <GoalCard key={index} icon={card.icon} title={card.title} subtitle={card.subtitle} gaugeStep={card.gaugeStep}  />
        ))}
      </div>
    )
};