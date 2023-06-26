import style from "./footer.module.css"
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className={style.footer}>
            <div>
                <nav className={style.nav}>
                    <Link href="/">Home</Link>
                    <Link href="/learn">Learn</Link>
                    <Link href="/exercises">Exercises</Link>
                    <Link href="/contact">Contact</Link>
                </nav>
                <a
                    href="https://github.com/bereilhp/galager"
                    target="_blank"
                >
                    <Image
                        src="/_img/github-mark/github-mark.png"
                        width={30}
                        height={30}
                        alt="GitHub Logo"></Image>
                </a>
            </div>
        </footer >
    );
};