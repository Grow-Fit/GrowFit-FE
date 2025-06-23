"use client";

import classNames from "classnames/bind";
import styles from "./home.module.scss";
const cx = classNames.bind(styles);

import Navigation from "@/components/layout/Navigation"
//import Header from "@/components/layout/Header"
import GreetingCard from "@/components/features/home/GreetingCard/parents/GreetingCard"
import GoalStatus from "@/components/features/home/GoalStatus/GoalStatus"
import GoalCardList from "@/components/features/home/GoalCardList/GoalCardList"



const HomePage = () => {
  return (
    <div className={cx("home")}>
      <Navigation />


      <section className={cx("greeting-section")}>
        <GreetingCard username="민준맘" />
      </section>

      
      <section className={cx("goal-status-section")}>
        <GoalStatus type="comes" />
      </section>
      <section className={cx("goal-card-section")}>
        <GoalCardList />
      </section>
    
    </div>
    
  );
  
};

export default HomePage;
