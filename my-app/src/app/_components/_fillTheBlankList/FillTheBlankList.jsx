import Link from "next/link";
import style from "./fillTheBlankList.module.css";

export default function FillTheBlanList() {
  return (
    <div className={style.centerContainer}>
      <Link href="/exercises/fillTheBlank/easy" className={style.button}>
        Easy JavaScript Fill in the Blank
      </Link>
      <div className={style.pad}></div>
      <br />
      <Link href="/exercises/fillTheBlank/medium" className={style.button}>
        Medium JavaScript Fill in the Blank
      </Link>
      <div className={style.pad}></div>
      <br />
      <Link href="/exercises/fillTheBlank/hard" className={style.button}>
        Hard JavaScript Fill in the Blank
      </Link>
      <div className={style.pad}></div>
    </div>
  );
}
