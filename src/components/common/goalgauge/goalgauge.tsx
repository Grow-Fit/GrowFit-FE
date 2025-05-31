
import Gauge0 from "@/assets/icons/gauge bars/calorie.svg";
import Gauge1 from "@/assets/icons/gauge bars/gauge bar.svg";
import Gauge2 from "@/assets/icons/gauge bars/gauge bar-1.svg";
import Gauge3 from "@/assets/icons/gauge bars/gauge bar-2.svg";
import Gauge4 from "@/assets/icons/gauge bars/gauge bar-3.svg";
import Gauge5 from "@/assets/icons/gauge bars/gauge bar-4.svg";
import Gauge6 from "@/assets/icons/gauge bars/gauge bar-5.svg";
import Gauge7 from "@/assets/icons/gauge bars/gauge bar-6.svg";
import Gauge8 from "@/assets/icons/gauge bars/gauge bar-7.svg";
import Gauge9 from "@/assets/icons/gauge bars/gauge bar-8.svg";

export type GaugeStep = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

interface Props {
  step: GaugeStep;
  className?: string;
}

const gaugeMap: Record<GaugeStep, React.FC<React.SVGProps<SVGSVGElement>>> = {
  0: Gauge0,
  1: Gauge1,
  2: Gauge2,
  3: Gauge3,
  4: Gauge4,
  5: Gauge5,
  6: Gauge6,
  7: Gauge7,
  8: Gauge8,
  9: Gauge9
};

export default function GaugeIcon({ step, className }: Props) {
  const Gauge = gaugeMap[step];
  return <Gauge className={className} />;
}
