import Footer from "../_components/_footer/Footer";
import GetQuizScore from "../_components/_getQuizScore/GetQuizScore";
import GetUsername from "../_components/_getUsername/GetUsername";
import Logout from "../_components/_logout/LogOut";
import Navbar from "../_components/_navbar/Navbar";
import Pad from "../_components/_pad/Pad";

export default function ProfilePage() {
  return (
    <div>
      <Navbar></Navbar>
      <h1>Profile Page</h1>
      <GetUsername></GetUsername>
      <GetQuizScore></GetQuizScore>
      <Logout></Logout>
      <Pad></Pad>
      <Footer></Footer>
    </div>
  );
}
