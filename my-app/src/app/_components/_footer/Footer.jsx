import style from "./footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.pad}>
        <div className={style.copyright}>Copyright © 2023 Galager.</div>
        <a href="https://github.com/bereilhp/galager" target="_blank">
          <Image
            src="/_img/github-mark/github-mark.png"
            width={40}
            height={40}
            alt="GitHub Logo"
          ></Image>
        </a>
      </div>
    </footer>
  );
}
