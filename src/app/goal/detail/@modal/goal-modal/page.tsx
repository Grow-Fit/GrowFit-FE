"use client"
import BottomSheet from "@/components/common/buttomsheet/bottomsheet";
import { useRouter } from "next/navigation";
import SmallCalendar from "@/components/common/smallcalendar/smallcalendar";
import styles from "./goalmodal.module.scss"
import React, {useState} from "react";
import Button from "@/components/common/button/button";

const GoalModal = () => {
  const router = useRouter();
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const closeModal = () => {
    router.back();
  };

  return (
    <BottomSheet close={closeModal} title={"목표인증샷"}>
      <SmallCalendar />
      <div className={styles.upload}>
        <div className={styles.uploadtitle}>
          <h3>20분동안 걷기</h3>
          <p>0/3회 인증</p>
        </div>
        <div className={styles.uploadimage}>
          <input
            id={"image-upload"}
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
          <label
            htmlFor={"image-upload"}
            style={{
              backgroundImage: imagePreview
                ? `url(${imagePreview})`
                : "none",
            }}
          >
            {!imagePreview && (
              <span>사진첨부</span>
            )}
          </label>
        </div>
      </div>
      <div className={styles["upload-btn"]}>
        <Button size={"medium"} variant={"filled"} shape={"rounded"} label={"확인"} onClick={() => {}} />
      </div>
    </BottomSheet>
  )
}
export default GoalModal;