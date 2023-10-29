"use client";

import axios from "axios";
import useSWR from "swr";
import style from "./getUsername.module.css";

const fetcher = (url) => axios.get(url).then((res) => res.data);

export default function GetUsername() {
  const { data, error } = useSWR("/api/users/me", fetcher);

  if (error) {
    console.error("Error fetching user data:", error);
  }

  return (
    <div>
      <h1 className={style.center}>Welcome {data ? data.data.username : ""}</h1>
    </div>
  );
}
