import Image from "next/image";
import style from "./coursesIntro.module.css";
import Link from "next/link";

const courses = [
  {
    title: "JavaScript Course",
    description:
      'This course is a great starting point to learn "The fundamentals".',
    link: "/courses/javascript",
    image: "/_img/js/JavaScript-logo.png",
    imageWidth: 180,
    imageHeight: 180,
  },
];

export default function CoursesIntro() {
  return (
    <div className={style.introContainer}>
      <h1 className={style.center}>Courses</h1>
      <p className={style.introText}>
        Welcome to Galager Courses, your gateway to mastering JavaScript! <br />{" "}
        Whether you're a beginner or an experienced developer, our collection of
        free JavaScript courses will help you expand your knowledge and skills.
      </p>

      <div className={style.padCard}></div>
      <div>
        {courses.map((course, index) => (
          <div key={index} className={style.courseCards}>
            <h3>{course.title}</h3>
            <div className={style.padTitle}></div>
            <Image
              src={course.image}
              alt="Course Image"
              width={course.imageWidth}
              height={course.imageHeight}
            ></Image>
            <p>{course.description}</p>
            <br />
            <br />
            <Link href={course.link} className={style.button}>
              Begin Now
            </Link>
            <div className={style.pad}></div>
          </div>
        ))}
      </div>
    </div>
  );
}
