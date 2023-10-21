import { NextResponse, NextRequest } from "next/server";
import FillTheBlank from "@/src/models/fillTheBlankModel";
import { connect } from "@/src/db/config";
import { getDataToken } from "@/src/helpers/getDataToken";
import User from "@/src/models/userModel";

connect();

export async function GET(req) {
  try {
    const userId = await getDataToken(req);
    const user = await User.findOne({ _id: userId }).select("username");
    //console.log(user.username);
    const fillTheBlankScores = await FillTheBlank.aggregate([
      {
        $match: {
          username: user.username,
        },
      },
      {
        $sort: {
          result: -1,
        },
      },
      {
        $group: {
          _id: "$fillTheBlankExerciseName",
          highestScore: {
            $first: "$result",
          },
        },
      },
      {
        $sort: {
          highestScore: -1,
        },
      },
    ]);
    //console.log(quizScores);
    return NextResponse.json({
      message: "Score Found",
      data: fillTheBlankScores,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
