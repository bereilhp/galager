"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

export default function GetFillTheBlankScore() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const getFillTheBlankScore = async () => {
      try {
        const res = await axios.get("/api/fillTheBlank/score");
        setScores(res.data.data);
        console.log(res.data.data);
      } catch (error) {
        console.error("Error fetching score data:", error);
      }
    };

    getFillTheBlankScore();
  }, []);

  return (
    <div>
      <h2>Highest Fill in the Blank Scores:</h2>
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
          <li>No fill in the blank scores available</li>
        </ul>
      )}
    </div>
  );
}
