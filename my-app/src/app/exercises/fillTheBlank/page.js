import FillTheBlanList from "../../_components/_fillTheBlankList/FillTheBlankList";
import FooterFixed from "../../_components/_footerFixed/FooterFixed";
import Navbar from "../../_components/_navbar/Navbar";

export default function Page() {
  return (
    <div>
      <Navbar />
      <FillTheBlanList></FillTheBlanList>
      <FooterFixed></FooterFixed>
    </div>
  );
}
