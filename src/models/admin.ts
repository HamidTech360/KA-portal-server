import mongoose, { Document, Schema, Types } from "mongoose";
import bcrypt from "bcryptjs";


const adminSchema = new Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true
    }
}, {timestamps:true})

adminSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
      next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  });
  
  adminSchema.methods.matchPassword = async function (enteredPassword: string) {
    return await bcrypt.compare(enteredPassword, this.password);
  };

const Admin = mongoose.models.Admin || mongoose.model("admin", adminSchema);

export default Admin;