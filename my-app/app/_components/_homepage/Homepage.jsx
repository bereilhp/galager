import Image from "next/image";
import style from "./homepage.module.css";
import OurMission from "../_ourMission/OurMission";
import AboutUs from "../_aboutUs/AboutUs";
import MeetTheTeam from "../_meetTheTeam/MeetTheTeam";
import Pad from "../_pad/Pad";
import StartLearn from "../_startLearn/StartLearn";

export default function Homepage() {
  return (
    <div>
      <AboutUs></AboutUs>
      <OurMission></OurMission>     
      <MeetTheTeam></MeetTheTeam>
      <Pad></Pad>
      <StartLearn></StartLearn>
      <Pad></Pad>
    </div>
  );
}
