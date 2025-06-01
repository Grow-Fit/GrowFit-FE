import BackHeader from "@/components/layout/header/BackHeader"

import styles from "./layout.module.scss"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={styles.join}>
      <BackHeader title={"회원가입"} />
      {children}
    </main>
  )
}

export default Layout
