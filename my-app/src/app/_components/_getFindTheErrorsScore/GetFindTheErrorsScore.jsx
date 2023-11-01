"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./getFindTheErrorsScore.module.css";

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
    <div className={style.pad}>
      <h2 className={style.mainTitle}>Highest Find the Errors Scores:</h2>
      {scores.length > 0 ? (
        <div className={style.rowContainer}>
          {scores.map((score) => (
            <div key={score._id} className={style.row}>
              <div className={style.image}>
                <Image
                  src={score.badge}
                  width={120}
                  height={120}
                  alt="Badge for Quiz"
                />
              </div>
              <div className={style.text}>
                <p className={style.title}>
                  <strong>{score._id}</strong>
                </p>
                <p className={style.space}>Score: {score.highestScore}%</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <ul>
            <li>No find the errors scores available</li>
          </ul>
        </div>
      )}
    </div>
  );
}
