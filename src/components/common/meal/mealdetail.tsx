"use client";

import { useSearchParams } from "next/navigation";
import styles from "./MealDetail.module.scss";

export default function MealDetail() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type") || "아침";

  const isSuccess = true; // TODO: 조건부로 바꿔줘야 함 (식단 준수 여부)
  const imageUrl = "/images/sample.jpg"; 
  const selectedFoods = ["반미 샌드위치", "닭가슴살 샐러드"]; // 임시

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <button className={styles.backBtn}>←</button>
        <h1>{type}</h1>
      </header>

      <section className={styles.content}>
        <div className={styles.timeAndKcal}>
          <span>{type} 9:00</span>
          <span className={styles.kcal}>435/435 kcal</span>
        </div>

        <div className={styles.imageWrap}>
          {isSuccess && <div className={styles.balloon}>식단을 잘지켰어요! ✕</div>}
          <img src={imageUrl} alt="meal" className={styles.image} />
        </div>

        <div className={styles.foodChips}>
          {selectedFoods.map((food, i) => (
            <div key={i} className={styles.foodChip}>
              {food} {isSuccess && "✔️"}
              {!isSuccess && "✕"}
            </div>
          ))}
        </div>

        <button className={styles.addBtn}>다른 음식 추가 +</button>

        <div className={styles.summary}>
          <div className={styles.calorieRow}>
            <span className={styles.calorie}>총 칼로리</span>
            <span className={styles.kcalBox}>435 kcal</span>
          </div>
          <div className={styles.nutrition}>
            <div>
              <strong>12.8</strong>
              <span>탄수화물</span>
            </div>
            <div>
              <strong>6.5</strong>
              <span>단백질</span>
            </div>
            <div>
              <strong>5</strong>
              <span>지방</span>
            </div>
          </div>
        </div>
      </section>

      {!isSuccess && <button className={styles.completeBtn}>완료</button>}
    </div>
  );
}
