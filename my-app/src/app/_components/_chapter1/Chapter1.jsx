import Image from "next/image";
import style from "./chapter1.module.css";
import Link from "next/link";

export default function Chapter1() {
  return (
    <div>
      <h1 className={style.title}>Chapter 1 - JavaScript</h1>
      <div className={style.content}>
        <div className={style.text}>
          <section className={style.section}>
            <h2>The DOM (Document Object Model)</h2>
            <p>
              The DOM, or Document Object Model, is a programming interface for
              web documents. It represents the structure of a document as a tree
              of objects, where each object corresponds to a part of the
              document, such as elements, attributes, and text. The DOM provides
              a way for programs (like JavaScript) to manipulate the structure,
              style, and content of web documents.
            </p>
            <div className={style.centeredImage}>
              <Image
                src="/_img/chapter1/dom.png"
                alt="DOM image"
                width={320}
                height={200}
              ></Image>
            </div>
          </section>

          <section className={style.section}>
            <h2>Comments in JavaScript</h2>
            <p>
              Comments are used to add explanatory notes to your code. In
              JavaScript, you can use single-line comments with // or multi-line
              comments between /* and */.
            </p>
            <div className={style.centeredImage}>
              <Image
                src="/_img/chapter1/comment.png"
                alt="Comment example"
                width={400}
                height={300}
              ></Image>
            </div>
          </section>

          <section className={style.section}>
            <h2>Variables and Declaration</h2>
            <p>
              Variables are used to store and manipulate data. You can declare
              variables using <code>let</code> or <code>const</code>.
            </p>

            <h4>let</h4>
            <p>
              The <code>let</code> keyword is used to declare a variable with
              block scope. This means that the variable is only accessible
              within the block of code where it is defined, and it is not
              visible outside of that block.
            </p>

            <p>
              <code>let</code> can be reassigned within the same block or scope,
              but they cannot be redeclared in the same scope.{" "}
            </p>

            <div className={style.centeredImage}>
              <Image
                src="/_img/chapter1/let.png"
                alt="let variable example"
                width={400}
                height={300}
              ></Image>
            </div>

            <h4>const</h4>
            <p>
              The <code>const</code> keyword is used to declare a variable with
              block scope, just like <code>let</code>. However, variables
              declared with
              <code>const</code> cannot be reassigned to a new value after their
              initial assignment.
            </p>

            <p>
              This means that once a value is assigned to a <code>const</code>{" "}
              variable, it cannot be changed. It provides a way to create
              variables with a fixed value throughout their scope.
            </p>

            <div className={style.centeredImage}>
              <Image
                src="/_img/chapter1/const.png"
                alt="const variable example"
                width={400}
                height={250}
              ></Image>
            </div>
          </section>

          <section className={style.section}>
            <h2>== vs ===</h2>
            <p>
              In JavaScript, <code>==</code> and <code>===</code> are comparison
              operators used to compare values. However, they behave differently
              in terms of type coercion (automatic or implicit conversion of one
              data type to another).
            </p>
            <h4>==</h4>
            <p>
              The <code>==</code> also called "equality operator" or "loose
              equality operator" performs type coercion, allowing implicit
              conversion of operand types before making the comparison. Only the
              value the operands must be the same for <code>==</code> to return{" "}
              <code>true</code>.
            </p>

            <div className={style.centeredImage}>
              <Image
                src="/_img/chapter1/equality.png"
                alt="equality example"
                width={400}
                height={250}
              ></Image>
            </div>
            <h4>===</h4>
            <p>
              On the other hand, the <code>===</code> also called "strict
              equality operator" or simply the "strict equality comparator"
              compares values without type coercion. Both the value and the type
              of the operands must be the same for <code>===</code> to return{" "}
              <code>true</code>.
            </p>
            <div className={style.centeredImage}>
              <Image
                src="/_img/chapter1/strictEquality.png"
                alt="strict equality example"
                width={400}
                height={250}
              ></Image>
            </div>
          </section>

          <section className={style.section}>
            <h2>console.log()</h2>
            <p>
              <code>console.log()</code> is used for logging messages to the
              console. It's a helpful tool for debugging and understanding the
              flow of your code.
            </p>
            <div className={style.centeredImage}>
              <Image
                src="/_img/chapter1/consoleLog.png"
                alt="console.log example"
                width={400}
                height={250}
              ></Image>
            </div>
          </section>

          <section className={style.section}>
            <h2>String Functions</h2>
            <p>
              JavaScript provides built-in functions for manipulating strings,
              such as <code>toLowerCase()</code> and <code>toUpperCase()</code>.
            </p>

            <h4>toLowerCase()</h4>
            <p>
              The <code>toLowerCase()</code> method in JavaScript is used to
              convert all the characters in a string to lowercase. When applied
              to a string, it returns a new string with all the alphabetic
              characters in lowercase while leaving non-alphabetic characters
              unchanged.
            </p>

            <div className={style.centeredImage}>
              <Image
                src="/_img/chapter1/lower.png"
                alt="console.log example"
                width={750}
                height={300}
              ></Image>
            </div>

            <h4>toUpperCase()</h4>
            <p>
              The <code>toUpperCase()</code> method in JavaScript is employed to
              convert all the characters in a string to uppercase. When applied
              to a string, it returns a new string with all the alphabetic
              characters transformed to uppercase, while leaving non-alphabetic
              characters unaffected.
            </p>
            <div className={style.centeredImage}>
              <Image
                src="/_img/chapter1/upper.png"
                alt="console.log example"
                width={750}
                height={300}
              ></Image>
            </div>
          </section>

          <section className={style.section}>
            <h2>Train what you just learned</h2>
            <ul>
              <Link href="/exercises/quiz/medium">
                <li>Medium JavaScript Quiz</li>
              </Link>
              <Link href="/exercises/fillTheBlank/easy">
                <li>Easy JavaScript Fill in the Blank</li>
              </Link>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
