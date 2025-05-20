"use client";
import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./step2.module.scss";
import DefaultIcon from "@/assets/icons/goals/icon-default.svg"
const cx = classNames.bind(styles);
import BackHeader from "@/components/layout/header/BackHeader";
import StepBox from "@/app/goal/_components/stepBox";
import Goal1 from "@/assets/icons/sticker/compliment-sticker-1.svg"
import AddButton from "@/components/common/addbutton/addbutton";
import CustomCalendar from "@/components/common/calendar/customcalendar";
import { DateRange } from "react-day-picker";

const Step2 = () => {
  const [selectedWeek, setSelectedWeek] = useState<DateRange | undefined>();

  return (
    <>
      <BackHeader title={"목표추가"} />
      <div className={cx("goal")}>
        <div className={cx("goal__content")}>
          <div className={cx("goal__title")}>
            <StepBox
              stepNum={"02"}
              stepTxt={"목표 7개를 언제부터 시작할까요? 기간과 인증 횟수를 정해주세요!"}
            />
          </div>
          <div className={cx("goal__period")}>
            <div>
              <CustomCalendar
                selectedWeek={selectedWeek}
                setSelectedWeek={setSelectedWeek}
              />
            </div>
          </div>
          <div className={cx("goal__times")}>
            <h3>인증횟수(최대 5회 가능)</h3>
            <div>
              <span>인증</span>
              <input type={"number"} name={"count"} id={"count"} />
              <span>회</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step2;