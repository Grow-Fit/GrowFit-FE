import styles from "./GoalCard.module.scss"
import Arrow from "@/assets/icons/arrow.svg"
import GoalGauge, { GaugeStep } from "@/components/common/goalgauge/goalgauge"

interface Props {
  icon: React.FC<React.SVGProps<SVGSVGElement>>
  title: string
  subtitle: string
  gaugeStep: GaugeStep       
  onClick?: () => void 
  isActive?: boolean // 목표 실행중 여부
  isEmpty?: boolean // 목표가 아예 없는지 여부
};

const GoalCard = ({ icon:Icon, title, subtitle, gaugeStep, onClick, isActive, isEmpty }: Props) => {
  
  const titleColor = isActive ? "#000000" : "#D9DDF5";

  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>
        <div className={styles.circle}>
          <Icon className={styles.icon} />
        </div>
      </div>
      <div className={styles.titleBox}>
        <p className={styles.title}
        style={{ color: titleColor }}
        >{title}</p>
        
        <div className={styles.gaugeWrapper}>
          <GoalGauge step={gaugeStep} className={styles.gauge} />
        </div>

        <div className={styles.subtitleWrapper}>
          <span className={styles.subtitle}>{subtitle}</span>
          <button className={styles.arrowButton} onClick={onClick}>
            <Arrow className={styles.arrowIcon} />
          </button>
        </div>
        
      </div>

    </div>
  )
}
export default GoalCard