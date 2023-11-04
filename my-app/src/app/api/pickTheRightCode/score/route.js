import { NextResponse, NextRequest } from "next/server";
import PickTheRightCode from "@/src/models/pickTheRightCode";
import { connect } from "@/src/db/config";
import { getDataToken } from "@/src/helpers/getDataToken";
import User from "@/src/models/userModel";

connect();

export async function GET(req) {
  try {
    const userId = await getDataToken(req);
    const user = await User.findOne({ _id: userId }).select("username");
    //console.log(user.username);
    const quizScores = await PickTheRightCode.aggregate([
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
          _id: "$pickTheRightCodeExerciseName",
          highestScore: {
            $first: "$result",
          },
          badge: {
            $first: "$badge",
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
      data: quizScores,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
