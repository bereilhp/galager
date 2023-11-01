import style from "./congratsPopUp.module.css";
import Image from "next/image";

export default function CongratsPopUp({ title, badgeImage, onClose }) {
  return (
    <div className={style.congratsPopup}>
      <div className={style.congratsContent}>
        <h2>Congratulations!</h2>
        <p>You've completed the {title}.</p>
        <p>Here is your badge:</p>
        <Image
          src={badgeImage}
          width={120}
          height={120}
          alt="Congratulations Badge"
        />
        <br />
        <br />
        <button className={style.button} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
