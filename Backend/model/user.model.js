import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
	fullname:{
		type:String,
		required:true
	},
	email:{
		type:String,
		required:true
	},
	password:{
		type:String,
		required:true
	}    
});
// const usermodelinstacne= mongoose.model("User", userSchema);
const User= mongoose.model("Userdatabase", userSchema);
export default User;

