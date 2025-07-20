"use client"
import styles from "./page.module.scss"
import { ArrowIcon, ProfileIcon, GoOutIcon } from "@/components/common/icon"
import Link from "next/link"
import DefaultHeader from "@/components/layout/header/DefaultHeader"
import React from "react"
import Navigation from "@/components/layout/Navigation"

const Page = () => {
  return (
    <>
      <DefaultHeader />
      <div className={styles.mypage}>
        <div className={styles.mypage__my}>
          <div className={styles.mypage__myname}>
            <div>
              <ProfileIcon />
              <p>현주님 안녕하세요!</p>
            </div>
            {/*<ArrowIcon />*/}
            <Link href={`/mypage/edit`}>프로필 수정</Link>
          </div>
          <div className={styles.mypage__myinfo}>
            <div>
              <ProfileIcon />
              <div>
                <p>
                  <strong>김민준</strong>
                  <span>11세</span>
                  <span>남</span>
                </p>
                <p>
                  <span>144cm</span>
                  <span>60KG</span>
                </p>
              </div>
            </div>
            <Link href={"/mypage/edit"}>정보수정</Link>
          </div>
        </div>
        <ul className={styles.mypage__list}>
          <li>
            <Link href={"/mypage/edit"}>정보수정</Link>
            <ArrowIcon />
          </li>
          <li>
            <p>계정탈퇴</p>
            <ArrowIcon />
          </li>
          <li>
            <p>정보수정</p>
            <GoOutIcon />
          </li>
        </ul>
      </div>
      <Navigation />
    </>
  )
}
export default Page
