import Image from "next/image";
import StartLearning from "../_startLearning/StartLearning";
import style from "./learnIntro.module.css";

export default function LearnIntro() {
  return (
    <div className={style.introContainer}>
      <div className={style.introContent}>
        <h1 className={style.introHeading}>
          Welcome to the JavaScript Learning Course
        </h1>
        <p className={style.introDescription}>
          Explore the exciting world of programming and JavaScript in a fun and
          interactive way!
        </p>
        <StartLearning></StartLearning>
      </div>
      <div className={style.introImage}>
        <Image
          src="/_img/js/JavaScript-logo.png"
          width={225}
          height={225}
          alt="JavaScript Logo"
        />
      </div>
    </div>
  );
}
