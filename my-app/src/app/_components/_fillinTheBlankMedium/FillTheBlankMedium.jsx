"use client";

import { useState, useEffect } from "react";
import Confetti from "react-confetti";
import style from "./fillTheBlank.module.css";
import { fillTheBlank } from "../../_data/_fillTheBlank/medium";
import axios from "axios";
import CongratsPopUp from "../_congratsPopUp/CongratsPopUp";

export default function FillTheBlankMedium() {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [showCongrats, setShowCongrats] = useState(true);

  const { questions } = fillTheBlank;
  const { question, correctAnswer } = questions[activeQuestion];

  const badge = "/_img/badges/fillTheBlank/silver.png";

  const closeCongrats = () => {
    setShowCongrats(false);
  };

  const [result, setResult] = useState({
    title: "Medium JavaScript Fill in the Blank",
    score: 0,
    correctedAnswers: 0,
    wrongAnswers: 0,
  });

  useEffect(() => {
    if (showResult) {
      sendFillTheBlankData(); // Call sendFillTheBlankData when showResult is true
    }
  }, [showResult]);

  const nextQuestion = () => {
    if (selectedAnswer.toLowerCase().trim() === correctAnswer) {
      setResult((prev) => ({
        ...prev,
        score: prev.score + 5,
        correctedAnswers: prev.correctedAnswers + 1,
      }));
    } else {
      setResult((prev) => ({
        ...prev,
        wrongAnswers: prev.wrongAnswers + 1,
      }));
    }

    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setShowResult(true);
    }
    setSelectedAnswer(""); // Clear the input field
  };

  const sendFillTheBlankData = async () => {
    try {
      const res = await axios.get("/api/users/me");
      if (showResult) {
        const response = await axios.post("/api/fillTheBlank/result", {
          username: res.data.data.username,
          fillTheBlankExerciseName: result.title,
          result: (result.score / 25) * 100,
          badge: badge,
        });
      }
    } catch (error) {
      console.log("Send data failed", error.message);
    }
  };
  return (
    <div className={`${style.global} ${style.container}`}>
      <h1 className={style.center}>{result.title}</h1>
      <div>
        {!showResult ? (
          <div className={style.quizContainer}>
            <h2 className={style.center}>
              Question {activeQuestion + 1}/{questions.length}
            </h2>
            <h3>{questions[activeQuestion].question}</h3>
            <input
              className={style.input}
              type="text"
              value={selectedAnswer}
              onChange={(e) => setSelectedAnswer(e.target.value)}
            />
            <button onClick={nextQuestion} className={style.btn}>
              {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
        ) : (
          <div>
            <Confetti />
            {showCongrats ? (
              <CongratsPopUp
                title={result.title}
                badgeImage={badge}
                onClose={closeCongrats}
              ></CongratsPopUp>
            ) : null}
            <h2 className={style.center}>Results</h2>
            <h3>Overall {(result.score / (questions.length * 5)) * 100}%</h3>
            <p>
              Total Questions: <span>{questions.length}</span>
            </p>
            <p>
              Correct Answers: <span>{result.correctedAnswers}</span>
            </p>
            <p>
              Wrong Answers: <span>{result.wrongAnswers}</span>
            </p>

            <button
              onClick={() => window.location.reload()}
              className={style.btn}
            >
              Retake
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
