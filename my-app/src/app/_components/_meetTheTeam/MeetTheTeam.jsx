import Image from "next/image";
import style from "./meetTheTeam.module.css";

export default function MeetTheTeam() {
    return (
        <div className={style.center}>
            <div className={style.missionContainer}>
                <div className={style.imageContainer}>
                    <Image
                        src="/_img/meetTheTeam.png"
                        width={100}
                        height={100}
                        alt="Dev coding"
                        className={style.image}
                    />
                </div>
                <div className={style.textContainer}>
                    <div className={style.title}>Meet the Team</div>
                    <div className={style.blueLine}></div>
                    <div className={style.text}>
                        As of right now, the team consists of one dev and that's me! Hello World!
                    </div>
                </div>
            </div>
        </div>
    );
}