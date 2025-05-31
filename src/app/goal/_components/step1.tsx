"use client";
import classNames from "classnames/bind";
import styles from "./step1.module.scss";
const cx = classNames.bind(styles);

import StepBox from "@/app/goal/_components/stepBox";
import Goal1 from "@/assets/icons/sticker/compliment-sticker-1.svg"
import AddButton from "@/components/common/addbutton/addbutton";
import GoalResult from "@/app/goal/_components/goalresult";

const Step1 = () => {
  return (
    <>
      <div className={cx("goal")}>
        <div className={cx("goal__content")}>
          <div className={cx("goal__title")}>
            <StepBox
              stepNum={"01"}
              stepTxt={"이번 주 아이와 몇 개의 목표를 계획할 예정인가요?"}
            />
            <p>최대 10개까지의 목표를 추가할 수 있어요</p>
          </div>

          <div className={cx("goal__result")}>
            <GoalResult />
          </div>

          <div className={cx("goal__register")}>
            <h3>
              <strong>그로우핏 추천 목표</strong>
              <p>직접 설정하기</p>
            </h3>
            <ul className={cx("goal__register-control")}>
              <li>
                <Goal1/>
                <div className={cx("goal__register-txt")}>
                  <AddButton disabled={false} label={"하루 물 6컵"} onClick={() => {
                  }}/>
                  <p>하루 물 6컵</p>
                </div>
              </li>
              <li>
                <Goal1/>
                <div className={cx("goal__register-txt")}>
                  <AddButton disabled={false} label={"하루 물 6컵"} onClick={() => {
                  }}/>
                  <p>하루 물 6컵</p>
                </div>
              </li>
              <li>
                <Goal1/>
                <div className={cx("goal__register-txt")}>
                  <AddButton disabled={false} label={"하루 물 6컵"} onClick={() => {
                  }}/>
                  <p>하루 물 6컵</p>
                </div>
              </li>
              <li>
                <Goal1/>
                <div className={cx("goal__register-txt")}>
                  <AddButton disabled={false} label={"하루 물 6컵"} onClick={() => {
                  }}/>
                  <p>하루 물 6컵</p>
                </div>
              </li>
              <li>
                <Goal1/>
                <div className={cx("goal__register-txt")}>
                  <AddButton disabled={false} label={"하루 물 6컵"} onClick={() => {
                  }}/>
                  <p>하루 물 6컵</p>
                </div>
              </li>
              <li>
                <Goal1/>
                <div className={cx("goal__register-txt")}>
                  <AddButton disabled={false} label={"하루 물 6컵"} onClick={() => {
                  }}/>
                  <p>하루 물 6컵</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step1;