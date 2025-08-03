"use client"
import styles from "./page.module.scss"
import { ArrowIcon, ProfileIcon } from "@/components/common/icon"
import Link from "next/link"
import DefaultHeader from "@/components/layout/header/DefaultHeader"
import React from "react"
import Navigation from "@/components/layout/Navigation"
import { useChildInfoQuery, useParentInfoQuery } from "@/queries/mypage/useMypageQuery"
import { useUserType } from "@/hooks/user/useUserType"
import { useKakaoAuth } from "@/hooks/auth/useKakaoAuth"

const Page = () => {
  const userType = useUserType()
  const { handleKakaoLogout } = useKakaoAuth()
  const isParent = userType === "parent"
  const isChild = userType === "child"
  const { data: parentData } = useParentInfoQuery(isParent)
  const { data: childData } = useChildInfoQuery(isChild)
  const parentInfo = parentData?.data
  const childInfo = childData?.data

  if (!userType || (isParent && !parentData) || (isChild && !childData)) {
    return <div>로딩 중...</div>
  }

  return (
    <>
      <DefaultHeader />
      <div className={styles.mypage}>
        <div className={styles.mypage__my}>
          <div className={styles.mypage__myname}>
            <div>
              <ProfileIcon />
              <p>
                {`${isParent ? parentInfo.nickname : isChild ? childInfo.child_name : "-"}`}님
                안녕하세요!
              </p>
            </div>
            {/*<ArrowIcon />*/}
            {isParent && <Link href={`/mypage/edit`}>프로필 수정</Link>}
          </div>
          <div className={styles.mypage__myinfo}>
            <div>
              <ProfileIcon />
              <div>
                <p>
                  <strong>
                    {`${isParent ? parentInfo.child.child_name : isChild ? childInfo.child_name : "-"}`}
                  </strong>
                  <span>
                    {`${isParent ? parentInfo.child.child_age : isChild ? childInfo.child_age : "-"}`}
                    세
                  </span>
                  <span>
                    {`${isParent ? parentInfo.child.child_gender : isChild ? childInfo.child_gender : "-"}`}
                  </span>
                </p>
                <p>
                  <span>
                    {`${isParent ? parentInfo.child.child_BodyInfo.height : isChild ? childInfo.child_BodyInfo.height : "-"}`}
                    cm
                  </span>
                  <span>
                    {`${isParent ? parentInfo.child.child_BodyInfo.weight : isChild ? childInfo.child_BodyInfo.weight : "-"}`}
                    KG
                  </span>
                </p>
              </div>
            </div>
            {isChild && <Link href={"/mypage/manage"}>정보수정</Link>}
          </div>
        </div>
        <ul className={styles.mypage__list}>
          <li>
            <Link href={"/mypage/manage"}>계정관리</Link>
            <ArrowIcon />
          </li>
          <li>
            <p onClick={handleKakaoLogout}>로그아웃</p>
          </li>
        </ul>
      </div>
      <Navigation />
    </>
  )
}
export default Page
