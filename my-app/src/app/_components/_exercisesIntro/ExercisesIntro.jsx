import style from "./exercisesIntro.module.css";
import Link from "next/link";
import Pad from "../_pad/Pad";

const exercises = [
  {
    title: "Quizzes",
    description:
      "Dive into the world of JavaScript with our interactive quizzes. Whether you're a novice or an experienced developer, our quizzes cover JavaScript fundamentals, advanced topics, and real-world scenarios. ",
    link: "/exercises/quiz",
    button: "Check it out!",
  },
  {
    title: "Fill in the Blank",
    description:
      "Refine your JavaScript knowledge with our Fill in the Blank exercises. These interactive challenges offer code snippets with missing elements, providing an opportunity to solidify your understanding.",
    link: "/exercises/fillTheBlank/",
    button: "Check it out!",
  },
  {
    title: "Find the Errors",
    description:
      "Challenge yourself with our 'Find the Error' exercises. These interactive challenges present flawed code snippets, allowing you to refine your debugging skills and enhance your coding proficiency.",
    link: "",
    button: "Check it out!",
  },
];

export default function ExercisesIntro() {
  return (
    <div>
      <h1 className={style.center}>Exercises</h1>
      <p className={style.introText}>
        Welcome to Galager Exercises, where you can challenge and strengthen
        your coding skills!
      </p>
      <Pad></Pad>
      <div className={style.exerciseList}>
        {exercises.map((exercise, index) => (
          <div key={index} className={style.exerciseCard}>
            <h3>{exercise.title}</h3>
            <p>{exercise.description}</p>
            <div className={style.pad}></div>
            <div className={style.pad2}></div>
            <Link href={exercise.link} className={style.button}>
              {exercise.button}
            </Link>
            <div className={style.pad}></div>
            <div className={style.pad2}></div>
          </div>
        ))}
      </div>
    </div>
  );
}
