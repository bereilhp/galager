import Link from "next/link";
import style from "./startLearningJS.module.css";


export default function StartLearningJS() {
    return (
        <div>
            <Link href="/courses/javascript" className={style.button}>JavaScript Course</Link>
        </div>
    )
}