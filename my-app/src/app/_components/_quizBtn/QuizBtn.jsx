import Link from "next/link";
import style from "./quizBtn.module.css";

export default function QuizBtn() {
  return (
    <div>
      <Link href="/exercises/quiz" className={style.button}>
        JavaScript Quizzes
      </Link>
    </div>
  );
}
