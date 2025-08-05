"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./detail.module.scss";
import Balloon from "@/components/common/balloon/balloon";
import GaugeIcon, { GaugeStep } from "@/components/common/caloriesgauge/caloriesgauge";

const calorieGoals: Record<string, number> = {
  아침: 435,
  점심: 700,
  저녁: 550,
};

export default function MealDetailPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const mealType = searchParams.get("type") || "아침";

  const [imageUrl, setImageUrl] = useState("");
  const [foods, setFoods] = useState<string[]>([]);
  const [followedPlan, setFollowedPlan] = useState(true);

  useEffect(() => {
    const savedImage = localStorage.getItem(`mealImage-${mealType}`) || "";
    const savedFoods = JSON.parse(localStorage.getItem(`mealFoods-${mealType}`) || "[]");

    setImageUrl(savedImage);
    setFoods(savedFoods);
    setFollowedPlan(!!savedImage && savedFoods.length > 0);
  }, [mealType]);

  const handleAddOtherFoods = () => {
    router.push(`/meal/search?type=${mealType}`);
  };

  const goal = calorieGoals[mealType] || 0;
  const kcal = followedPlan ? goal : "?";

  // 게이지 단계 계산
  const step = followedPlan ? Math.floor((goal / 1445) * 8) : 0;
  const gaugeStep = Math.max(0, Math.min(8, step)) as GaugeStep;

  return (
    <div className={styles.detailPage}>
      <header className={styles.header}>
        <button className={styles.backBtn} onClick={() => router.back()}> ← </button>
        <h2>{mealType}</h2>
        <div className={styles.spacer} />
      </header>

      <div className={styles.timeKcalWrap}>
        <span className={styles.mealTime}>{mealType} 9:00</span>
        <div className={styles.kcalInfo}>
          <GaugeIcon step={gaugeStep} />
          <span className={styles.kcalText}>
            {followedPlan ? goal : "?"}/{goal}
          </span>
        </div>
      </div>

      <div className={styles.imageWrap}>
        <Balloon text={followedPlan ? "식단을 잘 지켰어요!" : "다른 음식을 먹었어요"} />
        <img src={imageUrl || "/icons/placeholder.png"} alt="식단 이미지" className={styles.mealImage} />
      </div>

      <div className={styles.foodList}>
        {foods.map((food, idx) => (
          <button key={idx} className={`${styles.foodButton} ${followedPlan ? styles.success : styles.fail}`}>
            {food}
            {!followedPlan && <span className={styles.close}>✕</span>}
          </button>
        ))}
      </div>

      <button className={styles.addButton} onClick={handleAddOtherFoods}>
        다른 음식 추가 + 
      </button>

      <div className={styles.nutrientBox}>
        <div className={styles.kcalRow}>
          <span>총 칼로리</span>
          <div className={styles.kcalValue}>{kcal} <span>kcal</span></div>
        </div>
        <div className={styles.macroRow}>
          <div className={styles.nutrient}>
            <p>탄수화물</p>
            <p className={styles.macroValue}>{followedPlan ? "12.8" : "?"} <span>g</span></p>
          </div>
          <div className={styles.nutrient}>
            <p>단백질</p>
            <p className={styles.macroValue}>{followedPlan ? "6.5" : "?"} <span>g</span></p>
          </div>
          <div className={styles.nutrient}>
            <p>지방</p>
            <p className={styles.macroValue}>{followedPlan ? "5" : "?"} <span>g</span></p>
          </div>
        </div>
      </div>

      {!followedPlan && (
        <button className={styles.completeBtn} onClick={handleAddOtherFoods}>
          완료
        </button>
      )}
    </div>
  );
}
