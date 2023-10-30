"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import style from "./getQuizScore.module.css";
import Pad from "../_pad/Pad";

export default function GetQuizScore() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const getQuizScore = async () => {
      try {
        const res = await axios.get("/api/quiz/score");
        setScores(res.data.data);
      } catch (error) {
        console.error("Error fetching score data:", error);
      }
    };

    getQuizScore();
  }, []);

  return (
    <div className={style.pad}>
      <h2 className={style.mainTitle}>Highest Quiz Scores:</h2>
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
          <p>No quiz scores available</p>
        </div>
      )}
    </div>
  );
}
