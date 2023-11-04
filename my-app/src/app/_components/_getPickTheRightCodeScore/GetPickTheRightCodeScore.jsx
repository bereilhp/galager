"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./getPickTheRightCodeScore.module.css";
import Image from "next/image";

export default function GetPickTheRightCodeScore() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const getPickTheRightCodeScore = async () => {
      try {
        const res = await axios.get("/api/pickTheRightCode/score");
        setScores(res.data.data);
        console.log(res.data.data);
      } catch (error) {
        console.error("Error fetching pick the right score data:", error);
      }
    };

    getPickTheRightCodeScore();
  }, []);

  return (
    <div className={style.pad}>
      <h2 className={style.mainTitle}>Highest Pick the Right Code Scores:</h2>
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
            <li>No pick the right code scores available</li>
          </ul>
        </div>
      )}
    </div>
  );
}
