import { connect } from "@/src/db/config";
import FillTheBlank from "@/src/models/fillTheBlankModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(req, res) {
  try {
    const reqBody = await req.json();
    const { username, fillTheBlankExerciseName, result, badge } = reqBody;
    console.log(reqBody);

    const fillTheBlank = new FillTheBlank({
      username,
      fillTheBlankExerciseName,
      result,
      badge,
    });

    const savedFillTheBlank = await fillTheBlank.save();
    console.log(savedFillTheBlank);

    return NextResponse.json({
      message: "Fill The Blank data saved successfully",
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
