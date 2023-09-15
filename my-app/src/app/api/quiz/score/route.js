import { NextResponse, NextRequest } from "next/server";
import Quiz from "@/src/models/quizModel";
import { connect } from "@/src/db/config";

connect();

export async function GET(req) {
  try {
    const quizScore = await Quiz.findOne({
      username: "test",
    }).sort({ result: -1 });
    return NextResponse.json({
      message: "Score Found",
      data: quizScore,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
