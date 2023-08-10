import Footer from "../_components/_footer/Footer";
import FooterFixed from "../_components/_footerFixed/FooterFixed";
import LearnIntro from "../_components/_learnIntro/LearnIntro";
import Navbar from "../_components/_navbar/Navbar";
import Pad from "../_components/_pad/Pad";

export default function Page() {
  return (
    <div>
      <Navbar/>
      <LearnIntro></LearnIntro>
      <FooterFixed></FooterFixed>
    </div>
  )
}