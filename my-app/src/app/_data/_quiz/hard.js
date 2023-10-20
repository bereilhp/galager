export const quiz = {
  totalQuestions: 5,
  questions: [
    {
      id: 1,
      question:
        "Which of the following is NOT a valid way to declare a JavaScript variable?",
      answers: [
        "var x = 5;",
        "const y = 10;",
        "let 3z = 15;",
        "var _name = 'John';",
      ],
      correctAnswer: "let 3z = 15;",
    },
    {
      id: 2,
      question: "What is the purpose of the 'parseInt' function in JavaScript?",
      answers: [
        "To convert a string to an integer",
        "To find the first occurrence of a substring in a string",
        "To round a floating-point number to the nearest integer",
        "To remove whitespace from the beginning and end of a string",
      ],
      correctAnswer: "To convert a string to an integer",
    },
    {
      id: 3,
      question: "What is the result of the expression '2' + '2' in JavaScript?",
      answers: ["22", "4", "TypeError", "NaN"],
      correctAnswer: "22",
    },
    {
      id: 4,
      question: "Which keyword is used to declare a function in JavaScript?",
      answers: ["function", "method", "define", "func"],
      correctAnswer: "function",
    },
    {
      id: 5,
      question:
        "What is the purpose of the 'JSON.stringify()' method in JavaScript?",
      answers: [
        "To parse a JSON string",
        "To convert a JavaScript object to a JSON string",
        "To validate a JSON object",
        "To retrieve data from a JSON file",
      ],
      correctAnswer: "To convert a JavaScript object to a JSON string",
    },
  ],
};
