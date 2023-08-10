import Navbar from "./_components/_navbar/Navbar";
import Homepage from "./_components/_homepage/Homepage";
import FooterFixed from "./_components/_footerFixed/FooterFixed";

export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Homepage />
      </div>
      <FooterFixed></FooterFixed>
    </div>
  )
}