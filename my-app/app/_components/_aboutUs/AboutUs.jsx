import style from "./aboutUs.module.css";

export default function AboutUs() {
    return (
        <div>
            <div className={style.title}>About Us</div>
            <div className={style.text}>
                <span className={style.green}>Galager</span> is a web app dedicated to breaking barriers and creating opportunities for individuals interested in programming, regardless of their background or abilities.
                <br /><br />
                We believe in the power of technology to transform lives, and by offering free and open-source resources, we aim to enable aspiring developers from all around the world to discover their true capabilities through programming. We are creating a community that thrives on mutual support and collaboration, fostering an environment where everyone can grow and succeed in the world of software development.
            </div>
        </div>
    )
}