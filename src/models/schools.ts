import mongoose, { Document, Schema, Types } from "mongoose";

const schoolSchema = new Schema ({
    schoolName:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true
    },
    fee:{
        type:String,
        required:true
    },
    currency:{
        type:String,
        required:true
    },
    faculty:{
        type:String,
        required:true
    },
    schoolImage:{
        type:String,
    },
    country:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    website:{
        type:String,
        required:true
    },
    PhoneNumber:{
        type:String,
        required:true
    },
    courseOverview:{
        type:String,
        required:true
    },
    funding:{
        type:String,
        required:true
    },
    requirement:{
        type:String,
        required:true
    },
    service:{
        type:String,
        required:true
    },
    aboutSchool:{
        type:String,
        required:true
    },
    deleted:{
        type:Boolean,
        default:false
    }
}, {timestamps:true})

const School = mongoose.models.School || mongoose.model("School", schoolSchema);

export default School;