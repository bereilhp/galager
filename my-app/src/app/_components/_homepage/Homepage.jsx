import Image from "next/image";
import style from "./homepage.module.css";
import OurMission from "../_ourMission/OurMission";
import AboutUs from "../_aboutUs/AboutUs";
import MeetTheTeam from "../_meetTheTeam/MeetTheTeam";
import Pad from "../_pad/Pad";
import Space from "../_space/Space";

export default function Homepage() {
  return (
    <div className={style.homepageContainer}>
      <Pad></Pad>
      <AboutUs></AboutUs>
      <Space></Space>
      <OurMission></OurMission>
      <Space></Space>
      <MeetTheTeam></MeetTheTeam>
    </div>
  );
}
