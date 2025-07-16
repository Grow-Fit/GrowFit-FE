"use client"

import { useEffect, useState } from "react"
import QRCode from "react-qr-code"
import Link from "next/link"

import { useParentQrGenerate } from "@/hooks/qr/useQr"

import styles from "./page.module.scss"

const Page = () => {
  const [qrcode, setQrcode] = useState("")
  const { data } = useParentQrGenerate()

  useEffect(() => {
    if (data) {
      setQrcode(data.data.code)
    }
  }, [data])
  return (
    <div className={styles.qrcode}>
      <h3 className={styles.qrcode__title}>
        아이가 QR코드를 쉽게 <br />
        스캔할 수 있도록 도와주세요.
      </h3>
      <div className={styles.qrcode__info} style={{ background: "white", padding: "16px" }}>
        <QRCode value={qrcode} size={211} />
        <span
          className={styles.qrcode__info__txt}
          onClick={() => navigator.clipboard.writeText(qrcode)}>
          코드번호 {qrcode}
        </span>
      </div>
      <div className={styles.qrcode__btns}>
        <Link href="/" passHref className="btn-comm large filled rounded">
          홈으로 이동
        </Link>
      </div>
    </div>
  )
}
export default Page
