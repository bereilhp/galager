import style from "./javaScriptCourseIntro.module.css";
import Pad from "../_pad/Pad";
import Link from "next/link";

export default function JavaScriptCourseIntro() {
  return (
    <div>
      <h1 className={style.center}>Intro to the JavaScript Course</h1>
      <p className={style.intro}>
        Get ready for an exciting journey into the world of programming with
        JavaScript! <br />
        Whether you're new to coding or looking to strengthen your foundational
        skills, this course is the perfect starting point.
      </p>

      <Pad></Pad>

      <strong className={style.introText}>In this course, you'll:</strong>
      <ul className={style.featureList}>
        <li>Acquire insights into the history of JavaScript.</li>
        <li>Learn the fundamental concepts of programming.</li>
        <li>Understand JavaScript syntax and data types.</li>
        <li>Explore the power of functions and control flow.</li>
        <li>Have a lot of fun :)</li>
      </ul>
      <strong className={style.introText}>
        This JavaScript course is a comprehensive journey spanning 5 insightful
        chapters consisting off:
      </strong>

      <ul className={style.featureList}>
        <li>Chapter 0: What is JavaScript?</li>
        <li>Chapter 1: The DOM and Beyond</li>
        <li>Chapter 2: Core Elements</li>
        <li>Chapter 3: Advanced Concepts</li>
        <li>Chapter 4: Beyond the Basics with Node.js</li>
        <li>Chapter 5: Wrapping Up</li>
      </ul>

      <Pad></Pad>
      <div className={style.btnCenter}>
        <Link href="/courses/javascript/chapter0" className={style.button}>
          Start Course
        </Link>
      </div>
      <Pad></Pad>
      <Pad></Pad>
    </div>
  );
}
