import React from 'react';
import Navigation from "@/components/layout/Navigation";
import classNames from "classnames/bind";
import styles from "./layout.module.scss";
import DefaultHeader from "@/components/layout/header/DefaultHeader";
const cx = classNames.bind(styles);

export default function GoalLayout ({ children }: { children: React.ReactNode }) {
  return (
    <>
      <DefaultHeader/>
      <div>
        <main className={cx("goal")}>
          {children}
        </main>
        <Navigation/>
      </div>
    </>
  );
}
