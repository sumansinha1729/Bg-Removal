import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    clerkId:{type:String,required:true,unique:true},
    email:{type:String,required:true,unique:true},
    photo:{type:String,required:true},
    firstName:{type:String},
    lastName:{type:String},
    creditBalance:{type:Number,default:10}
})

export const userModel=mongoose.models.user || mongoose.model("user",userSchema)