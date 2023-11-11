import Image from "next/image";
import style from "./chapter2.module.css";
import Link from "next/link";

export default function Chapter2() {
  return (
    <div>
      <h1 className={style.title}>Chapter 2 - JavaScript</h1>
      <div className={style.content}>
        <div className={style.text}>
          <section className={style.section}>
            <h2>Variables and Declaration Again</h2>
            <p>
              Variables in JavaScript are used to store and manipulate data.
              Good practices include using <code>let</code> for variables that
              may be reassigned, and <code>const</code> for variables that
              should remain constant.
            </p>

            <h4>Block Scope</h4>
            <p>
              <code>let</code> and <code>const</code> have block scope, meaning
              they are only accessible within the block of code where they are
              defined.
            </p>

            <h4>Naming Conventions</h4>
            <p>
              Follow good naming conventions, use descriptive names, and avoid
              starting variable names with numbers.
            </p>

            <div className={style.centeredImage}>
              <Image
                src="/_img/chapter2/let.png"
                alt="good variables name example"
                width={400}
                height={250}
              ></Image>
            </div>
          </section>

          <section className={style.section}>
            <h2>parseInt()</h2>
            <p>
              The <code>parseInt()</code> function in JavaScript is used to
              parse a string and convert it to an integer. It takes two
              parameters: the string to be converted and an optional radix
              (base) for the numerical system.
            </p>

            <div className={style.centeredImage}>
              <Image
                src="/_img/chapter2/parseInt.png"
                alt="parseInt example"
                width={650}
                height={310}
              ></Image>
            </div>
          </section>

          <section className={style.section}>
            <h2>Functions</h2>
            <p>
              Functions in JavaScript are blocks of code designed to perform a
              specific task. They can be defined using the traditional function
              declaration or the modern arrow function syntax.
            </p>

            <div className={style.centeredImage}>
              <Image
                src="/_img/chapter2/func.png"
                alt="function example"
                width={500}
                height={300}
              ></Image>
            </div>

            <h4>Return</h4>

            <p>
              In JavaScript, the <code>return</code> statement is used in a
              function to specify the value that the function should produce or
              result in. When a function is called, the <code>return</code>{" "}
              statement is executed, and the specified value is sent back to the
              caller.
            </p>

            <h4>Arrow Functions</h4>
            <p>
              Arrow functions provide a concise syntax, especially useful for
              short, simple functions. They inherit the <code>this</code> value
              from the enclosing scope.
            </p>

            <div className={style.centeredImage}>
              <Image
                src="/_img/chapter2/arrow.png"
                alt="arrow function example"
                width={600}
                height={250}
              ></Image>
            </div>

            <h4>The "this" Keyword</h4>
            <p>
              The <code>this</code> keyword refers to the context of the current
              function.
            </p>
          </section>

          <section className={style.section}>
            <h2>Arrays</h2>
            <p>
              Arrays in JavaScript are used to store multiple values in a single
              variable. They are created using square brackets and can hold
              various data types. You can use the <code>push</code> method to
              add elements to the end of the array and the <code>pop</code>{" "}
              method to remove the last element from the array.
            </p>

            <div className={style.centeredImage}>
              <Image
                src="/_img/chapter2/array.png"
                alt="array example"
                width={600}
                height={270}
              ></Image>
            </div>
          </section>

          <section className={style.section}>
            <h2>Data Types</h2>
            <p>
              Simple data types, also known as primitive data types, are the
              basic building blocks for representing and manipulating data in
              programming languages. These data types are fundamental and
              directly operate on the raw values. In JavaScript, some common
              simple data types include:
            </p>

            <h4>Numbers</h4>
            <p>
              Represents numeric values (integers or floating-point numbers).
            </p>

            <div className={style.centeredImage}>
              <Image
                src="/_img/chapter2/number.png"
                alt="number example"
                width={600}
                height={270}
              ></Image>
            </div>

            <h4>Strings</h4>
            <p>Represents sequences of characters (text).</p>

            <div className={style.centeredImage}>
              <Image
                src="/_img/chapter2/string.png"
                alt="string example"
                width={600}
                height={270}
              ></Image>
            </div>

            <h4>Boolean</h4>
            <p>Represents true or false values.</p>

            <div className={style.centeredImage}>
              <Image
                src="/_img/chapter2/boolean.png"
                alt="boolean example"
                width={600}
                height={270}
              ></Image>
            </div>

            <h4>Undefined</h4>
            <p>
              Represents a variable that has been declared but not assigned a
              value.
            </p>

            <div className={style.centeredImage}>
              <Image
                src="/_img/chapter2/undefined.png"
                alt="undefined example"
                width={600}
                height={270}
              ></Image>
            </div>

            <h4>Null</h4>
            <p>Represents the intentional absence of any object value.</p>

            <div className={style.centeredImage}>
              <Image
                src="/_img/chapter2/null.png"
                alt="null example"
                width={600}
                height={270}
              ></Image>
            </div>
          </section>

          <section className={style.section}>
            <h2>Objects in JavaScript</h2>
            <p>
              Objects are used to store collections of data in key-value pairs.
              They are similar to arrays but use property names instead of
              indexes.
            </p>

            <div className={style.centeredImage}>
              <Image
                src="/_img/chapter2/obj.png"
                alt="object example"
                width={600}
                height={350}
              ></Image>
            </div>
          </section>

          <section className={style.section}>
            <h2>JSON (JavaScript Object Notation)</h2>
            <p>
              JSON is a lightweight data interchange format. It is easy for
              humans to read and write and easy for machines to parse and
              generate. JSON is used to represent structured data and is often
              used with web APIs.
            </p>

            <div className={style.centeredImage}>
              <Image
                src="/_img/chapter2/json.png"
                alt="json example"
                width={650}
                height={270}
              ></Image>
            </div>

            <h4>JSON.stringify()</h4>
            <p>
              The <code>JSON.stringify()</code> method converts a JavaScript
              object or value to a JSON string. This is useful for sending data
              to a server or displaying JSON data.
            </p>

            <div className={style.centeredImage}>
              <Image
                src="/_img/chapter2/stringify.png"
                alt="JSON.stringify example"
                width={600}
                height={400}
              ></Image>
            </div>
          </section>

          <section className={style.section}>
            <h2>Train what you just learned</h2>
            <ul>
              <Link href="/exercises/quiz/hard">
                <li>Hard JavaScript Quiz</li>
              </Link>
              <Link href="/exercises/fillTheBlank/medium">
                <li>Medium JavaScript Fill in the Blank</li>
              </Link>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
