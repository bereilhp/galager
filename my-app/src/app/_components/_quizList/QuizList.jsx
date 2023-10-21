import Link from "next/link";
import style from "./quizList.module.css";
import Image from "next/image";
import Pad from "../_pad/Pad";

const quizLevels = [
  {
    slug: "easy",
    title: "Easy JavaScript Quiz",
    description:
      "This JavaScript quiz offers a beginner-friendly experience with a low level of challenge, making it accessible for all skill levels.",
  },
  {
    slug: "medium",
    title: "Medium JavaScript Quiz",
    description:
      "This JavaScript quiz offers a balanced challenge suitable for individuals looking for a moderate level of difficulty",
  },
  {
    slug: "hard",
    title: "Hard JavaScript Quiz",
    description:
      "This JavaScript Quiz presents a formidable challenge tailored for more experienced individuals seeking a demanding and engaging experience.",
  },
];

export default function QuizList() {
  return (
    <div className={style.centerContainer}>
      <h1 className={style.center}>Quizzes</h1>
      {quizLevels.map((level) => (
        <Link
          key={level.slug}
          href={`/exercises/quiz/${level.slug}`}
          className={style.noDecoration}
        >
          <div className={style.quizCard}>
            <div className={style.cardContent}>
              <div className={style.textContainer}>
                <h2 className={style.title}>{level.title}</h2>
                <p className={style.description}>{level.description}</p>
              </div>
              <Image
                src="/_img/arrow.png"
                width={30}
                height={30}
                alt="Arrow image"
              />
            </div>
          </div>
        </Link>
      ))}
      <Pad></Pad>
      <Pad></Pad>
      <Pad></Pad>
      <Pad></Pad>
    </div>
  );
}
