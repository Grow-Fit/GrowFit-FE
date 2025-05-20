"use client";
import classNames from "classnames/bind";
import styles from "./step1.module.scss";
import DefaultIcon from "@/assets/icons/goals/icon-default.svg"
const cx = classNames.bind(styles);

import BackHeader from "@/components/layout/header/BackHeader";
import StepBox from "@/app/goal/_components/stepBox";
import Button from "@/components/common/button/button";
import Image from "next/image";
import Goal1 from "@/assets/icons/sticker/compliment-sticker-1.svg"
import AddButton from "@/components/common/addbutton/addbutton";

const Step1 = () => {
  return (
    <>
      <BackHeader title={"목표추가"} />
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
            <div className={cx("goal__result-icon")}>
              <DefaultIcon />
            </div>
            <p><span>01</span> 하루 물 6컵</p>
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