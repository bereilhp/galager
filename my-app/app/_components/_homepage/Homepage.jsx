import Image from "next/image";
import style from "./homepage.module.css";
import OurMission from "../_ourMission/OurMission";
import AboutUs from "../_aboutUs/AboutUs";
import MeetTheTeam from "../_meetTheTeam/MeetTheTeam";

export default function Homepage() {
  return (
    <div>
      <OurMission></OurMission>
      <AboutUs></AboutUs>
      <MeetTheTeam></MeetTheTeam>
      <div className={style.center}>
        <Image src="/_img/logo.png" width={800} height={225} alt="Galager Logo" />
      </div>
    </div>
  );
}
