import Image from "next/image";
import style from "./chapter5.module.css";
import Link from "next/link";

export default function Chapter5() {
  return (
    <div>
      <h1 className={style.title}>Chapter 5</h1>
      <div className={style.content}>
        <div className={style.text}>
          <section className={style.section}>
            <h2>Wrapping Up</h2>
            <p>
              Congratulations on completing this JavaScript Course! We've
              covered some fundamental concepts, but remember, this is just the
              beginning of your journey into the exciting world of web
              development.
            </p>
            <p>JavaScript is a powerful language with much more to explore.</p>
            <p>
              If you enjoyed the challenges so far, why not take it to the next
              level? Dive into the additional exercises and explore the more
              advanced aspects of JavaScript. Don't hesitate to seek out more
              resources, tutorials, and real-world projects to enhance your
              skills.
            </p>
            <p>
              Remember, the more you practice and build, the more confident
              you'll become.
            </p>
            <p>Happy Coding!</p>
          </section>

          <section className={style.section}>
            <h2>Explore Further</h2>
            <ul>
              <Link href="/exercises/pickTheRightCode/easy">
                <li>Easy JavaScript Pick the Right Code</li>
              </Link>
              <Link href="/exercises/pickTheRightCode/medium">
                <li>Medium JavaScript Pick the Right Code</li>
              </Link>
              <Link href="/exercises/pickTheRightCode/hard">
                <li>Hard JavaScript Pick the Right Code</li>
              </Link>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
