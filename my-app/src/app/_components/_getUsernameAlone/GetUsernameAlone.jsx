"use client";

import axios from "axios";
import useSWR from "swr";

const fetcher = (url) => axios.get(url).then((res) => res.data);

export default function GetUsernameAlone() {
  const { data, error } = useSWR("/api/users/me", fetcher);

  if (error) {
    console.error("Error fetching user data:", error);
  }

  return (
    <div>
      <h2>@{data ? data.data.username : ""}</h2>
    </div>
  );
}
