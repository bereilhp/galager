"use client";

import { pickTheRightCode } from "../../_data/_pickTheRightCode/medium";
import { useState, useEffect } from "react";
import Confetti from "react-confetti";
import axios from "axios";
import CongratsPopUp from "../_congratsPopUp/CongratsPopUp";
import style from "./pickTheRightCodeMedium.module.css";
import Image from "next/image";

export default function PickTheRightCodeMedium() {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [showCongrats, setShowCongrats] = useState(true);
  const [result, setResult] = useState({
    title: "Medium JavaScript Pick the Right Code",
    score: 0,
    correctedAnswers: 0,
    wrongAnswers: 0,
  });

  const { questions } = pickTheRightCode;
  const { question, answers, correctAnswer } = questions[activeQuestion];

  const badge = "/_img/badges/pickTheRightCode/silver.png";

  const closeCongrats = () => {
    setShowCongrats(false);
  };

  useEffect(() => {
    if (showResult) {
      sendPickTheRightCodeData();
    }
  }, [showResult]);

  const onAnswerSelected = (answerIndex) => {
    setSelectedAnswerIndex(answerIndex);
  };

  const nextQuestion = () => {
    const isCorrect = selectedAnswerIndex === answers.indexOf(correctAnswer);
    setResult((prev) => ({
      ...prev,
      score: isCorrect ? prev.score + 5 : prev.score,
      correctedAnswers: isCorrect
        ? prev.correctedAnswers + 1
        : prev.correctedAnswers,
      wrongAnswers: isCorrect ? prev.wrongAnswers : prev.wrongAnswers + 1,
    }));

    setSelectedAnswerIndex(null);

    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion(activeQuestion + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
  };

  const sendPickTheRightCodeData = async () => {
    try {
      const res = await axios.get("/api/users/me");
      if (showResult) {
        const response = await axios.post("/api/pickTheRightCode/result", {
          username: res.data.data.username,
          pickTheRightCodeExerciseName: result.title,
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
            <h3>{question}</h3>
            <div className={style.codeImagesContainer}>
              {answers.map((answer, idx) => (
                <div
                  key={idx}
                  onClick={() => onAnswerSelected(idx)}
                  className={`${style.codeImage} ${
                    selectedAnswerIndex === idx ? style.selectedImage : ""
                  }`}
                >
                  <Image
                    src={answer}
                    alt={`Code Image ${idx}`}
                    width={700}
                    height={370}
                  />
                </div>
              ))}
            </div>

            {selectedAnswerIndex !== null ? (
              <button onClick={nextQuestion} className={style.btn}>
                {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
              </button>
            ) : (
              <button className={style.btn}>Select an answer</button>
            )}
          </div>
        ) : (
          <div>
            <Confetti />
            {showCongrats ? (
              <CongratsPopUp
                title={result.title}
                badgeImage={badge}
                onClose={closeCongrats}
              />
            ) : null}

            <h2 className={style.center}>Results</h2>
            <h3>Overall {(result.score / 25) * 100}%</h3>
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
