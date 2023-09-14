import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
  username: String,
  quizName: String,
  result: Number,
});

const Quiz = mongoose.model.quiz || mongoose.model("quiz", quizSchema);

export default Quiz;
