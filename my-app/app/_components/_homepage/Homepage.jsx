import Image from "next/image";
import style from "./homepage.module.css";
import OurMission from "../_ourMission/OurMission";
import AboutUs from "../_aboutUs/AboutUs";
import MeetTheTeam from "../_meetTheTeam/MeetTheTeam";
import Pad from "../_pad/Pad";

export default function Homepage() {
  return (
    <div>
      <OurMission></OurMission>
      <AboutUs></AboutUs>
      <MeetTheTeam></MeetTheTeam>
      <Pad></Pad>
    </div>
  );
}
