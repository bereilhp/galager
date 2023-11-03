import FooterFixed from "../../_components/_footerFixed/FooterFixed";
import Navbar from "../../_components/_navbar/Navbar";
import PickTheRightCodeList from "../../_components/_pickTheRightCodeList/PickTheRightCodeList";

export default function Page() {
  return (
    <div>
      <Navbar />
      <PickTheRightCodeList></PickTheRightCodeList>
      <FooterFixed></FooterFixed>
    </div>
  );
}
