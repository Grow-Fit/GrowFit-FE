"use client";
import styles from "./detail.module.scss";

import Character1 from "@/assets/character/step1.svg";
import SmallCalendar from "@/components/common/smallcalendar/smallcalendar";
import StepBox from "@/components/features/goal/stepbox/stepbox";
import {useRouter} from "next/navigation";
import TopSheet from "@/components/common/topsheet/topsheet";



const Page = () => {
  const router = useRouter();
  const openModal = () => {
    router.push('/goal/detail/goal-modal');
  }
  return (
    <>
      <div className={styles.goal}>
        <div className={styles.goal__content}>
          <div className={styles.goal__calendar}>
            <TopSheet>
              <SmallCalendar />
            </TopSheet>
          </div>

          <div className={styles.goal__character}>
            <Character1/>
          </div>

          <div className={styles.goal__profile} onClick={openModal}>
            <span>1월 24일 ~ 1월 31일 목표</span>
            <span>한 주 동안 레벨 업! 더 가볍고 건강하게!</span>
            <p>0/5개 달성</p>
          </div>

          <div className={styles.goal__box}>
            <StepBox/>
          </div>

        </div>
      </div>
    </>
  );
};

export default Page;