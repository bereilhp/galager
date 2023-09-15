"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

export default function GetQuizScore() {
  const [data, setData] = useState(null);
  const [name, setName] = useState(null);

  useEffect(() => {
    const getQuizScore = async () => {
      try {
        const res = await axios.get("/api/quiz/score");
        console.log(res);
        setData(res.data.data.result);
        setName(res.data.data.quizName);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    getQuizScore();
  }, []);

  return (
    <div>
      <h2>
        {name} with score {data}%
      </h2>
    </div>
  );
}
