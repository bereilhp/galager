export const quiz = {
  totalQuestions: 5,
  questions: [
    {
      id: 1,
      question:
        "Which keyword is used to declare a constant variable in JavaScript?",
      answers: ["var", "let", "const", "variable"],
      correctAnswer: "const",
    },
    {
      id: 2,
      question: "What is the result of the expression 5 == '5' in JavaScript?",
      answers: ["true", "false", "NaN", "SyntaxError"],
      correctAnswer: "true",
    },
    {
      id: 3,
      question:
        "Which built-in method is used to convert a string to lowercase in JavaScript?",
      answers: [
        "toLowerCase()",
        "toLower()",
        "lowerCase()",
        "convertLowerCase()",
      ],
      correctAnswer: "toLowerCase()",
    },
    {
      id: 4,
      question: "What does the 'DOM' stand for in JavaScript?",
      answers: [
        "Document Object Model",
        "Data Object Model",
        "Digital Order Mechanism",
        "Document Oriented Markup",
      ],
      correctAnswer: "Document Object Model",
    },
    {
      id: 5,
      question:
        "Which operator is used for strict equality comparison in JavaScript?",
      answers: ["===", "==", "=", "!="],
      correctAnswer: "===",
    },
  ],
};
