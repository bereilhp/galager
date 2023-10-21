import Navbar from "./_components/_navbar/Navbar";
import Homepage from "./_components/_homepage/Homepage";
import FooterFixed from "./_components/_footerFixed/FooterFixed";
import Footer from "./_components/_footer/Footer";
import HomeScreen from "./_components/_homeScreen/HomeScreen";
import WelcomeUser from "./_components/_welcomeUser/WelcomeUser";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomeScreen></HomeScreen>
      <Footer></Footer>
    </div>
  );
}
