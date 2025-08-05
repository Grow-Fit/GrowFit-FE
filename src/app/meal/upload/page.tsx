"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import styles from "./upload.module.scss"
import AddBox from "@/components/common/addbox/addbox";
import Balloon from "@/components/common/balloon/balloon";


export default function UploadPage() {
  const searchParams = useSearchParams();
  const mealType = searchParams.get("type") || "아침";

  const [selectedFoods, setSelectedFoods] = useState<string[]>([]);
  const [imageUrl, setImageUrl] = useState<string>("");

  const foodOptions = ["반미 샌드위치", "닭가슴살 샐러드", "현미밥", "채소볶음"];

  const handleSelect = (food: string) => {
    setSelectedFoods((prev) =>
      prev.includes(food) ? prev.filter((f) => f !== food) : [...prev, food]
    );
  };

  const handleImageUpload = () => {
    // 임시 이미지 URL 저장
    const tempUrl = "/temp/meal-image.jpg";
    setImageUrl(tempUrl);

    // 로컬스토리지 저장
    localStorage.setItem(`mealImage-${mealType}`, tempUrl);
  };

  const handleComplete = () => {
    // 로컬스토리지 저장
    localStorage.setItem(`mealFoods-${mealType}`, JSON.stringify(selectedFoods));
    window.history.back();
  };

  return (
    <div className={styles.overlay}>
    <div className={styles.uploadPage}>
        <div className={styles.titleSection}>
      <div className={styles.title}>식단 업로드</div>
      <button className={styles.closeBtn} onClick={() => window.history.back()}>
            ✕
      </button>
      </div>

      <div className={styles.imageSection}>
      <Balloon text="식단 전체샷 올리기 ✕" />
        <AddBox imageUrl={imageUrl} onClick={handleImageUpload} />
      </div>

      <h2 className={styles.mealTypeTitle}>{mealType} 메뉴</h2>
      <p className={styles.subtitle}>먹은 음식을 선택해주세요.</p>

      <div className={styles.foodList}>
        {foodOptions.map((food) => (
          <button
            key={food}
            className={`${styles.foodButton} ${selectedFoods.includes(food) ? styles.selected : ""}`}
            onClick={() => handleSelect(food)}
          >
            {food} {selectedFoods.includes(food) && "✕"}
          </button>
        ))}
      </div>

      <button
        className={`${styles.completeBtn} ${
          selectedFoods.length > 0 && imageUrl ? styles.active : ""
        }`}
        onClick={handleComplete}
      >
        완료
      </button>
    </div>
    </div>
  );
}
