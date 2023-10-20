import style from "./exercisesIntro.module.css";
import Link from "next/link";
import Pad from "../_pad/Pad";

const exercises = [
  {
    title: "Quizzes",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    link: "/exercises/quiz",
    button: "Check it out",
  },
  {
    title: "Fill in the Blank",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    link: "/exercises/fillTheBlank/",
    button: "Check it out",
  },
  {
    title: "Find the Errors",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    link: "",
    button: "Check it out",
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
            <p>"{exercise.description}"</p>
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
