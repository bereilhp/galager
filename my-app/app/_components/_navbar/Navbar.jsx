import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import style from "./navbar.module.css";
import Image from "next/image";

export default function Navbar() {
  return (
    <div>
      <div className={style.navbar}>
        <nav className={style.navbarLinks}>
          <Image src="/_img/favicon.ico"
                    width={30}
                    height={30}
                    alt="Galager Logo"
                />
          <div className={style.pad}></div>
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