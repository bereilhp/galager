import { getDataToken } from "@/src/helpers/getDataToken";
import { NextResponse, NextRequest } from "next/server";
import User from "@/src/models/userModel";
import { connect } from "@/src/db/config";

connect();

export async function GET(req){
    try {
        const userId = await getDataToken(req);
        const user = await User.findOne({_id: userId}).select("-password");
        return NextResponse.json({
            message: "User found",
            data: user
        })
    } catch (error) {
        return NextResponse.json({error: error.message}, {status:400})
    }
}