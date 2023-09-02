import { NextRequest, NextResponse } from "next/server";
import bcryptjs from 'bcryptjs'
import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";

connect();

export async function POST(NextRequest){
    try {
        const reqBody = await NextRequest.json();
        const {username, email, password} = reqBody;

        console.log(reqBody);

        // check if user already exists
        const user = await User.findOne({email});

        if(user){
            return NextResponse.json({
                message: "user already exists",
                status: 400,
                success: false,
            })
        }

        // hash password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);


        // create new user
        const newUser = new User({
            username,
            email,
            password: hashedPassword
        })


        // Save user in db
        const savedUser = await newUser.save();
        console.log(savedUser);

        return NextResponse.json({
            message: "User created successfully",
            success: true,
            savedUser
        })
    } catch (error) {
        return NextResponse.json({
            message: error.message,
            status: 500,
            success: false,
        })
    }
}


