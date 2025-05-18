"use client";
import classNames from "classnames/bind";
import styles from "./create.module.scss";
const cx = classNames.bind(styles);

import BackHeader from "@/components/layout/header/BackHeader";
import StepBox from "@/app/goal/_components/StepBox";
import Button from "@/components/common/button/button";
import Image from "next/image";
import Goal1 from "@/assets/icons/sticker/compliment-sticker-1.svg"
import AddButton from "@/components/common/addbutton/addbutton";

const Page = () => {
  return (
    <>
      <BackHeader title={"목표추가"} />
      <div className={cx("goals")}>
        <div className={cx("goal__content")}>
          <div className={cx("goal__title")}>
            <StepBox/>
            <p>최대 10개까지의 목표를 추가할 수 있어요</p>
          </div>
          <div className={cx("goal__result")}>
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
          <div className={cx("goal__btn")}>
            <Button
              size={"large"}
              variant={"filled"}
              shape={"rounded"}
              label={"다음"}
              onClick={() => {
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;