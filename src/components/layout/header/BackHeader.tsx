"use client"
import { useRouter } from "next/navigation";
import styles from "./BackHeader.module.scss"
import Back from "@/assets/icons/common/icon-arrow.svg"

const DefaultHeader = ({ title }: { title: string }) => {
  const router = useRouter();
  return (
    <div className={styles.header}>
      <h1
        className={styles.header__icon}
        onClick={() => router.back()}
      >
        <Back />
      </h1>
      <div className={styles.header__title}>
        {title}
      </div>
      <div></div>
    </div>
  )
}

export default DefaultHeader