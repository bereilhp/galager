"use client";

import style from "./quiz.module.css";
import { quiz } from "../../_data/_quiz/basic";
import { useState, useEffect } from "react";
import Confetti from "react-confetti";
import axios from "axios";

export default function QuizBasicJS() {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [checked, setChecked] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    title: "Easy JavaScript Quiz",
    score: 0,
    correctedAnswers: 0,
    wrongAnswers: 0,
  });

  const { questions } = quiz;
  const { question, answers, correctAnswer } = questions[activeQuestion];

  useEffect(() => {
    if (showResult) {
      sendQuizData(); // Call sendQuizData when showResult is true
    }
  }, [showResult]);

  //Select and check ans
  const onAnswerSelected = (answer, idx) => {
    setChecked(true);
    setSelectedAnswerIndex(idx);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
      console.log("true");
    } else {
      setSelectedAnswer(false);
      console.log("false");
    }
  };

  const nextQuestion = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctedAnswers: prev.correctedAnswers + 1,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    );

    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }

    setChecked(false);
  };

  const sendQuizData = async () => {
    try {
      const res = await axios.get("/api/users/me");
      if (showResult) {
        const response = await axios.post("/api/quiz/result", {
          username: res.data.data.username,
          quizName: result.title,
          result: (result.score / 25) * 100,
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
              Question {activeQuestion + 1}
              <span>/{questions.length}</span>
            </h2>
            <h3>{questions[activeQuestion].question}</h3>
            {answers.map((answer, idx) => (
              <li
                key={idx}
                onClick={() => onAnswerSelected(answer, idx)}
                className={`${style.list} ${
                  selectedAnswerIndex === idx
                    ? style.listSelected
                    : style.listHover
                }`}
              >
                <span>{answer}</span>
              </li>
            ))}

            {checked ? (
              <button onClick={nextQuestion} className={style.btn}>
                {activeQuestion === question.length - 1 ? "Finish" : "Next"}
              </button>
            ) : (
              <button className={style.btn}>Select an answer</button>
            )}
          </div>
        ) : (
          <div>
            <Confetti></Confetti>
            <h3>Results</h3>
            <h3>Overall {(result.score / 25) * 100}%</h3>
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
