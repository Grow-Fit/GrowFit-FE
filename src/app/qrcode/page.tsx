"use client";

import classNames from "classnames/bind";
import styles from "./QRResgister.module.scss";
const cx = classNames.bind(styles);

import PlusIcon from "@/assets/icons/floating_btn.svg";
import Navigation from "@/components/layout/Navigation";

interface Props {
  username: string;
}

const ParentQRRegister = ({ username }: Props) => {
  return (
    <div className={cx("container")}>
      <Navigation />

      <main className={cx("content")}>
        <h1 className={cx("parent-name")}>{username}님</h1>
        <p className={cx("description")}>
          QR 코드 스캔으로<br />
          등록하고 아이 건강을 간편하게<br />
          관리하세요!
        </p>
        <div className={cx("register-box")}>
          <div className={cx("iconwrapper")}>
          <PlusIcon className={cx("plus-icon")} />
          </div>
          <span className={cx("register-label")}>간편 등록</span>
        </div>
      </main>
    </div>
  );
};

export default ParentQRRegister;
