import Link from "next/link";
import style from "./quizList.module.css";

export default function QuizList() {
  return (
    <div className={style.centerContainer}>
      <Link href="/exercises/quiz/easy" className={style.button}>
        Easy JavaScript Quiz
      </Link>
      <div className={style.pad}></div>
      <br />
      <Link href="/exercises/quiz/medium" className={style.button}>
        Medium JavaScript Quiz
      </Link>
      <div className={style.pad}></div>
      <br />
      <Link href="/exercises/quiz/hard" className={style.button}>
        Hard JavaScript Quiz
      </Link>
      <div className={style.pad}></div>
    </div>
  );
}
