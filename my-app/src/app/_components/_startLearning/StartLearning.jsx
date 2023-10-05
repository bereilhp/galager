import Link from "next/link";
import style from "./startLearning.module.css";

export default function StartLearning() {
  return (
    <div>
      <Link href="/courses/javascript/chapter0" className={style.button}>
        Chapter 0
      </Link>
    </div>
  );
}
