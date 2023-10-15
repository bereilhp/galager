"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

export default function GetFindTheErrorsScore() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const getFindTheErrorsScore = async () => {
      try {
        const res = await axios.get("/api/findTheErrors/score");
        setScores(res.data.data);
        console.log(res.data.data);
      } catch (error) {
        console.error("Error fetching score data:", error);
      }
    };

    getFindTheErrorsScore();
  }, []);

  return (
    <div>
      <h2>Highest Find the Errors Scores:</h2>
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
          <li>No find the errors scores available</li>
        </ul>
      )}
    </div>
  );
}
