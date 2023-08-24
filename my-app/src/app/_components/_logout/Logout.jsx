"use client"

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";
import style from "./logout.module.css"

export default function Logout() {
    const router = useRouter();

    const logout = async () => {
        try {
            await axios.get("api/users/logout")
            toast.success("Logout succesfull")
            router.push("/login")
            console.log("Timeout finished!");

        } catch (error) {
            console.log(error.message);
            toast.error(error.message)
        }
    }

    return (
        <div>
            <Toaster></Toaster>
            <button onClick={logout} className={style.button}>Log out</button>
        </div>
    )
}