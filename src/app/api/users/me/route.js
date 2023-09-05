import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import User from "@/models/userModel";

connect();

export async function GET(NextRequest){
    try {
        const userId = await getDataFromToken(NextRequest);
        const user = await User.findOne({_id: userId}).select("-password");   //if you want to deselect some other field then add a space i.e -isAdmin
        console.log("this is me api data");
        console.log(user);
        return NextResponse.json({
          message: "User found",
          user: user,
          success: true          
        })
    } catch (error) {
        console.log(error.message)
        return NextResponse.json({
            message: "ali2"+error.message,
            status: 500,
            success: false
        })
    }
}
