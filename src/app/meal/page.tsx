"use client"
import DefaultHeader from "@/components/layout/header/DefaultHeader"
import Navigation from "@/components/layout/Navigation"
import styles from "./page.module.scss"
import SmallCalendar from "@/components/common/smallcalendar/smallcalendar"
import TopSheet from "@/components/common/topsheet/topsheet"
import MealCard from "@/components/common/mealcard/mealcard"
import GaugeIcon, { GaugeStep } from "@/components/common/caloriesgauge/caloriesgauge"
import { useEffect, useState } from "react"

export default function MealPage() {
  const [mealImages, setMealImages] = useState<{ [key: string]: string }>({
    breakfast: "",
    lunch: "",
    dinner: "",
    snack: "",
  })

  const meals = [
    { type: "아침", time: "7:00", kcal: 450, foods: ["사과", "계란", "우유"], key: "breakfast" },
    { type: "점심", time: "12:00", kcal: 550, foods: ["닭가슴살", "현미밥", "채소볶음"], key: "lunch", balloon: true },
    { type: "저녁", time: "18:00", kcal: 400, foods: ["고구마", "두부 샐러드"], key: "dinner" },
    { type: "후식", time: "20:00", kcal: 150, foods: ["요거트", "견과류"], key: "snack" },
  ]

  const goalKcal = 1445
  const totalKcal = meals.reduce((sum, meal) => sum + meal.kcal, 0)

  const step = Math.floor((totalKcal / goalKcal) * 8)
  const gaugeStep = Math.max(0, Math.min(8, step)) as GaugeStep

  useEffect(() => {
    const updatedImages: { [key: string]: string } = {}
    meals.forEach(meal => {
      updatedImages[meal.key] = localStorage.getItem(`mealImage-${meal.key}`) || ""
    })
    setMealImages(updatedImages)
  }, [])

  return (
    <main className={styles.mealPage}>
      <DefaultHeader />

      <div className={styles.diet_calendar}>
        <TopSheet>
          <SmallCalendar />
        </TopSheet>
      </div>

      <div className={styles.summarySection}>
        <div className={styles.summaryTitleWrap}>
          <h2 className={styles.summaryTitle}>오늘의 식단</h2>
          <div className={styles.kcalGauge}>
            <GaugeIcon step={gaugeStep} className={styles.gaugeIcon} />
            <span className={styles.kcalCount}>
              {totalKcal}/<strong>{goalKcal}</strong> kcal
            </span>
          </div>
        </div>
      </div>

      <div className={styles.mealsSection}>
        {meals.map(({ type, time, kcal, foods, key, balloon }) => (
          <MealCard
            key={key}
            type={type}
            time={time}
            kcal={kcal}
            foods={foods}
            imageUrl={mealImages[key]}
            balloon={balloon}
          />
        ))}
      </div>

      <Navigation />
    </main>
  )
}
