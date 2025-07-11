import { User } from "../Models/User.Model.js";
import bcrypt from "bcrypt";

import validator from 'validator'
import { genToken, genToken1 } from "../config/token.js";
const Register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({
        message: "User Not Found",
      });
    }

    const existUser = await User.findOne({email });

    if (existUser) {
      return res.status(409).json({
        message: "User Already exists",
      });
    }

    if(!validator.isEmail(email))
    {
       return res.status(409).json({
        message: "Enter valid email",
      });
    }
    if(password.length < 8)
    {
      return res.status(409).json({
        message: "Enter Strong password",
      });

    }

    const Haspassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      email,
      password: Haspassword,
    });

    if (!user) {
      return res.status(500).json({
        message: "Internal Server error",
      });
    }

   let token = await  genToken(user._id);
   res.cookie("token", token, {
     httpOnly: true,
     secure: true,
     sameSite: "None",
     maxAge: 7 * 24 * 60 * 60 * 1000,
   });


    return res.status(201).json({
      message: "User Created succesfully",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        token: token
      },
      
    });
  } catch (error) {
    console.error("Signup error:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

const Login = async (req, res) => {
    try {
        const {email,password} = req.body;

        const user = await  User.findOne({email});
        
        const isMatch = await bcrypt.compare(password,user.password);

        if(!user || !isMatch)
        {
            return res.status(404).json({
                message:"user not found"
            })
        }
      
          
   let token = await genToken(user._id);
   res.cookie("token",token,{
    httpOnly:true,
    secure:true,
    sameSite:"None",
    maxAge: 7 * 24 * 60 * 60 * 1000
   })
            return res.status(201).json({
                message:"User Login succesfully",
                user:{
                 id:user._id,
                 username: user.username,
                 email:user.email,
                 token:token
                } 
                   
            },
            
        )
        

    
    } catch (error) {
         console.log("error: "+ error.message);
     return   res.status(500).json({message:"Internal Server error"});
        
    }
};


const LogOut = async (req,res)=>{
  try {
    
    
    res.clearCookie("token", {
  httpOnly: true,
  secure: true,
  sameSite: "None"
});
    return res.status(200).json({message:"Logout succesfully"});


  } catch (error) {
     console.log("error: "+ error.message);
     return   res.status(500).json({message:"Logout error"});
    
  }

}


const googleLogin = async (req, res) => {
  try {
    const { username, email } = req.body;

    let user = await User.findOne({ email });
    let statusCode = 200;
    let message = "User logged in via Google";

    if (!user) {
      user = await User.create({
        username:username,
        email:email
      });
      statusCode = 201;
      message = "User created via Google login";
    }

    const token = await genToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    return res.status(statusCode).json({
      user,
      message,
      token
    });

  } catch (error) {
    console.log("error: " + error.message);
    return res.status(500).json({ message: "Google login error" });
  }
};


const adminLogin = async (req, res)=>{
  try {
    const {email,password} = req.body;
        let message = "Admin login succesfully";
        let statusCode = 200;

    if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD)
    {

   let token = await genToken1(email);
   res.cookie("token", token, {
     httpOnly: true,
     secure: true,
     sameSite: "None",
     maxAge: 7 * 24 * 60 * 60 * 1000
   });

    return res.status(statusCode).json({
     
      message,
      token
    });
     }
     return res.status(400).json({
      message:"invalid credentials"
     })
  } catch (error) {
    console.log("Admin login error : "+ error.message);
    return res.status(500).json({message:"Admin login error internal"});
  }
}




export { Register, Login, LogOut , googleLogin  , adminLogin}
