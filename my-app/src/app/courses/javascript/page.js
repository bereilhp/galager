import Navbar from "@/src/app/_components/_navbar/Navbar";
import Pad from "@/src/app/_components/_pad/Pad";
import JavaScriptCourseIntro from "../../_components/_javaScriptCourseIntro/JavaScriptCourseIntro";
import FooterFixed from "../../_components/_footerFixed/FooterFixed";

export default function Page() {
  return (
    <div>
      <Navbar></Navbar>
      <JavaScriptCourseIntro></JavaScriptCourseIntro>
      <Pad></Pad>
      <FooterFixed></FooterFixed>
    </div>
  );
}
