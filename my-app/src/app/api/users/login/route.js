import { connect } from "@/src/db/config.js";
import User from "@/src/models/userModel.js";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { ResponseCookies } from "next/dist/compiled/@edge-runtime/cookies";


connect();

export async function POST(req, res) {
    try {
        const reqBody = await req.json();
        const { email, password } = reqBody;
        console.log(reqBody);

        //check if user exists
        const user = await User.findOne({ email });

        if (!user) {
            return NextResponse.json({ error: "User does not exist" }, { status: 400 })
        }

        //check if password is correct
        const validPassword = await bcryptjs.compare(password, user.password)

        if (!validPassword) {
            return NextResponse.json({ error: "Invalid password" }, { status: 400 })
        }

        //create token data
        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email
        }

        //create token
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, { expiresIn: "1d" });

        const response = NextResponse.json({
            message: "Login successful",
            success: true,
        })

        response.cookies.set("token", token, { httpOnly: true })

        return response;

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}