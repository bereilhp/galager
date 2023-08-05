import Link from "next/link";
import style from "./startLearning.module.css";


export default function StartLearning() {
    return (
        <div>
            <Link href="/learn/chapter0" className={style.button}>Start Learning</Link>
        </div>
    )
}