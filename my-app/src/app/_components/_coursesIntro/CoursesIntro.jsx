import Image from "next/image";
import style from "./coursesIntro.module.css";
import StartLearningJS from "../_startLearninJS/StartLearning";
import Link from "next/link";
import Pad from "../_pad/Pad";

const courses = [
  {
    title: "JavaScript Course",
    description: "The fundamentals",
    link: "/courses/javascript",
    image: "/_img/JavaScript-logo.png",
    imageWidth: 120,
    imageHeight: 110,
  },
  {
    title: "Node.js Course",
    description: "Coming Soon!!",
    link: "/courses/javascript",
    image: "/_img/Node.js_logo.svg",
    imageWidth: 160,
    imageHeight: 110,
  },
];

export default function CoursesIntro() {
  return (
    <div className={style.introContainer}>
      <h1 className={style.center}>Courses</h1>
      <p className={style.introText}>
        Welcome to Galager Courses, your gateway to mastering JavaScript!
      </p>
      <Image
        src="/_img/JavaScript-logo.png"
        alt="JavaScript Courses"
        width={200}
        height={200}
      />
      <p className={style.introText}>
        Whether you're a beginner or an experienced developer, our collection of
        free JavaScript courses will help you expand your knowledge and skills.
      </p>

      <div className={style.courseList}>
        {courses.map((course, index) => (
          <div key={index} className={style.courseCard}>
            <h3>{course.title}</h3>
            <Image
              src={course.image}
              alt="Course Image"
              width={course.imageWidth}
              height={course.imageHeight}
            ></Image>
            <p>"{course.description}"</p>
            <br />
            <Link href={course.link} className={style.button}>
              Learn Now
            </Link>
            <div className={style.pad}></div>
          </div>
        ))}
      </div>
    </div>
  );
}
