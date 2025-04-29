import React from 'react';
import Header from "@/components/layout/Header";
import Navigation from "@/components/layout/Navigation";
import classNames from "classnames/bind";
import styles from "./layout.module.scss";
const cx = classNames.bind(styles);

export default function GoalLayout ({ children }: { children: React.ReactNode }) {
  return (
      <div>
        <Header />
        <main className={cx("goal")}>
          {children}
        </main>
        <Navigation />
      </div>
  );
}
