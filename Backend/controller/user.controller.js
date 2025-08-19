import Usermodel from '../model/user.model.js';
import bcrypt from 'bcryptjs';
export const signupfun = async (req, res) => {
	try{
		
		const { fullname, email, password } = req.body;
		const newuserdata=await Usermodel.findOne({email})
		if(newuserdata){
			return res.status(400).json({message:"User already exists"});
		}
		
		const hashedPassword = await bcrypt.hash(password,10);
		const CreateNewUser = await Usermodel.create({fullname, email, password:hashedPassword});
		// await CreateNewUser.save();

		return res.status(201).json({message:"User created successfully",newuserdata:{
			_id:CreateNewUser._id,
			fullname:CreateNewUser.fullname,
			email:CreateNewUser.email
		}});
	} catch (error) {
		return res.status(500).json({message:"Internal server error"});
		
	}
};

export const loginfun = async (req, res) => {
	try{
		const { email, password } = req.body;
		const userdata=await Usermodel.findOne({email});
		const ismatched = await bcrypt.compare(password, userdata.password);
		if(!ismatched||!userdata){
			return res.status(400).json({message:"Invalid Username Or Pasword"});
		}else
		{
			return res.status(200).json({message:"Login Successfully",userdata:{
				_id:userdata._id,
				fullname:userdata.fullname,
				email:userdata.email
			}});
		}

	} catch (error) {
		console.log("Error"+error.message)
		res.status(500).json({message:"internal Server Error"})
	}
};



// import Usermodel from '../model/user.model.js';
// import bcrypt from 'bcryptjs';
// export const signupfun = async (req, res) => {
// 	try{
		
// 		const { fullname, email, password } = req.body;
// 		const newuserdata=await Usermodel.findOne({email})
// 		if(newuserdata){
// 			return res.status(400).json({message:"User already exists"});
// 		}
		
// 		const hashedPassword = await bcrypt.hash(password,10);
// 		const CreateNewUser = await Usermodel.create({fullname, email, password:hashedPassword});
// 		await CreateNewUser.save();
// 		return res.status(201).json({message:"User created successfully"});
// 	} catch (error) {
// 		return res.status(500).json({message:"Internal server error"});
// 		console.log("error:",error);
// 		res.status(500).json({message:"Internal server error69"});
// 	}
// };

// export const loginfun = async (req, res) => {
// 	try{
// 		const { email, password } = req.body;
// 		const userdata=await Usermodel.findOne({email});
// 		const ismatched = await bcrypt.compare(password, userdata.password);
// 		if(!ismatched||!userdata){
// 			return res.status(400).json({message:"Invalid Username Or Pasword"});
// 		}else
// 		{
// 			return res.status(200).json({message:"Login Successfully",userdata:{
// 				_id:userdata._id,
// 				fullname:userdata.fullname,
// 				email:userdata.email
// 			}});
// 		}

// 	} catch (error) {
// 		console.log("Error"+error.message)
// 		res.status(500).json({message:"internal Server Error"})
// 	}
// };
