import mongoose from "mongoose";

import { userType } from "../shared/types";

const userSchema =new mongoose.Schema<userType>({
    name:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    role:{type:String, default:'user'}
});

const Users = mongoose.model('user-list', userSchema);
export default Users;