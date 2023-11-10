import Image from "next/image";
import style from "./chapter0.module.css";
import Link from "next/link";

export default function Chapter0() {
  return (
    <div>
      <h1 className={style.title}>Chapter 0 - JavaScript</h1>
      <div className={style.content}>
        <div className={style.text}>
          <section className={style.section}>
            <h2>What is JavaScript?</h2>
            <p>
              JavaScript is a high-level, interpreted programming language that
              is widely used to make web pages interactive. It is a versatile
              language that can be run in the browser as well as on servers,
              thanks to platforms like Node.js.
            </p>
          </section>

          <section className={style.section}>
            <h2>Who Created JavaScript?</h2>
            <p>
              JavaScript was created by Brendan Eich in 1995, making it a
              cornerstone of modern web development.
            </p>
            <div className={style.centeredImage}>
              <Image
                src="/_img/chapter0/brendanEich.jpg"
                alt="Brendan Eich"
                width={300}
                height={200}
              />
            </div>
          </section>

          <section className={style.section}>
            <h2>Why was JavaScript Created?</h2>
            <p>
              JavaScript was created to bring interactivity and dynamic content
              to web pages, enhancing the user experience by allowing for
              client-side scripting.
            </p>
          </section>

          <section className={style.section}>
            <h2>JavaScript Logo</h2>
            <p>Here's the iconic JavaScript logo:</p>
            <div className={style.centeredImage}>
              <Image
                src="/_img/chapter0/JavaScript-logo.png"
                alt="JavaScript Logo"
                width={200}
                height={200}
              />
            </div>
          </section>

          <section className={style.section}>
            <h2>Java vs. JavaScript</h2>
            <p>
              Not to be confused with Java, JavaScript was initially named
              Mocha, then briefly LiveScript, before settling on its current
              name to ride the popularity of Java at the time.
            </p>
          </section>

          <section className={style.section}>
            <h2>File Extension</h2>
            <p>
              JavaScript files use the extension <code>.js</code>.
            </p>
          </section>

          <section className={style.section}>
            <h2>Train what you just learned</h2>
            <ul>
              <Link href="/exercises/quiz/easy">
                <li>Easy JavaScript Quiz</li>
              </Link>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
