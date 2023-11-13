import { connect } from "@/src/db/config";
import PickTheRightCode from "@/src/models/pickTheRightCode";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(req, res) {
  try {
    const reqBody = await req.json();
    const { username, pickTheRightCodeExerciseName, result, badge } = reqBody;
    //console.log(reqBody);

    const pickTheRightCode = new PickTheRightCode({
      username,
      pickTheRightCodeExerciseName,
      result,
      badge,
    });

    const savePickTheRightCode = await pickTheRightCode.save();
    //console.log(savePickTheRightCode);

    return NextResponse.json({
      message: "Pick the Right Code data saved successfully",
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
