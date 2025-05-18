import React from 'react';
import Navigation from "@/components/layout/Navigation";
import classNames from "classnames/bind";
import styles from "./layout.module.scss";
const cx = classNames.bind(styles);

export default function GoalLayout ({ children }: { children: React.ReactNode }) {
  return (
      <div>
        <main className={cx("goals")}>
          {children}
        </main>
        <Navigation />
      </div>
  );
}
