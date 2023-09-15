import GetQuizScore from "../_components/_getQuizScore/GetQuizScore";
import GetUsername from "../_components/_getUsername/GetUsername";
import Logout from "../_components/_logout/LogOut";

export default function ProfilePage() {
  return (
    <div>
      <h1>Profile Page</h1>
      <GetUsername></GetUsername>
      <GetQuizScore></GetQuizScore>
      <Logout></Logout>
    </div>
  );
}
