import React from 'react';
import Navigation from "@/components/layout/Navigation";
import styles from "./layout.module.scss";
import DefaultHeader from "@/components/layout/header/DefaultHeader";
interface GoalLayoutProps {
  children: React.ReactNode;
}
export default function GoalLayout ({ children }: GoalLayoutProps) {
  return (
    <>
      <DefaultHeader/>
      <div>
        <main className={styles.qrcode}>
          {children}
        </main>
        <Navigation/>
      </div>
    </>
  );
}
