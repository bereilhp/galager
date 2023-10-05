import Image from "next/image";
import style from "./javaScriptCourseIntro.module.css";
import StartLearningJS from "../_startLearninJS/StartLearning";
import Link from "next/link";
import Pad from "../_pad/Pad";

export default function JavaScriptCourseIntro() {
  return (
    <div>
      <h1 className={style.center}>Welcome to the JavaScript Course</h1>
      <p className={style.introText}>
        Get ready for an exciting journey into the world of programming with
        JavaScript! Whether you're new to coding or looking to strengthen your
        foundational skills, this course is the perfect starting point.
      </p>
      <Image
        src="/_img/JavaScript-logo.png"
        alt="JavaScript Logo"
        width={200}
        height={200}
      />
      <p className={style.introText}>In this course, you'll:</p>
      <ul className={style.featureList}>
        <li>Learn the fundamental concepts of programming.</li>
        <li>Understand JavaScript syntax and data types.</li>
        <li>Explore the power of functions and control flow.</li>
        <li>Have a lot of fun :)</li>
      </ul>
      <p className={style.introText}>
        Lets stop wasting time and get right to it! Click Chapter 0 to start
        your journey
      </p>
    </div>
  );
}
