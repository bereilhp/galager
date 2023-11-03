import FindTheErrorsList from "../../_components/_findTheErrorsList/FindTheErrorsList";
import FooterFixed from "../../_components/_footerFixed/FooterFixed";
import Navbar from "../../_components/_navbar/Navbar";

export default function Page() {
  return (
    <div>
      <Navbar />
      <FindTheErrorsList></FindTheErrorsList>
      <FooterFixed></FooterFixed>
    </div>
  );
}
