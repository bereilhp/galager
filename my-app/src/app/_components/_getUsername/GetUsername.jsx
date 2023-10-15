"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./getUsername.module.css";

export default function GetUsername() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const res = await axios.get("/api/users/me");
        //console.log(res, res.data.data.username);
        setData(res.data.data.username);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    getUserDetails();
  }, []);

  return (
    <div>
      <h1 className={style.center}>Welcome {data}</h1>
    </div>
  );
}
