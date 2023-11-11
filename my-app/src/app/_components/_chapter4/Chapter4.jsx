import Image from "next/image";
import style from "./chapter4.module.css";

export default function Chapter4() {
  return (
    <div>
      <h1 className={style.title}>Chapter 4 - JavaScript</h1>
      <div className={style.content}>
        <div className={style.text}>
          <section className={style.section}>
            <h2>Node.js</h2>
            <p>
              Node.js is a runtime environment that allows you to run JavaScript
              on the server-side. It uses the V8 JavaScript engine from Google
              Chrome to execute code. Node.js is commonly used for building
              scalable network applications and is a key component in modern web
              development.
            </p>
            <div className={style.centeredImage}>
              <Image
                src="/_img/chapter4/nodejs.png"
                alt="Node.js logo"
                width={300}
                height={200}
              />
            </div>
          </section>

          <section className={style.section}>
            <h2>Running JavaScript in the Browser</h2>
            <p>
              JavaScript can be executed in the browser using the{" "}
              <code>script</code> tag. You can include the script directly in
              your HTML file or link to an external JavaScript file.
            </p>
            <div className={style.centeredImage}>
              <Image
                src="/_img/chapter4/html.png"
                alt="Script tag example"
                width={700}
                height={600}
              />
            </div>
          </section>

          <section className={style.section}>
            <h2>Frameworks and Libraries</h2>
            <p>
              In the world of JavaScript, there are various frameworks and
              libraries that simplify and enhance the development process.
              React.js is a popular JavaScript library for building user
              interfaces, and Next.js is a framework built on top of React,
              providing additional features like server-side rendering and
              routing (this app is built with Next.js for example).
            </p>
            <div className={style.centeredImage}>
              <Image
                src="/_img/chapter4/nextjs.png"
                alt="React and Next.js logos"
                width={400}
                height={200}
              />
            </div>
          </section>

          <section className={style.section}>
            <h2>Additional Concepts</h2>
            <p>
              As you delve deeper into JavaScript, you'll encounter more
              advanced concepts such as asynchronous programming, promises, and
              the use of APIs to fetch and send data. These concepts are crucial
              for building modern and responsive web applications.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
