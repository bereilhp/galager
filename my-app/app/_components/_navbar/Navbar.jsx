import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import style from "./navbar.module.css";
import Image from "next/image";

export default function Navbar() {
  return (
    <div>
      <div className={style.navbar}>

        <Link href="/">
          <Image src="/_img/favicon.ico"
            width={40} //180
            height={40} //45
            alt="Galager Logo"
          />
        </Link>
        <nav className={style.navbarLinks}>
          <Link href="/">Home</Link>
          <Link href="/learn">Learn</Link>
          <Link href="exercises">Exercises</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className={style.userButton}>
          <UserButton></UserButton>
        </div>
      </div>
      <div className={style.navbarLine}></div>
    </div>
  );
}