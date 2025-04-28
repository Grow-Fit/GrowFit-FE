"use client"
import classNames from "classnames/bind";
import styles from "./goal.module.scss";
import Header from "@/components/layout/Header";
import Navigation from "@/components/layout/Navigation";

const cx = classNames.bind(styles);

const Page = () => {
  return (
    <div className={cx("goal")}>
      <div className={cx("goal__content")}>
        <div className={cx("goal__character")}>
          ddd
        </div>
      </div>
    </div>
  );
};

export default Page;