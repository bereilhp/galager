import Link from "next/link";
import style from "./navbar.module.css";
import Image from "next/image";

export default function Navbar() {
  return (
    <div>
      <div className={style.navbar}>
        <Link href="/">
          <Image src="/_img/favicon.ico"
            width={50} //180
            height={50} //45
            alt="Galager Logo"
          />
        </Link>
        <nav className={style.navbarLinks}>
          <Link href="/">Home</Link>
          <Link href="/courses">Courses</Link>
          <Link href="exercises">Exercises</Link>
          <Link href="/contact">About Us</Link>
        </nav>
        <div className={style.profileLink}>
          <Link href="/profile">
            <Image src="/_img/user.png" width={40} height={40} alt="User icon"></Image>
          </Link>
        </div>
      </div>
      <div className={style.navbarLine}></div>
    </div>
  );
}