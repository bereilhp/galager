import Link from "next/link";
import style from "./startLearn.module.css";


export default function StartLearn() {
    return (
        <div>
            <Link href="/learn" className={style.button}>Start Learning</Link>
        </div>
    )
}