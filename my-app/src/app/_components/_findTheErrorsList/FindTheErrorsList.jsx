import Link from "next/link";
import style from "./findTheErrorsList.module.css";
import Image from "next/image";
import Pad from "../_pad/Pad";

const findTheErrorsLevels = [
  {
    slug: "easy",
    title: "Easy Find The Errors Exercise",
    description: "Appropriate for beginner-level learners.",
  },
  {
    slug: "medium",
    title: "Medium Find The Errors Exercise",
    description: "Appropriate for intermediate-level learners.",
  },
  {
    slug: "hard",
    title: "Hard Find The Errors Exercise",
    description: "Appropriate for advanced-level learners.",
  },
];

export default function FindTheErrorsList() {
  return (
    <div className={style.centerContainer}>
      <h1 className={style.center}>Fill in the Blank Exercises</h1>
      {findTheErrorsLevels.map((level) => (
        <Link
          key={level.slug}
          href={`/exercises/fillTheBlank/${level.slug}`}
          className={style.noDecoration}
        >
          <div className={style.findTheErrorsCard}>
            <div className={style.cardContent}>
              <div className={style.textContainer}>
                <h2 className={style.title}>{level.title}</h2>
                <p className={style.description}>{level.description}</p>
              </div>
              <Image
                src="/_img/arr/arrow.png"
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
