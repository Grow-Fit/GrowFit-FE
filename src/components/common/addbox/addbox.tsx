import Image from "next/image";
import AddIcon from "@/assets/icons/common/icon-add-skyblue.svg";
import styles from "./addbox.module.scss";

interface Props {
  imageUrl?: string;
  onClick: () => void;
}

export default function MealImageBox({ imageUrl, onClick }: Props) {
  return (
    <div className={styles.box}>
      {imageUrl ? (
        <Image src={imageUrl} alt="식단 이미지" fill />
      ) : (
        <AddIcon onClick={onClick} />
      )}
    </div>
  );
}
