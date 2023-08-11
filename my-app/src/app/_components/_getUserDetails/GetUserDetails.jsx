"use client"
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import style from "./getUserDetails.module.css"
import { useState } from "react";

export default function GetUserDetails() {
    const router = useRouter();
    const [data, setData] = useState("nothing")

    const getUserDetails = async () => {
        const res = await axios.get("/api/users/me")
        console.log(res.data)
        setData(res.data.data._id)
    }

    return (
        <div>
            <h2>{data === "nothing" ? "nothing" : <Link href={`/profile/${data}`}>{data}</Link>}</h2>
            <button onClick={getUserDetails} className={style.button}>Get User Details</button>
        </div>
    )
}