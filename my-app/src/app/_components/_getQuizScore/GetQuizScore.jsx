"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

export default function GetQuizScore() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const getQuizScore = async () => {
      try {
        const res = await axios.get("/api/quiz/score");
        setScores(res.data.data);
        console.log(res.data.data);
      } catch (error) {
        console.error("Error fetching score data:", error);
      }
    };

    getQuizScore();
  }, []);

  return (
    <div>
      <h2>Highest Quiz Scores:</h2>
      {scores.length > 0 ? (
        <ul>
          {scores.map((score) => (
            <li key={score._id}>
              {score._id} with score {score.highestScore}%
            </li>
          ))}
        </ul>
      ) : (
        <ul>
          <li>No quiz scores available</li>
        </ul>
      )}
    </div>
  );
}
