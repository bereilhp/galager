"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

export default function GetUsername() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const res = await axios.get("/api/users/me");
        setData(res.data.data.username);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    getUserDetails();
  }, []);

  return (
    <div>
      <h2>Welcome {data}</h2>
    </div>
  );
}
