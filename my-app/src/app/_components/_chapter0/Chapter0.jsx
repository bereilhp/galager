import Image from "next/image";
import style from "./chapter0.module.css";

export default function Chapter0() {
  return (
    <div>
      <div className={style.title}>Chapter 0 - JavaScript</div>
      <div className={style.text}> JavaScript</div>
      <div className={style.pad}></div>
    </div>
  );
}
