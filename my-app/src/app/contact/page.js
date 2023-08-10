import Contact from "../_components/_contact/Contact";
import FooterFixed from "../_components/_footerFixed/FooterFixed";
import Navbar from "../_components/_navbar/Navbar";

export default function Page() {
  return (
    <div>
      <Navbar/>
      <Contact></Contact>
      <FooterFixed></FooterFixed>
    </div>
  )
}