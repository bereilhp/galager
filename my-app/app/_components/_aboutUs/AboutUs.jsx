import Image from "next/image";
import style from "./aboutUs.module.css";

export default function AboutUs() {
  return (
    <div className={`${style.center} ${style.teamContainer}`}>
      <div className={style.aboutContainer}>
        <div className={style.imageContainer}>
          <Image
            src="/_img/aboutUs.svg"
            width={200}
            height={225}
            alt="Group of people working together"
            className={style.image}
          />
        </div>
        <div className={style.textContainer}>
          <div className={style.title}>About Us</div>
          <div className={style.blueLine}></div>
          <div className={style.text}>
            <span className={style.galager}>Galager</span> is a free and open-source web app dedicated to learning.
          </div>
        </div>
      </div>
    </div>
  );
}
