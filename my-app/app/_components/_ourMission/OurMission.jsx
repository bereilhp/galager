import Image from "next/image";
import style from "./ourMission.module.css";

export default function OurMission() {
    return (
        <div className={style.center}>
            <div className={style.missionContainer}>
                <div className={style.imageContainer}>
                    <Image
                        src="/_img/ourMission.svg"
                        width={200}
                        height={225}
                        alt="Arrow in the center of a target"
                        className={style.image}
                    />
                </div>
                <div className={style.textContainer}>
                    <div className={style.title}>Our Mission</div>
                    <div className={style.blueLine}></div>
                    <div className={style.text}>
                        Our mission is to empower individuals of all abilities.
                    </div>
                </div>
            </div>
        </div>
    );
}
