import style from "./javaScriptCourseIntro.module.css";
import Pad from "../_pad/Pad";
import Link from "next/link";

export default function JavaScriptCourseIntro() {
  return (
    <div>
      <h1 className={style.center}>Welcome to the JavaScript Course</h1>
      <p className={style.introText}>
        Get ready for an exciting journey into the world of programming with
        JavaScript! Whether you're new to coding or looking to strengthen your
        foundational skills, this course is the perfect starting point.
      </p>
      <p className={style.introText}>In this course, you'll:</p>
      <ul className={style.featureList}>
        <li>Learn the fundamental concepts of programming.</li>
        <li>Understand JavaScript syntax and data types.</li>
        <li>Explore the power of functions and control flow.</li>
        <li>Have a lot of fun :)</li>
      </ul>
      <p className={style.introText}>
        Lets stop wasting time and get right to it!
      </p>
      <Pad></Pad>
      <div className={style.btnCenter}>
        <Link href="/courses/javascript/chapter0" className={style.button}>
          Start Course
        </Link>
      </div>
    </div>
  );
}
