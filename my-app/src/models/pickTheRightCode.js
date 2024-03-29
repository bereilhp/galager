import mongoose from "mongoose";

const pickTheRightCodeSchema = new mongoose.Schema({
  username: String,
  pickTheRightCodeExerciseName: String,
  result: Number,
  badge: String,
});

const PickTheRightCode =
  mongoose.models.pickTheRightCodes ||
  mongoose.model("pickTheRightCodes", pickTheRightCodeSchema);

export default PickTheRightCode;
