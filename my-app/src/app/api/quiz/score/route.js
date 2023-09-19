import { NextResponse, NextRequest } from "next/server";
import Quiz from "@/src/models/quizModel";
import { connect } from "@/src/db/config";

connect();

export async function GET(req) {
  try {
    //const user = await axios.get("/api/users/me");
    //const un = user.data.data.username;
    const quizScores = await Quiz.aggregate([
      {
        $match: {
          username: "test2", //un,
        },
      },
      {
        $sort: {
          result: -1,
        },
      },
      {
        $group: {
          _id: "$quizName",
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
      data: quizScores,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
