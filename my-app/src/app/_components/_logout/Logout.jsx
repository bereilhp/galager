"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";
import style from "./logout.module.css";

export default function Logout() {
  const router = useRouter();

  const logout = async () => {
    try {
      const response = await axios.get("api/users/logout");

      if (response.status === 200) {
        toast.success("Logout successful");
        router.push("/login");
      } else {
        toast.error("Logout failed. Please try again.");
      }
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("An error occurred during logout. Please try again.");
    }
  };

  return (
    <div>
      <Toaster></Toaster>
      <button onClick={logout} className={style.button}>
        Log Out
      </button>
    </div>
  );
}
