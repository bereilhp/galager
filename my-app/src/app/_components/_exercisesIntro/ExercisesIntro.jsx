import style from "./exercisesIntro.module.css";
import Link from "next/link";
import Pad from "../_pad/Pad";

const exercises = [
  {
    title: "Quizzes",
    description:
      "Dive into the world of JavaScript with our interactive quizzes whether you're a novice or an experienced developer.",
    link: "/exercises/quiz",
    button: "Start Now",
  },
  {
    title: "Fill in the Blank",
    description:
      "Sharpen your JavaScript skills with our Fill in the Blank exercises, reinforcing your understanding through coding challenges.",
    link: "/exercises/fillTheBlank/",
    button: "Start Now",
  },
  {
    title: "Pick the Right Code",
    description:
      "Challenge yourself with our 'Pick the Right Code' exercises to boost your coding and debugging skills.",
    link: "/exercises/pickTheRightCode/",
    button: "Start Now",
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
      <Pad></Pad>
    </div>
  );
}
