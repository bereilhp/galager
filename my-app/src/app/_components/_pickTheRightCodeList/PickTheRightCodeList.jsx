import Link from "next/link";
import style from "./pickTheRightCodeList.module.css";
import Image from "next/image";
import Pad from "../_pad/Pad";

const pickTheRightCodeLevels = [
  {
    slug: "easy",
    title: "Easy Pick the Right Code",
    description: "Appropriate for beginner-level learners.",
  },
  {
    slug: "medium",
    title: "Medium Pick the Right Code",
    description: "Appropriate for intermediate-level learners.",
  },
  {
    slug: "hard",
    title: "Hard Pick the Right Code",
    description: "Appropriate for advanced-level learners.",
  },
];

export default function PickTheRightCodeList() {
  return (
    <div className={style.centerContainer}>
      <h1 className={style.center}>Pick the Right Code Exercises</h1>
      {pickTheRightCodeLevels.map((level) => (
        <Link
          key={level.slug}
          href={`/exercises/pickTheRightCode/${level.slug}`}
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
