import Footer from "../_footer/Footer";
import Navbar from "../_navbar/Navbar";
import GetQuizScore from "../_getQuizScore/GetQuizScore";
import Logout from "../_logout/Logout";
import Pad from "../_pad/Pad";
import style from "./profilePageComp.module.css";
import GetUsernameAlone from "../_getUsernameAlone/GetUsernameAlone";
import GetFillTheBlankScore from "../_getFillTheBlankScore/GetFillTheBlankScore";
import GetFindTheErrorsScore from "../_getFindTheErrorsScore/GetFindTheErrorsScore";

export default function ProfilePageComp() {
  return (
    <div>
      <Navbar></Navbar>
      <h1 className={style.center}>Profile Page</h1>
      <span className={style.align}>
        <GetUsernameAlone></GetUsernameAlone>
      </span>
      <GetQuizScore></GetQuizScore>
      <GetFillTheBlankScore></GetFillTheBlankScore>
      <GetFindTheErrorsScore></GetFindTheErrorsScore>
      <Pad></Pad>
      <span className={style.align}>
        <Logout></Logout>
      </span>
      <Pad></Pad>
      <Pad></Pad>
      <Pad></Pad>
      <Pad></Pad>
      <Pad></Pad>
      <Footer></Footer>
    </div>
  );
}
