import style from "./homeScreen.module.css";
import GetUsername from "../_getUsername/GetUsername";
import Link from "next/link";
import Pad from "../_pad/Pad";

export default function HomeScreen() {
  return (
    <div>
      <h2 className={style.center}>
        <GetUsername></GetUsername>
      </h2>
      <p className={style.introText}>
        Galager is a free and open-source web app dedicated to learning
        JavaScript.
      </p>
      <p className={style.missionText}>
        Our mission is to empower individuals of all abilities to learn to code{" "}
        <span role="img" aria-label="Mission">
          :)
        </span>
        .
      </p>
      <div className={style.startOptions}>
        <p>Where would you like to start?</p>
        <Link href="/courses/" className={style.button}>
          Courses
        </Link>
        <span className={style.pad}></span>
        <Link href="/exercises/" className={style.button}>
          Exercises
        </Link>
      </div>
      <Pad></Pad>
    </div>
  );
}
