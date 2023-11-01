import Image from "next/image";
import style from "./contactUs.module.css";

export default function ContactUs() {
  return (
    <div className={`${style.center} ${style.teamContainer}`}>
      <div className={style.aboutContainer}>
        <div className={style.imageContainer}>
          <Image
            src="/_img/about/contactUs.svg"
            width={120}
            height={120}
            alt="Contact us"
            className={style.image}
          />
        </div>
        <div className={style.textContainer}>
          <div className={style.title}>Contact Us</div>
          <div className={style.blueLine}></div>
          <div className={style.text}>
            If you have any questions, please contact us at
            galagerOfficial@proton.me.
          </div>
        </div>
      </div>
    </div>
  );
}
