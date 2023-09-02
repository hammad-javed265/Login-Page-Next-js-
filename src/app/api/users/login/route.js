import { NextRequest, NextResponse } from "next/server";
import bcryptjs from 'bcryptjs'
import jwt from "jsonwebtoken";
import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";

connect();

export async function POST(NextRequest){
    try {
        const reqBody = await NextRequest.json();
        const {email, password} = reqBody;

        console.log(reqBody);

        // check if user exists
        const user = await User.findOne({email});
        if(!user){
            return NextResponse.json({
                message: "user does not exist",
                status: 400,
                success: false,
            })
        }
        
        // Check if password is corect
        const validPassword = await bcryptjs.compare(password, user.password);
        if(!validPassword){
            return NextResponse.json({
                message: "Password is not correct",
                status: 400,
                success: false,
            })
        }

        // create token data
        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email
        }

        // create token
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, {expiresIn: '1d'});
        
        // set the token into users cookie so that we can use it for further verifications
        // creating the response
        const response = NextResponse.json({
            message: "Login Successful",
            success: true,
            user: tokenData
        })
        // setting the cookie
        response.cookies.set("token", token, {
            httpOnly: true,
        })


        // now return the response
        return response;
    
    } catch (error) {
        return NextResponse.json({
            message: error.message,
            status: 500,
            success: false
        })
    }
}
