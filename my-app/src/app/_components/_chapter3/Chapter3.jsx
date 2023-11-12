import Image from "next/image";
import style from "./chapter3.module.css";
import Link from "next/link";

export default function Chapter3() {
  return (
    <div>
      <h1 className={style.title}>Chapter 3</h1>
      <div className={style.content}>
        <div className={style.text}>
          <section className={style.section}>
            <h2>JSON (JavaScript Object Notation) Again</h2>
            <p>
              JSON is a special object that stores key-value pairs, and it is
              often used for data storage and retrieval.
            </p>
          </section>

          <section className={style.section}>
            <h2>Event Handlers</h2>
            <p>
              Event handlers in JavaScript are functions that respond to events
              triggered by user actions or other occurrences. They are used to
              create interactive and dynamic web pages.
            </p>

            <div className={style.centeredImage}>
              <Image
                src="/_img/chapter3/event.png"
                alt="event handler example"
                width={800}
                height={600}
              ></Image>
            </div>
          </section>

          <section className={style.section}>
            <h2>Closures in JavaScript</h2>
            <p>
              Closures in JavaScript refer to the ability of a function to
              remember and access its lexical scope even when it's executed
              outside that scope. This allows functions to maintain access to
              variables from their outer (enclosing) function, even after the
              outer function has finished execution.
            </p>

            <div className={style.centeredImage}>
              <Image
                src="/_img/chapter3/closure.png"
                alt="closure example"
                width={600}
                height={400}
              ></Image>
            </div>
          </section>

          <section className={style.section}>
            <h2>Object.assign Method</h2>
            <p>
              The <code>Object.assign()</code> method is used to copy the values
              of all enumerable own properties from one or more source objects
              to a target object. It returns the target object.
            </p>

            <div className={style.centeredImage}>
              <Image
                src="/_img/chapter3/assign.png"
                alt="Object.assign example"
                width={800}
                height={300}
              ></Image>
            </div>
          </section>

          <section className={style.section}>
            <h2>Array.sort Function</h2>
            <p>
              The <code>Array.sort()</code> function is used to sort the
              elements of an array in place. It sorts the elements based on the
              callback function provided or, by default, as strings.
            </p>

            <div className={style.centeredImage}>
              <Image
                src="/_img/chapter3/array.png"
                alt="Array.sort example"
                width={600}
                height={300}
              ></Image>
            </div>
          </section>

          <section className={style.section}>
            <h2>Test your Knowledge:</h2>
            <ul>
              <Link href="/exercises/fillTheBlank/hard">
                <li>Hard JavaScript Fill in the Blank</li>
              </Link>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
