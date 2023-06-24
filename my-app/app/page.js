import { UserButton } from "@clerk/nextjs";
import style from "./page.module.css"
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/">Learn</Link></li>
        <li><Link href="/">Exercises</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
      <div className={style.right}>
        <UserButton></UserButton>
      </div>
      <h1>Welcome to Galager</h1>
    </div>
  )
}