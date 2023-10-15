"use client";

import React, { useState } from "react";
import Confetti from "react-confetti";
import style from "./fillTheBlank.module.css";
import { fillTheBlank } from "../../_data/fill-the-blank";

export default function FillTheBlank() {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);

  const { questions } = fillTheBlank;
  const { question, correctAnswer } = questions[activeQuestion];

  const [result, setResult] = useState({
    title: "Fill in the blank",
    score: 0,
    correctedAnswers: 0,
    wrongAnswers: 0,
  });

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
            <h3>Results</h3>
            <h3>Overall {(result.score / (questions.length * 5)) * 100}%</h3>
            <p>
              Total Questions: <span>{questions.length}</span>
            </p>
            <p>
              Total Score: <span>{result.score}</span>
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
