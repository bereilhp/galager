import mongoose from "mongoose";

const fillTheBlankSchema = new mongoose.Schema({
  username: String,
  fillTheBlankExerciseName: String,
  result: Number,
});

const FillTheBlank =
  mongoose.models.fillInTheBlanks ||
  mongoose.model("fillInTheBlanks", fillTheBlankSchema);

export default FillTheBlank;
