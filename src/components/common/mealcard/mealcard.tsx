"use client";

import { useRouter } from "next/navigation";
import AddBox from "@/components/common/addbox/addbox";
import styles from "./MealCard.module.scss";

interface Props {
  type: string;
  time: string;
  kcal: number;
  foods: string[];
  imageUrl?: string;
  balloon?: boolean;
}

export default function MealCard({ type, time, kcal, foods, imageUrl, balloon }: Props) {
  const router = useRouter(); 

  const handleClick = () => {
    if (imageUrl) {
      router.push(`/meal/detail?type=${type}`);
    } else {
      router.push(`/meal/upload?type=${type}`);
    }
  };

  return (
    <div className={styles.card}>
        <div className={styles.timeWrap}>
        <h3 className={styles.mealType}>{type}</h3>
          <span className={styles.time}>{time}</span>
        </div>
        <div className={styles.right}>
        <ul className={styles.foodList}>
          {foods.map((food, idx) => (
            <li key={idx}>{food}</li>
          ))}
        </ul>
        <p className={styles.kcal}>{kcal} kcal</p>
        {balloon && <div className={styles.balloon}>추천 식단이에요!</div>}
      <AddBox imageUrl={imageUrl} onClick={handleClick} />
      </div>
    </div>
  );
}
