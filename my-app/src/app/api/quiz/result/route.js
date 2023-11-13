import { connect } from "@/src/db/config";
import Quiz from "@/src/models/quizModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(req, res) {
  try {
    const reqBody = await req.json();
    const { username, quizName, result, badge } = reqBody;
    //console.log(reqBody);

    const quiz = new Quiz({
      username,
      quizName,
      result,
      badge,
    });

    const savedQuiz = await quiz.save();
    //console.log(savedQuiz);

    return NextResponse.json({ message: "Quiz data saved successfully" });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
