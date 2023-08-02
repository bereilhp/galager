import style from "./ourMission.module.css";

export default function OurMission() {
    return (
        <div>
            <div className={style.title}>Our Mission</div>
            <div className={style.text}>
                At <span className={style.green}>Galager</span>, our mission is to empower individuals of all abilities to learn coding.
            </div>
        </div>
    )
}