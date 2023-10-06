import Navbar from "./_components/_navbar/Navbar";
import Homepage from "./_components/_homepage/Homepage";
import FooterFixed from "./_components/_footerFixed/FooterFixed";
import Footer from "./_components/_footer/Footer";
import HomeScreen from "./_components/_homeScreen/HomeScreen";

export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <HomeScreen></HomeScreen>
      <div></div>
      <Footer></Footer>
    </div>
  );
}
