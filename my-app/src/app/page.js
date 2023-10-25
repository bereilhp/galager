import Navbar from "./_components/_navbar/Navbar";
import FooterFixed from "./_components/_footerFixed/FooterFixed";
import HomeScreen from "./_components/_homeScreen/HomeScreen";

import CongratsPopUp from "./_components/_congratsPopUp/CongratsPopUp";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomeScreen></HomeScreen>
      <FooterFixed></FooterFixed>
    </div>
  );
}
