import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
  username: String,
  quizName: String,
  result: Number,
});

const Quiz = mongoose.models.quizzes || mongoose.model("quizzes", quizSchema);

export default Quiz;
