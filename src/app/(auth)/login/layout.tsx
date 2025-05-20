import Logo from "@/assets/logo/logo-type01.svg"

import styles from "./layout.module.scss";

const Layout = ({
  children,
}: {
  children: React.ReactNode
})  => {
    return (
    <main className={`${styles.login__content}`}>
      <Logo width={125} height={32} /> 
      {children}
    </main>
  )
}

export default Layout