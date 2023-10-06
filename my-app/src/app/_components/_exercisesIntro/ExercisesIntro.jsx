import style from "./exercisesIntro.module.css";
import Link from "next/link";

const exercises = [
  {
    title: "Quizzes",
    description: "Put Your Knowledge to the Test",
    link: "/exercises/quiz",
    button: "Check it out",
  },
  {
    title: "Fill in the Blank",
    description: "Evaluate Your Learning",
    link: "",
    button: "Test Your Knowledge",
  },
  {
    title: "Check Errors",
    description: "Assess Your Knowledge",
    link: "",
    button: "Challenge Yourself",
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
      <div className={style.exerciseList}>
        {exercises.map((exercise, index) => (
          <div key={index} className={style.exerciseCard}>
            <h3>{exercise.title}</h3>
            <p>"{exercise.description}"</p>
            <br />
            <Link href={exercise.link} className={style.button}>
              {exercise.button}
            </Link>
            <div className={style.pad}></div>
          </div>
        ))}
      </div>
    </div>
  );
}
