import style from "./meetTheTeam.module.css";

export default function MeetTheTeam() {
    return (
        <div>
            <div className={style.title}>Meet the Team</div>
            <br />
            <div className={style.text}>
                Meet our dedicated team of passionate developers. Well, truth be told, it's currently just one, yours truly! But hey, I'm all-in on building an e-learning platform that embraces diversity and inclusion. Programming has truly changed my life, opening a whole new world of sleepless nights, stress, and let's not forget the infamous ritual of copying and pasting an error into Google and praying that someone from 8 years ago had the same problem. Yet, despite all the challenges, programming is nothing short of amazing.
                <br /><br />
                I can't contain my excitement about creating <span className={style.green}>Galager.</span> A place where aspiring developers can find support, inspiration, and most importantly, enjoy the journey.
                <br /><br />
                While I may be the primary driving force behind <span className={style.green}>Galager</span> for now, my heart is set on fostering a collaborative community that welcomes developers, educators, and learners from diverse backgrounds. Together, we'll create an inclusive environment that nurtures growth, sparks innovation, and celebrates shared success.
                <br /><br />
                So, buckle up and join me on this exhilarating journey of unleashing your coding superpowers at <span className={style.green}>Galager!</span>
            </div>
        </div>
    )
}