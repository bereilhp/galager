import GetUserDetails from "../_components/_getUserDetails/GetUserDetails";
import Logout from "../_components/_logout/LogOut";

export default function ProfilePage() {
    return (
        <div>
            <h1>Profile</h1>
            <GetUserDetails></GetUserDetails>
            <Logout></Logout>
        </div>
    )
}