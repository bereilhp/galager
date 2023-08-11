"use client"
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import style from "./logout.module.css"
import { useState } from "react";

export default function Logout() {
    const router = useRouter();
    const [data, setData] = useState("nothing")

    const logout = async () => {
        try {
            await axios.get("api/users/logout")
            toast.success("Logout succesfull")
            router.push("/login")
        } catch (error) {
            console.log(error.message);
            toast.error(error.message)
        }
    }

    const getUserDetails = async () => {
        const res = await axios.get("/api/users/me")
        console.log(res.data)
        setData(res.data.data._id)
    }

    return (
        <div>
            <button onClick={logout} className={style.button}>Log out</button>
        </div>
    )
}