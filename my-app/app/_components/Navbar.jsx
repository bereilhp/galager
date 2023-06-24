import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import style from "./navbar.module.css"

export default function Navbar() {
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
    </div>
  );
}