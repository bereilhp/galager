import style from "./homeScreen.module.css";
import GetUsername from "../_getUsername/GetUsername";
import Link from "next/link";
import Pad from "../_pad/Pad";
import Image from "next/image";

export default function HomeScreen() {
  return (
    <div>
      <h2 className={style.center}>
        <GetUsername></GetUsername>
      </h2>
      <p className={style.introText}>
        Are you ready to embark on a journey into the world of coding? <br></br>
        Join us in mastering JavaScript, the language that powers the modern
        web.
      </p>
      <h2 className={style.title}>What Makes Galager Different?</h2>
      <div className={style.box}>
        <div className={style.feature}>
          <Image
            src="/_img/coursesIcon.png"
            width={120}
            height={120}
            alt="Course Icon"
          ></Image>
          <h2>Courses</h2>
          <p>
            Our courses are meticulously crafted to provide a dynamic and
            engaging learning experience filled with interactive examples and
            user-friendly processes.
          </p>
        </div>
        <div className={style.feature}>
          <Image
            src="/_img/exercisesIcon.png"
            width={120}
            height={120}
            alt="Exercises Icon"
          ></Image>
          <h2>Exercises</h2>
          <p>
            Our exercises empower you to actively participate in your learning,
            fostering a deeper understanding in JavaScript coding.
          </p>
        </div>
        <div className={style.feature}>
          <Image
            src="/_img/badgesIcon.png"
            width={120}
            height={120}
            alt="Badges Icon"
          ></Image>
          <h2>Badges</h2>
          <p>
            Earning badges with every completed exercise is an integral part of
            our commitment to recognizing your achievements and motivating your
            progress.
          </p>
        </div>
      </div>
      <div className={style.startOptions}>
        <div className={style.padStart}></div>
        <Link href="/courses/" className={style.button}>
          Start Learning Today
        </Link>
      </div>
      <Pad></Pad>
      <Pad></Pad>
      <Pad></Pad>
    </div>
  );
}
