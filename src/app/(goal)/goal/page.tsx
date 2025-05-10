"use client"
import classNames from "classnames/bind";
import styles from "./goal.module.scss";
const cx = classNames.bind(styles);

import Character1 from "@/assets/character/step1.svg"
import SmallCalendar from "@/components/common/smallcalendar/smallcalendar";
import GaugeBar from "@/components/common/gaugebar/gaugebar";
import GaugeDonut from "@/components/common/gaugedonut/gaugedonut";
import Link from "next/link";


const Page = () => {
  return (
    <div className={cx("goal")}>
      <div className={cx("goal__content")}>
        <div className={cx("goal__calendar")}>
          <SmallCalendar />
        </div>

        <div className={cx("goal__character")}>
          <Character1/>
        </div>

        <div className={cx("goal__profile")}>
          <span>미니민준님</span>
          <p><strong>LV.1</strong> Flat Planet</p>
        </div>

        <div className={cx("goal__gauge")}>
          <GaugeBar />
        </div>

        <div className={cx("goal__box")}>
          <Link href={`/goal/detail`}>
            <h2>진행중인 목표</h2>
            <GaugeDonut/>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Page;