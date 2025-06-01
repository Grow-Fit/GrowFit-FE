"use client"
import styles from "./edit.module.scss"
import BackHeader from "@/components/layout/header/BackHeader"
import Button from "@/components/common/button/button"

const Page = () => {
  return (
    <>
      <BackHeader title={"정보수정"} />
      <div className={styles.edit}>
        <div className={styles.edit__form}>
          <div>
            <h3>이름</h3>
            <input type="text" value={"민준"} />
          </div>
          <div>
            <h3>이메일</h3>
            <input type="text" value={"hyunjoo@naver.com"} />
          </div>
          <div>
            <h3>전화번호</h3>
            <input type="text" value={"010-1234-5678"} />
          </div>
          <div>
            <h3>등록된 QR코드</h3>
            <input type="text" value={"code 229814"} />
          </div>
        </div>

        <div className={styles["complete-btn"]}>
          <Button
            size={"medium"}
            variant={"filled"}
            shape={"rounded"}
            label={"완료"}
            onClick={() => console.log("완료")}>
            완료
          </Button>
        </div>
      </div>
    </>
  )
}
export default Page
