import Image from "next/image";
import style from "./welcomeUser.module.css";
import GetUsername from "../_getUsername/GetUsername";
import Link from "next/link";

export default function WelcomeUser() {
  return (
    <div className={style.heroSection}>
      <div className={style.heroSectionWrapper}>
        <div className={style.overlapWrapper}>
          <div className={style.overlap}>
            <Image
              src="/_img/JSLogoRectangle.png"
              width={180}
              height={180}
              alt="JavaScript Logo"
              className={style.jsLogo}
            />
            <GetUsername className={style.textWrapper}></GetUsername>
            <p className={style.div}>
              Galager is a free and open-source web app dedicated to learning
              JavaScript.
            </p>
            <Link href="/courses/" className={style.button}>
              Start Learning
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
