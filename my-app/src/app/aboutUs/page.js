import Contact from "../_components/_contact/Contact";
import FooterFixed from "../_components/_footerFixed/FooterFixed";
import Homepage from "../_components/_homepage/Homepage";
import Navbar from "../_components/_navbar/Navbar";

export default function Page() {
  return (
    <div>
      <Navbar/>
      <Homepage></Homepage>
      <FooterFixed></FooterFixed>
    </div>
  )
}