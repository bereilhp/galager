import Homepage from "../_components/_homepage/Homepage";
import Navbar from "../_components/_navbar/Navbar";
import FooterFixed from "../_components/_footerFixed/FooterFixed";

export default function Page() {
  return (
    <div>
      <Navbar />
      <Homepage></Homepage>
      <FooterFixed></FooterFixed>
    </div>
  );
}
