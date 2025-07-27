"use client"
import { use } from "react"

import classNames from "classnames/bind"

import styles from "./page.module.scss"

const cx = classNames.bind(styles)

import Link from "next/link"

import FindId from "./_components/FindId"
import FindFw from "./_components/FindPw"

interface PageProps {
  params: Promise<{ tab: string }>
}

const Page = ({ params }: PageProps) => {
  const { tab } = use(params)

  return (
    <>
      <ul role="tablist" className={cx(styles.tablist)}>
        <li
          id="tabId"
          className={cx(styles.tab, tab === "id" && styles.on)}
          role="tab"
          aria-controls="panelId">
          <Link href="/find/id">아이디 찾기</Link>
        </li>
        <li
          id="tabPw"
          className={cx(styles.tab, tab === "pw" && styles.on)}
          role="tab"
          aria-controls="panelId">
          <Link href="/find/pw">비밀번호 찾기</Link>
        </li>
      </ul>
      {/* 아이디 찾기 */}
      <div
        id="panelId"
        className={cx(styles.tabpanel, tab === "id" && styles.on)}
        role="tabpanel"
        aria-labelledby="tabId">
        <FindId />
      </div>
      {/* 비밀번호 찾기 */}
      <div
        id="panelPw"
        className={cx(styles.tabpanel, tab === "pw" && styles.on)}
        role="tabpanel"
        aria-labelledby="panelPw">
        <FindFw />
      </div>
    </>
  )
}

export default Page
