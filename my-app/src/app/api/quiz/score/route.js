import { NextResponse, NextRequest } from "next/server";
import Quiz from "@/src/models/quizModel";
import { connect } from "@/src/db/config";
import axios from "axios";

connect();

export async function GET(req) {
  try {
    //const res = await axios.get("/api/users/me");
    //console.log(res);
    const quizScore = await Quiz.findOne({
      username: "test",
    }).sort({ result: -1 });
    return NextResponse.json({
      message: "User found",
      data: quizScore,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
