import Link from "next/link";
import style from "./fillTheBlankList.module.css";
import Image from "next/image";
import Pad from "../_pad/Pad";

const fillTheBlankLevels = [
  {
    slug: "easy",
    title: "Easy JavaScript Fill in the Blank",
    description: "Appropriate for beginner-level learners.",
  },
  {
    slug: "medium",
    title: "Medium JavaScript Fill in the Blank",
    description: "Appropriate for intermediate-level learners.",
  },
  {
    slug: "hard",
    title: "Hard JavaScript Fill in the Blank",
    description: "Appropriate for advanced-level learners.",
  },
];

export default function FillTheBlankList() {
  return (
    <div className={style.centerContainer}>
      <h1 className={style.center}>Fill in the Blank Exercises</h1>
      {fillTheBlankLevels.map((level) => (
        <Link
          key={level.slug}
          href={`/exercises/fillTheBlank/${level.slug}`}
          className={style.noDecoration}
        >
          <div className={style.fillTheBlankCard}>
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
