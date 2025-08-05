import CalGauge0 from "@/assets/icons/calories/calorie-9.svg"
import CalGauge1 from "@/assets/icons/calories/calorie-1.svg"
import CalGauge2 from "@/assets/icons/calories/calorie-2.svg"
import CalGauge3 from "@/assets/icons/calories/calorie-3.svg"
import CalGauge4 from "@/assets/icons/calories/calorie-4.svg"
import CalGauge5 from "@/assets/icons/calories/calorie-5.svg"
import CalGauge6 from "@/assets/icons/calories/calorie-6.svg"
import CalGauge7 from "@/assets/icons/calories/calorie-7.svg"
import CalGauge8 from "@/assets/icons/calories/calorie-8.svg"

export type GaugeStep = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 

interface Props {
  step: GaugeStep;
  className?: string;
}

const gaugeMap: Record<GaugeStep, React.FC<React.SVGProps<SVGSVGElement>>> = {
    0: CalGauge0,
    1: CalGauge1,
    2: CalGauge2,
    3: CalGauge3,
    4: CalGauge4,
    5: CalGauge5,
    6: CalGauge6,
    7: CalGauge7,
    8: CalGauge8
};

export default function GaugeIcon({ step, className }: Props) {
    const CalGauge = gaugeMap[step];
    return <CalGauge className={className} />;
  }