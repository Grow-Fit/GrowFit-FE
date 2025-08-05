import styles from "./balloon.module.scss";

interface BalloonProps {
  text: string;
  className?: string;
}

export default function Balloon({ text, className = "" }: BalloonProps) {
  return (
    <div className={`${styles.balloon} ${className}`}>
      {text}
    </div>
  );
}

