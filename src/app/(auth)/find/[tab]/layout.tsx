import BackHeader from "@/components/layout/header/BackHeader"

import styles from "./layout.module.scss"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={styles.find}>
      <BackHeader title={"아이디/비밀번호 찾기"} />
      {children}
    </main>
  )
}

export default Layout
