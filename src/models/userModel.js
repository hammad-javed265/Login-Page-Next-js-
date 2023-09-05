import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please Provide a username"],
        unique: true
    },
    email: {
        type: String,
        required: [true, "Please Provide an email"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please Provide a password"],        
    }, 
    image: {
        type: String,
        required: [true, "Please Upload your profile pic"],        
    },    
})

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;

