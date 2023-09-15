import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
  username: String,
  quizName: String,
  result: Number,
});

const Quiz = mongoose.model.quizzes || mongoose.model("quizzes", quizSchema);

export default Quiz;
